/* ============================================================
 * Supabase 适配层（shim）
 * 作用：把 window.CloudBaseSDK 接到 Supabase 上，
 *      让原看板 app.js 一行不改就能用 Supabase 做云端读写。
 * 依赖：libs/supabase.js（已本地化）、libs/supabase-config.js（填 URL/KEY）
 * ============================================================ */
(function () {
  if (!window.supabase) { console.error('[shim] supabase-js 未加载'); return; }

  var URL = window.SUPABASE_URL || '';
  var KEY = window.SUPABASE_ANON_KEY || '';

  var client = null;
  if (URL && KEY && URL.indexOf('YOUR-') === -1) {
    try {
      client = window.supabase.createClient(URL, KEY, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
      });
    } catch (e) {
      console.error('[shim] createClient 失败：', e);
    }
  } else {
    console.warn('[shim] 未配置 SUPABASE_URL / SUPABASE_ANON_KEY —— 云端不可用，页面将回退到本地快照（只读）');
  }

  function wrapStorage(bucket) {
    var b = client.storage.from(bucket);
    return {
      upload: function (p, f, o) { return b.upload(p, f, o); },
      uploadOrUpdate: function (p, f, o) { return b.upload(p, f, o); },
      createSignedUrl: function (p, e) { return b.createSignedUrl(p, e); },
      getPublicUrl: function (p) { return b.getPublicUrl(p); },
      remove: function (p) { return b.remove(Array.isArray(p) ? p : [p]); },
      delete: function (p) { return b.remove(Array.isArray(p) ? p : [p]); },
      list: function (p, o) { return b.list(p, o); }
    };
  }

  window.CloudBaseSDK = {
    init: function () {
      return {
        rdb: function () { return client; },
        // 不做真实匿名登录：Supabase 匿名用户是 authenticated 角色，
        // 若库策略只放开了 anon，会被静默挡掉（返回空）。保持 anon 身份最省事。
        auth: {
          signInAnonymously: function () { return Promise.resolve({ data: { user: null, session: null }, error: null }); },
          getSession: function () { return Promise.resolve({ data: { session: null }, error: null }); },
          signOut: function () { return Promise.resolve({ error: null }); }
        },
        storage: {
          from: function (bucket) {
            if (!client) {
              var fail = function () { return Promise.reject(new Error('supabase 未配置')); };
              return { upload: fail, uploadOrUpdate: fail, createSignedUrl: fail, getPublicUrl: fail, remove: fail, delete: fail, list: fail };
            }
            return wrapStorage(bucket);
          }
        }
      };
    }
  };

  try { window.dispatchEvent(new Event('cloudbase-sdk-ready')); } catch (e) {}
})();
