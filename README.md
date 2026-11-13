# 邮件质检看板 · GitHub Pages 部署包

本目录是「邮件质检看板」的完整静态前端，已整理为可直接发布到 GitHub Pages 的形态。

## 目录结构
```
index.html            # 页面（已把 /libs/ 改为相对路径 libs/，放在任何路径下都能用）
app20260918d.js       # 应用逻辑（依赖 CloudBase Web SDK）
libs/                 # 第三方库：chart.js / datalabels / cloudbase / lz-string / xlsx
README.md
```

---

## 方式 A：网页上传（不用命令行，推荐）

1. 登录 [github.com](https://github.com) → 右上角 `+` → **New repository**
2. Repository name 填 `xianxian`，选 **Public**，**不要**勾选 Add README / .gitignore → Create
3. 空仓库页点 **uploading an existing file**（上传已有文件）
4. 打开本地 `xianxian-github` 文件夹，**全选里面的内容**（index.html、app20260918d.js、libs 文件夹、README.md），拖进上传区
   - ⚠️ 要拖**文件夹里面的东西**，不要拖外层文件夹本身，保证 `index.html` 在仓库根目录
5. 底部 **Commit changes**
6. 仓库顶部 **Settings** → 左侧 **Pages** → Source 选 **Deploy from a branch** → Branch 选 `main`、Folder 选 `/ (root)` → **Save**
7. 等 1~2 分钟刷新，Pages 页面顶部出现固定链接：
   **https://<你的用户名>.github.io/xianxian/**

---

## 方式 B：命令行 git（本目录已 git init + commit 好，直接 push）

1. 建仓库同方式 A 第 1~2 步
2. 打开终端（Git Bash 或 PowerShell），执行：
   ```bash
   cd "C:/Users/123/WorkBuddy/2026-11-13-19-46-25/xianxian-github"
   git remote add origin https://github.com/<你的用户名>/xianxian.git
   git branch -M main
   git push -u origin main
   ```
   - 首次 push 会弹 GitHub 授权；如用 Token，把 Token 当密码填入
3. 开 Pages 同方式 A 第 6 步
4. 链接同方式 A 第 7 步

> 想要最短链接 `https://<你的用户名>.github.io/`：把仓库命名为 `<你的用户名>.github.io` 即可（本包用相对路径，两种仓库名都能正常跑）。

---

## 关键收尾：把 GitHub 域名加进 CloudBase 安全域名

页面通过 `cloudbase.iife.js` 调 CloudBase 后端（云数据库/匿名登录）。**不做这一步，页面能打开但读不到数据。**

1. 登录 [CloudBase 控制台](https://console.cloud.tencent.com/tcb) → 进入对应环境
2. 环境设置 → 安全配置 → **添加安全域名**
3. 填入 `https://<你的用户名>.github.io`（不要带 `/xianxian`）

---

## 发布后自检
- 打开链接 → 按 F12 → Console，确认没有 `CORS` / `403` / 安全域名相关报错
- 页面数据正常加载 = 成功

## 可选：绑定自有域名
GitHub Pages → Settings → Pages → Custom domain 填自有域名（如 `qa.your.com`），并把同一域名也加进 CloudBase 安全域名白名单。
