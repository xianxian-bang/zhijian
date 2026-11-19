// ============================================================
// 质检标准数据 (严格参照 888csv.csv)
// ============================================================
var DEFAULT_STANDARDS = [
  { category: "专业技能（70分）", items: [
    { name: "语言语法表达", maxScore: 5, levels: [
      { grade: "达标", score: 5, detail: "1、架构完整准确，使用礼貌用语，无明显或轻微拼写、语法、发音、语速、格式问题，但不影响整体美观或者客户理解；\n2、针对小语种站点，看具体站点使用对应语种+英语双语，如德国站点使用德语+英语；若客户表示看不懂英文，则使用客户语种翻译回复；\n3、若客户表示可以使用英文回复，则可以使用英文回复；", example: "" },
      { grade: "不达标", score: 0, detail: "1、回复内容过于简单，只用几个单词回复客户，缺乏完整的句子；\n2、拼写错误达3次及以上；累积3次及以上出现明显格式问题；\n3、未根据客户首次咨询语种回复，直接使用英文回复；\n4、沟通过程中，没有按照客户要求切换其他语种回复；\n5、违反平台回复语种要求，使用规定以外的语种回复；", example: "例：平台要求商家用德语回复客户，但是客服在回复信息时忘记翻译，直接发送了英文回复；" }
    ]},
    { name: "方案合理性", maxScore: 40, levels: [
      { grade: "优秀", score: 40, detail: "1、方案信息完全正确，能高效处理客户问题，且能站在客户的角度主动探寻客户的需求，积极帮助客户提供合理且具实际操作性的方案，同时，能够预判潜在风险，主动为客户提供特别的提醒和解释；或者能提供一些新颖话术或超预期且客户接受的方案，值得被推广和学习；\n2、客服主动采取措施避免问题再次发生或者挽回公司损失", example: "例1：如某产品包装易导致破损，主动联系开发确认问题，并推进批量问题解决，避免所有listing售卖的该产品产生更多报损造成公司损失" },
      { grade: "达标", score: 32, detail: "能遵循SOP，方案信息流程完全正确；或者SOP之外的场景也能提供合理的解决方案（基于实际情况提供方案）", example: "" },
      { grade: "不达标", score: 15, detail: "1、违背协商方案总原则，如没有走排错流程直接提供方案；\n2、没有基于实际情况提供更合理方案，导致客户不满，或者造成公司更大损失；\n3、在明确知道协同方的方案不合理的情况下依旧提供给客户；\n4、在不了解某个知识点或某个产品的情况下直接提供方案，导致客户不满，或造成直接or间接损失；", example: "例1：客户反馈未收到货，仍在货期，持续沟通2次请客户继续等待，客户表示不愿意，并2次要求退款，第三次沟通仍继续让客户等待，无进一步方案提供，并且未结合客户实际诉求，可能导致客户给差评" }
    ]},
    { name: "流程&操作完整性", maxScore: 25, levels: [
      { grade: "达标", score: 25, detail: "1、遵循业务SOP，流程操作无缺失或错误（具体表现在：\n①在回邮数据中，出现客服答应顾客退款并办理了退款/答应顾客尽快退款/答应顾客已退款，但在是否有退款登记中，显示“有申请退款”。\n②在回邮数据中，客服承认“描述不符”/“页面误导”/“listing问题”；或者顾客反馈“产品存在质量问题”/“收到产品不同相关内容”/“描述不符并已确认是我们描述不符，而不是顾客自己买错”在是否有问题反馈中，显示“有问题反馈”；\n\n2、针对待主动跟进事项，做到及时跟进处理（具体表现为：让顾客等待后，再次发送了一封邮件，确认退款除外），无遗漏缺失。", example: "" },
      { grade: "不达标", score: 10, detail: "1、未遵守业务SOP流程，遗漏跟进（具体表现为：让顾客等待后，未再次发送了一封邮件。确认退款除外）或错误操作；\n2、在与客户达成一致方案后，在回邮数据中，出现客服答应顾客退款并办理了退款/陈述句：答应顾客尽快退款（疑问句或者询问顾客尽快办理退款不算）/答应顾客已退款，在是否有退款登记中，显示空白；但相同情况下，邮件中包含“AZ”字样时，是否有退款登记中，可以显示“有申请退款”或者空白\n在回邮数据中，客服承认“描述不符”/“页面误导”/“listing问题”；或者顾客反馈“产品存在质量问题”/“收到产品不同相关内容”/“描述不符并已确认是我们描述不符，而不是顾客自己买错”在是否有问题反馈中，显示空白；\n", example: "例1：承诺买家会3天内更新回复，未主动去信；承诺3天内退款，未申请/未检查是否退款成功\n例2：回邮中已告知买家“已为您办理退款”，但“是否有退款登记”为空白，属于SOP流程操作缺失" }
    ]}
  ]},
  { category: "软技能（30分）", items: [
    { name: "服务技巧", maxScore: 15, levels: [
      { grade: "优秀", score: 15, detail: "1、立于SOP以上，灵活运用模板或服务技巧，高效处理客户问题，并且超出预期；\n2、通过自身沟通技巧，让客户接受并满意公司成本相对较低的解决方案；\n3、能快速判断客户的问题或需求，应答过程思路清晰，能针对客户理解情况灵活转换表达，使客户易于理解并迅速接收到有效信息", example: "" },
      { grade: "达标", score: 10, detail: "1、基本能理解客户意思，表达清晰，沟通顺畅，当客户问题不明显或者客户反馈的问题与提供的单号或产品信息或实际情况不相符，客服能总结客户所提的问题进行引导性提问和沟通确认，有效解决客户问题；\n2、遇到客户询问所属业务内容无关的问题、或客户对某项问题存在争议，能够妥善处理按照合格口径进行回复，让客户平稳接受并使问题消除或转移", example: "" },
      { grade: "不达标", score: 5, detail: "1、除避免错误与客户进行的身份信息等确认外，已确认的或客户已提供的信息或方案重复进行确认；\n2、当客户信息不清晰时，未灵活运用相关技巧，帮助客户查找正确的信息；\n3、客户诉求已经很清晰，客服仍重复询问客户诉求是什么", example: "1.重复索要信息；2.提供重复的方案或给回复同样的内容；3.买家提供的信息如username，有办法找到答案/单号，却还是让买家一定提供单号" }
    ]},
    { name: "服务态度", maxScore: 15, levels: [
      { grade: "优秀", score: 15, detail: "1、换位思考，耐心有礼，具备安抚、挽留和同理心，并且能有效缓解客户不满情绪，获得客户认同或感谢；\n2、能保持较好的服务态度，并且能根据客户的实际处境表达较好的同情理解或者祝福等", example: "" },
      { grade: "达标", score: 10, detail: "认真负责，态度和蔼，适当安抚；", example: "" },
      { grade: "不达标", score: 5, detail: "1、没有认真了解客户需求，重复确认既定事实；\n2、漏回复客户其他问题，如同时有3个疑问，只回答了其中2个；\n3、态度强硬恶劣，如跟客户说我们只能提供某个方案；\n4、对话中出现\"质问，反问，不耐烦，对话过程中与客户起冲突\"的情况或话术；\n5、对话中如出现不恰当的比喻；（如种族歧视，肤色等话题）", example: "例1：客户反馈收到产品运损，提供了图片，但是图片过大，邮件页加载失败，客服没有留意，建议客户提供图片or视频；例2：客户买了一款直升机模型，收到货后觉得与预期不符，想要退回，客服坚持客户自付运费退回退款，客户不满" }
    ]}
  ]},
  { category: "红线", items: [
    { name: "平台禁忌", maxScore: 0, isRedline: true, levels: [
      { grade: "不达标", score: 0, detail: "①邮件发送可编辑邮址和链接，除了物流链接以外，物流链接比如：https://t.17track.net/；\nhttps://www.yunexpress.com/；\nhttps://track.yw56.com.cn/；\n②在邮件中提到PayPal和eBay等竞争对手平台字样；\n③站内信中含有买卖双方的真实邮箱地址或者泄露任何买家个人信息；\n④利诱威胁买家改评价，关case或出现review feedback等字样；\n⑤出现表达粗暴，辱骂客户等情况", example: "" }
    ]}
  ]}
];

var DEFAULT_GRADE_RULES = [
  { grade: "优秀", minScore: 86, maxScore: 100, description: "操作方案信息等完全无误，并且能提供特别提醒，规避风险，具备较好的同理心，客户对服务表示满意，高效处理客户问题，并且超出预期" },
  { grade: "达标", minScore: 80, maxScore: 85, description: "操作方案等基本正确，仅一些轻微细节错误或者同理心不足，表达不够清晰" },
  { grade: "不达标", minScore: 0, maxScore: 79, description: "操作方案处理流程出现较大问题，或者服务态度和技巧欠缺，导致客户不满或者影响客户问题解决，或者多处轻微错误" }
];

var STANDARDS = JSON.parse(JSON.stringify(DEFAULT_STANDARDS));
var GRADE_RULES = JSON.parse(JSON.stringify(DEFAULT_GRADE_RULES));
// 质检引擎版本号：引擎判分逻辑升级时更新此值，页面加载后会自动重跑全部已上传数据（申诉记录保留）
var QC_LOGIC_VERSION = '20261119-passcap-vocab';
var DEFAULT_KNOWLEDGE_BASE = [
  { id: 'kb-good-1', type: 'case-good', kind: 'can-do', title: '主动说明退款到账时间并承诺跟进', dimension: '流程&操作完整性', keywords: ['refund', '退款', '到账', 'follow up'], content: '退款场景应说明处理步骤和预计到账时间，并主动跟进结果，这是可推广的正确做法。' },
  { id: 'kb-bad-1', type: 'case-bad', kind: 'missed', title: '只让客户继续等待，没有进一步方案', dimension: '方案合理性', keywords: ['please wait', 'just wait', '继续等待'], content: '客户已明确表达不愿等待或要求退款时，不能重复让客户等待，应结合实际诉求提供替代方案并升级处理。' },
  { id: 'kb-knowledge-1', type: 'knowledge', kind: 'can-do', title: '客户情绪不满时需要同理和安抚', dimension: '服务态度', keywords: ['angry', 'unhappy', '不满', '投诉', 'sorry', 'apolog'], content: '客户表达不满时，先回应情绪并表达理解，再给出清晰处理方案；只给方案而没有任何安抚容易被判定为服务态度不足。' },
  { id: 'kb-knowledge-2', type: 'knowledge', kind: 'missed', title: '承诺时限后必须检查是否完成', dimension: '流程&操作完整性', keywords: ['within', '3 days', '72 hour', '承诺', '三天'], content: '客服承诺在某个时限内退款、更新或回复时，必须存在明确的跟进动作，否则属于流程漏检。' }
];
var KNOWLEDGE_BASE = JSON.parse(JSON.stringify(DEFAULT_KNOWLEDGE_BASE));

// ============ 平台禁忌敏感词（2026-11-17 语境化执行）============
// 词表来源：质检知识库中「维度含平台禁忌 且 上传了表格文件」的知识条目（当前：敏感词 / 禁用词11月17.xlsx）。
// 页面加载 / 知识库增删改后自动重新解析最新表格覆盖内置词表；解析失败时用内置词表兜底。
// 判定口径：只扫客服回邮；扫描前剔除中文（回邮常含中文译文，日文汉字词会误伤中文译文）；
// 单词命中需满足方向性语境：命中词之后 40 字符内出现「评价对象」词（动作 → 评价对象，如 change your review）；
// 多语种操纵短语（give us a second chance / share your experience 等）出现即命中。
// 命中任一 → 平台禁忌红线：平台禁忌 0 分 + 整单 0 分。
var SENSITIVE_WORDS_BUILTIN = [{"w":"bearbeiten","lang":"德语"},{"w":"Životnost","lang":"捷克语"},{"w":"Ebene","lang":"德语"},{"w":"Perfecte","lang":"荷兰语"},{"w":"Änderung","lang":"德语"},{"w":"Durata della vita","lang":"意大利语"},{"w":"klacht","lang":"荷兰语"},{"w":"hodnocení","lang":"捷克语"},{"w":"annuleren","lang":"荷兰语"},{"w":"úroveň","lang":"捷克语"},{"w":"HauteQualité","lang":"法语"},{"w":"Gift","lang":"荷兰语"},{"w":"modifier","lang":"法语"},{"w":"retirer","lang":"法语"},{"w":"Regalo","lang":"意大利语"},{"w":"wijzig","lang":"荷兰语"},{"w":"cancella","lang":"意大利语"},{"w":"Durée de vie","lang":"法语"},{"w":"compensation","lang":"法语"},{"w":"verandering","lang":"荷兰语"},{"w":"mauvais","lang":"法语"},{"w":"NA","lang":"捷克语"},{"w":"スター","lang":"日语"},{"w":"condividi la tua esperienza","lang":"意大利语"},{"w":"Levensduur","lang":"荷兰语"},{"w":"supprimer","lang":"法语"},{"w":"sdílejte svou zkušenost","lang":"捷克语"},{"w":"pas encore décidé","lang":"法语"},{"w":"verwijderen","lang":"荷兰语"},{"w":"キャンセル","lang":"日语"},{"w":"stížnost","lang":"捷克语"},{"w":"Bewertung","lang":"德语"},{"w":"Claims","lang":"荷兰语"},{"w":"waarderen","lang":"荷兰语"},{"w":"フリースタンディング","lang":"日语"},{"w":"essere idoneo","lang":"意大利语"},{"w":"deel je ervaring","lang":"荷兰语"},{"w":"mise à jour","lang":"法语"},{"w":"stella","lang":"意大利语"},{"w":"effacer","lang":"法语"},{"w":"být způsobilý","lang":"捷克语"},{"w":"レベル","lang":"日语"},{"w":"悪い","lang":"日语"},{"w":"Rückmeldung","lang":"德语"},{"w":"Ansprüche","lang":"德语"},{"w":"annuler","lang":"法语"},{"w":"negativní","lang":"捷克语"},{"w":"niveau","lang":"荷兰语"},{"w":"Parfait","lang":"法语"},{"w":"negativ","lang":"德语"},{"w":"kritisch","lang":"荷兰语"},{"w":"alt","lang":"德语"},{"w":"livello","lang":"意大利语"},{"w":"odvolat","lang":"捷克语"},{"w":"smazat","lang":"捷克语"},{"w":"変更","lang":"日语"},{"w":"Wipeout","lang":"德语"},{"w":"Garantie","lang":"法语"},{"w":"まだ決めていない","lang":"日语"},{"w":"nicht berechtigt","lang":"德语"},{"w":"feedback","lang":"意大利语"},{"w":"wijzigen","lang":"荷兰语"},{"w":"vybrat","lang":"捷克语"},{"w":"noch zu entscheiden","lang":"德语"},{"w":"dacci una seconda possibilità","lang":"意大利语"},{"w":"Beschwerde","lang":"德语"},{"w":"étoile","lang":"法语"},{"w":"Dárek","lang":"捷克语"},{"w":"évaluation","lang":"法语"},{"w":"niet in aanmerking komen","lang":"荷兰语"},{"w":"補償","lang":"日语"},{"w":"cattivo","lang":"意大利语"},{"w":"doorverkopen","lang":"荷兰语"},{"w":"comment","lang":"法语"},{"w":"ster","lang":"荷兰语"},{"w":"aggiornamento","lang":"意大利语"},{"w":"hvězda","lang":"捷克语"},{"w":"AZ","lang":"日语"},{"w":"経験を共有する","lang":"日语"},{"w":"VysokáKvalita","lang":"捷克语"},{"w":"donnez-nous une seconde chance","lang":"法语"},{"w":"クリティカル","lang":"日语"},{"w":"ještě rozhodnout","lang":"捷克语"},{"w":"komentar","lang":"捷克语"},{"w":"Aktualisierung","lang":"德语"},{"w":"abbrechen","lang":"德语"},{"w":"評価","lang":"日语"},{"w":"plaintes","lang":"法语"},{"w":"teilen Sie Ihre Erfahrungen","lang":"德语"},{"w":"削除","lang":"日语"},{"w":"Gratuit","lang":"法语"},{"w":"modificare","lang":"意大利语"},{"w":"COPYPENDING","lang":"意大利语"},{"w":"être éligible","lang":"法语"},{"w":"positief","lang":"荷兰语"},{"w":"přeprodej","lang":"捷克语"},{"w":"annulla","lang":"意大利语"},{"w":"slecht","lang":"荷兰语"},{"w":"valutare","lang":"意大利语"},{"w":"compensatie","lang":"荷兰语"},{"w":"zpětná vazba","lang":"捷克语"},{"w":"změna","lang":"捷克语"},{"w":"Réclamations","lang":"法语"},{"w":"kritický","lang":"捷克语"},{"w":"Freistehend","lang":"德语"},{"w":"négatif","lang":"法语"},{"w":"non idoneo","lang":"意大利语"},{"w":"Perfetto","lang":"意大利语"},{"w":"AltaQualità","lang":"意大利语"},{"w":"ネガティブ","lang":"日语"},{"w":"reclamo","lang":"意大利语"},{"w":"編集","lang":"日语"},{"w":"請求","lang":"日语"},{"w":"完璧","lang":"日语"},{"w":"高品質","lang":"日语"},{"w":"rimuovere","lang":"意大利语"},{"w":"nepřijatelné","lang":"捷克语"},{"w":"KOPIE AUSSTEHEND","lang":"德语"},{"w":"revendre","lang":"法语"},{"w":"Kommentar","lang":"德语"},{"w":"In piedi","lang":"意大利语"},{"w":"retour d\\'information","lang":"法语"},{"w":"évaluer","lang":"法语"},{"w":"cambia","lang":"意大利语"},{"w":"negatief","lang":"荷兰语"},{"w":"bewerken","lang":"荷兰语"},{"w":"emendare","lang":"意大利语"},{"w":"フィードバック","lang":"日语"},{"w":"ライフタイム","lang":"日语"},{"w":"Vrijstaand","lang":"荷兰语"},{"w":"upravit","lang":"捷克语"},{"w":"schlecht","lang":"德语"},{"w":"geef ons een tweede kans","lang":"荷兰语"},{"w":"Hoogwaardige","lang":"荷兰语"},{"w":"Lebensdauer","lang":"德语"},{"w":"dejte nám druhou šanci","lang":"捷克语"},{"w":"beoordeling","lang":"荷兰语"},{"w":"löschen","lang":"德语"},{"w":"zrušit","lang":"捷克语"},{"w":"Samostatně stojící","lang":"捷克语"},{"w":"ritirare","lang":"意大利语"},{"w":"berechtigt sein","lang":"德语"},{"w":"Élimination","lang":"法语"},{"w":"Autonome","lang":"法语"},{"w":"špatný","lang":"捷克语"},{"w":"bijwerken","lang":"荷兰语"},{"w":"ワイプアウト","lang":"日语"},{"w":"再販","lang":"日语"},{"w":"Cadeau","lang":"法语"},{"w":"abheben","lang":"德语"},{"w":"nog te besluiten","lang":"荷兰语"},{"w":"再チャンスをください","lang":"日语"},{"w":"Zdarma","lang":"捷克语"},{"w":"Perfekt","lang":"德语"},{"w":"Cancellazione","lang":"意大利语"},{"w":"更新","lang":"日语"},{"w":"Smazání","lang":"捷克语"},{"w":"rivendere","lang":"意大利语"},{"w":"rétracter","lang":"法语"},{"w":"positif","lang":"法语"},{"w":"消去","lang":"日语"},{"w":"修正","lang":"日语"},{"w":"cambiare","lang":"意大利语"},{"w":"ancora da decidere","lang":"意大利语"},{"w":"適格であること","lang":"日语"},{"w":"amenderen","lang":"荷兰语"},{"w":"Pretese","lang":"意大利语"},{"w":"Hochwertig","lang":"德语"},{"w":"Nároky","lang":"捷克语"},{"w":"critico","lang":"意大利语"},{"w":"valutazione","lang":"意大利语"},{"w":"zurückziehen","lang":"德语"},{"w":"positivo","lang":"意大利语"},{"w":"terugtrekken","lang":"荷兰语"},{"w":"odškodnění","lang":"捷克语"},{"w":"amender","lang":"法语"},{"w":"wiederverkaufen","lang":"德语"},{"w":"コメント","lang":"日语"},{"w":"Záruka","lang":"捷克语"},{"w":"Stern","lang":"德语"},{"w":"ポジティブ","lang":"日语"},{"w":"不明确的","lang":"意大利语"},{"w":"コピー待ち","lang":"日语"},{"w":"entfernen","lang":"德语"},{"w":"ocenit","lang":"捷克语"},{"w":"bewerten","lang":"德语"},{"w":"Kostenlos","lang":"德语"},{"w":"modifizieren","lang":"德语"},{"w":"aktualizace","lang":"捷克语"},{"w":"Gratuito","lang":"意大利语"},{"w":"Vrijgesteld","lang":"荷兰语"},{"w":"cancellare","lang":"意大利语"},{"w":"撤回","lang":"日语"},{"w":"geschikt zijn","lang":"荷兰语"},{"w":"evaluatie","lang":"荷兰语"},{"w":"odebrat","lang":"捷克语"},{"w":"revidovat","lang":"捷克语"},{"w":"změnit","lang":"捷克语"},{"w":"critique","lang":"法语"},{"w":"positiv","lang":"德语"},{"w":"Dokonalé","lang":"捷克语"},{"w":"ändern","lang":"德语"},{"w":"適格ではない","lang":"日语"},{"w":"risarcimento","lang":"意大利语"},{"w":"éditer","lang":"法语"},{"w":"自由","lang":"日语"},{"w":"non applicable","lang":"法语"},{"w":"privátní","lang":"捷克语"},{"w":"苦情","lang":"日语"},{"w":"ギフト","lang":"日语"},{"w":"privé","lang":"荷兰语"},{"w":"pozitivní","lang":"捷克语"},{"w":"negativo","lang":"意大利语"},{"w":"partagez votre expérience","lang":"法语"},{"w":"該当なし","lang":"日语"},{"w":"überarbeiten","lang":"德语"},{"w":"Entschädigung","lang":"德语"},{"w":"gib uns eine zweite Chance","lang":"德语"},{"w":"Garanzia","lang":"意大利语"},{"w":"přepracovat produkt","lang":"捷克语"},{"w":"nicht anwendbar","lang":"德语"},{"w":"privato","lang":"意大利语"},{"w":"herzien","lang":"荷兰语"},{"w":"changer","lang":"法语"},{"w":"リトラクト","lang":"日语"},{"w":"変化","lang":"日语"},{"w":"レビュー","lang":"日语"},{"w":"das Produkt neu bewerten","lang":"德语"},{"w":"evalueer het product opnieuw","lang":"荷兰语"},{"w":"recensione","lang":"意大利语"},{"w":"製品を再評価する","lang":"日语"},{"w":"přehled","lang":"捷克语"},{"w":"nezapadá","lang":"捷克语"},{"w":"privat","lang":"德语"},{"w":"niet van toepassing","lang":"荷兰语"},{"w":"revue","lang":"法语"},{"w":"保証","lang":"日语"},{"w":"プライベート","lang":"日语"},{"w":"rivisitare","lang":"意大利语"},{"w":"rivalutare il prodotto","lang":"意大利语"},{"w":"non applicabile","lang":"意大利语"},{"w":"réviser","lang":"法语"},{"w":"non éligible","lang":"法语"},{"w":"réévaluer le produit","lang":"法语"},{"w":"delete","lang":"英语"},{"w":"Lifetime","lang":"英语"},{"w":"resell","lang":"英语"},{"w":"HighQuality","lang":"英语"},{"w":"not eligible","lang":"英语"},{"w":"update","lang":"英语"},{"w":"positive","lang":"英语"},{"w":"alter","lang":"英语"},{"w":"give us a second chance","lang":"英语"},{"w":"yet to decide","lang":"英语"},{"w":"to be eligible","lang":"英语"},{"w":"Guarrantee","lang":"英语"},{"w":"negative","lang":"英语"},{"w":"appraise","lang":"英语"},{"w":"Free-Standing","lang":"英语"},{"w":"Free","lang":"英语"},{"w":"erase","lang":"英语"},{"w":"complaint","lang":"英语"},{"w":"star","lang":"英语"},{"w":"evaluation","lang":"英语"},{"w":"bad","lang":"英语"},{"w":"rating","lang":"英语"},{"w":"cancel","lang":"英语"},{"w":"retract","lang":"英语"},{"w":"remove","lang":"英语"},{"w":"withdraw","lang":"英语"},{"w":"share your experience","lang":"英语"},{"w":"amend","lang":"英语"},{"w":"Perfect","lang":"英语"},{"w":"modify","lang":"英语"},{"w":"level","lang":"英语"},{"w":"critical","lang":"英语"},{"w":"change","lang":"英语"},{"w":"edit","lang":"英语"},{"w":"private","lang":"英语"},{"w":"reasses the product","lang":"英语"},{"w":"review","lang":"英语"},{"w":"revise","lang":"英语"},{"w":"not applicable","lang":"英语"}];
var sensitiveWordList = SENSITIVE_WORDS_BUILTIN.slice();
var SENSITIVE_WORD_MAP = {};
var SENSITIVE_WORD_RE = null;
var SENSITIVE_REVIEW_OBJ_RE = null;
var SENSITIVE_RE_BUILD_OK = false;
var sensitiveRefreshInFlight = false;
var SENSITIVE_STRIP_CJK_RE = new RegExp('[\\u3000-\\u303f\\u3400-\\u4dbf\\u4e00-\\u9fff\\uf900-\\ufaff\\uff01-\\uff5e]', 'g');
function buildSensitiveRegex() {
  SENSITIVE_WORD_MAP = {};
  var alts = [];
  for (var i = 0; i < sensitiveWordList.length; i++) {
    var w = String(sensitiveWordList[i].w || '').trim();
    if (!w) continue;
    var key = w.toLowerCase();
    if (SENSITIVE_WORD_MAP[key]) { if (!SENSITIVE_WORD_MAP[key].lang && sensitiveWordList[i].lang) SENSITIVE_WORD_MAP[key].lang = sensitiveWordList[i].lang; continue; }
    SENSITIVE_WORD_MAP[key] = { w: w, lang: sensitiveWordList[i].lang || '' };
    alts.push(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  }
  SENSITIVE_RE_BUILD_OK = false;
  try {
    SENSITIVE_WORD_RE = new RegExp('(?<![\\p{L}\\p{N}_])(?:' + alts.join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');
    SENSITIVE_REVIEW_OBJ_RE = new RegExp('(?<![\\p{L}\\p{N}_])(?:review|reviews|rating|ratings|feedback|évaluation|avis|recensione|recensioni|valutazione|valutazioni|bewertung|bewertungen|rezension|rezensionen|beoordeling|beoordelingen|evaluatie|evaluaties|hodnocení|recenz|評価|レビュー)(?![\\p{L}\\p{N}_])', 'iu');
    SENSITIVE_RE_BUILD_OK = true;
  } catch (e) { SENSITIVE_WORD_RE = null; SENSITIVE_REVIEW_OBJ_RE = null; SENSITIVE_RE_BUILD_OK = false; }
}
buildSensitiveRegex();

// ============================================================
// 档位分值 / 叠加比例的唯一定义处（引擎与「质检逻辑」板块共用同一份来源）
//   维度取分口分两类：
//   ① 随「质检标准」页实时变：语言语法表达「达标」、流程&操作完整性「达标 / 不达标」，
//      由 getStandardScore(维度, 档位) 读取；流程「只有其一」档为中心值 = round(达标 × procPartialRatio)。
//   ② 引擎内置常量（下方 QC_SCORE）：方案合理性 / 服务技巧 / 服务态度。
//      标准页只写了这些维度的部分档位，引擎另有更细的中间档（方案 36、技巧 12、态度 8），
//      无法与标准页档位一一对应，所以不能在标准页改分值来影响它们；
//      要让它们也跟标准页联动，必须先改造对应 check 函数，而不是只改页面数字。
// ============================================================
var QC_SCORE = {
  solution: { excellent: 40, passOne: 36, passNone: 32, fail: 15 },
  skill: { excellent: 15, passStrong: 12, passOne: 10, fail: 5 },
  attitude: { excellent: 15, passCount: 10, other: 8, fail: 5 },
  procPartialRatio: 0.8
};
// 知识库叠加比例（applyKnowledgeToResult 与本板块共用）
var KB_SOP_FLOOR_RATIO = 0.8;   // 好案例 / 质检知识：把该维度保底到满分的 80% 并改判「达标」
var KB_BAD_DEDUCT_RATIO = 0.4;  // 不好案例 / 漏检知识：扣掉该维度满分的 40%
var KB_BAD_DEDUCT_MIN = 5;      // 上述扣分的下限，至少扣 5 分
var DIM_NAMES = ["语言语法表达", "方案合理性", "流程&操作完整性", "服务技巧", "服务态度", "平台禁忌"];
function normalizeKnowledgeText(value) { return String(value || '').toLowerCase().replace(/[\s,，。；;、.!！？?：:（）()\[\]{}]/g, ''); }

// ============================================================
// 默认客服组织架构 (参照 客服组织架构.xlsx)
// ============================================================
var DEFAULT_ORG = [
  { group: "1组", agents: ["尹玉婷", "袁萍", "贺海燕", "占楠枝", "袁佩", "侯兰云", "钟桂芳", "陈静", "李海霞"] },
  { group: "2组", agents: ["戴海燕", "蔡佳欣", "林文玉", "胡婷", "李肖", "潘银艳"] },
  { group: "3组", agents: ["胡诗琦", "朱佳敏", "黎玉红"] }
];

var ORG_DATA = loadOrg();

// ===== 组长与复核身份（2026-11-18）=====
// 每个组别可以有 1 名组长（grp.leader），组长拥有本组申诉的复核打分权限。
function normalizeOrgData() {
  if (!Array.isArray(ORG_DATA)) ORG_DATA = [];
  for (var i = 0; i < ORG_DATA.length; i++) {
    var g = ORG_DATA[i];
    if (!g || typeof g !== 'object') { ORG_DATA[i] = { group: '', agents: [] }; g = ORG_DATA[i]; }
    if (!Array.isArray(g.agents)) g.agents = [];
    g.leader = String(g.leader == null ? '' : g.leader).trim();
    if (g.leader && g.agents.indexOf(g.leader) < 0) g.leader = '';
  }
  return ORG_DATA;
}
var REVIEWER_KEY = 'qc_reviewer_v1';
function qcLeaderList() {
  normalizeOrgData();
  var out = [];
  for (var i = 0; i < ORG_DATA.length; i++) if (ORG_DATA[i] && ORG_DATA[i].leader) out.push({ name: ORG_DATA[i].leader, group: ORG_DATA[i].group });
  return out;
}
function qcGetReviewer() {
  if (typeof AUTH !== 'undefined' && AUTH) {
    if (AUTH.role === 'leader') return { name: AUTH.name, group: AUTH.group || qcLeaderGroup(AUTH.name) || '' };
    return null;
  }
  var raw = null;
  try { raw = JSON.parse(localStorage.getItem(REVIEWER_KEY) || 'null'); } catch (e) { raw = null; }
  if (!raw || !raw.name) return null;
  var list = qcLeaderList();
  for (var i = 0; i < list.length; i++) if (list[i].name === raw.name) return { name: list[i].name, group: list[i].group };
  return null;
}
function qcSetReviewer(name) {
  var val = String(name == null ? '' : name).trim();
  if (!val) { try { localStorage.removeItem(REVIEWER_KEY); } catch (e) {} }
  else {
    var list = qcLeaderList(), hit = null;
    for (var i = 0; i < list.length; i++) if (list[i].name === val) { hit = list[i]; break; }
    if (!hit) { showToast('该客服不是组长：' + val, 'error'); return false; }
    try { localStorage.setItem(REVIEWER_KEY, JSON.stringify({ name: hit.name, group: hit.group })); } catch (e) {}
  }
  renderReviewerBar();
  showToast(val ? ('已切换复核身份：' + val) : '已清除复核身份', 'success');
  return true;
}
function qcReviewerLabel() {
  var rv = qcGetReviewer();
  if (rv) return rv.name + '（' + rv.group + '组长）';
  return isAdminMode() ? '管理员' : '';
}
function renderReviewerBar() {
  var el = document.getElementById('orgReviewerBar');
  if (!el) return;
  var html = '<span class="org-reviewer-cap">申诉复核身份</span>';
  if (!AUTH) {
    html += '<span class="org-reviewer-none org-reviewer-noauth">未登录</span><span class="org-reviewer-tip">请先用本人账号登录；组长登录后自动获得本组申诉复核权限</span>';
  } else if (AUTH.role === 'leader') {
    html += '<b>' + escHtml(AUTH.name) + '</b><span class="org-reviewer-group">' + escHtml(AUTH.group || '') + ' · 组长</span><span class="org-reviewer-tip">可复核本组申诉并逐项重新打分</span>';
  } else if (AUTH.role === 'admin') {
    html += '<b>' + escHtml(AUTH.name) + '</b><span class="org-reviewer-group">管理员</span><span class="org-reviewer-tip">管理员可复核全部组的申诉</span>';
  } else {
    html += '<b>' + escHtml(AUTH.name) + '</b><span class="org-reviewer-group">客服</span><span class="org-reviewer-tip">没有申诉复核权限，可查看质检明细与看板</span>';
  }
  el.innerHTML = html;
}
function qcClearReviewer() { try { localStorage.removeItem(REVIEWER_KEY); } catch (e) {} renderReviewerBar(); showToast('已清除复核身份', 'success'); }
function openReviewerModal() {
  var list = qcLeaderList();
  var sel = document.getElementById('reviewerSelect');
  if (!sel) return;
  var opts = '<option value="">— 请选择 —</option>';
  for (var i = 0; i < list.length; i++) opts += '<option value="' + escHtml(list[i].name) + '">' + escHtml(list[i].group) + ' · ' + escHtml(list[i].name) + '（组长）</option>';
  sel.innerHTML = opts;
  var rv = qcGetReviewer();
  if (rv) sel.value = rv.name;
  document.getElementById('reviewerModalHint').textContent = list.length ? ('共 ' + list.length + ' 位组长。选择后本机将以此身份复核申诉。') : '还没有设置任何组长：请先在组别卡片里选择组长。';
  document.getElementById('reviewerModal').classList.add('show');
}
function closeReviewerModal() { document.getElementById('reviewerModal').classList.remove('show'); }
function confirmReviewer() {
  var sel = document.getElementById('reviewerSelect');
  if (!sel || !sel.value) { showToast('请选择一个组长', 'error'); return; }
  if (qcSetReviewer(sel.value)) closeReviewerModal();
}
// 复核权限：管理员全组可审；组长只审本组
function requireAppealReviewer(result) {
  if (typeof AUTH !== 'undefined' && AUTH) {
    if (AUTH.role === 'admin') return true;
    if (AUTH.role !== 'leader') { showToast('申诉复核只有组长和管理员可以做，当前账号没有该权限', 'error'); return false; }
    var map = getAgentGroupMap();
    var grp = String(map[result && result.agent] || '');
    var mine = AUTH.group || qcLeaderGroup(AUTH.name) || '';
    if (!mine) { showToast('没有找到你的组长分组：请联系管理员在「客服组织架构」里把你设为组长', 'error'); return false; }
    if (!grp) { showToast('这一单的客服不在组织架构里，只有管理员可以复核', 'error'); return false; }
    if (mine !== grp) { showToast('你是「' + mine + '」组长，只能复核本组申诉；这一单属于「' + grp + '」', 'error'); return false; }
    return true;
  }
  // 未登录（本地调试）沿用旧的组长身份选择
  var rv = qcGetReviewer();
  if (!rv) { showToast('请先登录：申诉复核需要组长或管理员账号', 'error'); return false; }
  var map2 = getAgentGroupMap();
  var grp2 = String(map2[result && result.agent] || '');
  if (!grp2 || rv.group !== grp2) { showToast('你是「' + rv.group + '」组长，只能复核本组申诉；这一单属于「' + (grp2 || '未分组') + '」', 'error'); return false; }
  return true;
}
// 把重新打分换算成该维度的等级（取标准里最接近的档位）
function qcDimGradeForScore(dim, score) {
  var s = Number(score);
  if (isNaN(s)) return '';
  for (var i = 0; i < STANDARDS.length; i++) {
    for (var j = 0; j < STANDARDS[i].items.length; j++) {
      var item = STANDARDS[i].items[j];
      if (item.name !== dim) continue;
      var levels = item.levels || [], best = null, bestDiff = Infinity;
      for (var k = 0; k < levels.length; k++) {
        var lvScore = Number(levels[k].score) || 0;
        var diff = Math.abs(lvScore - s);
        if (diff < bestDiff) { bestDiff = diff; best = levels[k]; }
      }
      return best ? best.grade : '';
    }
  }
  return '';
}
normalizeOrgData();

function loadOrg() {
  try { var s = localStorage.getItem('qc_org_data'); if (s) return JSON.parse(s); } catch(e) {}
  return JSON.parse(JSON.stringify(DEFAULT_ORG));
}
function saveOrg() {
  try { localStorage.setItem('qc_org_data', JSON.stringify(ORG_DATA)); } catch(e) {}
}
function getAgentGroupMap() {
  var m = {};
  for (var i = 0; i < ORG_DATA.length; i++)
    for (var j = 0; j < ORG_DATA[i].agents.length; j++)
      m[ORG_DATA[i].agents[j]] = ORG_DATA[i].group;
  return m;
}
function getGroupByAgent(name) {
  var m = getAgentGroupMap();
  if (m[name]) return m[name];
  // 别名兜底：尹玉婷1 在组别表里没有时，用归一后的本名（尹玉婷）再查一次
  return m[canonicalAgentName(name)] || '未分组';
}

// ============================================================
// 全局状态
// ============================================================
var rawData = [];
var results = [];
var detailOrderExact = '';
var charts = {};
var HAS_XLSX = typeof XLSX !== 'undefined';
var HAS_CHART = typeof Chart !== 'undefined';
var HAS_LZ = typeof LZString !== 'undefined';

// ============================================================
// 腾讯云 CloudBase PG：固定网址云端数据（公开访问）
// ============================================================
var CLOUDBASE_ENV_ID = 'xianxian-d0goezgzacd6eeacb';
var CLOUDBASE_REGION = 'ap-shanghai';
var CLOUDBASE_ACCESS_KEY = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNzY3MmU4LTU0ZWUtNGZkMS04NmEyLTZmYWNjM2Y0NjNiYyJ9.eyJpc3MiOiJodHRwczovL3hpYW54aWFuLWQwZ29lemd6YWNkNmVlYWNiLmFwLXNoYW5naWFpLnRjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbSIsInN1YiI6ImFub24iLCJhdWQiOiJ4aWFueGlhbi1kMGdvZXpnemFjZDZlZWFjYiIsImV4cCI6NDA5MDEyNDc1MSwiaWF0IjoxNzg2NDQxNTUxLCJub25jZSI6IlJrSXVLU2Y0UzlLS2d0LUV0ZlNWd2ciLCJhdF9oYXNoIjoiUmtJdUtTZjRTOUtLZ3QtRXRmU1Z3ZyIsIm5hbWUiOiJBbm9ueW1vdXMiLCJzY29wZSI6ImFub255bW91cyIsInByb2plY3RfaWQiOiJ4aWFueGlhbi1kMGdvZXp6YWNkNmVlYWNiIiwibWV0YSI6eyJwbGF0Zm9ybSI6IlB1Ymxpc2hhYmxlS2V5In0sInJvbGUiOiJhbm9uIiwiaXNfYW5vbnltb3VzIjp0cnVlLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJhbm9ueW1vdXMiLCJwcm92aWRlcnMiOlsiYW5vbnltb3VzIl19LCJ1c2VyX21ldGFkYXRhIjp7Im5hbWUiOiJBbm9ueW1vdXMifSwidXNlcl90eXBlIjoiIiwiY2xpZW50X3R5cGUiOiJjbGllbnRfdXNlciIsImlzX3N5c3RlbV9hZG1pbiI6ZmFsc2V9.lcVvH1RQNVU-Ja_AxaHTtRzN7P4gBKZlGbcUzXzje-qJO1Bcr_AKyDvRfmIjkH6l1zu-J4eua6GNlOmInIRTwECfQzlXyeAno3XAZwLTj1uWu4o_SOxSGYV_754W_7Ieuq4Y9eZi6rlJ1btWLxu2USpLL2ZMqlLRK41RdPulkmeuj0FzFsnVPsuqJICQosAyXOjjmkmHRqw72v80j_5le64_sZc5Pjg0UX3sD29NNJ3_ymABYhs1HtfMs0JJQHzicX6LBb1ZehF9KjE4QyXOvtr6exq5dj1ODaP5XEssmRmk917_4Gsup8Dk6WYRXmd8sWCnl6tsgK3ukjA28GknOg';
var cloudApp = null, cloudDb = null, cloudReady = false;
function setCloudStatus(text, color) { var el = document.getElementById('cloudStatus'); if (el) { el.textContent = text; el.style.color = color || 'var(--gray-500)'; } }
function requireCloudAdmin() { return true; }
var APPEAL_STATUSES = ['无申诉', '待审核', '部分通过', '申诉通过', '申诉被拒'];
function getRecordKey(item) { return [item.account || '', item.agent || '', item.order || '', item.date || ''].join('||'); }
// 日期无关的稳定键：上传表 date 为空时 inspectOne 会用“当天日期”补齐 result.date，导致 recordKey 每天变化、
// 跨天重跑时申诉匹配不上而被丢弃（2026-10-15 修复）。申诉保留一律先用完整键、再用稳定键兜底。
function getStableRecordKey(item) { return [item.account || '', item.agent || '', item.order || ''].join('||'); }
function createEmptyAppeal() { return { status: '无申诉', reason: '', submittedAt: '', reviewer: '', reviewReason: '', reviewedAt: '', attachments: [], modules: [], moduleDecisions: {}, moduleReviewReasons: {}, moduleScores: {}, referenceAdded: false, referenceKnowledgeId: '', referenceAddedAt: '', referenceType: '', referenceKind: '', referenceTitle: '', referenceSummary: '' }; }
function normalizeAppeal(appeal) { var a = appeal || {}; var base = createEmptyAppeal(); for (var k in base) if (base.hasOwnProperty(k)) base[k] = a[k] !== undefined && a[k] !== null ? a[k] : base[k]; if (APPEAL_STATUSES.indexOf(base.status) < 0) base.status = '无申诉'; if (!Array.isArray(base.attachments)) base.attachments = []; if (!Array.isArray(base.modules)) base.modules = []; if (!base.moduleDecisions || typeof base.moduleDecisions !== 'object') base.moduleDecisions = {}; if (!base.moduleReviewReasons || typeof base.moduleReviewReasons !== 'object') base.moduleReviewReasons = {}; if (!base.moduleScores || typeof base.moduleScores !== 'object') base.moduleScores = {}; base.referenceAdded = !!base.referenceAdded; return base; }
function getAppealPassScore() { for (var i = 0; i < GRADE_RULES.length; i++) if (GRADE_RULES[i].grade === '达标') return Number(GRADE_RULES[i].minScore) || 80; return 80; }
function getAppealModules(result) { return DIM_NAMES.slice(); }
function isAppealPassedModule(result, dim) { var detail = result && result.details && result.details[dim] || {}; return ['优秀', '达标', '通过'].indexOf(detail.grade) >= 0; }
function getAppealSubmitModules(result) { var modules = getAppealModules(result); var out = []; for (var i = 0; i < modules.length; i++) if (!isAppealPassedModule(result, modules[i])) out.push(modules[i]); return out; }
function getAppealReviewModules(result) { var a = normalizeAppeal(result && result.appeal); var source = a.modules.length ? a.modules : getAppealModules(result); var out = []; var _pending = a.status === '待审核'; for (var i = 0; i < source.length; i++) { var dim = source[i]; if (a.moduleDecisions[dim]) continue; // 待审核申诉：客服已提交的模块必须可复核。规则重跑/换词可能把该模块改判为「达标」，但这正是客服申诉要求复核的内容，不能因此从审核列表里剔除，否则审核面板为空、组长无法审核、状态永远卡在待审核。
    if (!_pending && isAppealPassedModule(result, dim)) continue; out.push(dim); } return out; }
function getAppealDefaultReviewModules(result) { return getAppealReviewModules(result); }
function getCheckedValues(containerId, name) { var box = document.getElementById(containerId); if (!box) return []; var nodes = box.querySelectorAll('input[name="' + name + '"]:checked'); var values = []; for (var i = 0; i < nodes.length; i++) values.push(nodes[i].value); return values; }
function setAppealModules(containerId, name, checked) { var box = document.getElementById(containerId); if (!box) return; var nodes = box.querySelectorAll('input[name="' + name + '"]'); for (var i = 0; i < nodes.length; i++) nodes[i].checked = checked; if (!checked) { var decisions = box.querySelectorAll('input[type="radio"]'); for (var j = 0; j < decisions.length; j++) decisions[j].checked = false; } }
function setAppealReviewDecision(decision) { var box = document.getElementById('appealReviewModuleList'); if (!box) return; var selected = getCheckedValues('appealReviewModuleList', 'appealReviewModules'); if (!selected.length) { showToast('请先选择审核模块', 'error'); return; } var radios = box.querySelectorAll('input[type="radio"]'); for (var i = 0; i < radios.length; i++) { for (var j = 0; j < selected.length; j++) if (radios[i].name === 'decision-' + selected[j]) radios[i].checked = radios[i].value === decision; } }
function getAppealApprovedModules(result) { var a = normalizeAppeal(result && result.appeal); var selected = a.modules.length ? a.modules : getAppealModules(result); var decisions = a.moduleDecisions || {}; var approved = []; if (!Object.keys(decisions).length && a.status === '申诉通过') return selected; for (var i = 0; i < selected.length; i++) if (decisions[selected[i]] === '通过') approved.push(selected[i]); return approved; }
function updateAppealStatusFromModules(result) { var a = normalizeAppeal(result && result.appeal); var selected = a.modules.length ? a.modules : getAppealModules(result); var decisions = a.moduleDecisions || {}; var pending = 0, approved = 0, rejected = 0; for (var i = 0; i < selected.length; i++) { var d = decisions[selected[i]]; if (d === '通过') approved++; else if (d === '被拒') rejected++; else pending++; } if (pending > 0) a.status = approved > 0 ? '部分通过' : '待审核'; else if (approved > 0 && rejected > 0) a.status = '部分通过'; else if (approved > 0) a.status = '申诉通过'; else if (rejected > 0) a.status = '申诉被拒'; result.appeal = a; return a.status; }
function applyAppealApprovedGrade(result) {
  if (!result || !result.appeal || result.referenceCase) return result;
  var approved = getAppealApprovedModules(result);
  if (!approved.length) return result;
  if (!result.appealAdjusted) {
    result.originalTotalScore = result.totalScore;
    result.originalGrade = result.grade;
    result.originalScores = JSON.parse(JSON.stringify(result.scores || {}));
  }
  var manual = result.appeal.moduleScores || {};
  for (var i = 0; i < approved.length; i++) {
    var dim = approved[i];
    if (!result.scores || result.scores[dim] === undefined) continue;
    var hasManual = manual[dim] !== undefined && manual[dim] !== null && manual[dim] !== '';
    var target = hasManual ? Number(manual[dim]) : Number(getStandardScore(dim, '达标'));
    if (isNaN(target)) continue;
    var dimMax = getDimMax(dim);
    if (dimMax > 0 && target > dimMax) target = dimMax;
    if (target < 0) target = 0;
    target = Math.round(target);
    result.scores[dim] = target;
    if (result.details && result.details[dim]) {
      result.details[dim].score = target;
      result.details[dim].grade = qcDimGradeForScore(dim, target);
      var note = '组长复核重打分：' + target + ' 分（' + result.details[dim].grade + '）';
      var issues = result.details[dim].issues || (result.details[dim].issues = []);
      var dup = false;
      for (var k = 0; k < issues.length; k++) {
        if (String(issues[k]).indexOf('组长复核重打分') === 0) { issues[k] = note; dup = true; break; }
      }
      if (!dup) issues.push(note);
    }
  }
  var total = 0;
  for (var j = 0; j < DIM_NAMES.length; j++) if (result.scores[DIM_NAMES[j]] >= 0 && DIM_NAMES[j] !== '平台禁忌') total += result.scores[DIM_NAMES[j]];
  result.totalScore = total;
  result.grade = determineGrade(total);
  // 组长的重新打分视为人工终裁：不再用「优秀门槛」把它降档
  result.appealAdjusted = true;
  result.appealApprovedModules = approved;
  return result;
}
function summarizeAppealKnowledge(result) {
  var appeal = normalizeAppeal(result && result.appeal);
  var originalGrade = result && (result.originalGrade || result.grade) || '';
  var reviewText = String(appeal.reviewReason || '').toLowerCase();
  var reasonText = String(appeal.reason || '');
  var issueText = (result && result.issues || []).join('；');
  var riskWords = ['流程', '漏', '错误', '违规', '禁忌', '态度', '不完整', '不合理', '风险', '未', '没有', '缺少', '错误'];
  var riskHit = false;
  for (var i = 0; i < riskWords.length; i++) if (reviewText.indexOf(riskWords[i]) >= 0 || reasonText.indexOf(riskWords[i]) >= 0) { riskHit = true; break; }
  if (!riskHit && reviewText.indexOf('通过') < 0 && reviewText.indexOf('确认') < 0 && originalGrade === '不达标' && !reasonText) riskHit = false;
  var type = riskHit ? 'case-bad' : (originalGrade === '不达标' ? 'case-good' : 'knowledge');
  var kind = type === 'knowledge' ? 'can-do' : (type === 'case-bad' ? 'missed' : 'can-do');
  var label = type === 'case-good' ? '好案例' : (type === 'case-bad' ? '不好案例' : '质检知识');
  var dimension = '综合';
  for (var d = 0; d < DIM_NAMES.length; d++) {
    var dn = DIM_NAMES[d];
    if (result && result.details && result.details[dn] && result.details[dn].issues && result.details[dn].issues.length) { dimension = dn; break; }
  }
  var titleBase = result && (result.order || result.agent || '当前质检');
  var title = label + '：' + titleBase + (dimension !== '综合' ? '（' + dimension + '）' : '');
  var summary = type === 'case-good'
    ? '原质检结果为' + (originalGrade || '不达标') + '，经申诉审核通过。可推广做法：结合申诉理由和审核结论，复盘本次邮件中的有效处理方式，作为后续同类场景的参考。'
    : (type === 'case-bad'
      ? '审核结论提示存在需要关注的风险。质检知识点：' + (appeal.reviewReason || appeal.reason || issueText || '应结合业务流程、服务态度和平台规则进行复核，避免同类问题重复发生。')
      : '质检知识点：本案例已完成申诉复核，建议结合原质检问题、申诉理由和审核结论，作为同类邮件的判断依据。');
  var keywords = [result && result.order, result && result.account, result && result.agent, dimension].filter(function(s) { return !!s; });
  if (appeal.reason) keywords.push(appeal.reason.substring(0, 24));
  return { type: type, kind: kind, label: label, dimension: dimension, title: title, summary: summary, keywords: keywords };
}
function addAppealReferenceKnowledge(result) {
  if (!result) return null;
  var extracted = extractAgentReplies(result.reply || '');
  var referenceText = String(extracted.agentText || '') + '\n' + String(extracted.customerText || result.customer || '');
  var fingerprint = getReferenceCaseFingerprint(referenceText);
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) if (KNOWLEDGE_BASE[i].referenceFingerprint === fingerprint) return KNOWLEDGE_BASE[i];
  var summary = summarizeAppealKnowledge(result);
  var item = { id: 'kb-reference-' + Date.now(), type: summary.type, kind: 'reference-case', summaryKind: summary.kind, title: summary.title, dimension: summary.dimension, dimensions: parseKnowledgeDimensions(summary.dimension), keywords: summary.keywords, content: summary.summary, referenceRecordKey: result.recordKey || getRecordKey(result), referenceFingerprint: fingerprint, createdAt: new Date().toISOString(), sourceAppealReason: result.appeal.reason || '', sourceReviewReason: result.appeal.reviewReason || '', sourceOriginalGrade: result.originalGrade || result.grade || '' };
  KNOWLEDGE_BASE.push(item);
  result.appeal.referenceAdded = true;
  result.appeal.referenceKnowledgeId = item.id;
  result.appeal.referenceAddedAt = item.createdAt;
  result.appeal.referenceType = item.type;
  result.appeal.referenceKind = item.summaryKind;
  result.appeal.referenceTitle = item.title;
  result.appeal.referenceSummary = item.content;
  return item;
}
function normalizeResultAppeal(result) { if (!result) return result; result.recordKey = result.recordKey || getRecordKey(result); result.appeal = normalizeAppeal(result.appeal); applyAppealApprovedGrade(result); return result; }
function getAppealStatus(result) { return normalizeAppeal(result && result.appeal).status; }
function appealStatusClass(status) { return status === '待审核' ? 'appeal-pending' : (status === '部分通过' || status === '申诉通过' ? 'appeal-approved' : (status === '申诉被拒' ? 'appeal-rejected' : 'appeal-none')); }
function appealStatusBadge(status) { return '<span class="appeal-badge ' + appealStatusClass(status) + '">' + escHtml(status || '无申诉') + '</span>'; }
function cloudStatePayload() { var slimResults = results.map(function(r){ var c={}; for(var k in r){ if(k!=='reply' && k!=='_part') c[k]=r[k]; } return c; }); return { schemaVersion: '3.2', qcLogicVersion: QC_LOGIC_VERSION, standardsFingerprint: standardsFingerprint(), rawData: rawData, results: slimResults, orgData: ORG_DATA, standards: STANDARDS, gradeRules: GRADE_RULES, knowledgeBase: KNOWLEDGE_BASE }; }
function qcLoadSnapshotFallback() { try { if (rawData && rawData.length > 0) return; } catch(e) {} fetch('qc-snapshot-20261016.json', { cache: 'no-store' }).then(function(r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).then(function(data) { if (!data || !data.rawData || !data.results || (rawData && rawData.length > 0)) return; importAllData(data); setCloudStatus('云端数据库隔离中，已加载本地快照（只读）', 'var(--warning)'); showToast('云端数据库暂不可用，已加载本地快照数据；云端恢复并刷新页面后将自动同步', 'info'); }).catch(function(e) { setCloudStatus('云端读取失败', 'var(--danger)'); }); }
function cloudLoadState() { if (!cloudDb) return Promise.resolve(); try { qcCloudLoadUsers(); } catch (e) {} try { if (typeof qcCloudLoadAppealReads === 'function') qcCloudLoadAppealReads(); } catch (e) {} return cloudDb.from('qc_dashboard_state').select('state_key,state_json,updated_at').eq('state_key','main').limit(1).then(function(res) { if (res.error) throw res.error; var row = res.data && res.data.length ? res.data[0] : null; if (row && row.state_json) { var data = JSON.parse(row.state_json); if (data && data.results && data.rawData) { qcCacheSyncFromCloud(data, row.state_json); } } setCloudStatus('云端已连接', 'var(--success)'); }).catch(function(err){ var msg = err && (err.message || err.details || err.hint) || '接口返回异常'; setCloudStatus('云端读取失败', 'var(--danger)'); qcLoadSnapshotFallback(); }); }
function cloudSaveState() { if (!cloudDb) return Promise.reject(new Error('云端数据库尚未初始化')); var payloadObj = cloudStatePayload(); var payload = { state_key: 'main', state_json: JSON.stringify(payloadObj), updated_by: 'anonymous' }; try { qcSaveCacheFromPayload(payloadObj); } catch (e) {} return cloudDb.from('qc_dashboard_state').upsert(payload, { onConflict: 'state_key' }).then(function(res) { if (res.error) throw res.error; setCloudStatus('已同步云端', 'var(--success)'); return res; }).catch(function(err){ showToast('云端保存失败：' + ((err && (err.message || err.details || err.hint)) || '接口返回异常'), 'error'); throw err; }); }
function cloudClearState() { if (!cloudDb) return Promise.resolve(); return cloudDb.from('qc_dashboard_state').delete().eq('state_key','main').then(function(res) { if (res.error) throw res.error; setCloudStatus('已同步云端', 'var(--success)'); }).catch(function(err){ showToast('云端清空失败：' + (err.message || ''), 'error'); throw err; }); }
function initCloudBase() { if (!window.CloudBaseSDK) { setCloudStatus('云端SDK加载失败', 'var(--danger)'); return; } try { cloudApp = window.CloudBaseSDK.init({ env: CLOUDBASE_ENV_ID, region: CLOUDBASE_REGION, accessKey: CLOUDBASE_ACCESS_KEY, auth: { detectSessionInUrl: true } }); cloudDb = cloudApp.rdb(); cloudReady = true; var auth = cloudApp.auth; if (auth && typeof auth.signInAnonymously === 'function') { auth.signInAnonymously().then(function(res) { if (res && res.error) throw res.error; cloudLoadState(); }).catch(function(err) { setCloudStatus('匿名认证失败', 'var(--danger)'); showToast('云端匿名认证失败，尝试加载本地快照…', 'info'); qcLoadSnapshotFallback(); }); } else { cloudLoadState(); } } catch(e) { setCloudStatus('云端初始化失败', 'var(--danger)'); showToast('云端初始化失败：' + (e.message || ''), 'error'); } }
window.addEventListener('cloudbase-sdk-ready', initCloudBase);

// ============================================================
// 性能优化：本地缓存秒开 + 云端数据瘦身（2026-11-18）
// 云端 state_json 曾达 8.42MB，其中 results.reply 与 rawData.reply 完全重复（占37%）。
// 策略：① 写回剥离 reply，加载时内存补回；② LZString 压缩缓存到 localStorage，
//       页面启动先秒开缓存，后台拉云端按内容 hash 判断是否更新，相同则不动 UI。
// ============================================================
// ---- 打开即最新：主动拉取 + 回邮同步刷新（2026-11-18 h） ----
var QC_FRESH_SYNC_AT = 0, QC_FRESH_SYNC_BUSY = false;
// 从云端拉取 main，若与当前数据不同则整体刷新（明细 + 回邮 + 看板一起）
function qcFetchLatestAndRefresh(force) {
  try { if (typeof cloudDb === 'undefined' || !cloudDb) return Promise.resolve(false); } catch (e) { return Promise.resolve(false); }
  var now = Date.now();
  if (!force && (QC_FRESH_SYNC_BUSY || now - QC_FRESH_SYNC_AT < 5000)) return Promise.resolve(false);
  QC_FRESH_SYNC_AT = now; QC_FRESH_SYNC_BUSY = true;
  try {
    return cloudDb.from('qc_dashboard_state').select('state_json').eq('state_key','main').limit(1).then(function(res){
      QC_FRESH_SYNC_BUSY = false;
      var row = res && res.data && res.data.length ? res.data[0] : null;
      if (!row || !row.state_json) return false;
      var d; try { d = JSON.parse(row.state_json); } catch (e) { return false; }
      if (!d || !d.results || !d.rawData) return false;
      var cloudHash = qcStateHash(qcSlimPayloadString(d));
      var cachedHash = null; try { cachedHash = localStorage.getItem(QC_CACHE_HASH_KEY); } catch (e) {}
      if (cachedHash === cloudHash) {
        // 内容一致：不动 UI，避免打断；但确保回邮/缓存与云端一致（幂等）
        try { setCloudStatus('云端已连接 · 数据为最新', 'var(--success)'); } catch (e) {}
        return false;
      }
      // 有更新：整体替换（importAllData 内已按 rawData 覆盖回邮），并刷新缓存
      importAllData(d);
      qcSaveCacheFromPayload(d);
      try { setCloudStatus('已同步到最新数据', 'var(--success)'); } catch (e) {}
      return true;
    }).catch(function(){ QC_FRESH_SYNC_BUSY = false; return false; });
  } catch (e) { QC_FRESH_SYNC_BUSY = false; return Promise.resolve(false); }
}
// 页面首次加载 / 标签页重新可见时，立即拉取最新（节流 5s）
(function(){
  function onVisible(){
    try { if (document.visibilityState === 'visible') qcFetchLatestAndRefresh(false); } catch (e) {}
  }
  try {
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
  } catch (e) {}
})();
var QC_CACHE_KEY = 'qc_dashboard_cache_v1';
var QC_CACHE_HASH_KEY = 'qc_dashboard_cache_hash_v1';
function qcStateHash(s) { var h = 5381; for (var i = 0; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) | 0; } return (h >>> 0).toString(36) + '-' + s.length; }
function qcSlimPayloadString(data) {
  try {
    var slim = {}; for (var k in data) slim[k] = data[k];
    if (data.results) slim.results = data.results.map(function(r){ var c={}; for(var kk in r){ if(kk!=='reply' && kk!=='_part') c[kk]=r[kk]; } return c; });
    return JSON.stringify(slim);
  } catch (e) { return ''; }
}
function qcSaveCacheFromPayload(dataObj) {
  try {
    if (typeof LZString === 'undefined' || !dataObj || !dataObj.results || !dataObj.rawData) return;
    var json = qcSlimPayloadString(dataObj);
    if (!json) return;
    var enc = LZString.compressToUTF16(json);
    localStorage.setItem(QC_CACHE_KEY, enc);
    localStorage.setItem(QC_CACHE_HASH_KEY, qcStateHash(json));
  } catch (e) { /* localStorage 满或不可用，静默跳过，不影响主流程 */ }
}
function qcLoadCacheFast() {
  try {
    var enc = localStorage.getItem(QC_CACHE_KEY);
    if (!enc || typeof LZString === 'undefined') return false;
    var json = LZString.decompressFromUTF16(enc);
    if (!json) return false;
    var data = JSON.parse(json);
    if (!data || !data.results || !data.rawData || !data.results.length) return false;
    importAllData(data);
    setCloudStatus('本地缓存已加载，正在同步云端…', 'var(--warning)');
    if (typeof qcRefreshAppealBadges === 'function') { try { qcRefreshAppealBadges(); } catch (e) {} }
    return true;
  } catch (e) { return false; }
}
function qcCacheSyncFromCloud(data, rawStateJson) {
  // rawStateJson 是云端原始字符串（可能含旧格式的冗余 reply），用它判断云端 vs 缓存是否一致
  try {
    var cloudJson = qcSlimPayloadString(data);
    var cloudHash = qcStateHash(cloudJson);
    var cachedHash = null;
    try { cachedHash = localStorage.getItem(QC_CACHE_HASH_KEY); } catch (e) {}
    // 检测旧格式：云端 results 仍带 reply（冗余），后台静默写回一次瘦身版，下次下载更快
    var isFat = !!(data.results && data.results.length && typeof data.results[0].reply === 'string');
    if (isFat && typeof cloudSaveState === 'function') {
      setTimeout(function() { try { cloudSaveState().catch(function(){}); } catch (e) {} }, 2000);
    }
    if (cachedHash === cloudHash) {
      // 缓存数据与云端一致：缓存秒开已正确，不重复渲染打断用户
      try { localStorage.setItem(QC_CACHE_KEY, LZString.compressToUTF16(cloudJson)); localStorage.setItem(QC_CACHE_HASH_KEY, cloudHash); } catch (e) {}
      setCloudStatus('云端已连接', 'var(--success)');
      return;
    }
    // 云端有更新：重新渲染并刷新缓存
    importAllData(data);
    qcSaveCacheFromPayload(data);
  } catch (e) { importAllData(data); }
}
// ============================================================
// Tab 切换
// ============================================================
// ===== 管理员权限（2026-11-03）：底层逻辑仅管理员可修改，其他人只读 =====
var ADMIN_KEY = 'XianXian-QC-2026';
function isAdminMode() { return document.body && document.body.classList.contains('admin-mode'); }
function requireAdmin(label) { if (isAdminMode()) return true; showToast('「' + (label || '该操作') + '」需要管理员权限：请用管理员账号登录', 'error'); return false; }
function updateAdminBadge() { var b = document.getElementById('adminBadge'); if (b) b.style.display = 'none'; if (typeof qcUpdateUserChip === 'function') qcUpdateUserChip(); }
// ---- 质检逻辑板块：仅管理员可见（非管理员时把内容从 DOM 摘掉，防止直接查看元素） ----
var QC_LOGIC_HTML_CACHE = null;
function qcLogicLock() {
  var box = document.getElementById('tab-qclogic');
  if (!box) return;
  if (QC_LOGIC_HTML_CACHE === null) QC_LOGIC_HTML_CACHE = box.innerHTML;
  box.innerHTML = '<div class="card"><div class="card-body" style="padding:44px 24px;text-align:center;color:var(--gray-500);font-size:13px;">🔒 判分逻辑仅管理员可见<br><span style="font-size:12px;color:var(--gray-400);">请使用带管理员密钥的链接打开页面，或点击右上角「管理员登录」。普通访客只能查看质检明细、数据看板与对外标准。</span></div></div>';
}
function qcLogicUnlock() {
  var box = document.getElementById('tab-qclogic');
  if (!box) return;
  if (QC_LOGIC_HTML_CACHE !== null) { box.innerHTML = QC_LOGIC_HTML_CACHE; QC_LOGIC_HTML_CACHE = null; }
  if (document.getElementById('qcLogicScoreTableWrap')) renderQcLogic();
}
function initAdminMode() { updateAdminBadge(); if (isAdminMode()) { qcLogicUnlock(); } else { qcLogicLock(); } }
function adminLogin() { var k = prompt('请输入管理员密钥：'); if (k === null) return; if (k === ADMIN_KEY) { sessionStorage.setItem('qc_admin', '1'); document.body.classList.add('admin-mode'); updateAdminBadge(); qcLogicUnlock(); showToast('管理模式已开启：可修改底层逻辑', 'success'); } else { showToast('管理员密钥错误', 'error'); } }
function adminLogout() { sessionStorage.removeItem('qc_admin'); document.body.classList.remove('admin-mode'); updateAdminBadge(); var qcTab = document.getElementById('tab-qclogic'); if (qcTab && qcTab.classList.contains('active')) switchTabByName('detail'); qcLogicLock(); showToast('已退出管理模式，页面转为只读', 'info'); }
function switchTab(tabName, el) {
  if (tabName === 'qclogic' && !isAdminMode()) { showToast('「质检逻辑」仅管理员可查看', 'error'); return; }
  if (tabName === 'users' && !qcCan('user.manage')) { showToast('「人员管理」仅管理员可见', 'error'); return; }
  var tabs = document.querySelectorAll('.tab-item');
  var contents = document.querySelectorAll('.tab-content');
  for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
  for (var j = 0; j < contents.length; j++) contents[j].classList.remove('active');
  el.classList.add('active');
  document.getElementById('tab-' + tabName).classList.add('active');
  if (tabName === 'dashboard') setTimeout(qcSyncDashboard, 50);
  if (tabName === 'standard') setTimeout(renderStandard, 50);
  if (tabName === 'qclogic') setTimeout(renderQcLogic, 50);
  if (tabName === 'knowledge') setTimeout(renderKnowledgeBase, 50);
  if (tabName === 'org') setTimeout(renderOrg, 50);
}

// ============================================================
// 上传弹窗
// ============================================================
function openUploadModal() { if (!requireAdmin('上传数据')) return;
  if (!requireCloudAdmin()) return;
  document.getElementById('uploadModal').classList.add('show');
  setupUploadDragDrop();
}
function closeUploadModal() {
  document.getElementById('uploadModal').classList.remove('show');
}
function setupUploadDragDrop() {
  var zone = document.getElementById('uploadZone');
  if (!zone) return;
  zone.ondragover = function(e) { e.preventDefault(); zone.classList.add('dragover'); };
  zone.ondragleave = function(e) { e.preventDefault(); zone.classList.remove('dragover'); };
  zone.ondrop = function(e) {
    e.preventDefault();
    zone.classList.remove('dragover');
    var file = e.dataTransfer.files[0];
    if (file) { closeUploadModal(); processFile(file); }
  };
}
function handleFileSelect(event) {
  var file = event.target.files[0];
  if (!file) return;
  closeUploadModal();
  processFile(file);
  event.target.value = '';
}

// ============================================================
// 文件解析（增强版：多编码、多分隔符、XLSX容错）
// ============================================================
function processFile(file) {
  var name = file.name.toLowerCase();
  var mode = 'clear';
  var radios = document.getElementsByName('uploadMode');
  for (var r = 0; r < radios.length; r++) { if (radios[r].checked) { mode = radios[r].value; break; } }

  if (name.indexOf('.csv') >= 0) {
    readCSVMultiEncoding(file, function(text) {
      try { var data = parseCSV(text); afterParse(data, mode); }
      catch(err) { showToast('CSV解析失败: ' + err.message, 'error'); }
    });
  } else if (name.indexOf('.xlsx') >= 0 || name.indexOf('.xls') >= 0) {
    if (!HAS_XLSX) { showToast('Excel解析库未加载，请刷新页面重试或使用CSV格式', 'error'); return; }
    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var wb = XLSX.read(e.target.result, { type: 'array' });
        var data = null;
        for (var s = 0; s < wb.SheetNames.length; s++) {
          var ws = wb.Sheets[wb.SheetNames[s]];
          var sd = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });
          if (sd && sd.length > 1) {
            var hasHeader = false;
            for (var h = 0; h < sd[0].length; h++) {
              if (String(sd[0][h] || '').trim()) { hasHeader = true; break; }
            }
            if (hasHeader) { data = sd; break; }
          }
        }
        if (!data) { showToast('文件中未找到有效数据', 'error'); return; }
        afterParse(data, mode);
      } catch(err) { showToast('Excel解析失败: ' + err.message, 'error'); }
    };
    reader.onerror = function() { showToast('文件读取失败，请重试', 'error'); };
    reader.readAsArrayBuffer(file);
  } else {
    showToast('不支持的文件格式，请上传 CSV 或 Excel 文件', 'error');
  }
}

// 多编码尝试读取CSV
function readCSVMultiEncoding(file, callback) {
  var reader1 = new FileReader();
  reader1.onload = function(e) {
    var text = e.target.result;
    var garbled = (text.match(/\uFFFD/g) || []).length;
    if (garbled > 5) {
      try {
        var reader2 = new FileReader();
        reader2.onload = function(e2) { callback(e2.target.result || text); };
        reader2.onerror = function() { callback(text); };
        reader2.readAsText(file, 'GBK');
      } catch(err) { callback(text); }
    } else { callback(text); }
  };
  reader1.onerror = function() {
    var r3 = new FileReader();
    r3.onload = function(e3) { callback(e3.target.result || ''); };
    r3.onerror = function() { showToast('文件读取失败', 'error'); };
    r3.readAsText(file, 'GBK');
  };
  reader1.readAsText(file, 'UTF-8');
}

// 增强CSV解析
function parseCSV(text) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.substring(1);
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  var delimiter = ',';
  var firstLine = text.split('\n')[0] || '';
  var sc = (firstLine.match(/;/g) || []).length;
  var cc = (firstLine.match(/,/g) || []).length;
  var tc = (firstLine.match(/\t/g) || []).length;
  if (tc > cc && tc > sc) delimiter = '\t';
  else if (sc > cc) delimiter = ';';
  var rows = [], row = [], cell = '', inQuotes = false, i = 0;
  while (i < text.length) {
    var ch = text[i];
    if (inQuotes) {
      if (ch === '"') { if (text[i+1] === '"') { cell += '"'; i += 2; continue; } inQuotes = false; i++; continue; }
      cell += ch; i++; continue;
    }
    if (ch === '"') { inQuotes = true; i++; continue; }
    if (ch === delimiter) { row.push(cell); cell = ''; i++; continue; }
    if (ch === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; i++; continue; }
    cell += ch; i++;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  var filtered = [];
  for (var f = 0; f < rows.length; f++) {
    if (rows[f].length > 0) {
      var hasContent = false;
      for (var c = 0; c < rows[f].length; c++) { if (String(rows[f][c] || '').trim()) { hasContent = true; break; } }
      if (hasContent) filtered.push(rows[f]);
    }
  }
  return filtered;
}

// ===== import-stage filter for un-inspectable rows (2026-11-17) =====
// Same two early-exit conditions as inspectOne: empty/no-contact/short reply, or no agent reply at all.
// Only applies to file upload parsing (afterParse); JSON restore (importAllData) is untouched to keep backup contract.
function wouldBeUninspectable(reply) {
  var src = String(reply == null ? '' : reply);
  if (src === '无联客记录' || src === '' || src.length < 5) return true;
  var ex = extractAgentReplies(src);
  var bl = src.split('收起'), blockTotal = 0;
  for (var bi = 0; bi < bl.length; bi++) if (String(bl[bi]).trim()) blockTotal++;
  var allAmazon = (ex.amazonCount || 0) > 0 && (ex.amazonCount || 0) >= blockTotal;
  var hasAgentReply = /\[(发送成功|发送失败|已撤回)\]/.test(src);
  return allAmazon || (!hasAgentReply && src.indexOf('收起') >= 0);
}

function afterParse(data, mode) {
  if (!data || data.length < 2) { showToast('数据为空或格式不正确', 'error'); return; }
  var headers = data[0].map(function(h) { return String(h || '').trim(); });
  var colMap = {};
  for (var hi = 0; hi < headers.length; hi++) {
    var h = headers[hi];
    var lh = h.toLowerCase().replace(/\s/g, '');
    if (matchCol(h, lh, ['账号', 'account', '店铺', 'store'])) colMap.account = hi;
    else if (matchCol(h, lh, ['客服', 'agent', '客服姓名', '客服工号', 'operator', '客服人员'])) colMap.agent = hi;
    else if (matchCol(h, lh, ['平台单号', '平台订单', '订单号', '订单编号', 'orderid', 'orderno', 'order', '平台订单号'])) colMap.order = hi;
    else if (matchCol(h, lh, ['回邮数据', '客服回复', '回复内容', '邮件内容', '回复数据', 'reply', 'emailcontent', '回邮', '回复'])) colMap.reply = hi;
    else if (matchCol(h, lh, ['日期', 'date', '时间', '更新日期'])) colMap.date = hi;
    else if (matchCol(h, lh, ['客户邮件', '客户来信', 'customeremail', '客户咨询', '客户消息'])) colMap.customer = hi;
    else if (matchCol(h, lh, ['是否需要检查流程操作', '是否检查流程操作', '需要检查流程操作', '是否检查流程', '检查流程操作', '流程操作检查', '是否需要检查', 'processcheck', 'needprocesscheck'])) colMap.processCheck = hi;
    else if (matchCol(h, lh, ['是否有退款登记', '退款登记', '是否退款', 'refundreg', 'refundregistration'])) colMap.refundReg = hi;
    else if (matchCol(h, lh, ['是否有问题反馈', '问题反馈', '是否反馈', 'issuefeedback', 'feedback'])) colMap.issueFeedback = hi;
    else if (matchCol(h, lh, ['是否有补件', '是否补件', '补件', '是否补发', '补发', 'replenishment', 'reissue'])) colMap.replenishment = hi;
    else if (matchCol(h, lh, ['订单金额', '订单总额', '实付金额', '金额', 'orderamount', 'amount', 'ordertotal'])) colMap.orderAmount = hi;
    else if (matchCol(h, lh, ['FBM订单缺陷率', '订单缺陷率', 'FBM缺陷率', '缺陷率', 'fbmdefectrate', 'orderdefectrate', 'defectrate', 'odr'])) colMap.fbmDefectRate = hi;
  }
  var missing = [];
  if (colMap.account === undefined) missing.push('账号');
  if (colMap.agent === undefined) missing.push('客服');
  if (colMap.order === undefined) missing.push('平台单号');
  if (colMap.reply === undefined) missing.push('回邮数据');
  if (missing.length > 0) {
    showToast('缺少必填列：' + missing.join('、') + '。检测到的列：' + headers.join(', '), 'error');
    return;
  }
  var newRawData = [];
  var skippedUninspectable = 0;
  // 本批次归属周：上传动作发生时固定为「当时的上一周」，写入每条新明细，历史批次不受影响
  var batchWeek = qcUploadWeekRange();
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    if (!row || row.length === 0) continue;
    var account = String(row[colMap.account] || '').trim();
    var agent = String(row[colMap.agent] || '').trim();
    var order = String(row[colMap.order] || '').trim();
    var reply = String(row[colMap.reply] || '').trim();
    if (!account && !agent && !order && !reply) continue;
    if (wouldBeUninspectable(reply)) { skippedUninspectable++; continue; }
    newRawData.push({ account: account, agent: agent, order: order, reply: reply,
      qcWeek: batchWeek.key,
      date: colMap.date !== undefined ? String(row[colMap.date] || '').trim() : '',
      customer: colMap.customer !== undefined ? String(row[colMap.customer] || '').trim() : '',
      processCheck: colMap.processCheck !== undefined ? String(row[colMap.processCheck] || '').trim() : '',
      refundReg: colMap.refundReg !== undefined ? String(row[colMap.refundReg] || '').trim() : '',
      issueFeedback: colMap.issueFeedback !== undefined ? String(row[colMap.issueFeedback] || '').trim() : '',
      replenishment: colMap.replenishment !== undefined ? String(row[colMap.replenishment] || '').trim() : '',
      orderAmount: colMap.orderAmount !== undefined ? String(row[colMap.orderAmount] || '').trim() : '',
      fbmDefectRate: colMap.fbmDefectRate !== undefined ? String(row[colMap.fbmDefectRate] || '').trim() : '' });
  }
  if (newRawData.length === 0) { showToast('未解析到有效数据行' + (skippedUninspectable ? '（' + skippedUninspectable + ' 条因无法质检在导入时剔除）' : ''), 'error'); return; }
  if (mode === 'append' && rawData.length > 0) {
    rawData = rawData.concat(newRawData);
    showToast('累计添加 ' + newRawData.length + ' 条数据（共 ' + rawData.length + ' 条）' + (skippedUninspectable ? '，导入时剔除无法质检 ' + skippedUninspectable + ' 条' : '') + '，开始质检...', 'success');
  } else {
    rawData = newRawData;
    showToast('成功解析 ' + rawData.length + ' 条数据' + (skippedUninspectable ? '（导入时剔除无法质检 ' + skippedUninspectable + ' 条）' : '') + '，开始质检...', 'success');
  }
  setTimeout(runQualityCheck, 300);
}

function matchCol(h, lh, keywords) {
  for (var i = 0; i < keywords.length; i++) {
    var kw = keywords[i].toLowerCase().replace(/\s/g, '');
    if (lh === kw || lh.indexOf(kw) >= 0 || h.indexOf(keywords[i]) >= 0) return true;
  }
  return false;
}

// ============================================================
// 质检引擎
// ============================================================
function runQualityCheck() {
  showProgress('正在质检...', '准备中');
  var previousAppeals = {}, previousAppealsStable = {};
  for (var p = 0; p < results.length; p++) {
    var previous = normalizeResultAppeal(results[p]);
    previousAppeals[previous.recordKey] = previous.appeal;
    previousAppealsStable[getStableRecordKey(previous)] = previous.appeal;
  }
  results = [];
  var total = rawData.length;
  var batchSize = 50;
  var batch = 0;
  function processBatch() {
    var end = Math.min(batch + batchSize, total);
    for (var i = batch; i < end; i++) {
      var result = inspectOne(rawData[i]);
      result._index = i;
      // 透传批次归属周（上传时固定写入，历史批次不改动）
      result.qcWeek = rawData[i].qcWeek || '';
      // 透传上传表里的登记类字段（与平台单号一一对应；未上传则为空）
      result.processCheck = rawData[i].processCheck || '';
      result.refundReg = rawData[i].refundReg || '';
      result.issueFeedback = rawData[i].issueFeedback || '';
      result.replenishment = rawData[i].replenishment || '';
      result.orderAmount = rawData[i].orderAmount || '';
      result.fbmDefectRate = rawData[i].fbmDefectRate || '';
      result.recordKey = getRecordKey(result);
      var _prevAppeal = previousAppeals[result.recordKey] || previousAppealsStable[getStableRecordKey(result)] || null;
      result.appeal = _prevAppeal ? normalizeAppeal(_prevAppeal) : createEmptyAppeal();
      normalizeResultAppeal(result);
      results.push(result);
    }
    updateProgress(Math.round((end / total) * 100), '正在质检', '已完成 ' + end + ' / ' + total);
    if (end < total) { batch = end; setTimeout(processBatch, 10); }
    else { setTimeout(function() { hideProgress(); onQualityCheckDone(); }, 300); }
  }
  processBatch();
}

function getKnowledgeMatches(text, dimension) {
  var matches = [];
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) {
    var item = KNOWLEDGE_BASE[i];
    if (item.kind === 'reference-case') continue;
    if (!knowledgeDimensionMatches(item, dimension)) continue;
    if (knowledgeItemMatch(text, item)) matches.push(item);
  }
  return matches;
}
function getReferenceCaseFingerprint(text) { return normalizeKnowledgeText(text); }
function getReferenceCaseMatches(text) {
  var matches = [];
  var fingerprint = getReferenceCaseFingerprint(text);
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) {
    var item = KNOWLEDGE_BASE[i];
    if (item.kind === 'reference-case' && item.referenceFingerprint && item.referenceFingerprint === fingerprint) matches.push(item);
  }
  return matches;
}
function isReferenceCaseResult(result) { return !!(result && (result.referenceCase || result.grade === '参考案例' || result.totalScore === -2)); }
function applyKnowledgeToResult(result, agentText, customerText) {
  // 「无法质检」的单子不做知识库叠加，避免给 -1 分的维度写入保底分
  if (result && result.grade === '无法质检') { result.knowledgeSummary = { goodHits: 0, badHits: 0 }; result.knowledgeEvidence = []; return result; }
  var allText = String(agentText || '') + '\n' + String(customerText || '');
  var referenceHits = getReferenceCaseMatches(allText, result.recordKey);
  if (referenceHits.length) {
    result.referenceCase = true;
    result.referenceCaseEvidence = referenceHits.map(function(k) { return { id: k.id, title: k.title, content: k.content }; });
    result.referenceCaseSummary = '命中申诉通过沉淀案例，不参与达标/不达标统计';
    result.totalScore = -2;
    result.grade = '参考案例';
  }
  var kbIssues = [];
  var kbEvidence = [];
  var goodHits = 0;
  var badHits = 0;
  for (var i = 0; i < DIM_NAMES.length; i++) {
    var dim = DIM_NAMES[i];
    var dimMax = getDimMax(dim);
    var matches = getKnowledgeMatches(allText, dim);
    for (var j = 0; j < matches.length; j++) {
      var k = matches[j];
      var isNegative = (k.type === 'case-bad' || k.kind === 'missed');
      var kbHit = knowledgeItemMatch(allText, k) || {};
      kbEvidence.push({ id: k.id, title: k.title, type: k.type, kind: k.kind, dimension: dim, dimensions: getKnowledgeDimensions(k), content: k.content, hitKeyword: kbHit.keyword || '', hitKind: kbHit.kind || '', sopEffect: isNegative ? 'fail' : 'pass' });
      if (!result.details[dim]) result.details[dim] = { score: result.scores[dim], grade: '', issues: [] };
      result.details[dim].issues = result.details[dim].issues || [];
      if (isNegative) {
        // SOP 即判分规则：命中不好案例 / 禁忌 → 该维度按比例扣分并判不达标
        badHits++;
        result.details[dim].grade = '不达标';
        result.details[dim].issues.push('违反SOP（知识库）：' + k.title + (kbHit.keyword ? '（命中要求：' + kbHit.keyword + '）' : ''));
        kbIssues.push('[' + dim + '] 违反SOP：' + k.content + (kbHit.keyword ? '（命中要求：' + kbHit.keyword + '）' : ''));
        if (result.scores[dim] > 0) result.scores[dim] = Math.max(0, result.scores[dim] - Math.max(KB_BAD_DEDUCT_MIN, Math.round(dimMax * KB_BAD_DEDUCT_RATIO)));
        result.details[dim].score = result.scores[dim];
      } else {
        // SOP 即判分规则：命中好案例 / 质检知识 → 该维度至少到“达标级”（80%满分），判分服从 SOP
        // 例外：该维度存在「硬性不达标」（如流程维度回邮动作与登记字段不一致、遗漏跟进），知识库保底不得覆盖
        var hardFail = !!(result.details[dim] && result.details[dim].hardFail);
        if (hardFail) { continue; }
        goodHits++;
        if (dimMax > 0 && result.scores[dim] >= 0) {
          var sopFloor = Math.round(dimMax * KB_SOP_FLOOR_RATIO);
          if (result.scores[dim] < sopFloor) result.scores[dim] = sopFloor;
        }
        result.details[dim].grade = '达标';
        result.details[dim].score = result.scores[dim];
        result.details[dim].issues.push('符合SOP（知识库）：' + k.title + (kbHit.keyword ? '（命中要求：' + kbHit.keyword + '）' : ''));
        kbIssues.push('[' + dim + '] 符合SOP：' + k.content + (kbHit.keyword ? '（命中要求：' + kbHit.keyword + '）' : ''));
      }
    }
  }
  if (kbIssues.length) result.issues = (result.issues || []).concat(kbIssues);
  var total = 0;
  for (var d = 0; d < DIM_NAMES.length; d++) if (result.scores[DIM_NAMES[d]] >= 0 && DIM_NAMES[d] !== '平台禁忌') total += result.scores[DIM_NAMES[d]];
  if (!result.referenceCase && result.totalScore >= 0 && !result.redlineViolation) { result.totalScore = total; result.grade = determineGrade(total); }
  if (!result.referenceCase && !result.redlineViolation && typeof applyExcellentGate === 'function') applyExcellentGate(result);
  // 达标单维度分夹到达标档（86+优秀保留优秀分；达标单各维度不超达标档、总分落80-85）2026-11-19
  if (!result.referenceCase && !result.redlineViolation) qcClampPassDimensions(result);
  if (!result.referenceCase) { result.knowledgeEvidence = kbEvidence; }
  else { result.knowledgeEvidence = (result.knowledgeEvidence || []).concat(referenceHits.map(function(k) { return { id: k.id, title: k.title, type: k.type, kind: k.kind, dimension: k.dimension, content: k.content, referenceCase: true }; })); }
  result.appeal = normalizeAppeal(result.appeal);
  result.knowledgeSummary = { goodHits: goodHits, badHits: badHits };
  return result;
}

function inspectOne(item) {
  var reply = item.reply || '';
  var customer = item.customer || '';
  if (reply === '无联客记录' || reply === '' || reply.length < 5) {
    return applyKnowledgeToResult({ account: item.account, agent: item.agent, order: item.order, date: item.date || getCurrentDate(),
      reply: reply, customer: customer,
      scores: { '语言语法表达': -1, '方案合理性': -1, '流程&操作完整性': -1, '服务技巧': -1, '服务态度': -1, '平台禁忌': -1 },
      totalScore: -1, grade: '无法质检', issues: ['回邮数据为空或为"无联客记录"，无法进行质检'], details: {} }, reply, customer);
  }
  var extracted = extractAgentReplies(reply);
  var agentText = extracted.agentText;
  var customerText = extracted.customerText || customer;
  var amazonCount = extracted.amazonCount || 0;
  // 亚马逊系统来信处理（2026-10-14 调整）：
  // 过去「排除亚马逊系统来信后没有可质检内容」会整条判为「无法质检」；
  // 现改为把亚马逊系统来信一并纳入质检范围正常打分，仅在没有其他可质检内容时才启用该回退，
  // 因此正常客服回邮仍按原逻辑排除系统来信，不受影响。
  var _bl = reply.split('收起'), blockTotal = 0;
  for (var _bi = 0; _bi < _bl.length; _bi++) if (String(_bl[_bi]).trim()) blockTotal++;
  var allAmazonSession = amazonCount > 0 && amazonCount >= blockTotal;
  var hasAgentReply = /\[(发送成功|发送失败|已撤回)\]/.test(reply);
  var amazonExcludedCount = amazonCount, amazonIncludedCount = 0;
  // 2026-10-15：会话里没有任何客服回邮段落 → 判「无法质检」，且不纳入任何统计。
  // 覆盖「回邮段落全部为亚马逊系统来信」的情形（全为系统来信时必然没有客服回邮）；
  // 只要存在一封客服回邮，就按正常流程质检。
  if (allAmazonSession || (!hasAgentReply && reply.indexOf('收起') >= 0)) {
    return applyKnowledgeToResult({ account: item.account, agent: item.agent, order: item.order, date: item.date || getCurrentDate(),
      reply: reply, customer: customer,
      scores: { '语言语法表达': -1, '方案合理性': -1, '流程&操作完整性': -1, '服务技巧': -1, '服务态度': -1, '平台禁忌': -1 },
      totalScore: -1, grade: '无法质检',
      issues: [allAmazonSession ? '回邮段落全部为亚马逊系统来信且没有客服回邮，无法进行质检' : '回邮中没有客服回邮段落，无法进行质检'],
      details: {}, noAgentReply: true, amazonOnlySession: allAmazonSession }, agentText, customerText);
  }
  if (amazonCount > 0 && !agentText.trim()) {
    var withAmazon = extractAgentReplies(reply, true);
    agentText = withAmazon.agentText || extracted.nonAmazonText || reply || '';
    if (!customerText) customerText = withAmazon.customerText || '';
    amazonExcludedCount = 0;
    amazonIncludedCount = amazonCount;
  }
  var scores = {}, issues = [], details = {};

  var pr = checkProhibition(agentText, reply);
  scores['平台禁忌'] = pr.score;
  details['平台禁忌'] = pr;
  if (pr.issues.length > 0) issues.push.apply(issues, pr.issues);
  var isRedline = pr.score === 0 && pr.issues.length > 0;

  if (isRedline) {
    var dims = ['语言语法表达', '方案合理性', '流程&操作完整性', '服务技巧', '服务态度'];
    for (var d = 0; d < dims.length; d++) {
      scores[dims[d]] = 0;
      details[dims[d]] = { score: 0, grade: '不达标', issues: ['红线违规，整单0分'] };
    }
    return { account: item.account, agent: item.agent, order: item.order, date: item.date || getCurrentDate(),
      reply: reply, customer: customer, scores: scores, totalScore: 0, grade: '不达标', issues: issues, details: details, redlineViolation: true };
  }

  var lr = checkLanguage(agentText, customerText);
  scores['语言语法表达'] = lr.score; details['语言语法表达'] = lr;
  if (lr.issues.length > 0) for (var i1 = 0; i1 < lr.issues.length; i1++) issues.push('[语言语法表达] ' + lr.issues[i1]);

  var sr = checkSolution(agentText, customerText);
  scores['方案合理性'] = sr.score; details['方案合理性'] = sr;
  if (sr.issues.length > 0) for (var i2 = 0; i2 < sr.issues.length; i2++) issues.push('[方案合理性] ' + sr.issues[i2]);

  // 流程&操作完整性：结合回邮数据与「是否有退款登记 / 是否有问题反馈 / 是否有补件」三列登记信息判分
  var pc = checkProcess(agentText, {
    reply: reply,
    customerText: customerText,
    refundReg: item.refundReg,
    issueFeedback: item.issueFeedback,
    replenishment: item.replenishment
  });
  scores['流程&操作完整性'] = pc.score; details['流程&操作完整性'] = pc;
  if (pc.issues.length > 0) for (var i3 = 0; i3 < pc.issues.length; i3++) issues.push('[流程&操作完整性] ' + pc.issues[i3]);

  var sk = checkSkill(agentText, customerText);
  scores['服务技巧'] = sk.score; details['服务技巧'] = sk;
  if (sk.issues.length > 0) for (var i4 = 0; i4 < sk.issues.length; i4++) issues.push('[服务技巧] ' + sk.issues[i4]);

  var at = checkAttitude(agentText);
  scores['服务态度'] = at.score; details['服务态度'] = at;
  if (at.issues.length > 0) for (var i5 = 0; i5 < at.issues.length; i5++) issues.push('[服务态度] ' + at.issues[i5]);

  var total = scores['语言语法表达'] + scores['方案合理性'] + scores['流程&操作完整性'] + scores['服务技巧'] + scores['服务态度'];
    var finalResult = { account: item.account, agent: item.agent, order: item.order, date: item.date || getCurrentDate(),
      reply: reply, customer: customer, scores: scores, totalScore: total, grade: determineGrade(total), issues: issues, details: details,
      amazonExcluded: amazonExcludedCount, amazonIncluded: amazonIncludedCount };
    return applyKnowledgeToResult(finalResult, agentText, customerText);
}

function isAmazonBlock(block) {
  if (!block) return false;
  // 卖家自己的回邮（含发送状态标记）绝不算亚马逊系统来信，避免正常客服回邮（常提及 Amazon account/order）被整封误排除
  if (/\[发送成功\]|\[发送失败\]|\[已撤回\]/.test(block)) return false;
  // 发件人前缀（第一个日期之前的内容），用于判断发件人是否为亚马逊
  var senderPrefix = (block.split(/\d{4}-\d{2}-\d{2}/)[0] || '').trim().toLowerCase();
  var head = (block.split(/\d{4}-\d{2}-\d{2}/)[0] || '').trim() + '\n' + block.substring(0, 260);
  var headL = head.toLowerCase();
  // 强系统信号：销售伙伴支持、反馈移除通知、亚马逊自动/不回复邮件等（均不参与客诉质检）
  if (/seller[\s-]?support|selling\s*partner|sales?\s*partner|销售伙伴支持|卖家支持|marketplace\s*support|卖家中心|seller\s*central|no[\s-]?reply@amazon|do[\s-]?not[\s-]?reply|donotreply|automated (message|response|reply)|this is an automated|feedback removal|we['’]?ve reviewed your|we have reviewed your|reviewed your (feedback|request|message|case)|amazon pay|amazonhello|amazon marketplace support/i.test(headL)) return true;
  // 仅当“亚马逊/amazon”出现在发件人前缀（即发件人本身就是亚马逊系统），才视为系统来信；正文里提到 Amazon 的客服回邮不再误杀
  if (/亚马逊|amazon/.test(senderPrefix)) return true;
  return false;
}
// includeAmazon=true：把亚马逊系统来信也纳入提取范围（用于「整封均为亚马逊系统来信」时回退为正常质检）
function extractAgentReplies(text, includeAmazon) {
  var agentText = '', customerText = '', nonAmazonText = '';
  var amazonCount = 0;
  if (!text || text === '无联客记录') return { agentText: '', customerText: '', nonAmazonText: '', amazonCount: 0 };
  var blocks = text.split('收起');
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    if (isAmazonBlock(block)) { amazonCount++; if (!includeAmazon) continue; } // 亚马逊系统来信（如销售伙伴支持团队）默认不参与客诉质检
    nonAmazonText += block + '\n';
    var sm = block.match(/\[(发送成功|发送失败|已撤回)\]([\s\S]*?)(?=\d{4}-\d{2}-\d{2}|$)/);
    if (sm) agentText += sm[2].trim() + '\n';
    var cm = block.match(/\(拉取时间[^)]*\)\s*([\s\S]*?)(?=\d{4}-\d{2}-\d{2}|\[发送|\[已|$)/);
    if (cm) customerText += cm[1].trim() + '\n';
  }
  if (!agentText && text.indexOf('收起') < 0 && (amazonCount === 0 || includeAmazon)) agentText = text; // 无会话结构的纯回邮兜底（includeAmazon 时含亚马逊系统来信）
  return { agentText: agentText.trim(), customerText: customerText.trim(), nonAmazonText: nonAmazonText.trim(), amazonCount: amazonCount };
}

function getReasonSentences(text) {
  var source = String(text || '').replace(/\r/g, '\n').trim();
  if (!source) return [];
  return source.split(/\n+|[.!?。！？]\s*/).map(function(s) { return s.trim(); }).filter(function(s) { return !!s; });
}
function getDimensionEvidenceTerms(dim, issues) {
  // 多语种证据词（回邮常为德/法/西/意原文，并附中文译文）
  var ML_TERMS = ['gentile', 'cordiali saluti', 'la preghiamo', 'grazie', 'comprendere', 'allegato', 'sehr geehrte', 'mit freundlichen', 'bitte', 'danke', 'verstehen', 'bonjour', 'cordialement', 'merci', 'comprendre', 'estimado', 'atentamente', 'saludos', 'gracias',
    '尊敬', '您好', '感谢', '此致', '敬礼', '请', '抱歉', '理解', '退款', '退货', '补发', '换货', '取消', '核实', '检查', '跟进', '更新', '物流', '发货', '处理', '安排', '解决', '方案', '附件', '稍后', '尽快'];
  var terms = {
    '语言语法表达': ['dear', 'hello', 'hi ', 'thank', 'regards', 'sincerely', 'recieve', 'occured', 'seperate', 'definately', 'please'],
    '方案合理性': ['refund', 'resend', 'replacement', 'replace', 'cancel', 'return', 'discount', 'compensat', 'investigat', 'follow up', 'check', 'confirm', 'process', 'solution', 'please wait', 'cannot help', 'nothing we can do'],
    '流程&操作完整性': ['within', 'business day', 'hour', 'refund', 'tracking', 'track', 'follow up', 'will check', 'will update', 'confirm', 'ticket', 'resend'],
    '服务技巧': ['sorry', 'apologi', 'understand', 'frustrat', 'dear ', 'hello ', 'feel free', 'let us know', 'anything else', 'please contact'],
    '服务态度': ['you must', 'you have to', 'no way', 'impossible', 'not our problem', 'your fault', 'why did you', 'as i said', 'sorry', 'thank'],
    '平台禁忌': ['@', 'paypal', 'ebay', 'alibaba', 'aliexpress', 'facebook', 'instagram', 'whatsapp', 'wechat', 'http://', 'https://', 'review', 'rating']
  }[dim] || [];
  if (dim !== '平台禁忌') terms = terms.concat(ML_TERMS);
  var issueText = (issues || []).join(' ').toLowerCase();
  if (issueText.indexOf('问候') >= 0) terms = terms.concat(['dear', 'hello', 'hi ']);
  if (issueText.indexOf('结尾') >= 0 || issueText.indexOf('礼貌语') >= 0) terms = terms.concat(['regards', 'sincerely', 'thank']);
  if (issueText.indexOf('退款') >= 0) terms = terms.concat(['refund']);
  if (issueText.indexOf('邮箱') >= 0) terms = terms.concat(['@']);
  if (issueText.indexOf('链接') >= 0) terms = terms.concat(['http://', 'https://']);
  return terms;
}
function isMetaLine(s) {
  var t = String(s || '');
  if (/拉取时间|收起|发送成功|发送失败|已撤回|客服名|客户名|销售伙伴支持|amazon|亚马逊/i.test(t)) return true;
  // 界面操作文案（标签归类/跟进标签/请选择/上传附件/草稿等）不是回邮正文，不能作为证据
  if (/标签归类|跟进标签|请选择|上传附件|草稿|客诉标签/i.test(t)) return true;
  if (/\d{4}[-/年]\d{1,2}[-/月]\d{1,2}/.test(t)) return true;
  // 近似纯时间戳/编号行（无中英文单词，仅数字、空格与常见分隔符）
  if (/^[\d\s:：\-‐‑‒–—―()（）.．。，,]*$/.test(t) && t.replace(/[\s:：\-‐‑‒–—―()（）.．。，,]/g, '').length >= 6) return true;
  return false;
}
function getReplyEvidence(text, dim, issues) {
  var source = String(text || '').trim();
  if (!source) return '（无可用客服回邮内容，无法提取证据）';
  var sentences = getReasonSentences(source);
  var terms = getDimensionEvidenceTerms(dim, issues);
  var MIN_MEANINGFUL_LEN = 15; // 过滤 "issue resolved" 等过短无意义短句
  var bestFallback = ''; // 真实回邮兜底（按长度挑最长非元数据句），绝不回退到硬编码模板
  for (var i = 0; i < sentences.length; i++) {
    if (isMetaLine(sentences[i])) continue;
    if (!bestFallback || sentences[i].length > bestFallback.length) bestFallback = sentences[i];
    if (sentences[i].length < MIN_MEANINGFUL_LEN) continue;
    var lower = sentences[i].toLowerCase();
    for (var j = 0; j < terms.length; j++) if (terms[j] && lower.indexOf(terms[j].toLowerCase()) >= 0) return sentences[i].substring(0, 360);
  }
  // 兜底 1：任何足够长的真实回邮句（即便未命中关键词，也比模板真实）
  for (var k = 0; k < sentences.length; k++) { if (!isMetaLine(sentences[k]) && sentences[k].length >= MIN_MEANINGFUL_LEN) return sentences[k].substring(0, 360); }
  // 兜底 2：真实回邮哪怕很短（如客服只回 "ok"），也比虚构模板真实
  if (bestFallback) return bestFallback.substring(0, 360);
  return '（无可用客服回邮内容，无法提取证据）';
}
// ===== 邮件级定位：把回邮会话拆成「第N封（角色·状态·时间）」，用于明确指出问题/优秀出自哪封邮件 =====
// includeAmazon=true：亚马逊系统来信也参与证据定位（用于已纳入正常质检的回单）
function splitReplyEmails(text, includeAmazon) {
  var out = [];
  var src = String(text || '');
  if (!src || src === '无联客记录') return out;
  var blocks = src.split('收起');
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    if (!block || !block.trim()) continue;
    var isAmz = isAmazonBlock(block);
    var dm = block.match(/\d{4}-\d{2}-\d{2}(?:[ T]\d{1,2}:\d{2}(?::\d{2})?)?/);
    var date = dm ? dm[0] : '';
    var role = '客户来信', status = '';
    var am = block.match(/\[(发送成功|发送失败|已撤回)\]/);
    var body = '';
    if (isAmz && !includeAmazon) { role = '亚马逊系统来信'; body = ''; }
    else if (am) {
      role = '客服回邮'; status = am[1];
      var seg = block.split(am[0])[1] || '';
      var cut = seg.search(/\d{4}-\d{2}-\d{2}(?:[ T]\d{1,2}:\d{2})?/);
      body = (cut >= 0 ? seg.substring(0, cut) : seg).trim();
    } else if (/\(拉取时间/.test(block)) {
      role = '客户来信';
      var cs = block.replace(/^[\s\S]*?\(拉取时间[^)]*\)\s*/, '');
      var cut2 = cs.search(/\d{4}-\d{2}-\d{2}(?:[ T]\d{1,2}:\d{2})?|\[发送|\[已/);
      body = (cut2 >= 0 ? cs.substring(0, cut2) : cs).trim();
    } else {
      role = isAmz ? '亚马逊系统来信' : '客服回邮';
      body = block.replace(/\d{4}-\d{2}-\d{2}(?:[ T]\d{1,2}:\d{2}(?::\d{2})?)?/, '').trim();
    }
    out.push({ idx: out.length + 1, date: date, role: role, status: status, amazon: isAmz, body: body });
  }
  // 无会话结构（纯回邮）时兜底为第1封客服回邮
  if (!out.length) out.push({ idx: 1, date: '', role: '客服回邮', status: '', amazon: false, body: src.trim() });
  return out;
}
function formatEmailRef(em) {
  var meta = [];
  if (em.role) meta.push(em.role);
  if (em.status) meta.push(em.status);
  if (em.date) meta.push(em.date);
  return '第' + em.idx + '封' + (meta.length ? '（' + meta.join(' · ') + '）' : '');
}
// 逐封邮件提取证据句，返回命中的邮件列表（优先命中维度关键词的邮件）
function getEmailEvidenceList(text, dim, issues, limit, includeAmazon) {
  var emails = splitReplyEmails(text, includeAmazon);
  var terms = getDimensionEvidenceTerms(dim, issues);
  var MIN = 15;
  var hits = [];
  for (var e = 0; e < emails.length; e++) {
    var em = emails[e];
    if (!em.body) continue; // 未纳入质检的亚马逊系统来信 body 为空，自然跳过
    var sents = getReasonSentences(em.body);
    var best = '', bestScore = -1, fallback = '', matched = false;
    for (var i = 0; i < sents.length; i++) {
      var s = sents[i];
      if (isMetaLine(s)) continue;
      if (!fallback || s.length > fallback.length) fallback = s;
      if (s.length < MIN) continue;
      var lower = s.toLowerCase();
      var hit = false;
      for (var j = 0; j < terms.length; j++) if (terms[j] && lower.indexOf(String(terms[j]).toLowerCase()) >= 0) { hit = true; break; }
      var sc = (hit ? 1000 : 0) + Math.min(s.length, 300);
      if (sc > bestScore) { bestScore = sc; best = s; matched = hit; }
    }
    if (!best) best = fallback;
    // 已纳入质检的亚马逊系统来信常为系统/界面文本，正文可能被界面文案过滤清空；此时直接引用原文，避免显示「未定位到具体邮件」
    if (!best && includeAmazon) best = String(em.body).replace(/\s+/g, ' ').trim().substring(0, 240);
    if (best) hits.push({ email: em, sentence: String(best).substring(0, 240), matched: matched });
  }
  // 优先「客服回邮」邮件的证据，其次才是客户来信（保证「实际回邮」引用的是客服自己写的内容）
  var agentHits = hits.filter(function(h) { return h.email.role === '客服回邮'; });
  var pool = agentHits.length ? agentHits : hits;
  var matchedHits = pool.filter(function(h) { return h.matched; });
  var ordered = (matchedHits.length ? matchedHits : pool).slice(0, limit || 3);
  return { emails: emails, hits: ordered };
}
function formatEvidenceWithRefs(hits) {
  if (!hits || !hits.length) return '（无可用客服回邮内容，无法提取证据）';
  return hits.map(function(h) { return formatEmailRef(h.email) + '：「' + h.sentence + '」'; }).join('；');
}
function getStandardClause(dimName, grade) {
  for (var i = 0; i < STANDARDS.length; i++)
    for (var j = 0; j < STANDARDS[i].items.length; j++) {
      var item = STANDARDS[i].items[j];
      if (item.name === dimName)
        for (var k = 0; k < item.levels.length; k++)
          if (item.levels[k].grade === grade) {
            var d = String(item.levels[k].detail || '').replace(/\s+/g, ' ').trim();
            return d.length > 180 ? d.substring(0, 180) + '…' : d;
          }
    }
  return '';
}
function getDimensionPassReason(dim, detail, result, evidence) {
  var det = detail || {};
  if (det.passReason) return det.passReason;
  if (dim === '流程&操作完整性') {
    if (isWaitingForCustomerReply(result && result.reply || '')) return '已提出明确方案并询问买家是否接受，当前下一步是等待买家回复，不需要卖家继续执行。';
    var rv = String(result && result.refundReg || '').trim(), fv = String(result && result.issueFeedback || '').trim(), pv = String(result && result.replenishment || '').trim();
    var bits = [];
    if (/\u662f/.test(rv)) bits.push('退款登记：是');
    if (/\u662f/.test(fv)) bits.push('问题反馈：是');
    if (/\u662f/.test(pv)) bits.push('补件：是');
    return '流程操作无缺失，回邮内容与「是否有退款登记 / 是否有问题反馈 / 是否有补件」登记一致' + (bits.length ? '（' + bits.join('；') + '）' : '') + '；未发现需要主动跟进的事项被遗漏。';
  }
  if (dim === '方案合理性') return '回邮已围绕客户诉求提供对应处理方案，方案方向明确且与当前场景匹配。';
  if (dim === '语言语法表达') return '回邮表达完整、语气礼貌，未发现影响理解的明显语法或拼写问题。';
  if (dim === '服务技巧') return '回邮已体现对客户问题的回应，并保持了基本的服务沟通方式。';
  if (dim === '服务态度') return '回邮整体保持尊重和合作语气，未发现命令、责备或质问式表达。';
  if (dim === '平台禁忌') return '回邮未发现站外联系方式、站外交易引导、评价干预或其他平台禁忌内容。';
  return '当前回邮符合本维度的质检要求。';
}
function getDimensionSuggestion(dim, issues, grade) {
  var issueText = (issues || []).join('；');
  if (dim === '语言语法表达') {
    if (issueText.indexOf('问候') >= 0 || issueText.indexOf('礼貌') >= 0) return 'Hello [Customer Name], thank you for contacting us. We will keep you updated. Best regards, [Agent Name]';
    if (issueText.indexOf('拼写') >= 0) return '请先检查拼写、标点和缩写，例如将 “recieve” 改为 “receive”，并完整写出 “cannot / do not”。';
    return '建议使用完整句子，并补充礼貌开头、清晰说明和结尾署名。';
  }
  if (dim === '方案合理性') return issueText.indexOf('推诿') >= 0 || issueText.indexOf('明确') >= 0 ? 'We have reviewed your request. We will process the refund within 3 business days and email you the confirmation once it is completed.' : '建议明确回答客户诉求，并说明具体处理方案，而不是只回复“请等待”或“我们会查看”。';
  if (dim === '流程&操作完整性') {
    if (issueText.indexOf('登记') >= 0) return '回邮中已发生退款/描述不符反馈/补发动作时，须同步在「是否有退款登记 / 是否有问题反馈 / 是否有补件」中登记为“是”，不能留空白；请补齐登记后重传数据。';
    if (issueText.indexOf('遗漏') >= 0 || issueText.indexOf('等待') >= 0) return '让顾客等待后，务必在承诺时限内再发送一封跟进邮件（确认退款到账的情形除外），告知处理进度或结果，避免遗漏跟进。';
    return issueText.indexOf('到账时间') >= 0 ? 'We will process the refund within 3 business days. Once completed, we will send you the refund confirmation and update you if anything changes.' : '建议写清下一步操作、责任人和时间节点，例如“我们将在24小时内核实，并于处理完成后回复您”。';
  }
  if (dim === '服务技巧') return issueText.indexOf('同理心') >= 0 ? 'I understand how frustrating this situation is. We are sorry for the inconvenience and will handle it for you. Please let us know if there is anything else we can help with.' : '建议结合客户称呼、同理心表达和主动服务收尾，避免只给结论、不提供帮助。';
  if (dim === '服务态度') return issueText.indexOf('强硬') >= 0 || issueText.indexOf('质问') >= 0 ? 'We are sorry for the inconvenience. Let me clarify what happened and the options available to you.' : '建议使用尊重、合作的表达，避免命令、责备、质问或“这不是我们的问题”等表述。';
  if (dim === '平台禁忌') return '请将沟通、付款和售后处理保留在平台允许的流程内，不索要站外联系方式、不引导站外交易，也不干预客户评价。';
  return grade === '不达标' ? '建议结合客户诉求补充明确、可执行且符合平台规则的处理方式。' : '当前回邮可作为本维度的合格参考。';
}
// 识别客户原始诉求类型（用于生成针对性优化方案）
function detectIntent(text) {
  var t = String(text || '').toLowerCase();
  var intents = [];
  if (/refund|退款|回款|money back|reembolso|erstattung/.test(t)) intents.push('refund');
  if (/replace|replacement|换货|exchange|swap|umsatz|tausch/.test(t)) intents.push('replace');
  if (/damag|broken|defect|损坏|破损|faulty|kaputt|beschädigt/.test(t)) intents.push('damaged');
  if (/not received|never received|haven't received|未收到|no tracking|no tracking details|追踪|keine|empfangen/.test(t)) intents.push('notreceived');
  if (/tracking|track number|物流单号|where is my|wo ist|dónde|dond/.test(t)) intents.push('tracking');
  if (/a[-\s]?to[-\s]?z|claim|投诉|威胁|lawyer|chargeback|anzahlung/.test(t)) intents.push('claim');
  if (/return|退货|退回|send back|retoure|devolver/.test(t)) intents.push('return');
  if (/wrong|incorrect|颜色|color|colour|size|尺寸|mistake|error|falsch|talla/.test(t)) intents.push('wrongitem');
  return intents.length ? intents : ['general'];
}
// 针对“不达标维度 + 该条坏案例的真实客户诉求”，生成可直接套用的改写示例回邮
function getOptimizedRewrite(dim, rec) {
  if (!rec) return '';
  var reply = rec.reply || '';
  var ex = extractAgentReplies(reply);
  var cust = ex.customerText || '';
  var agent = ex.agentText || ex.nonAmazonText || '';
  var order = rec.order || '';
  var intents = detectIntent(cust + ' ' + agent);
  // 按诉求类型给出具体处理方案核心句
  var actionCore = '';
  for (var i = 0; i < intents.length; i++) {
    var it = intents[i];
    if (it === 'refund') actionCore = 'We have processed a full refund for your order ' + order + '. It will be credited to your original payment method within 3 business days, and you will receive a confirmation email once completed.';
    else if (it === 'replace') actionCore = 'We will arrange a replacement for your order ' + order + ' and ship it within 2 business days. The tracking number will be emailed to you as soon as it is available.';
    else if (it === 'damaged') actionCore = 'We sincerely apologize that the item in your order ' + order + ' arrived damaged. We have arranged a full refund (or a free replacement upon your choice), which will be processed within 3 business days.';
    else if (it === 'notreceived') actionCore = 'We are sorry your order ' + order + ' has not arrived as expected. We have checked with the carrier and will either reship a new package or issue a full refund within 3 business days, keeping you updated by email.';
    else if (it === 'tracking') actionCore = 'The tracking number for your order ' + order + ' has been sent to your email. We will monitor the shipment and proactively update you if there is any delay.';
    else if (it === 'claim') actionCore = 'We have already processed a full refund for your order ' + order + '. Please allow 3 business days for it to appear in your account. We sincerely apologize for the inconvenience and remain at your service for any further questions.';
    else if (it === 'return') actionCore = 'We have approved a return for your order ' + order + '. A prepaid return label has been sent to your email; once we receive the item, the refund will be issued within 3 business days.';
    else if (it === 'wrongitem') actionCore = 'We apologize for sending the wrong item in your order ' + order + '. We will ship the correct item within 2 business days at no extra cost, and you may keep or discard the wrong one.';
    if (actionCore) break;
  }
  if (!actionCore) actionCore = 'We have reviewed your request for order ' + order + ' and will resolve it within 3 business days, updating you by email at every step.';
  // 按维度叠加开头与侧重点
  var prefix, suffix = ' Please let us know if there is anything else we can help with. Best regards, [Agent]', emphasis = '';
  if (dim === '服务技巧' || dim === '服务态度') prefix = 'Dear Customer, we are truly sorry for the inconvenience this has caused you. ';
  else if (dim === '语言语法表达') prefix = 'Dear Customer, thank you for reaching out. ';
  else prefix = 'Dear Customer, thank you for contacting us regarding order ' + order + '. ';
  if (dim === '方案合理性') emphasis = ' To be clear, here is the concrete action we are taking rather than asking you to wait: ';
  else if (dim === '流程&操作完整性') emphasis = ' The next step, timeline and how we will notify you are as follows: ';
  else if (dim === '平台禁忌') emphasis = ' Please rest assured that all communication, payment and after-sales are handled officially within the platform. ';
  return prefix + emphasis + actionCore + suffix;
}
function getDimensionAdviceModel(dim) {
  if (dim === '语言语法表达') return { problem: '邮件缺称呼/完整句式/署名，常见语法拼写错误或句式破碎。', suggestion: '用模板：称呼＋解决问题＋敬语署名；发送前过一遍拼写。', caseBad: 'hi ur order will ship soon wait pls', caseGood: 'Hello [Name], thanks for reaching out. Your order #12345 ships within 24h; we’ll email the tracking number. Regards, [Agent]' };
  if (dim === '方案合理性') return { problem: '未直接回应诉求，只让等待，无方案或时限。', suggestion: '确认问题后给明确步骤＋责任人＋完成时间，别只说“会查看”。', caseBad: 'we will check it, pls wait', caseGood: 'We received your refund for #12345 and will process it within 3 business days, then email you.' };
  if (dim === '流程&操作完整性') return { problem: '缺后续动作/时效/反馈方式，客户不知进展。', suggestion: '结尾写明下一步、完成节点与告知方式，如“24h 内核实并回复”。', caseBad: 'issue resolved', caseGood: 'Return submitted. Refund arrives 5 days after we get the item; return label sent to your email now.' };
  if (dim === '服务技巧') return { problem: '缺同理心与主动收尾，客户觉得被敷衍。', suggestion: '先共情再处理，结尾主动问“还有可帮您的吗”。', caseBad: 'policy, nothing we can do', caseGood: 'Sorry for the delay. We’ll prioritize your case and update you by tomorrow. Anything else we can help?' };
  if (dim === '服务态度') return { problem: '语气生硬、命令式，带责备/质问。', suggestion: '用尊重合作语气，先共情再解决，不责备客户。', caseBad: 'why didn’t u read the instructions? not our fault', caseGood: 'Sorry for the confusion. Let me explain the options so we can sort this out together.' };
  if (dim === '平台禁忌') return { problem: '出现站外联系方式、引导站外交易、索要评价或泄露信息。', suggestion: '全程平台内沟通/付款/售后，不索站外联系方式、不引导站外、不干预评价。', caseBad: 'add my wechat for a discount if you change the review', caseGood: 'Please keep communication in the platform. We’ll handle the refund officially; reply here if you have questions.' };
  return { problem: '本维度存在不达标记录。', suggestion: '结合邮件复核，给出明确、可执行且合规的处理方式。', caseBad: '', caseGood: '' };
}
function buildAdviceText(items) {
  var lines = [];
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    lines.push((i + 1) + '. ' + it.name + '（' + it.count + '次）');
    lines.push('   最突出问题：' + it.problem);
    lines.push('   改进建议：' + it.suggestion);
    if (it.caseBadBasis) lines.push('   判定依据：' + it.caseBadBasis);
    if (it.caseBad) lines.push('   问题案例（实际回邮）：' + maskOrderNoForDisplay(it.caseBad));
    if (it.caseGood) lines.push('   修改示例（优秀同事实际回邮）：' + it.caseGood);
    if (it.focus && it.focus.length) { var fstr = it.focus.map(function(f) { return f.label + '(' + f.count + '次)'; }).join('、'); lines.push('   重点关注：' + fstr); }
    lines.push('');
  }
  return lines.join('\n');
}
function showAdviceModal(title, items) {
  var html = '<div style="line-height:1.7;">';
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    html += '<div style="margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid #e5e7eb;">';
    html += '<div style="font-weight:700;color:#1e4384;margin-bottom:6px;">' + (i + 1) + '. ' + escHtml(it.name) + '（' + it.count + '次）</div>';
    html += '<div style="margin-bottom:4px;"><b style="color:#374151;">最突出问题：</b>' + escHtml(it.problem) + '</div>';
    html += '<div style="margin-bottom:4px;"><b style="color:#374151;">改进建议：</b>' + escHtml(it.suggestion) + '</div>';
    if (it.caseBad || it.caseBadBasis) { html += '<div style="background:#fef2f2;padding:8px 10px;border-radius:4px;color:#991b1b;margin-top:6px;"><b style="color:#374151;">问题案例（实际回邮）：</b>'; if (it.caseBadBasis) html += '<div style="font-size:12px;margin-bottom:3px;">判定依据：' + escHtml(displayText(it.caseBadBasis)) + '</div>'; if (it.caseBad) html += '<div>' + escHtml(displayText(it.caseBad)) + '</div>'; html += '</div>'; }
    if (it.caseGood) html += '<div style="background:#f0fdf4;padding:8px 10px;border-radius:4px;color:#166534;margin-top:6px;"><b style="color:#374151;">修改示例（优秀同事实际回邮）：</b>' + escHtml(it.caseGood) + '</div>';
    if (it.focus && it.focus.length) { var fps = []; for (var f = 0; f < it.focus.length; f++) fps.push(escHtml(it.focus[f].label) + '（' + it.focus[f].count + '次）'); html += '<div style="background:#fff7ed;padding:8px 10px;border-radius:4px;color:#9a3412;margin-top:6px;"><b style="color:#374151;">重点关注：</b>' + fps.join('、') + '</div>'; }
    html += '</div>';
  }
  html += '</div>';
  html += '<div style="position:sticky;bottom:0;background:#fff;padding-top:12px;border-top:1px solid #e5e7eb;display:flex;gap:10px;justify-content:flex-end;">';
  html += '<button class="btn btn-outline" id="adviceCopyBtn" onclick="copyAdviceText(this)">复制全部建议</button>';
  html += '<button class="btn btn-primary" onclick="closeModal()">关闭</button></div>';
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modalBody').dataset.adviceText = buildAdviceText(items);
  var ovS = document.getElementById('detailModal'); ovS.classList.remove('minimized'); ovS.classList.add('show');
}
function copyAdviceText(btn) {
  var text = document.getElementById('modalBody').dataset.adviceText || '';
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() { if (btn) { btn.textContent = '已复制'; setTimeout(function() { btn.textContent = '复制全部建议'; }, 1500); } });
  } else {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); if (btn) { btn.textContent = '已复制'; setTimeout(function() { btn.textContent = '复制全部建议'; }, 1500); } } catch (e) {}
    document.body.removeChild(ta);
  }
}
function buildGroupedAdviceText(sections, focusLabel, bestLabel) {
  focusLabel = focusLabel || '重点关注';
  bestLabel = bestLabel || '表现最好的成员';
  var lines = [];
  for (var s = 0; s < sections.length; s++) {
    var sec = sections[s];
    lines.push('【' + sec.group + '】');
    lines.push('— 做得好的维度 —');
    if (sec.good && sec.good.length) {
      for (var g = 0; g < sec.good.length; g++) {
        var gd = sec.good[g];
        lines.push('  ' + (g + 1) + '. ' + gd.name + '：' + gd.why);
        if (gd.caseGood) lines.push('      标杆回邮（实际）：' + gd.caseGood);
        if (gd.orders && gd.orders.length) lines.push('      标杆订单：' + gd.orders.join('、'));
        if (gd.best) lines.push('      ' + bestLabel + '：' + gd.best.label + '（平均分 ' + (gd.best.avg >= 0 ? gd.best.avg.toFixed(1) : '-') + '）');
      }
    } else lines.push('  （无）');
    lines.push('— 需要改进的维度 —');
    if (sec.improve && sec.improve.length) {
      for (var i = 0; i < sec.improve.length; i++) {
        var it = sec.improve[i];
        lines.push('  ' + (i + 1) + '. ' + it.name + '：' + it.why);
        if (it.problem) lines.push('      最突出问题：' + it.problem);
        lines.push('      改进建议：' + it.suggestion);
        if (it.caseBadBasis) lines.push('      判定依据：' + it.caseBadBasis);
        if (it.caseBad) lines.push('      问题案例（实际回邮）：' + maskOrderNoForDisplay(it.caseBad));
        if (it.optRewrite) lines.push('      针对性优化方案（改写示例）：' + it.optRewrite);
        if (it.caseGood) lines.push('      修改示例（优秀同事实际回邮）：' + it.caseGood);
        if (it.orders && it.orders.length) lines.push('      实际不达标订单：' + it.orders.join('、'));
        if (it.focus && it.focus.length) { var fstr = it.focus.map(function(f) { return f.label + '(' + f.count + '次)'; }).join('、'); lines.push('      ' + focusLabel + '：' + fstr); }
      }
    } else lines.push('  （无）');
    lines.push('');
  }
  return lines.join('\n');
}
function showGroupedAdviceModal(title, sections, focusLabel, bestLabel) {
  focusLabel = focusLabel || '重点关注';
  bestLabel = bestLabel || '表现最好的成员';
  var html = '<div style="line-height:1.7;">';
  for (var s = 0; s < sections.length; s++) {
    var sec = sections[s];
    html += '<div style="margin-bottom:18px;padding:12px 14px;background:#f7faff;border:1px solid #dbe5f7;border-radius:6px;">';
    html += '<div style="font-weight:700;color:#1746a2;font-size:13px;margin-bottom:10px;padding-bottom:6px;border-bottom:1px dashed #c7d6ef;">' + escHtml(sec.group) + '</div>';
    html += '<div style="font-weight:700;color:#166534;font-size:12px;margin:6px 0 6px;">✅ 做得好的维度</div>';
    if (sec.good && sec.good.length) {
      for (var g = 0; g < sec.good.length; g++) {
        var gd = sec.good[g];
        html += '<div style="margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #eef2f8;">';
        html += '<div style="font-weight:700;color:#1e4384;margin-bottom:3px;">' + (g + 1) + '. ' + escHtml(gd.name) + '：' + escHtml(gd.why) + '</div>';
        if (gd.caseGood) html += '<div style="background:#f0fdf4;padding:6px 9px;border-radius:4px;color:#166534;margin-top:4px;"><b style="color:#374151;">标杆回邮（实际）：</b>' + escHtml(gd.caseGood) + '</div>';
        if (gd.best) html += '<div style="background:#eff6ff;padding:6px 9px;border-radius:4px;color:#1d4ed8;margin-top:4px;"><b style="color:#374151;">' + escHtml(bestLabel) + '：</b>' + escHtml(gd.best.label) + '（平均分 ' + (gd.best.avg >= 0 ? gd.best.avg.toFixed(1) : '-') + '）</div>';
        if (gd.orders && gd.orders.length) { var gochips = []; for (var goi = 0; goi < gd.orders.length; goi++) gochips.push('<span style="color:#1d4ed8;cursor:pointer;text-decoration:underline;font-weight:600;" title="点击查看该订单质检明细" onclick="jumpToDetailByOrder(' + htmlAttrJsStr(gd.orders[goi]) + ')">' + escHtml(gd.orders[goi]) + '</span>'); html += '<div style="background:#eef4ff;padding:6px 9px;border-radius:4px;color:#1e4384;margin-top:4px;"><b style="color:#374151;">标杆订单（点击查看）：</b>' + gochips.join('、') + '</div>'; }
        html += '</div>';
      }
    } else { html += '<div style="color:#9ca3af;margin-bottom:8px;">（无）</div>'; }
    html += '<div style="font-weight:700;color:#9a3412;font-size:12px;margin:12px 0 6px;">⚠️ 需要改进的维度</div>';
    if (sec.improve && sec.improve.length) {
      for (var i = 0; i < sec.improve.length; i++) {
        var it = sec.improve[i];
        html += '<div style="margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #eef2f8;">';
        html += '<div style="font-weight:700;color:#1e4384;margin-bottom:3px;">' + (i + 1) + '. ' + escHtml(it.name) + '：' + escHtml(it.why) + '</div>';
        if (it.problem) html += '<div style="margin-bottom:3px;"><b style="color:#374151;">最突出问题：</b>' + escHtml(it.problem) + '</div>';
        html += '<div style="margin-bottom:3px;"><b style="color:#374151;">改进建议：</b>' + escHtml(it.suggestion || '（未生成改进建议，请结合判定依据与案例复核）') + '</div>';
        if (it.caseBad || it.caseBadBasis) { html += '<div style="background:#fef2f2;padding:6px 9px;border-radius:4px;color:#991b1b;margin-top:4px;"><b style="color:#374151;">问题案例（实际回邮）：</b>'; if (it.caseBadBasis) html += '<div style="font-size:12px;margin-bottom:3px;">判定依据：' + escHtml(displayText(it.caseBadBasis)) + '</div>'; if (it.caseBad) html += '<div>' + escHtml(displayText(it.caseBad)) + '</div>'; html += '</div>'; }
        if (it.optRewrite) html += '<div style="background:#eff6ff;padding:6px 9px;border-radius:4px;color:#1e40af;margin-top:4px;"><b style="color:#374151;">针对性优化方案（改写示例）：</b>' + escHtml(displayText(it.optRewrite)) + '</div>';
        if (it.caseGood) html += '<div style="background:#f0fdf4;padding:6px 9px;border-radius:4px;color:#166534;margin-top:4px;"><b style="color:#374151;">修改示例（优秀同事实际回邮）：</b>' + escHtml(it.caseGood) + '</div>';
        if (it.focus && it.focus.length) { var fps = []; for (var f = 0; f < it.focus.length; f++) fps.push(escHtml(it.focus[f].label) + '（' + it.focus[f].count + '次）'); html += '<div style="background:#fff7ed;padding:6px 9px;border-radius:4px;color:#9a3412;margin-top:4px;"><b style="color:#374151;">' + escHtml(focusLabel) + '：</b>' + fps.join('、') + '</div>'; }
        if (it.orders && it.orders.length) { var ochips = []; for (var oo = 0; oo < it.orders.length; oo++) ochips.push('<span style="color:#1d4ed8;cursor:pointer;text-decoration:underline;font-weight:600;" title="点击查看该订单质检明细" onclick="jumpToDetailByOrder(' + htmlAttrJsStr(it.orders[oo]) + ')">' + escHtml(it.orders[oo]) + '</span>'); html += '<div style="background:#eef4ff;padding:6px 9px;border-radius:4px;color:#1e4384;margin-top:4px;"><b style="color:#374151;">实际不达标订单（点击查看）：</b>' + ochips.join('、') + '</div>'; }
        html += '</div>';
      }
    } else { html += '<div style="color:#9ca3af;margin-bottom:8px;">（无）</div>'; }
    html += '</div>';
  }
  html += '</div>';
  html += '<div style="position:sticky;bottom:0;background:#fff;padding-top:12px;border-top:1px solid #e5e7eb;display:flex;gap:10px;justify-content:flex-end;">';
  html += '<button class="btn btn-outline" id="adviceCopyBtn" onclick="copyAdviceText(this)">复制全部建议</button>';
  html += '<button class="btn btn-primary" onclick="closeModal()">关闭</button></div>';
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modalBody').dataset.adviceText = buildGroupedAdviceText(sections, focusLabel, bestLabel);
  var ovG = document.getElementById('detailModal'); ovG.classList.remove('minimized'); ovG.classList.add('show');
}
// 「操作完整性」原因行：流程&操作完整性维度因三项登记字段（是否有退款登记 / 是否有问题反馈 / 是否有补件）
// 导致不达标时，在「问题邮件」行上方单列一行写明具体原因（漏退款 / 漏问题反馈 / 漏补发）。
var PROC_OP_REASON_MAP = { refundReg: '答应退款但是漏操作退款', issueFeedback: '漏掉问题反馈', replenishment: '答应补发但是漏补发' };
function processOpReasonText(check) {
  var c = check || {};
  var probe = String(c.key || '') + ' ' + String(c.label || '') + ' ' + String(c.action || '');
  if (/refundReg|退款/.test(probe)) return PROC_OP_REASON_MAP.refundReg;
  if (/issueFeedback|问题反馈|描述不符|listing|误导/.test(probe)) return PROC_OP_REASON_MAP.issueFeedback;
  if (/replenishment|补件|补发/.test(probe)) return PROC_OP_REASON_MAP.replenishment;
  return '漏操作' + (c.label || '对应登记项');
}
// 返回不达标的登记类原因（去重、按 退款登记 → 问题反馈 → 补件 顺序）
function getProcessOpReasons(det) {
  var d = det || {}, out = [], seen = {};
  var checks = d.sopChecks || [];
  for (var i = 0; i < checks.length; i++) {
    var c = checks[i];
    if (!c || !c.acted) continue;
    var failed = (c.consistent === false) || (c.consistent === undefined && c.wantYes !== false && !c.ok);
    if (!failed) continue;
    var k = c.key || c.label || ('#' + i);
    if (seen[k]) continue;
    seen[k] = 1;
    out.push(processOpReasonText(c));
  }
  if (!out.length && (d.issues || []).length) {
    // 兜底：老数据没有 sopChecks 时，按不达标内容里出现的登记列名反查
    var tx = d.issues.join('；');
    var pairs = [[/退款登记/, 'refundReg'], [/问题反馈/, 'issueFeedback'], [/补件/, 'replenishment']];
    for (var j = 0; j < pairs.length; j++) if (pairs[j][0].test(tx)) out.push(PROC_OP_REASON_MAP[pairs[j][1]]);
  }
  return out;
}
function getDimensionReasonModel(dim, detail, result) {
  var det = detail || {};
  var rawIssues = det.issues || [];
  var issues = rawIssues.filter(function(s) { return String(s).indexOf('申诉审核通过') < 0; });
  var extracted = extractAgentReplies(result && result.reply || '');
  // 证据优先取客服回邮；客服回邮缺失时回退到整封非亚马逊来信（平台禁忌等可能来自客户原文）
  // 用整段会话原文拆分邮件，才能保留「第N封」的真实序号与时间；函数内部会跳过亚马逊系统来信
  var evidenceSource = (result && result.reply) || extracted.agentText || extracted.nonAmazonText || '';
  var grade = det.grade || '-';
  var isFail = grade === '不达标', isExcellent = grade === '优秀';
  // 仅「流程&操作完整性」维度不达标、且成因是三项登记字段时，才输出「操作完整性」原因行
  var opLine = '';
  if (dim === '流程&操作完整性' && isFail) {
    var opReasons = getProcessOpReasons(det);
    if (opReasons.length) opLine = '原因：' + opReasons.join('；');
  }
  // 优秀/不达标：定位到具体是哪封（哪几封）邮件，并把邮件原文片段写进「实际回邮」
  // 已把亚马逊系统来信纳入正常质检的回单，证据定位时也要纳入，否则会显示「未定位到具体邮件」
  var includeAmazonEvidence = !!(result && result.amazonIncluded > 0);
  var evList = getEmailEvidenceList(evidenceSource, dim, issues, isFail ? 3 : (isExcellent ? 2 : 1), includeAmazonEvidence);
  var evidence = formatEvidenceWithRefs(evList.hits);
  var refText = evList.hits.length ? evList.hits.map(function(h) { return formatEmailRef(h.email); }).join('、') : '';
  var passReason = getDimensionPassReason(dim, det, result, evidence);
  var basis;
  if (isFail) {
    var failClause = getStandardClause(dim, '优秀') || getStandardClause(dim, '达标');
    var problemText = issues.length ? issues.join('；') : '本维度未满足对应质检标准';
    basis = '【问题邮件】' + (refText || '未定位到具体邮件');
    basis += '｜【具体不达标内容】' + problemText;
    if (failClause) basis += '｜【应达到的标准】' + failClause;
  } else if (isExcellent) {
    var goodClause = getStandardClause(dim, '优秀');
    basis = '【优秀依据邮件】' + (refText || '未定位到具体邮件');
    basis += '｜【优秀原因】' + passReason;
    if (goodClause) basis += '｜【符合标准】' + goodClause;
  } else {
    basis = issues.length ? issues.join('；') : passReason;
  }
  return { basis: basis, evidence: evidence, refText: refText, suggestion: getDimensionSuggestion(dim, issues, det.grade), optRewrite: getOptimizedRewrite(dim, result), passReason: passReason, opLine: opLine, grade: grade };
}
function renderDimensionReasonHtml(dim, detail, result, title) {
  var model = getDimensionReasonModel(dim, detail, result);
  var prefix = title || '自动打分理由（含回邮证据）';
  var isFail = model.grade === '不达标';
  var rewriteText = (model.optRewrite && model.optRewrite.trim()) ? model.optRewrite : model.suggestion;
  // 优秀维度已在上方的「优秀原因（符合标准）」中写明原因与依据，不再重复输出达标理由
  var thirdLine = isFail ? '<div class="reason-suggestion"><b>针对性优化方案（改写示例）：</b>“' + escHtml(rewriteText) + '”</div>' : (model.grade === '优秀' ? '' : '<div class="reason-pass"><b>达标理由：</b>' + escHtml(model.passReason) + '</div>');
  var opHtml = model.opLine ? '<div style="margin-bottom:3px;font-weight:600;color:#9a3412;">操作完整性：<span style="font-weight:400;">' + escHtml(model.opLine) + '</span></div>' : '';
  var basisLabel = isFail ? '问题原因（判定依据）：' : (model.grade === '优秀' ? '优秀原因（符合标准）：' : '符合标准：');
  var evidenceLabel = isFail ? '问题邮件（实际回邮）：' : (model.grade === '优秀' ? '优秀依据（实际回邮）：' : '实际回邮：');
  return '<div class="reason-block"><div class="reason-title">' + escHtml(prefix) + '</div>' + opHtml + '<div class="reason-basis"><b>' + basisLabel + '</b>' + escHtml(maskOrderNoForDisplay(model.basis)) + '</div><div class="reason-evidence"><b>' + evidenceLabel + '</b>' + escHtml(maskOrderNoForDisplay(model.evidence)) + '</div>' + thirdLine + '</div>';
}

// ===================== 多语种判分词库 =====================
// 回邮原文常为 德语/法语/西语/意语等（多数还附带中文译文）。若仅按英文关键词判分，
// 外语回邮会被误判为「无方案 / 无跟进 / 无同理心」。
// 注意：以下多语种词与英文原词保持【同等严格度】，不做放宽，避免判分失去区分度。
var ML_GREETING = /\b(?:Dear|Hello|Hi)\b|Thank you for|Thanks for|Greetings|Gentile|Caro\b|Egregio|Buongiorno|Buonasera|\bSalve\b|Sehr geehrte|Guten Tag|Hallo|Bonjour|Cher|Ch\u00e8re|Madame|Monsieur|Estimad|\bHola\b|尊敬的|亲爱的|您好|你好|感谢您的来信/i;
var ML_CLOSING = /Best regards|Sincerely|Regards|Best|Thank you|Thanks|Cheers|Kind regards|Cordiali saluti|Distinti saluti|Cordialit|\bSaluti\b|Mit freundlichen|Freundliche Gr\u00fc\u00dfe|Hochachtungsvoll|Cordialement|Bien \u00e0 vous|Sinc\u00e8res salutations|Atentamente|Saludos|Un saludo|此致|敬礼|祝好|顺祝|感谢|谢谢/i;
// 方案合理性：与英文 /refund|resend|...|offer/ 同层级
var ML_SOLUTION = /refund|resend|re-?ship|replacement|replace|cancel|return|discount|compensat|exchange|investigat|follow.?up|check|confirm|arrange|process|update|track|shipping|deliver|resolve|solution|offer|rimbors|sostituz|restituz|annull|risolv|verific|controll|aggiorn|spediz|consegn|inviar|invier|gestir|gestiam|soluzion|offri|provved|Erstattung|erstatten|R\u00fcckerstattung|R\u00fccksend|Umtausch|Austausch|stornier|L\u00f6sung|l\u00f6sen|\u00fcberpr\u00fcf|kontrollier|aktualisier|Versand|Lieferung|zustell|bearbeit|Ersatz|R\u00fcckzahlung|Angebot|rembours|remplac|renvoy|retour|annul|r\u00e9sol|resol|v\u00e9rifi|verifi|exp\u00e9di|livrais|envoi|traitement|reembols|devoluci|devolver|reemplaz|sustituci|resolv|comprob|actualiz|env[i\u00ed]o|env[i\u00ed]ar|entrega|soluci|ofrec|退款|退货|退换|换货|补发|重发|补寄|寄回|退回|取消|补偿|赔付|折扣|优惠|核实|检查|查询|确认|安排|处理|跟进|更新|物流|发货|寄出|配送|维修|更换|解决|方案|提供|参阅|参考|参照|图示|如图|按照|步骤|操作|教程|附上|退回地址|地址/i;
var ML_VAGUE = /please wait|just wait|be patient|cannot help|can'?t help|nothing we can do|not our fault|we can only|attendere|aspettare|pazienza|non possiamo|non \u00e8 colpa|warten Sie|Geduld|k\u00f6nnen nicht helfen|attendez|patientez|nous ne pouvons pas|espere|tenga paciencia|no podemos|继续等待|请您等待|请耐心等待|无法帮助|不能帮您|不是我们的问题|只能这样/i;
var ML_TIME = /within \d+ (?:hour|day|business)|\d+\s*(?:个)?(?:小时|天|工作日|自然日)|\d+\s*-?\s*\d*\s*(?:giorni|ore|settimane|mesi|Tage|Stunden|Wochen|jours|heures|semaines|d[i\u00ed]as|horas|semanas)/i;
// 流程跟进：与英文 /will check|will update|within N days/ 同层级
var ML_FOLLOWUP = /will (?:check|update|follow|contact|get back|inform|confirm)|we.*will.*you|aggiorner|contatteremo|la contatter|vi (?:informeremo|aggiorneremo|contatteremo)|provveder|si metter[\u00e0a]|invieremo|wir (?:werden|melden|informieren|kontaktieren)|werden Sie|nous vous (?:inform|contact|tiendr)|vous (?:contacter|inform|tiendr)|le (?:inform|contact|actualiz|enviar)|nos pondremos|volveremos a|我们会|将会|稍后|后续|进一步|及时(?:回复|通知|联系)|尽快(?:回复|处理|核实)|第一时间|会(?:在|于)|正在(?:等待|处理|核实|跟进)/i;
// 流程动作：与英文 /refund.*process|resend|.../ 同层级
var ML_ACTION = /refund.*process|process.*refund|full refund|partial refund|replacement.*order|resend|re-?ship|track.*number|tracking.*number|order.*cancel|cancel.*order|will.*(?:update|check|confirm)|follow.?up|create.*ticket|rimbors|sostituz|spediz|invier|provveder|gestir|Erstattung|R\u00fccksend|Umtausch|Versand|bearbeit|\u00fcberpr\u00fcf|in Bearbeitung|rembours|remplac|exp\u00e9di|traitement|v\u00e9rifi|reembols|devoluci|reemplaz|env[i\u00ed]o|退款|补发|退货|换货|取消|核实|检查|查询|跟进|安排|处理|更新|物流|发货|配送|维修|更换/i;
// 同理心：与英文 /sorry|apologi|understand|regret|sympath/ 同层级
var ML_EMPATHY = /sorry|apologi|understand|regret|sympath|frustrat|inconvenienc|mi dispiace|ci scusiamo|scusar|siamo spiacenti|comprend|capisco|spiacevol|Es tut uns leid|entschuldig|Verst\u00e4ndnis|verstehen|bedauer|d\u00e9sol\u00e9|nous nous excusons|excuser|compren|regrett|lamentamos|disculp|sentimos|comprend|抱歉|致歉|见谅|谅解|理解|不便|体谅|不好意思|遗憾/i;
// 个性化称呼：与英文 /Dear [A-Z]/ 同层级（标题词后需接具体人名，泛称不算）
// 注意：本正则区分大小写（不能加 /i，否则 [A-Z] 会退化成任意字母）
var ML_PERSONAL = /(?:Dear|Hi|Hello|Gentile|Caro|Egregio|Sehr geehrte|Cher|Ch\u00e8re|Estimad[oa])\s+[A-Z\u00c0-\u00d6\u00d8-\u00de]|(?:尊敬的|亲爱的)[^\s，。！？,]{1,6}?(?:先生|女士|小姐)/;
// 主动服务收尾：与英文 /anything else|feel free|please contact/ 同层级
var ML_CONTACT = /anything else|any other|feel free|let us know|don.?t hesitate|please contact|non esiti|a (?:sua|vostra) disposizione|la preghiamo di contattarci|ci contatti|per qualsiasi|z\u00f6gern Sie nicht|melden Sie sich|bei Fragen|n'h\u00e9sitez pas|contactez-nous|pour toute|no dude|cont\u00e1ctenos|para cualquier|如有(?:任何|其他)问题|随时(?:联系|与我们)|请随时|随时联系|联系我们|如需(?:帮助|协助)|欢迎联系|不吝|尽管(?:联系|告知)/i;
// 方案类主动意识：与英文 /proactiv|prevent|avoid|risk|warn|remind|suggest|recommend|alternativ/ 同层级
var ML_PROACTIVE = /proactiv|prevent|avoid|risk|warn|remind|suggest|recommend|alternativ|prevenire|evitare|rischio|consigli|sugger|vermeid|Risiko|empfehl|pr\u00e9ven|risque|conseill|sugg\u00e9r|evit|preven|riesgo|recomend|aconsej|预防|避免|风险|提醒|建议|推荐|备选|替代/i;
// 等待客户确认：与英文 /please confirm|let us know if/ 同层级
var ML_WAIT_CONFIRM = /would (?:that|this) be (?:acceptable|okay|ok)|would you (?:accept|be okay with)|do you accept|is that (?:acceptable|okay|ok)|please confirm|let us know (?:if|whether)|await(?:ing)? your (?:reply|confirmation)|once you confirm|after you confirm|when you confirm|your confirmation|pu[\u00f2o] attendere|potrebbe (?:confermare|accettare)|confermi|accettare|le va bene|invitiamo a provare|K\u00f6nnen Sie|w\u00e4re das|akzeptieren|best\u00e4tigen|pouvez-vous|accepter|confirmer|cela vous convient|puede (?:confirmar|aceptar)|acepta|confirmar|是否可以|能否(?:接受|确认)|请您确认|您能否|是否接受|可以接受吗|麻烦(?:您)?确认|请您尝试|请您(?:核实|提供|确认|尝试)/i;
// 礼貌用语（服务态度，逐项对齐英文原列表的粒度）
var ML_POLITE = [/Gentile|Sehr geehrte|Bonjour|Estimad|尊敬的/i, /bitte|s'il vous pla\u00eet|per favore|por favor|请/i, /grazie|danke|merci|gracias|感谢|谢谢/i, /mi dispiace|scusiamo|Es tut uns leid|entschuldig|d\u00e9sol\u00e9|excusons|lamentamos|disculp|抱歉|致歉/i, /Cordiali saluti|Mit freundlichen|Cordialement|Atentamente|此致|敬礼/i];

function checkLanguage(text, customerText) {
  var issues = [];
  var score = getStandardScore('语言语法表达', '达标');
  if (text.length < 30) { issues.push('回复内容过于简单，可能只用几个单词回复'); return { score: 0, grade: '不达标', issues: issues }; }
  var hasGreeting = ML_GREETING.test(text);
  var hasClosing = ML_CLOSING.test(text);
  if (!hasGreeting) issues.push('缺少礼貌问候语');
  if (!hasClosing) issues.push('缺少结尾礼貌语');
  var spellingErrors = 0;
  var patterns = [/\brecieve\b/i, /\boccured\b/i, /\bseperate\b/i, /\bdefinately\b/i, /\bteh\b/i, /\badn\b/i, /\bthier\b/i, /\bfreind\b/i, /\bwich\b/i, /\bdont\b/i, /\bcant\b/i, /\bdoesnt\b/i, /\bim\b/i, /\bive\b/i, /\bcouldnt\b/i, /\bwouldnt\b/i, /\bshouldnt\b/i, /\bisnt\b/i, /\barent\b/i, /\bwasnt\b/i, /\bwerent\b/i];
  for (var i = 0; i < patterns.length; i++) if (patterns[i].test(text)) spellingErrors++;
  if (spellingErrors >= 3) { issues.push('拼写错误达3次及以上'); return { score: 0, grade: '不达标', issues: issues }; }
  else if (spellingErrors > 0) issues.push('存在' + spellingErrors + '处拼写错误');
  if (customerText) {
    var isGerman = /[\u00e4\u00f6\u00fc\u00df]/i.test(customerText) || /\b(der|die|das|und|nicht|ist|mit|f\u00fcr|auf|ein|eine)\b/i.test(customerText);
    var isFrench = /[\u00e0\u00e2\u00e7\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00fb\u00f9\u00fc]/i.test(customerText) || /\b(le|la|les|et|pas|est|avec|pour|sur|une?|des)\b/i.test(customerText);
    var isSpanish = /[\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa]/i.test(customerText) || /\b(el|la|los|las|y|no|es|con|para|en|una?|unos?)\b/i.test(customerText);
    var isItalian = /\b(il|lo|la|gli|che|non|per|con|una|uno|sono|come|questo|questa|problema|grazie|gentile)\b/i.test(customerText);
    if (isGerman || isFrench || isSpanish || isItalian) {
      var hasNonEnglish = /[\u00e4\u00f6\u00fc\u00df\u00e0\u00e2\u00e7\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00fb\u00f9\u00fc\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00ec\u00f2\u00f9]/i.test(text) || /[\u4e00-\u9fa5]/.test(text);
      if (!hasNonEnglish && text.length > 50) {
        if (!/translat|language|\u8bed\u79cd/i.test(text)) issues.push('客户使用非英语咨询，回复可能未对应语种');
      }
    }
  }
  if (issues.length >= 3) return { score: 0, grade: '不达标', issues: issues };
  return { score: score, grade: '达标', issues: issues };
}

function checkSolution(text, customerText) {
  var issues = [];
  var hasSol = ML_SOLUTION.test(text);
  var hasVague = ML_VAGUE.test(text);
  var hasProactive = ML_PROACTIVE.test(text);
  var hasEmpathy = ML_EMPATHY.test(text);
  var SOL = QC_SCORE.solution;
  if (!hasSol && hasVague) { issues.push('回复缺乏具体方案，存在模糊推诿表述'); return { score: SOL.fail, grade: '不达标', issues: issues }; }
  if (!hasSol) { issues.push('回复未包含明确的解决方案'); return { score: SOL.fail, grade: '不达标', issues: issues }; }
  if (hasSol && hasProactive && hasEmpathy) return { score: SOL.excellent, grade: '优秀', issues: [] };
  if (hasSol && (hasProactive || hasEmpathy)) return { score: SOL.passOne, grade: '达标', issues: issues };
  return { score: SOL.passNone, grade: '达标', issues: issues };
}

function isWaitingForCustomerReply(text) {
  var t = String(text || '');
  return ML_WAIT_CONFIRM.test(t);
}

// ===================== 流程&操作完整性：回邮数据 × 登记字段 交叉校验 =====================
// 规则（质检标准「流程&操作完整性」，2026-10-14 增补）：
//   达标  ——① 回邮显示「客服答应并已办理退款」→「是否有退款登记」须为「是」；
//            ② 回邮显示「客服承认描述不符/listing误导」→「是否有问题反馈」须为「是」；
//            ③ 回邮显示「客服回复顾客已操作补发」→「是否有补件」须为「是」；
//            ④ 让顾客等待后，须再次发送邮件（确认退款除外），无遗漏。
//   不达标——“回邮已发生该动作，但对应登记列为空白/否”，或“让顾客等待后没有后续邮件”。
var PROC_REFUND_DONE = /(?:have|has|we|i)\s+(?:already\s+)?(?:processed|issued|initiated|made|completed|arranged|submitted)\b[^.!?\n]{0,40}?(?:refund|reimburs)|(?:refund|reimburs\w*)\s+(?:has\s+been|was|is|will\s+be)\s+(?:processed|issued|initiated|completed|made|credited|refunded)|we\s+(?:have\s+)?(?:refunded|reimbursed)\b|已(?:为您|您|客户|买家|他|她)?\s*(?:办理|处理|完成|发起|提交|操作|申请|安排)(?:了)?[^。；;!?\n]{0,8}退款|退款(?:已|已经)[^。；;!?\n]{0,6}(?:办理|处理|完成|发起|提交|退回|到账|受理)|已退款|已(?:为您|您)退款|rimbors(?:ato|eremo|iamo|er\u00e0)|abbiamo\s+(?:provveduto|effettuato|emesso|elaborato)[^.!?\n]{0,40}rimbors|(?:R\u00fcckerstattung|Erstattung)[^.!?\n]{0,40}(?:veranlasst|bearbeitet|vorgenommen|ausgestellt|ausgel\u00f6st|eingeleitet)|haben\s+(?:Ihnen\s+)?[^.!?\n]{0,40}(?:zur\u00fcckerstattet|zur\u00fcckgezahlt)|remboursement[^.!?\n]{0,30}(?:trait\u00e9|effectu\u00e9|\u00e9mis)|nous\s+vous\s+avons\s+rembours|nous\s+avons\s+(?:proc\u00e9d\u00e9|effectu\u00e9|\u00e9mis)[^.!?\n]{0,40}rembours|hemos\s+(?:procesado|realizado|emitido|efectuado|reembolsado)[^.!?\n]{0,40}reembols|reembolso[^.!?\n]{0,30}(?:procesado|realizado|emitido)|(?:we|i)\s*(?:'ll|will|can|would|are\s+going\s+to|am\s+going\s+to|are\s+happy\s+to|am\s+happy\s+to|are\s+able\s+to)\s*(?:be\s+able\s+to\s+)?(?:process|issue|initiate|make|arrange|submit|provide|give|offer|send|complete|do)?\s*(?:you\s+)?(?:a\s+|the\s+|your\s+)?(?:full\s+|partial\s+|complete\s+)?(?:refund|reimburs\w*|money\s+back)|(?:refund|reimburs\w*)\s+(?:will|can|would|should|is\s+going\s+to)\s+be\s+(?:processed|issued|made|arranged|credited|given|provided)|(?:please\s+)?(?:allow\s+us\s+to\s+)?(?:proceed\s+with|arrange)\s+(?:the\s+|a\s+)?(?:refund|reimburs\w*)|(?:provvederemo|procederemo|effettueremo|emetteremo|organizzeremo|rimborseremo|possiamo|possiamo\s+procedere|ci\s+occuperemo)\b[^.!?\n]{0,40}(?:rimbors|sostituz)|(?:rimborso|rimbors\w*)[^.!?\n]{0,30}(?:sar\u00e0|verr\u00e0|sarebbe|possiamo|provvederemo)|(?:wir\s+)?(?:werden|k\u00f6nnen|k\u00f6nnten|m\u00f6chten)\b[^.!?\n]{0,40}(?:erstatten|zur\u00fcckerstatten|zur\u00fcckzahlen|R\u00fcckerstattung|Erstattung)|(?:Erstattung|R\u00fcckerstattung)[^.!?\n]{0,30}(?:veranlassen|vornehmen|erfolgen|veranlasst)|(?:nous\s+)?(?:allons|pouvons|pourrons|proc\u00e9derons|effectuerons|vous\s+rembourserons)\b[^.!?\n]{0,40}rembours|remboursement[^.!?\n]{0,30}(?:sera|peut|effectu\u00e9)|(?:le|te|nos|se\s+le)?\s*(?:reembolsaremos|procederemos|realizaremos|efectuaremos|podemos|vamos\s+a)\b[^.!?\n]{0,40}reembols|reembolso[^.!?\n]{0,30}(?:ser\u00e1|se\s+realizar\u00e1|se\s+procesar\u00e1|puede)|(?:我们|我|客服|这边|平台)[^。；;!?\n]{0,6}?(?:会|将|马上|立刻|尽快|可以|可以为您|愿意|同意|答应|承诺|决定)[^。；;!?\n]{0,10}?(?:退款|退回货款|退货退款|退钱)|(?:为您|给您|为你|给你|提供|办理|安排|退还|发起|作出|执行)[^。；;!?\n]{0,10}?(?:退款|退回货款|退货退款)|(?:退款|退回货款|退回款项)[^。；;!?\n]{0,4}(?:将|会|正在|已经)[^。；;!?\n]{0,6}(?:到账|退回|入账|处理|完成|退还|发起|受理)/i;
var PROC_DESC_ADMITTED = /not\s+as\s+described|does\s+not\s+(?:match|correspond\s+to)\s+the\s+(?:description|listing)|(?:listing|description|item|product)\s+(?:was|is|were)\s+(?:misleading|inaccurate|incorrect|wrong|not\s+accurate)|misleading\s+(?:description|listing)|(?:we|i)\s+(?:admit|acknowledge|confirm|apologi[sz]e)[^.!?\n]{0,60}(?:not\s+as\s+described|misleading|inaccurate\s+(?:description|listing))|描述不符|与(?:商品|产品|实物)?描述(?:存在)?(?:不符|不一致|有差异|差异|差别|偏差|出入)|(?:商品|产品|页面|listing)描述(?:有误|错误|不准确|不准|不符)|listing(?:信息)?(?:有误|错误|误导|不准确|不符)|误导(?:性)?(?:描述|信息|listing)|non\s+conforme\s+alla\s+descrizione|descrizione[^.!?\n]{0,25}(?:non\s+corrett|errata|inesatta|fuorviante)|annuncio\s+(?:fuorviante|errato|inesatto)|nicht\s+wie\s+beschrieben|nicht\s+der\s+Beschreibung|(?:Artikel)?beschreibung[^.!?\n]{0,25}(?:falsch|irref\u00fchrend|ungenau|abweichend)|non\s+conforme\s+\u00e0\s+la\s+description|description[^.!?\n]{0,25}(?:incorrecte|trompeuse|inexacte)|annonce\s+trompeuse|no\s+coincide\s+con\s+la\s+descripci|no\s+es\s+como\s+se\s+describe|descripci[^.!?\n]{0,25}(?:incorrecta|enga\u00f1osa|inexacta)|anuncio\s+enga\u00f1oso|页面误导|listing问题|listing\s*(?:issue|problem|error)|(?:page|listing|product\s+page)\s+(?:was\s+|is\s+)?misleading|(?:the\s+)?listing[^.!?\n]{0,30}(?:wrong|incorrect|misleading|inaccurate|not\s+accurate)|pagina[^.!?\n]{0,25}(?:fuorviante|errata|inesatta)|(?:Seite|Produktseite)[^.!?\n]{0,25}(?:irref\u00fchrend|falsch|ungenau)|page[^.!?\n]{0,25}(?:trompeuse|inexacte|erron\u00e9e)|p\u00e1gina[^.!?\n]{0,25}(?:enga\u00f1osa|incorrecta|inexacta)/i;
var PROC_REPLACEMENT_DONE = /(?:have|has|we|i)\s+(?:already\s+)?(?:arranged|shipped|sent|processed|dispatched|issued|prepared)\s+(?:you\s+)?(?:a\s+|the\s+|your\s+)?(?:replacement|reshipment|new\s+(?:one|item|unit|product))|replacement\s+(?:has\s+been|was|is|will\s+be)\s+(?:shipped|sent|arranged|dispatched|processed)|已(?:为您|您|客户|买家)?\s*(?:安排|办理|完成|操作|提交|准备)(?:了)?[^。；;!?\n]{0,8}补发|已(?:为您|您)?补发|补(?:发|寄)[^。；;!?\n]{0,8}(?:已|已经)[^。；;!?\n]{0,8}(?:安排|发出|寄出|办理|提交|发货|完成)|已重新(?:发货|寄出)|已寄出[^。；;!?\n]{0,8}(?:替换|全新|新的)(?:件|产品|商品|部件|配件)|abbiamo\s+(?:provveduto|organizzato|spedito|inviato)[^.!?\n]{0,40}(?:sostituzione|ricambio)|sostituzione[^.!?\n]{0,30}(?:spedita|inviata|organizzata)|haben[^.!?\n]{0,40}Ersatz[^.!?\n]{0,30}(?:versandt|geschickt)|Ersatz[^.!?\n]{0,30}(?:versandt|geschickt|veranlasst)|nous\s+avons\s+(?:envoy\u00e9|exp\u00e9di\u00e9|organis\u00e9|pr\u00e9vu)[^.!?\n]{0,40}(?:remplacement|nouvel\s+article)|remplacement[^.!?\n]{0,30}(?:envoy\u00e9|exp\u00e9di)|hemos\s+(?:enviado|organizado|programado)[^.!?\n]{0,40}(?:reemplazo|sustituto)|reemplazo[^.!?\n]{0,30}(?:enviado|organizado)/i;
// 「顾客反馈的问题」（2026-10-16）：顾客/买家在回邮中反馈产品存在质量问题、收到产品不同相关内容、描述不符且确认是商家描述问题
var PROC_CUSTOMER_ISSUE = /质量问题|有质量(?:问题|瑕疵|缺陷)|存在缺陷|有缺陷|瑕疵|损坏|破损|坏了|坏掉|有故障|不能用了?|无法使用|没法用|不能正常使用|收(?:到|货)的(?:东西|产品|商品|货物|货)不(?:对|一样|同)|不是(?:我|我们)想要的|发错(?:了)?(?:货|产品|商品)|与(?:商品|产品|实物|商品页面|页面|描述)不符|描述不符|货不对板|\brotto\b|non\s+conforme\s+alla\s+descrizione|non\s+corrisponde\s+alla\s+descrizione|prodotto\s+(?:sbagliat|diverso|errato)|difettos|\bdanneggiat|\bguasto\b|non\s+funziona|Artikel[^.!?\n]{0,20}(?:defekt|beschädigt|kaputt|falsch)|falsch(?:e|er|es)?\s+(?:Artikel|Produkt|Lieferung)|nicht\s+(?:wie\s+beschrieben|der\s+Beschreibung)|defectuos|dañad|averiad|no\s+(?:es\s+como\s+se\s+describe|coincide\s+con\s+la\s+descripci)|producto\s+(?:diferente|equivocado|incorrecto|defectuoso)|no\s+es\s+lo\s+que\s+pedi/i;
// 「亚马逊 A-to-z 索赔」表述（2026-10-16）：不达标②中「邮件包含“AZ”字样」的豁免依据（只认 A-to-z 索赔类表述，不认普通 Amazon 字样）
var PROC_AZ_CLAIM = /a[\s\-–]?to[\s\-–]?z|a2z|亚马逊\s*(?:索赔|A-?to-?z|A到Z|A至Z)|AZ\s*(?:索赔|claim|case|garanzia|reclamo|richiesta|solicitud|reclamaci|antrag|réclamation|dossier)|A到Z|A至Z/i;
// 「顾客反馈问题」条目的排除护栏（2026-10-16）：条件/假设句、否定句、以及「顾客自己买错」都不算顾客反馈质量问题
//   对应不达标②原文「描述不符并已确认是我们描述不符，而不是顾客自己买错」
var PROC_ISSUE_GUARD = /如(?:确|为|是|属|果|若|需|遇|出现)|倘若|万一|要是|以免|否则|以防|防止|没有(?:任何)?(?:破损|损坏|瑕疵|缺陷|质量问题|受损)|无(?:破损|损坏|瑕疵|缺陷)|未(?:发现|出现|见到?|收到)(?:任何)?(?:破损|损坏|瑕疵|缺陷|质量问题)|不存在(?:质量)?问题|买错|下错(?:单|订单)|ordinato\s+(?:il\s+|un\s+)?(?:prodotto|articolo)\s+sbagliato|ordered\s+the\s+wrong|\bpossa\b|\bpotrebbe\b|\bkönnte|\bpodría\b|\bpourrait\b/i;
// 「让顾客等待」：客服承诺时限后请客户等待（不含“等待买家确认”这类球在买家的情形）
var PROC_WAIT_CUSTOMER = /(?:please|kindly)\s+(?:wait|allow\s+us|bear\s+with\s+us|give\s+us)|(?:wait|allow)\s+(?:for\s+)?\d+\s*(?:[-~]\s*\d+\s*)?(?:business\s+)?(?:days?|hours?|weeks?)|give\s+us\s+\d+|attendere\s+(?:\d|qualche|alcuni|due|tre|un)|aspettare\s+\d|la\s+preghiamo\s+di\s+attendere|pazientare|warten\s+Sie\s+\d|bitte\s+(?:warten|Geduld)|haben\s+Sie\s+(?:bitte\s+)?Geduld|in\s+\d+\s*(?:Tagen|Stunden|Wochen)|patienter\s+\d|patientez\s+\d|veuillez\s+patienter|espere\s+\d|por\s+favor\s+espere|tenga\s+paciencia|en\s+\d+\s*(?:d[i\u00ed]as|horas|semanas)|请(?:您)?耐心等待|请(?:您)?等待|请(?:您)?稍等|稍等\s*\d|等待\s*\d+\s*(?:个)?(?:天|日|小时|工作日|周)|等待(?:我们|几天)|请给我们\s*\d|耐心等(?:待|一下)/i;
// 「等待事项是否为退款」——用于「确认退款除外」的豁免判断
var PROC_REFUND_MENTION = /refund|reimburs|退款|退回货款|rimbors|Erstattung|erstatt|R\u00fcckzahl|Gutschrift|rembours|reembols/i;

function regValueOf(ctx, key) {
  if (!ctx) return '';
  var v = ctx[key];
  return String(v == null ? '' : v).trim();
}
function isRegYes(v) {
  // 2026-11-19：登记列实际取值如「有申请退款 / 有问题反馈」也算肯定；「无退款记录 / 无问题反馈记录」算否定
  var s = String(v == null ? '' : v).trim();
  if (!s) return false;
  if (/^(?:是|有|yes|y|true|1)$/i.test(s)) return true;
  if (/^(?:无|没|不|非|未)/.test(s)) return false;
  if (/^有/.test(s)) return true;
  if (s.indexOf('申请退款') >= 0 || s.indexOf('问题反馈') >= 0 || s.indexOf('补件') >= 0 || s.indexOf('补发') >= 0) return true;
  return /^是/.test(s);
}
function isRegNo(v) {
  var s = String(v == null ? '' : v).trim();
  if (!s) return false;
  if (/^(?:否|无|没有|no|n|false|0)$/i.test(s)) return true;
  return /^(?:无|没|不|非|未)/.test(s);
}

/* ==================== 流程&操作完整性：核查明细「标准驱动」====================
   质检标准「流程&操作完整性」板块里的「核查明细」文本就是判分规则的唯一来源：
     · 条款模板：在回邮数据中，<动作描述>，在<登记列名>中，显示“是”
     · 页面改完条款点「保存并应用标准」→ saveStandard() 立即全量重跑明细，这里的解析结果同步生效
     · 删掉某一条 → 该条交叉校验随之取消；把「显示“是”」改成「显示“否”」→ 期望值反向
     · 动作描述里出现未登记的概念词时，自动降级为「条款实义词命中」兜底
   ============================================================================ */
var PROC_FIELD_ALIASES = [
  { key: 'refundReg', test: /退款登记|退款/ },
  { key: 'issueFeedback', test: /问题反馈|反馈/ },
  { key: 'replenishment', test: /补件|补发|补寄/ },
  { key: 'processCheck', test: /检查流程|流程操作/ }
];
var PROC_FIELD_LABEL = {
  refundReg: '是否有退款登记', issueFeedback: '是否有问题反馈',
  replenishment: '是否有补件', processCheck: '是否需要检查流程操作'
};
// 动作描述 → 多语种回邮正则 的概念词表（新增概念时在此登记，标准条款即可直接引用）
var PROC_CONCEPT_LEXICON = [
  { id: 'refundDone', test: /退款|退回货款|退钱|refund|reimburs/i, action: '客服答应顾客退款并办理了退款/答应顾客尽快退款/答应顾客已退款', re: PROC_REFUND_DONE },
  { id: 'descAdmitted', test: /描述不符|描述(?:有误|错误|不一致|不准确|不准|偏差|出入)|listing|误导|与(?:商品|产品|实物)描述/i, action: '客服承认“描述不符”/“页面误导”/“listing问题”', re: PROC_DESC_ADMITTED },
  { id: 'replacementDone', test: /补发|补寄|重新发(?:货|出|件)|换新|替换|补件|reship|replacement|new (?:one|item|unit)/i, action: '客服回复顾客已操作补发', re: PROC_REPLACEMENT_DONE },
  { id: 'customerIssue', test: /顾客反馈|客户反馈|买家反馈|顾客(?:表示|反映|反馈|称|说)|产品存在质量问题|收到产品不同|描述不符并已确认/, action: '顾客反馈“产品存在质量问题”/“收到产品不同相关内容”/“描述不符并已确认是我们描述不符，而不是顾客自己买错”', re: PROC_CUSTOMER_ISSUE },

];
var PROC_STOP_WORDS = /^(?:在|回邮|数据|客服|顾客|客户|买家|卖家|显示|是否|登记|中|里|的|了|并|且|我们|您|他|她|已经|已|须|需|要|为|是|否|有|无|空白|或者|和|与|及|出现|回复|说明|表示|内容|情况|要求|标准|则|即|如|若|该|此|第|一条|二条|三条|四条|承诺|动作|办理)$/;
function procGenericTokens(actionText) {
  var t = String(actionText || '');
  t = t.replace(/在\s*回邮数据(?:中|里)?/g, ' ').replace(/(?:客服|卖家|我们|顾客|客户|买家|已经|已|表示|回复|说明|出现|是否|登记)/g, ' ');
  var runs = t.split(/[^0-9A-Za-z\u4e00-\u9fa5]+/);
  var toks = [];
  for (var i = 0; i < runs.length; i++) {
    var r = runs[i];
    if (!r) continue;
    if (/^[0-9A-Za-z]+$/.test(r)) { if (r.length >= 3 && toks.indexOf(r) < 0) toks.push(r); continue; }
    if (r.length < 2) continue;
    for (var j = 0; j + 2 <= r.length; j++) {
      var bg = r.substr(j, 2);
      if (/^(?:的|了|在|是|中|里|和|与|及|或者|或|并|且|为|向|给|已)/.test(bg)) continue;
      if (toks.indexOf(bg) < 0) toks.push(bg);
    }
  }
  return toks;
}
// 条款兜底命中：中文二元组/英文词 命中 >=2 个（只有 1 个词时命中即算）
function matchProcGeneric(tokens, text) {
  if (!tokens || !tokens.length) return false;
  var t = String(text || '').toLowerCase();
  var hits = 0;
  for (var i = 0; i < tokens.length; i++) if (t.indexOf(String(tokens[i]).toLowerCase()) >= 0) hits++;
  return hits >= (tokens.length >= 2 ? 2 : 1);
}
function buildProcActionRegex(actionText) {
  var txt = String(actionText || '');
  var hits = [];
  for (var i = 0; i < PROC_CONCEPT_LEXICON.length; i++) if (PROC_CONCEPT_LEXICON[i].test.test(txt)) hits.push(PROC_CONCEPT_LEXICON[i]);
  if (hits.length) {
    var srcs = [], names = [], parts = [];
    for (var j = 0; j < hits.length; j++) {
      srcs.push('(?:' + String(hits[j].re.source) + ')');
      names.push(hits[j].action);
      // 2026-10-16：条目级识别范围 —— 「顾客反馈」类条目在整段回邮（含顾客来信）中识别，并加排除护栏（条件/否定/顾客自己买错）
      var _isCust = (hits[j].id === 'customerIssue');
      parts.push({ re: hits[j].re, scope: _isCust ? 'customer' : 'agent', guard: _isCust ? PROC_ISSUE_GUARD : null, action: hits[j].action });
    }
    try { return { re: new RegExp(srcs.join('|'), 'i'), concepts: names, parts: parts }; } catch (e) {}
  }

  var toks = procGenericTokens(txt);
  if (!toks.length) return null;
  var esc = [];
  for (var q = 0; q < toks.length; q++) esc.push(toks[q].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  var re = null;
  try { re = new RegExp('(?:' + esc.join('|') + ')', 'i'); } catch (e) { re = null; }
  return { re: re, concepts: [String(txt)], generic: true, tokens: toks };
}
function defaultProcessCrossChecks() {
  // 2026-10-16：与「流程&操作完整性」最新核查明细对齐 —— 去掉补件条；
  // 问题反馈条拆两部分：「客服承认描述不符/页面误导/listing问题」只看客服回邮；「顾客反馈质量问题/收到产品不同/描述不符」看整段回邮（含顾客来信）
  var refundBuilt = buildProcActionRegex('客服答应顾客退款并办理了退款/答应顾客尽快退款/答应顾客已退款');
  var issueBuilt = buildProcActionRegex('客服承认“描述不符”/“页面误导”/“listing问题”；或者顾客反馈“产品存在质量问题”/“收到产品不同相关内容”/“描述不符并已确认是我们描述不符，而不是顾客自己买错”');
  return [
    { key: 'refundReg', label: '是否有退款登记', action: '客服答应顾客退款并办理了退款/答应顾客尽快退款/答应顾客已退款', expectYes: true, re: (refundBuilt && refundBuilt.re) ? refundBuilt.re : PROC_REFUND_DONE, parts: (refundBuilt && refundBuilt.parts) ? refundBuilt.parts : null, scope: 'agent' },
    { key: 'issueFeedback', label: '是否有问题反馈', action: '客服承认“描述不符”/“页面误导”/“listing问题”；或者顾客反馈“产品存在质量问题”/“收到产品不同相关内容”/“描述不符并已确认是我们描述不符，而不是顾客自己买错”', expectYes: true, re: (issueBuilt && issueBuilt.re) ? issueBuilt.re : PROC_DESC_ADMITTED, parts: (issueBuilt && issueBuilt.parts) ? issueBuilt.parts : null, scope: 'customer', guard: PROC_ISSUE_GUARD }
  ];
}
// 解析「流程&操作完整性」核查明细 → {crossChecks, followUp, sourceText, parsedFromStandard}
function parseProcessRules() {
  var dim = '流程&操作完整性';
  var item = null;
  for (var i = 0; i < STANDARDS.length && !item; i++)
    for (var j = 0; j < STANDARDS[i].items.length; j++) if (STANDARDS[i].items[j].name === dim) { item = STANDARDS[i].items[j]; break; }
  var text = '';
  if (item && item.levels) for (var l = 0; l < item.levels.length; l++) text += '\n' + (item.levels[l].detail || '');
  var crossChecks = [], seen = {};
  if (text) {
    // 2026-10-16：动作描述里允许出现「；、，」（如「客服承认X；或者顾客反馈Y」），且「在<列名>中」前的逗号允许省略
    var re = /在\s*回邮数据(?:中|里)?\s*[，,、:：]?\s*([^。\n]{2,160}?)\s*(?:[，,、]\s*(?:但|但是|并且|且|而)?\s*)?在\s*([^，,、。；;:\n]{2,24}?)\s*(?:中|里)\s*(?:[，,、]?\s*(?:显示|为|填|回应|回答)\s*)?[“"']?\s*([^”"’，,、。；;\n]{0,10})/g;

    var m;
    while ((m = re.exec(text)) !== null) {
      var clauseText = String(m[1] || '').replace(/^出现/, '').trim();
      var action = clauseText.replace(/^(?:客服|卖家|我们)/, '').trim();
      var label = String(m[2] || '').trim();
      var expect = String(m[3] || '').trim();
      if (!action || !label) continue;
      var key = '';
      for (var a = 0; a < PROC_FIELD_ALIASES.length; a++) if (PROC_FIELD_ALIASES[a].test.test(label)) { key = PROC_FIELD_ALIASES[a].key; break; }
      if (!key || seen[key]) continue;
      var built = buildProcActionRegex(action);
      if (!built || (!built.re && !(built.tokens && built.tokens.length))) continue;
      seen[key] = 1;
      // scope：条款里出现「顾客/客户/买家 + 反馈类动词」→ 该条规则在整段回邮（含顾客来信）中识别
      var _ruleScope = /(?:顾客|客户|买家)\s*(?:反馈|表示|反映|称|说)/.test(clauseText) ? 'customer' : 'agent';
      // guard：顾客反馈类条目加排除护栏（条件/假设句、否定句、「顾客自己买错」不算）
      var _ruleGuard = /(?:顾客|客户|买家)\s*(?:反馈|表示|反映|称|说)/.test(clauseText) ? PROC_ISSUE_GUARD : null;
      crossChecks.push({ key: key, label: PROC_FIELD_LABEL[key] || label, action: clauseText ? (/^(?:客服|卖家|我们)/.test(clauseText) ? clauseText : '客服' + clauseText) : (built.concepts[0] || action), expectYes: !isRegNo(expect || '是') && !/^(?:不)/.test(expect), re: built.re, parts: built.parts || null, generic: !!built.generic, tokens: built.tokens || [], scope: _ruleScope, guard: _ruleGuard });

    }
  }
  var parsed = crossChecks.length > 0;
  // 有「回邮数据」字样却解析不出条款 → 回退内置默认，避免整块规则静默失效
  if (!parsed && item && /回邮数据/.test(text)) { crossChecks = defaultProcessCrossChecks(); }
  var followUp = {
    enabled: /再次发送|再次发一封|跟进|让顾客等待|让客户等待/.test(text),
    exemptRefund: /确认退款除外|退款除外/.test(text)
  };
  if (!item) followUp = { enabled: true, exemptRefund: true };
  // 「但相同情况下，邮件中包含“AZ”字样时，是否有退款登记中，可以显示“是”或者空白」（亚马逊 A-to-z 索赔豁免，2026-10-16）
  var azRefundExempt = /邮件中(?:包含|出现)[^。\n]{0,12}?AZ[^。\n]{0,8}?字样/.test(text);
  return { crossChecks: crossChecks, followUp: followUp, sourceText: text, parsedFromStandard: parsed || !!item, azRefundExempt: azRefundExempt };

}
var PROC_RULE_CACHE = { key: '', rules: null };
function getProcessRules() {
  var key = '';
  try { key = JSON.stringify(STANDARDS).length + ':' + standardsFingerprint(); } catch (e) { key = 'nofp'; }
  if (PROC_RULE_CACHE && PROC_RULE_CACHE.rules && PROC_RULE_CACHE.key === key) return PROC_RULE_CACHE.rules;
  var rules = parseProcessRules();
  PROC_RULE_CACHE = { key: key, rules: rules };
  return rules;
}

// 「条件句 / 选择题 / 提议待确认 / 推测」语境护栏（2026-10-14）
// 客服说「如果……我们可以为您退款」「您可以保留商品并获得部分退款」「重发或退款」等，
// 都不是「答应退款/已退款」——既不代表承诺，更不代表必须已做退款登记。
// 只有确定性的承诺（我们将尽快为您办理退款）或已完成动作（已为您办理退款）才参与交叉校验。
var PROC_COMMIT_HEDGE = /如果|若|假如|倘若|万一|一旦|要是|如需|如无法|如问题|无法解决|解决不了|在[^，。；]{0,10}(?:情况|前提)下|或|或者|还是|另一种|替代方案|替代|可选|可以选择|是否(?:接受|同意|愿意|满意|可行|认可)|不知您|请问您|您(?:对此)?有何看法|您觉得如何|这样可以吗|可以吗|能否接受|请您确认|\bif\b|\bwhether\b|\beither\b|\bor\b|alternativ|\boption\b|in\s+case|might\s+be|maybe|possibl|perhap|acceptab|would\s+(?:that|this)\s+be|is\s+that\s+ok|do\s+you\s+(?:agree|accept)|\bqualora\b|\bse\b|\bwenn\b|\bfalls\b|\bsi\b|en\s+caso|o\s+bien|\boder\b|au\s+cas|accetta|sarebbe\s+accettabile|le\s+pare|que\s+le\s+pare|d'?\s*accordo/i;
// 取命中所在的「小句」（以 。！？；;.!?\n 为界），只在小句内判断语境，避免误伤邻句
function procCommitClause(text, index, len) {
  var stop = '。！？；;.!?\n';
  var s = index, e = index + len;
  while (s > 0 && stop.indexOf(text.charAt(s - 1)) < 0) s--;
  while (e < text.length && stop.indexOf(text.charAt(e)) < 0) e++;
  return text.slice(s, e);
}
// 在全文里找一个「未被语境护栏拦下」的命中；全部命中都在条件/选择/提议语境里 → 视为未命中
function procCommitHit(re, text, guard) {
  if (!re) return false;
  var flags = (re.flags || '').indexOf('g') >= 0 ? re.flags : (re.flags || '') + 'g';
  var rx;
  try { rx = new RegExp(re.source, flags); } catch (e) { return re.test(text); }
  var m, n = 0;
  while ((m = rx.exec(text)) !== null && n < 80) {
    n++;
    if (!m[0]) { rx.lastIndex++; continue; }
    var _clause = procCommitClause(text, m.index, m[0].length);
    var _cstop = '。！？；;.!?\n';
    var _ce = m.index + m[0].length;
    while (_ce < text.length && _cstop.indexOf(text.charAt(_ce)) < 0) _ce++;
    var _ctail = text.charAt(_ce);
    // 2026-10-16：规则级排除护栏（条件/假设句、否定句、「顾客自己买错」等）
    if (guard && guard.test(_clause)) continue;
    // 2026-10-16：疑问句 / 询问顾客（如「是否需要我们尽快为您办理退款？」）不算「答应退款」（对应不达标②「疑问句或者询问顾客尽快办理退款不算」）
    var _isQuestion = (_ctail === '？' || _ctail === '?') || /^(?:请问|能否|可否|是否|能不能|可不可以|需不需要|需要我|是否需要|您(?:是否|需要|希望|想要|要不要))/.test(String(_clause).replace(/^[\s，,、]+/, ''));
    if (!PROC_COMMIT_HEDGE.test(_clause) && !_isQuestion) return true;

  }
  return false;
}
// 返回 {fails:[], passes:[], checks:[]}；fails 非空即判不达标
// rules 来自 getProcessRules()（解析「流程&操作完整性」核查明细），缺省时回退内置默认
function checkProcessSopRegistration(agentText, ctx, rules) {
  var text = String(agentText || '');
  // 2026-10-16：核查明细新增「顾客反馈…」触发条件 —— 该部分要在「整段回邮数据（含顾客来信）」里识别
  var customerText = String((ctx && ctx.customerText) || '');
  var allText = text + '\n' + customerText;
  var out = { fails: [], passes: [], checks: [] };
  var list;
  if (rules && rules.crossChecks) list = rules.crossChecks; else list = defaultProcessCrossChecks();
  // 「邮件中包含“AZ”字样」（亚马逊 A-to-z 索赔）时，是否有退款登记为“是”或空白都算一致
  var azExemptActive = !!(rules && rules.azRefundExempt) && PROC_AZ_CLAIM.test(allText);
  for (var i = 0; i < list.length; i++) {
    var d = list[i];
    var scanText = (d.scope === 'customer') ? customerText : text;
    var hit = false;
    try {
      if (d.parts && d.parts.length) {
        // 条目级识别范围：客服承认类只看客服回邮，顾客反馈类看整段回邮（含顾客来信），并各自带排除护栏
        for (var pi = 0; pi < d.parts.length && !hit; pi++) {
          var pt = (d.parts[pi].scope === 'agent') ? text : customerText;
          hit = procCommitHit(d.parts[pi].re, pt, d.parts[pi].guard);
        }
      } else if (d.generic && d.tokens && d.tokens.length) hit = matchProcGeneric(d.tokens, scanText);
      else if (d.re) hit = procCommitHit(d.re, scanText, d.guard);
    } catch (e) { hit = false; }
    var val = regValueOf(ctx, d.key);
    var wantYes = d.expectYes !== false;
    var expectOk = wantYes ? isRegYes(val) : isRegNo(val);
    var azExempt = !!(azExemptActive && d.key === 'refundReg' && hit && !expectOk);
    if (azExempt) expectOk = true;
    out.checks.push({ key: d.key, label: d.label, action: d.action, value: val, acted: hit, ok: isRegYes(val), wantYes: wantYes, consistent: !hit || expectOk, azExempt: azExempt, scope: d.scope || 'agent' });
    if (hit && !expectOk) {
      out.fails.push('回邮数据显示' + d.action + '，但「' + d.label + '」' + (val ? '为“' + val + '”' : '为空白') + '，与质检标准「流程&操作完整性」核查明细不一致');
    } else if (hit && expectOk) {
      out.passes.push(d.label + '：' + (val || (wantYes ? '是' : '否')) + (azExempt ? '（邮件含 AZ 索赔表述，豁免）' : ''));
    }
  }
  return out;
}
// 「让顾客等待后是否再次发送邮件」——取「所有」客服回邮中的等待邮件，逐封按会话顺序判断（条款含「确认退款除外」时豁免退款场景）
function checkProcessFollowUp(reply, sopInfo, rules) {
  var cfg = (rules && rules.followUp) ? rules.followUp : { enabled: true, exemptRefund: true };
  if (!cfg.enabled) return null;
  var emails = [];
  try { emails = splitReplyEmails(reply) || []; } catch (e) { emails = []; }
  if (emails.length < 1) return null;
  // 取「所有」客服回邮中命中「让顾客等待」话术的邮件（客户来信 / 亚马逊系统来信不算），不再只看最早的一封
  var waits = [];
  for (var i = 0; i < emails.length; i++) {
    var em = emails[i];
    if (em.amazon || !em.body) continue;
    if (em.role !== '客服回邮') continue;
    if (PROC_WAIT_CUSTOMER.test(em.body)) waits.push({ em: em, at: i });
  }
  if (!waits.length) return null;
  // 逐封核对：该封之后还有客服回邮 → 视为已跟进；只要有一封之后再无客服回邮 → 遗漏跟进
  var missedWaits = [], lastFollow = null;
  for (var w = 0; w < waits.length; w++) {
    var followEm = null;
    for (var j = waits[w].at + 1; j < emails.length; j++) {
      var em2 = emails[j];
      if (em2.amazon || !em2.body) continue;
      if (em2.role === '客服回邮') { followEm = em2; break; }
    }
    if (followEm) { lastFollow = followEm; continue; }
    missedWaits.push(waits[w].em);
  }
  if (!missedWaits.length) return { missed: false, waitEmail: waits[0].em, followEmail: lastFollow, waitCount: waits.length, missedCount: 0 };
  // 确认退款除外：等待事项本身是退款（退款到账 / 退款处理中 / 已登记退款）时不判遗漏
  var missedWait = missedWaits[0];
  var refundRelated = false;
  if (cfg.exemptRefund) {
    if (sopInfo) { for (var c = 0; c < sopInfo.checks.length; c++) if (sopInfo.checks[c].key === 'refundReg' && sopInfo.checks[c].acted) refundRelated = true; }
    if (isRegYes(regValueOf(sopInfo && sopInfo.ctx, 'refundReg'))) refundRelated = true;
    if (missedWait && PROC_REFUND_MENTION.test(missedWait.body)) refundRelated = true;
  }
  return { missed: !refundRelated, waitEmail: missedWait, refundRelated: refundRelated, waitCount: waits.length, missedCount: missedWaits.length };
}
function checkProcess(text, ctx) {
  var issues = [];
  ctx = ctx || {};
  var failScore = getStandardScore('流程&操作完整性', '不达标'); if (!(failScore > 0)) failScore = 10;
  var passScore = getStandardScore('流程&操作完整性', '达标') || 25;

  // 规则来源：质检标准「流程&操作完整性」核查明细（页面改标准并保存后自动同步重跑）
  var procRules = getProcessRules();
  // 规则二：回邮动作 × 登记字段 一致性（命中即不达标）
  var sop = checkProcessSopRegistration(text, ctx, procRules);
  sop.ctx = ctx;
  sop.rulesFromStandard = !!(procRules && procRules.parsedFromStandard);
  sop.ruleSource = (procRules && procRules.sourceText) ? 'standard' : 'default';
  if (sop.fails.length) {
    return { score: failScore, grade: '不达标', issues: sop.fails.concat(issues), sopChecks: sop.checks, hardFail: true };
  }

  // 规则一：让顾客等待后，遗漏跟进（确认退款除外）
  var fu = checkProcessFollowUp(ctx.reply || '', sop, procRules);
  if (fu && fu.missed) {
    issues.push('让顾客等待后未再次发送邮件跟进（' + formatEmailRef(fu.waitEmail) + ' 承诺等待，之后无后续客服回邮），属于流程遗漏跟进');
    if (/refund|退款|rimbors|Erstattung|rembours|reembols/i.test(text) && !ML_TIME.test(text)) issues.push('提到退款但未说明到账时间');
    return { score: failScore, grade: '不达标', issues: issues, sopChecks: sop.checks, hardFail: true };
  }

  if (isWaitingForCustomerReply(text)) return { score: passScore, grade: '达标', issues: [], sopChecks: sop.checks, passReason: '本次回邮已经提出明确的折扣、退款或处理方案，并通过疑问句询问买家是否接受；当前流程的下一步是等待买家确认，不需要卖家继续操作。' + (sop.passes.length ? '（SOP登记核对通过：' + sop.passes.join('；') + '）' : '') };

  var hasAction = ML_ACTION.test(text);
  var hasFollowUp = ML_FOLLOWUP.test(text) || ML_TIME.test(text);
  if (/refund|退款|rimbors|Erstattung|rembours|reembols/i.test(text) && !ML_TIME.test(text)) issues.push('提到退款但未说明到账时间');
  if (!hasAction && !hasFollowUp) { issues.push('回复中未体现具体操作步骤或跟进计划'); return { score: failScore, grade: '不达标', issues: issues, sopChecks: sop.checks }; }
  var okReason = '流程操作无缺失，' + (sop.passes.length ? '回邮动作与登记一致（' + sop.passes.join('；') + '）' : '未发现SOP登记缺失') + (fu ? '，且让顾客等待后已再次发送邮件跟进' : '');
  if (hasAction && hasFollowUp) return { score: passScore, grade: '达标', issues: issues, sopChecks: sop.checks, passReason: okReason };
  return { score: Math.round(passScore * QC_SCORE.procPartialRatio), grade: '达标', issues: issues, sopChecks: sop.checks, passReason: okReason };
}

function checkSkill(text, customerText) {
  var issues = [];
  var hasEmpathy = ML_EMPATHY.test(text);
  var hasPersonal = ML_PERSONAL.test(text);
  var hasProactive = ML_CONTACT.test(text);
  if (/(?:please provide|could you provide|please send)[\s\S]{0,200}(?:please provide|could you provide|please send)/i.test(text)) issues.push('可能存在重复索要信息');
  var SK = QC_SCORE.skill;
  if (hasEmpathy && hasPersonal && hasProactive) return { score: SK.excellent, grade: '优秀', issues: issues };
  if ((hasEmpathy || hasPersonal) && hasProactive) return { score: SK.passStrong, grade: '达标', issues: issues };
  if (hasEmpathy || hasPersonal || hasProactive) return { score: SK.passOne, grade: '达标', issues: issues };
  issues.push('回复缺乏同理心表达、个性化称呼和主动服务意识');
  return { score: SK.fail, grade: '不达标', issues: issues };
}

function checkAttitude(text) {
  var issues = [];
  var politeCount = 0;
  // 英文礼貌用语（保持原有判定），并追加多语种礼貌用语，避免外语回邮被系统性压低
  var pp = [/Dear/i, /Hello/i, /Hi/i, /please/i, /thank you/i, /thanks/i, /sorry/i, /apologi/i, /regret/i, /Best regards/i, /Sincerely/i, /Kind regards/i, /Cheers/i, /Best/i, /Respectfully/i].concat(ML_POLITE);
  for (var i = 0; i < pp.length; i++) if (pp[i].test(text)) politeCount++;
  var hasRude = /you must|you have to|we can only|no way|impossible|that.?s your|not our problem|your fault|deve solo|no podemos hacer|nous ne pouvons pas/i.test(text);
  var hasQuestioning = /why did you|why didn.?t you|how could you|didn.?t you read|as i said/i.test(text);
  if (hasRude) issues.push('存在态度强硬的表述');
  if (hasQuestioning) issues.push('存在质问或反问的表述');
  var AT = QC_SCORE.attitude;
  if (politeCount >= 4 && !hasRude && !hasQuestioning) return { score: AT.excellent, grade: '优秀', issues: issues };
  if (politeCount >= 2 && !hasRude && !hasQuestioning) return { score: AT.passCount, grade: '达标', issues: issues };
  if (hasRude || hasQuestioning) return { score: AT.fail, grade: '不达标', issues: issues };
  return { score: AT.other, grade: '达标', issues: issues };
}

// 物流链接白名单：按质检标准，物流/快递查询链接不算违规（如 https://t.17track.net/…、https://www.yunexpress.com/…、https://track.yw56.com.cn/…）
function isLogisticsLink(url) {
  var u = String(url || '').toLowerCase();
  var host = (u.match(/^https?:\/\/([^\/?#]+)/) || ['', ''])[1];
  if (!host) return false;
  // 主机名含 track/trace 标签的（如 track.yw56.com.cn、t.17track.net），视为物流查询链接
  if (/(^|\.)(track|trace|tracking)(\.|$)/.test(host)) return true;
  var LOGISTICS_HOSTS = ['17track', 'yunexpress', 'yw56', 'yanwen', '4px', 'dhl', 'fedex', 'ups', 'usps', 'royalmail', 'correos', 'gls', 'dpd', 'yodel', 'evri', 'hermes', 'ontrac', 'lasership', 'canadapost', 'auspost', 'australiapost', 'japanpost', 'deutschepost', 'laposte', 'colissimo', 'bpost', 'postnl', 'purolator', 'aramex', 'singpost', 'speedpost', 'sf-express', 'sfexpress', 'chinapost', 'trackingmore', 'aftership', 'equick', 'wishpost', 'sunyou', 'lexship', 'shippo', 'tnt', 'parcelforce', 'ecms'];
  var labels = host.split('.');
  for (var i = 0; i < labels.length; i++) {
    var lb = labels[i];
    for (var j = 0; j < LOGISTICS_HOSTS.length; j++) {
      var h = LOGISTICS_HOSTS[j];
      if (lb === h) return true;
      if (h.length >= 4 && lb.length > h.length && lb.indexOf(h) === 0) return true;
    }
  }
  return false;
}

function findSensitiveWordHits(text) {
  if (!SENSITIVE_RE_BUILD_OK || !SENSITIVE_WORD_RE) return [];
  var t = String(text || '').replace(SENSITIVE_STRIP_CJK_RE, ' ');
  if (!t.trim()) return [];
  var clauses = t.split(/[.!?;\n\r]+/);
  var seen = {}, out = [];
  for (var ci = 0; ci < clauses.length; ci++) {
    var clause = clauses[ci];
    if (!clause || !clause.trim()) continue;
    SENSITIVE_WORD_RE.lastIndex = 0;
    var m;
    while ((m = SENSITIVE_WORD_RE.exec(clause)) !== null) {
      if (!m[0]) break;
      var key = m[0].toLowerCase();
      var entry = SENSITIVE_WORD_MAP[key];
      if (!entry || seen[key]) continue;
      if (sensitiveWordPass(entry, m, clause)) { seen[key] = true; out.push(entry); }
    }
  }
  return out;
}
function sensitiveWordPass(entry, m, clause) {
  var word = entry.w || '';
  if (word.indexOf(' ') >= 0) return true; // 多语种操纵短语：出现即命中
  var end = m.index + m[0].length;
  var after = clause.slice(end, end + 40);
  return !!(SENSITIVE_REVIEW_OBJ_RE && SENSITIVE_REVIEW_OBJ_RE.test(after)); // 动作 → 评价对象
}
function scheduleSensitiveWordsRefresh() {
  if (sensitiveRefreshInFlight) return;
  if (typeof cloudApp === 'undefined' || !cloudApp || !cloudApp.storage || typeof cloudApp.storage.from !== 'function') return;
  sensitiveRefreshInFlight = true;
  rebuildSensitiveWords().then(function(changed) {
    sensitiveRefreshInFlight = false;
    if (changed && rawData && rawData.length) { showToast('敏感词表已更新，正在重新质检全部数据', 'info'); runQualityCheck(); }
  }).catch(function() { sensitiveRefreshInFlight = false; });
}
function rebuildSensitiveWords() {
  return new Promise(function(resolve) {
    var items = [];
    for (var i = 0; i < KNOWLEDGE_BASE.length; i++) {
      var k = KNOWLEDGE_BASE[i];
      if (!k || k.sourceType !== 'file' || !k.fileCloudPath) continue;
      var dims = getKnowledgeDimensions(k);
      if (!dims || dims.indexOf('平台禁忌') < 0) continue;
      var ft = String(k.fileType || '') + ' ' + String(k.fileName || '');
      if (!/sheet|excel|csv|xlsx|xls/i.test(ft)) continue;
      items.push(k);
    }
    if (!items.length || typeof XLSX === 'undefined') { resolve(false); return; }
    var collected = {};
    var pending = items.length;
    var done = function() {
      var words = [];
      for (var key in collected) if (Object.prototype.hasOwnProperty.call(collected, key)) words.push({ w: collected[key].w, lang: collected[key].lang });
      var changed = words.length > 0 && JSON.stringify(words.map(function(x) { return x.w.toLowerCase(); })) !== JSON.stringify(sensitiveWordList.map(function(x) { return x.w.toLowerCase(); }));
      if (words.length > 0) { sensitiveWordList = words; buildSensitiveRegex(); }
      resolve(changed);
    };
    var settle = function() { pending--; if (pending <= 0) done(); };
    items.forEach(function(k) {
      try {
        cloudApp.storage.from('qc-appeals').createSignedUrl(k.fileCloudPath, 3600).then(function(res) {
          var url = res && (res.fullSignedURL || res.signedUrl || res.url);
          if (!url) throw new Error('no signed url');
          return fetch(url);
        }).then(function(r) { return r.arrayBuffer(); }).then(function(buf) {
          var wb = XLSX.read(new Uint8Array(buf), { type: 'array' });
          var rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, raw: false, defval: '' });
          for (var ri = 0; ri < rows.length; ri++) {
            var w = String(rows[ri] && rows[ri][0] || '').trim();
            if (!w) continue;
            var lang = String(rows[ri] && rows[ri][1] || '').trim();
            var key = w.toLowerCase();
            if (!collected[key]) collected[key] = { w: w, lang: lang };
            else if (lang && !collected[key].lang) collected[key].lang = lang;
          }
          settle();
        }).catch(function() { settle(); });
      } catch (e) { settle(); }
    });
  });
}
function checkProhibition(text, ctxText) {
  var issues = [], violations = [];
  var source = String(text || '');
  // 物流回邮场景下电话号码属于允许内容（如提供承运商/快递联系方式），不参与违规判定
  var ctx = (String(ctxText || '') + '\n' + source).toLowerCase();
  var logisticsScene = /物流|快递|配送|运输|派送|承运|发货|包裹|运单|单号|跟踪|查件|妥投|签收|物流轨迹|物流信息|查物流|运单号|快递单号|tracking|shipment|shipping|delivery|carrier|courier|transit|tracking number|logistics|parcel|package|post|dispatch|fulfillment|freight|warehouse|收件|寄件/i.test(ctx);
  // 订单号/案件号/物流单号掩码：多语言关键词 + 亚马逊 3-7-7 主号 + 3-7 短号 + 物流跟踪号等
  // 触发任一即视为合法业务编号，不参与电话/邮箱/链接等违规判定
  var orderNoKeyword = /(?:order(?:\s*(?:no\.?|number|id|is|n°|nr|num))?|ordine|pedido|commande|注文番号|注文|주문(?:\s*(?:번호|number))?|bestell(?:nummer)?|bestellung|case(?:\s*(?:no\.?|number|id))?|ref(?:erence|\.|\s*no\.?|\s*number)?|auftrag|n[°º]\s*commande|num(?:ero|éro|mer|éro)\s*(?:de\s*)?(?:commande|pedido|ordine)?|reference(?:\s*(?:no\.?|number|id|case))?|订单号|订单编号|平台单号|平台订单号|orderid|orderno|caseid|referenceid|reference\s*number|reference\s*id|your\s+order|the\s+order|their\s+order|n[°º]\s*pedido|case\s+id|ticket\s*no|incident\s*no)\s*[:：#№\-‐‑‒–—―]?\s*/gi;
  var numMaskPatterns = [
    new RegExp(orderNoKeyword.source + '[A-Z0-9][A-Z0-9\\-‐‑‒–—―]{3,}', 'gi'),
    /\b\d{3}[\-‐‑‒–—―]\d{7}[\-‐‑‒–—―]\d{7}\b/g,                                       // 亚马逊 3-7-7 主号
    /\b\d{3}[\-‐‑‒–—―]\d{7}\b/g,                                                       // 3-7 短号（如订单号截取）
    /\b\d{10,}\b/g,                                                                     // 10 位以上纯数字（订单号/物流单号）
    /\b1Z[0-9A-Z]{10,}\b/gi,                                                            // UPS 物流单号
    /\bTBA\d{10,}\b/gi,                                                                 // Amazon TBA 单号
    /\b\d{3}[\-‐‑‒–—―]\d{3}[\-‐‑‒–—―]\d{4}[\-‐‑‒–—―]\d{4}\b/g                          // 3-3-4-4（部分店铺订单号/税务号）
  ];
  var normalizedText = source;
  for (var nm = 0; nm < numMaskPatterns.length; nm++) {
    try { normalizedText = normalizedText.replace(numMaskPatterns[nm], ' [ORDER_NUMBER_ALLOWED] '); } catch (e) {}
  }
  var emails = normalizedText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  if (emails) {
    var real = [];
    for (var e = 0; e < emails.length; e++) if (!/@amazon\.|@seller\.|@marketplace\./i.test(emails[e])) real.push(emails[e]);
    if (real.length > 0) violations.push('邮件中含有邮箱地址: ' + real[0]);
  }
  if (/\bpaypal\b/i.test(normalizedText)) violations.push('邮件中提到PayPal');
  if (/\bebay\b/i.test(normalizedText)) violations.push('邮件中提到eBay');
  if (/\balibaba\b/i.test(normalizedText)) violations.push('邮件中提到Alibaba');
  if (/\baliexpress\b/i.test(normalizedText)) violations.push('邮件中提到AliExpress');
  var phones = normalizedText.match(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b|\+\d{1,3}(?:[\s.-]?\d{2,4}){2,5}/g);
  if (phones && phones.length > 0 && !logisticsScene) violations.push('邮件中含有电话号码');
  if (/\bfacebook\b|\binstagram\b|\bwhatsapp\b|\bwechat\b|\bline\b|\btelegram\b|\btwitter\b/i.test(normalizedText)) violations.push('邮件中提到社交媒体平台');
  if (/\breview\b|\bfeedback\b|\brating\b|\bA-to-Z\b|\bA.to.Z\b/i.test(normalizedText)) {
    if (/change|modify|update|remove|delete|close|positive|5.?star/i.test(normalizedText)) violations.push('邮件中可能存在利诱/威胁修改评价的表述');
  }
  if (/\bstupid\b|\bidiot\b|\bfool\b|\bdamn\b|\bshit\b|\bfuck\b|\bhell\b|\bcrazy\b|\binsane\b/i.test(normalizedText)) violations.push('邮件中存在粗暴或不礼貌用语');
  var links = normalizedText.match(/https?:\/\/(?!amazon|amazn|sellercentral)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi);
  // 质检标准更新：物流链接不算违规（如 https://t.17track.net/…、https://www.yunexpress.com/…、https://track.yw56.com.cn/…），仅非物流的可编辑链接判违规
  var nonLogisticsLinks = [];
  if (links) for (var lk = 0; lk < links.length; lk++) if (!isLogisticsLink(links[lk])) nonLogisticsLinks.push(links[lk]);
  if (nonLogisticsLinks.length > 0) violations.push('邮件中含有非Amazon平台的可编辑链接');
  var swHits = findSensitiveWordHits(source);
  if (swHits.length > 0) {
    var swParts = [];
    for (var sw = 0; sw < swHits.length && sw < 3; sw++) swParts.push('「' + swHits[sw].w + '」' + (swHits[sw].lang ? '（' + swHits[sw].lang + '）' : ''));
    violations.push('回邮中出现平台禁忌敏感词' + swParts.join('、') + (swHits.length > 3 ? ' 等' + swHits.length + '个词' : '') + '（评价操纵语境）');
  }
  if (violations.length > 0) { issues.push.apply(issues, violations); return { score: 0, grade: '不达标', issues: issues, isRedline: true }; }
  return { score: -1, grade: '通过', issues: [], isRedline: false };
}

// 标准指纹：质检标准 / 等级规则被修改后指纹变化，用于判断已有明细是否仍按最新标准打分
function standardsFingerprint() {
  try {
    var s = JSON.stringify(STANDARDS) + '|' + JSON.stringify(GRADE_RULES);
    var h = 0;
    for (var i = 0; i < s.length; i++) { h = ((h * 31) + s.charCodeAt(i)) | 0; }
    return 'v' + (h >>> 0).toString(36) + '-' + s.length;
  } catch (e) { return ''; }
}
function getStandardScore(dimName, grade) {
  for (var i = 0; i < STANDARDS.length; i++)
    for (var j = 0; j < STANDARDS[i].items.length; j++) {
      var item = STANDARDS[i].items[j];
      if (item.name === dimName)
        for (var k = 0; k < item.levels.length; k++)
          if (item.levels[k].grade === grade) return item.levels[k].score;
    }
  return 0;
}

function getDimMax(dimName) {
  for (var i = 0; i < STANDARDS.length; i++)
    for (var j = 0; j < STANDARDS[i].items.length; j++)
      if (STANDARDS[i].items[j].name === dimName) return STANDARDS[i].items[j].maxScore || 0;
  return 0;
}

// ===================== 优秀判定门槛（2026-11-06 v3，判例校准 + 主动跟进例外） =====================
// 基础门槛①：问题已处理完并闭环 —— 以「顾客确认」为唯一闭环依据（顾客来信确认收到补发/新件/退款/商品，或确认问题已解决）。
//   例外：客服在顾客未催促的情况下主动去信跟进并提供产品使用说明 → 视为闭环（末封为带发送状态的客服信、其前一段也是客服信、中间无任何顾客来信；顾客催促后才补发说明的不算）。
//   客服单方面表述（已安排补发/退款已办/物流显示已妥投/给出处置指引/已上传凭证等）在顾客未回复确认前不算闭环；
//   末封顾客来信是投诉/索赔（AZ、差评威胁等）的也不算闭环。
// 门槛②不算优秀：a.顾客来信后第一封客服去信提供折扣；b.会话出现全额退款（显式全额表述，或客服已执行退款且属退货/拦截/取消场景）；c.亚马逊AZ索赔表述（含德语 A-bis-Z 索赔）。
// 触发任一 → 「优秀」降为「达标」（总分不变），result.exGate 记录原因，issues 追加【优秀门槛】行。
var EXC_FULL_REFUND = /full\s+(?:refund|reimbursement)|refund(?:ed)?\s+(?:in\s+full|the\s+full\s+(?:amount|price))|100\s*%\s*(?:refund|reimburs)|全额(?:退款|退货退款|退回)|退(?:回|还|了)?全款|全部退款|全款(?:退回|退还)|rimbors\w*\s+(?:integrale|completo|total\w*)|rimbors\w*\s+del\s+(?:tutto|prezzo|importo)|(?:volle|komplette|gesamte|ganze)\s+(?:R\u00fcckerstattung|Erstattung|R\u00fcckzahlung)|zur\u00fcckgezahlt?\s+(?:in\s+)?voller\s+H\u00f6he|remboursement\s+(?:complet|int[\u00e9e]gral|total)|rembours[\u00e9e]e?\s+(?:compl[\u00e8e]tement|int[\u00e9]gralement|en\s+totalit[\u00e9e])|reembolso\s+(?:completo|total|[\u00ed]ntegro)|reembols\w+\s+(?:por\s+completo|totalmente)/i;
var EXC_DISCOUNT = /折扣|优惠(?:码|券)|(?:提供|给予|享受|获得)[^。；;.!?\n]{0,6}优惠|discount|coupon|promo(?:\s*code)?|voucher|sconto|codice\s+sconto|Rabatt|Gutschein|Nachlass|r[\u00e9e]duction|remise|code\s+promo|descuento|cup[\u00f3o]n|c[\u00f3o]digo\s+promocional|\d{1,2}\s*%\s*off/i;
// 顾客确认闭环（唯一通道）
var EXC_CLOSED_ACK = /收到了|已收到|已经收到|收到(?:产品|包裹|商品|货物|新(?:的)?包裹|补发|退款)|包裹已(?:收到|送达|到)|退款已(?:经)?到账|已收到退款|问题(?:已|已经|得到了)解决|已经解决|圆满解决|risolt\w*|gel[\u00f6o]st|problem\s+gel[\u00f6o]st|resolved|r\u00e9solu|resuelto|received\s+(?:the|my|it|your)\s+(?:new\s+|replacement\s+)?(?:item|parcel|package|refund|product)|refund\s+(?:has\s+)?arrived|bien\s+re[\u00e7c]u|colis\s+re[\u00e7c]u|re[\u00e7c]u\s+(?:le|la|mon|ma|votre)|erhalten|ricevuto\s+(?:il|la|il\s+nuovo|il\s+rimborso)|rimborso\s+ricevuto|recibido\s+(?:el|la|mi)/i;
var EXC_ACK_NEG = /not\s+received|haven'?t\s+received|didn'?t\s+receive|never\s+received|only\s+received|received\s+only|nicht\s+erhalten|nicht\s+bekommen|nicht\s+zugestellt|non\s+(?:ho|ha|abbiamo|hanno)\s+(?:ancora\s+)?ricevuto|ricevuto\s+solo|nessun\s+ricevimento|no\s+he\s+recibido|todav\u00eda\s+no|pas\s+(?:encore\s+)?re[\u00e7c]u|toujours\s+pas|je\s+n'ai\s+pas|没有收到|未收到|还没收到|尚未收到|并未收到|还没到|尚未到|还没有到|只收到|只收到了|incomplet|incomplete|incompleto|缺少|不完整|manque|noch\s+nicht|pas\s+encore|still\s+(?:waiting|not)|hope\s+you|but\s+this|但|还没|未(?:送达|投递)|if\s+it|whether/i;
// 末封顾客来信为投诉/索赔 → 不闭环
var EXC_LAST_COMPLAINT = /A-bis-Z|A-to-z|A2Z|Garantieantrag|索赔|投诉|complaint|claim|差评|negative\s+(?:review|feedback)|bad\s+review|cattive\s+recensioni|recension[ei]\s+negativ|rezensio|rezension|schlechte\s+bewertung|avis\s+n[\u00e9e]gatif|mauvaise\s+recension|rese[\u00f1n]a\s+negativa|comentario\s+negativo/i;
// 退款已执行（完成态，多语种）
var EXC_REFUND_EXEC = /we\s+have\s+(?:processed|issued|refunded|reimbursed)\b|have\s+processed\s+your\s+refund|processed\s+your\s+(?:refund|return)\s+request|refund\s+(?:has\s+)?(?:been\s+)?(?:processed|issued|initiated)|we\s+have\s+refunded|abbiamo\s+(?:appena\s+)?(?:effettuato|provveduto|proceduto)\s+(?:a|il|al)?\s*(?:il\s+)?rimborso|avviato\s+la\s+procedura\s+di\s+rimborso|rimborso\s+(?:\u00e8\s+stato|\u00e8\s+stata)\s+(?:avviat|effettuat|emess)|haben\s+(?:wir\s+)?(?:die\s+)?(?:erstattung|r\u00fcckerstattung)\s+(?:veranlasst|ausgel[\u00f6o]st|bearbeitet|verarbeitet)|(?:erstattung|r\u00fcckerstattung)\s+(?:wurde|ist)\s+(?:veranlasst|ausgel[\u00f6o]st|bearbeitet)|nous\s+(?:avons\s+trait\u00e9|avons\s+effectu\u00e9|avons\s+rembours\u00e9|avons\s+proc\u00e9d\u00e9|venons\s+de\s+vous\s+envoyer)[^。！？;.;!?\n]{0,30}rembours|remboursement\s+(?:a\s+\u00e9t\u00e9|est)\s+(?:effectu\u00e9|initi\u00e9|\u00e9mis|trait\u00e9)|hemos\s+(?:procesado|iniciado|efectuado|realizado)\s+(?:el|la|su)?\s*reembolso|reembolso\s+(?:ha\s+)?(?:sido|fue)\s+(?:procesado|iniciado|efectuado)|elaborato\s+il\s+rimborso|已(?:经)?(?:为您|您|客户|买家|顾客)?办理了?退款|已退款|退款已(?:经)?(?:办理|处理|发起|启动)|已启动退款|已(?:经)?(?:为您|您)?(?:办理|处理)了?退款(?:申请|流程)/i;
var EXC_REFUND_NEG = /will\s+(?:be\s+)?(?:processed|issued)|would|could|can\s+(?:be\s+)?(?:processed|issued)|如果|若|一旦|同意后|经您确认|是否|为您办理退款，请问|offering|offer\s+you|我们愿意|愿意为您|如您同意|if\s+you\s+agree|once\s+(?:you|we)|after\s+(?:you|we)\s+(?:confirm|agree)/i;
// 退款已执行 + 退货/拦截/取消场景 → 按全额退款计
var EXC_REFUND_CTX = /退货|退回|寄回|return\w*\s+(?:the\s+)?(?:item|goods|product|parcel)|sent\s+the\s+return|res[ai]\b|reso\b|restitution|R\u00fccksende|zur\u00fcckgesendet|intercett|intercept|拦截|cancel|annullar|annuler|annul\w|未收到|not\s+received|non\s+(?:ho|ha|abbiamo)\s+(?:ancora\s+)?ricevuto|pas\s+re[\u00e7c]u|nicht\s+erhalten|non\s+consegnabile|未(?:能|曾)送达|remboursement\s+sugg\u00e9r|remboursement\s+partiel|partial\s+refund|rimborso\s+parziale|Teilr\u00fcckerstattung|reembolso\s+parcial|部分退款/i;
// AZ 索赔（门槛专用：PROC_AZ_CLAIM + 德语 A-bis-Z）
var EXC_AZ_CLAIM = new RegExp(PROC_AZ_CLAIM.source + '|A-bis-Z|Garantieantrag', 'i');
// 主动去信跟进 + 产品使用说明（v3 例外通道，8 语种）
var EXC_USAGE_INSTR = /使用说明|使用方法|操作(?:步骤|方法|指南|说明)|安装(?:说明|步骤|方法|指南)|使用指南|说明书|教程|步骤(?:如下|一|1|：)|请参阅附件|参见附件|参考附件|附件中(?:所)?标注|请您尝试操作|请按(?:照)?(?:以下|下列)|按以下步骤|how\s+to\s+(?:use|install|remove|attach|detach|assemble|set\s?up|pair|connect|mount)|instructions?\s+(?:below|attached|for)|user\s+(?:manual|guide)|operating\s+(?:manual|instructions)|please\s+(?:refer|see)\s+(?:to\s+)?(?:the\s+)?(?:attached|attachment|instructions|manual|picture|image|photo)|follow\s+(?:these|the)\s+steps|the\s+following\s+steps|istruzioni|modalit[\u00e0a]\s+d['\u2019]?uso|manuale|come\s+(?:si\s+)?(?:rimuovere|installare|utilizzare|smontare|montare|collegare|usare)|riferiment\w*\s+all[a'\u2019]?\s*allegat|vedi\s+allegato|come\s+da\s+allegato|nell[a'\u2019]?\s+allegato|invitiamo\s+a\s+provare|anleitung|gebrauchsanweisung|bedienungsanleitung|montageanleitung|schritt(?:\s*f\u00fcr\s+schritt|\s*1)|so\s+(?:geht|funktioniert)|wie\s+sie\s+(?:das|den|die)\s+\S{0,20}\s+(?:montieren|abbauen|anbringen|entfernen|anschlie(?:\u00df|ss)en|verwenden|benutzen)|beigef[\u00fcu]gte|im\s+anhang|siehe\s+anhang|mode\s+d['\u2019]?emploi|notice\s+d['\u2019]?utilisation|comment\s+(?:utiliser|installer|retirer|d[\u00e9e]monter|monter|brancher|[\u00e9e]tape)|[\u00e9e]tapes?\b|r[\u00e9e]f[\u00e9e]rez-vous|r[\u00e9e]f[\u00e9e]rer\s+(?:\u00e0|au|aux)|pi[\u00e8e]ce\s+jointe|ci-joint|instrucciones|manual\s+de\s+instrucciones|c[\u00f3o]mo\s+(?:usar|utilizar|instalar|quitar|montar|conectar|desmontar)|paso\s+a\s+paso|los\s+siguientes\s+pasos|consulte\s+el\s+(?:adjunto|manual)|archivo\s+adjunto/i;
// 护栏：索取信息/待回复/请求重发类不算「提供说明」
var EXC_PRO_INFO_NEG = /请您提供|请提供|请再次提供|需要您提供|麻烦(?:您)?提供|could\s+you\s+(?:please\s+)?(?:provide|send)|please\s+(?:provide|send)\s+(?:us\s+)?(?:photos?|pictures?|images?|videos?|the\s+(?:photo|picture|image|video))|send\s+us\s+(?:photos?|pictures?|videos?)|photos?\s+of\s+(?:the|your)|vi\s+preghiamo\s+di\s+inviare|inviarci\s+(?:foto|immagini|video)|potrebbe\s+(?:inviar|fornire)|bitte\s+senden\s+Sie|senden\s+Sie\s+uns|veuillez\s+nous\s+envoyer|env[\u00ed i]enos\s+(?:fotos|im[\u00e1a]genes)|期待您(?:的)?(?:回复|来信)|等待您(?:的)?回复|awaiting\s+your\s+(?:reply|response|feedback)|in\s+attesa\s+(?:di\s+)?(?:una\s+)?(?:sua\s+)?risposta|warten\s+auf\s+(?:Ihre|ihre)\s+(?:R\u00fcckmeldung|Antwort)|en\s+attente\s+de\s+(?:votre\s+)?(?:r[\u00e9e]ponse|retour)|esperando\s+su\s+(?:respuesta|resposta)/i;
var EXC_PRO_REQ_NEG = /麻烦(?:您)?(?:再|重新)?发|请您(?:再|重新)?发|请再发|再发一次|please\s+(?:resend|send\s+(?:it\s+)?again|send\s+me)|nochmal\s+(?:senden|schicken)|senden\s+Sie\s+(?:mir\s+)?(?:bitte|nochmal)|rispedisca|pouvez-vous\s+(?:me\s+)?(?:renvoyer|envoyer)|puede\s+(?:reenviar|enviarme)/i;
var EXC_PRO_NEG = new RegExp(EXC_PRO_INFO_NEG.source + '|' + EXC_PRO_REQ_NEG.source, 'i');
// 结构判定：末封是带 [发送状态] 的客服去信，且其前一段也是带状态的客服信（连续相邻，中间无任何段落）；
// 从末封向前收集连续带状态客服信的尾巴 run；run≥2 时 run[1..] 为主动跟进信（第1封是对顾客来信的正常回复）。
function excProactiveInstrHit(emails) {
  var list = emails || [];
  if (list.length < 2) return null;
  var end = list.length - 1;
  if (list[end].role !== '客服回邮' || !list[end].status) return null;
  var start = end;
  while (start - 1 >= 0 && list[start - 1].role === '客服回邮' && list[start - 1].status) start--;
  if (end - start + 1 < 2) return null;
  for (var i = start + 1; i <= end; i++) {
    var hit = excClauseHit(list[i].body, EXC_USAGE_INSTR, EXC_PRO_NEG);
    if (hit) return hit;
  }
  return null;
}
function excClauseHit(text, re, negRe) {
  var clauses = String(text || '').split(/[。！？；;.!?\n]+/);
  for (var i = 0; i < clauses.length; i++) {
    if (!re.test(clauses[i])) continue;
    if (negRe && negRe.test(clauses[i])) continue;
    return clauses[i].trim().replace(/\s+/g, ' ').slice(0, 60);
  }
  return null;
}
function applyExcellentGate(result) {
  if (!result || result.grade !== '优秀' || !result.totalScore || result.totalScore < 0 || result.redlineViolation) return result;
  if (typeof result.reply !== 'string' || !result.reply) return result;
  var emails = splitReplyEmails(result.reply, true);
  var agents = [], custs = [];
  for (var gi = 0; gi < emails.length; gi++) {
    if (!emails[gi].body) continue;
    if (emails[gi].role === '客服回邮') agents.push(emails[gi]);
    else if (emails[gi].role === '客户来信') custs.push(emails[gi]);
  }
  var reasons = [], closed = false, closedWhy = '';
  var custAll = custs.map(function (c) { return c.body; }).join('\n');
  var lastComplaint = custs.length ? EXC_LAST_COMPLAINT.test(custs[custs.length - 1].body) : false;
  // ① 闭环 = 顾客确认（唯一依据）
  var ackHit = excClauseHit(custAll, EXC_CLOSED_ACK, EXC_ACK_NEG);
  if (ackHit && !lastComplaint) { closed = true; closedWhy = '顾客确认解决「' + ackHit + '」'; }
  if (!closed) {
    var pInstr = excProactiveInstrHit(emails);
    if (pInstr) { closed = true; closedWhy = '客服在顾客未催促下主动去信跟进并提供使用说明「' + pInstr + '」'; }
  }
  if (!closed) reasons.push('问题未闭环（顾客未确认收到或解决' + (lastComplaint ? '，末封顾客来信为投诉/索赔' : '') + '）');
  // ②a 折扣（顾客来信后的第一封客服去信）
  if (agents.length) {
    var dHit = excClauseHit(agents[0].body, EXC_DISCOUNT, null);
    if (dHit) reasons.push('顾客来信后的第一封客服去信提供了折扣「' + dHit + '」');
  }
  // ②b 全额退款：显式全额表述；或客服已执行退款且属退货/拦截/取消场景
  var fHit = excClauseHit(result.reply, EXC_FULL_REFUND, null);
  if (fHit) reasons.push('会话中出现全额退款表述「' + fHit + '」');
  else {
    var rHit = excClauseHit(result.reply, EXC_REFUND_EXEC, EXC_REFUND_NEG);
    if (rHit && EXC_REFUND_CTX.test(result.reply)) reasons.push('客服已执行退款且属退货/拦截/取消场景（按全额退款计）「' + rHit + '」');
  }
  // ②c AZ索赔（含德语 A-bis-Z）
  var azm = String(result.reply).match(EXC_AZ_CLAIM);
  if (azm) reasons.push('会话中出现AZ索赔表述「' + azm[0] + '」');
  if (!reasons.length) return result;
  result.grade = '达标';
  result.exGate = { blocked: true, closed: closed, closedWhy: closedWhy, reasons: reasons };
  result.issues = (result.issues || []).concat(['【优秀门槛】因' + reasons.join('；') + '，未判优秀（总分保留）']);
  return result;
}

function determineGrade(total) {
  for (var i = 0; i < GRADE_RULES.length; i++) if (total >= GRADE_RULES[i].minScore) return GRADE_RULES[i].grade;
  return '不达标';
}
// 达标单维度分夹到「达标档」：2026-11-19
// 等级为「达标」时，任一维度分若超过质检标准中该维度「达标」档的分数，则压到达标档分；
// 低于达标档的维度保持不变。之后重算总分并重新定级（五项全达标档合计 82 分，落在 80-85）。
// 达标档分数实时取自「质检标准」，管理员改标准后自动跟随。
function qcClampPassDimensions(result) {
  if (!result || result.grade !== '达标' || result.referenceCase || result.redlineViolation) return result;
  if (!result.details || !result.scores) return result;
  var changed = false;
  for (var i = 0; i < DIM_NAMES.length; i++) {
    var dim = DIM_NAMES[i];
    if (dim === '平台禁忌') continue;
    var item = getStandardItemByName(dim), cap = null;
    if (item && item.levels) for (var j = 0; j < item.levels.length; j++) if (item.levels[j].grade === '达标') { cap = item.levels[j].score; break; }
    if (cap === null) continue;
    if (typeof result.scores[dim] === 'number' && result.scores[dim] > cap) {
      result.scores[dim] = cap;
      if (result.details[dim]) { result.details[dim].score = cap; result.details[dim].grade = '达标'; }
      changed = true;
    }
  }
  if (changed) {
    var total = 0;
    for (var k = 0; k < DIM_NAMES.length; k++) {
      var dn = DIM_NAMES[k]; if (dn === '平台禁忌') continue;
      var sc = result.scores[dn]; if (typeof sc === 'number' && sc >= 0) total += sc;
    }
    result.totalScore = total;
    result.grade = determineGrade(total);
  }
  return result;
}

// ============================================================
// 质检逻辑板块（tab-qclogic）：总览里的档位表
// 分值 / 等级阈值一律实时取自「质检标准」页，改标准后自动跟随
// ============================================================
function getStandardItemByName(dimName) {
  for (var i = 0; i < STANDARDS.length; i++)
    for (var j = 0; j < STANDARDS[i].items.length; j++) if (STANDARDS[i].items[j].name === dimName) return STANDARDS[i].items[j];
  return null;
}
function renderQcLogic() {
  var wrap = document.getElementById('qcLogicScoreTableWrap');
  if (!wrap) return;
  var html = '<table class="ql-table"><thead><tr><th style="width:170px;">维度</th><th style="width:70px;">满分</th><th>等级档位（当前「质检标准」页的配置）</th></tr></thead><tbody>';
  for (var i = 0; i < DIM_NAMES.length; i++) {
    var dn = DIM_NAMES[i], item = getStandardItemByName(dn);
    var isRedlineDim = !!(item && item.isRedline);
    var tags = [];
    if (item && item.levels) for (var k = 0; k < item.levels.length; k++) {
      var g = item.levels[k].grade, sc = item.levels[k].score;
      var cls = g === '优秀' ? 't-ok' : (g === '不达标' ? 't-fail' : 't-pass');
      tags.push('<span class="ql-tag ' + cls + '">' + escHtml(g) + (isRedlineDim ? '' : ' ' + sc + ' 分') + '</span>');
    }
    html += '<tr><td style="font-weight:600;">' + escHtml(dn) + (isRedlineDim ? ' <span class="ql-tag t-hard">红线</span>' : '') + '</td><td>' + (isRedlineDim ? '—' : (item ? (item.maxScore || 0) : 0) + ' 分') + '</td><td>' + tags.join('') + '</td></tr>';
  }
  html += '</tbody></table>';
  html += '<div class="ql-sub">总等级阈值</div><table class="ql-table"><thead><tr><th style="width:100px;">等级</th><th style="width:120px;">分数区间</th><th>标准描述</th></tr></thead><tbody>';
  for (var r = 0; r < GRADE_RULES.length; r++) {
    var gr = GRADE_RULES[r];
    var cls2 = gr.grade === '优秀' ? 't-ok' : (gr.grade === '不达标' ? 't-fail' : 't-pass');
    html += '<tr><td><span class="ql-tag ' + cls2 + '">' + escHtml(gr.grade) + '</span></td><td>' + gr.minScore + ' – ' + gr.maxScore + ' 分</td><td>' + escHtml(gr.description || '') + '</td></tr>';
  }
  html += '</tbody></table>';
  var totalMax = getDimMax('语言语法表达') + getDimMax('方案合理性') + getDimMax('流程&操作完整性') + getDimMax('服务技巧') + getDimMax('服务态度');
  html += '<div class="ql-note" style="margin-top:10px;">总分 = 语言语法表达 ＋ 方案合理性 ＋ 流程&amp;操作完整性 ＋ 服务技巧 ＋ 服务态度（平台禁忌为红线，命中即整单 0 分）。当前满分合计 <b>' + totalMax + '</b> 分。</div>';
  wrap.innerHTML = html;
  renderQcLogicLive();
}

// ============================================================
// 质检逻辑板块 · 实时同步层
// 把说明书里所有会随「质检标准」页 / 「质检知识库」/ 当前明细变化的数字，
// 在每次进入本页时重算一次，避免出现「文字与看板实际不一致」。
// ============================================================
function qlEl(id) { return document.getElementById(id); }
function qlSetText(id, text) { var el = qlEl(id); if (el) el.textContent = String(text == null ? '' : text); }
function qlNum(v) { var n = Number(v); return isFinite(n) ? n : 0; }
function qlIssuesHas(list, kw) {
  for (var i = 0; i < (list || []).length; i++) if (String(list[i]).indexOf(kw) >= 0) return true;
  return false;
}
// 档位分值分布 → 「40 分 70 条 · 36 分 51 条 …」（只列非负分，红线/通过标记不参与）
function qlDistText(map) {
  var keys = [];
  for (var k in map) if (Object.prototype.hasOwnProperty.call(map, k)) { var n = Number(k); if (isFinite(n) && n >= 0) keys.push(n); }
  if (!keys.length) return '暂无可用数据';
  keys.sort(function(a, b) { return b - a; });
  return keys.map(function(n) { return n + ' 分 ' + map[n] + ' 条'; }).join(' · ');
}
// 等级阈值文案：≥86 优秀 / 80–85 达标 / ≤79 不达标（实时读 GRADE_RULES）
function qlGradeThresholdText() {
  var rules = (GRADE_RULES || []).slice().sort(function(a, b) { return qlNum(b.minScore) - qlNum(a.minScore); });
  var parts = [];
  for (var i = 0; i < rules.length; i++) {
    var min = qlNum(rules[i].minScore);
    if (i === 0) parts.push('≥' + min + ' ' + rules[i].grade);
    else {
      var upper = qlNum(rules[i - 1].minScore) - 1;
      parts.push((min <= 0 ? '≤' + upper : min + '–' + upper) + ' ' + rules[i].grade);
    }
  }
  return parts.join(' / ');
}
// 当前明细的落点统计（每次进入本页实时重算，不用手写快照）
function getQcLogicStats() {
  var st = {
    total: results.length, na: 0, ref: 0, redline: 0,
    dist: {}, procUp: 0,
    procFail: { reg: 0, regRefund: 0, regFeedback: 0, regReplen: 0, refundBlank: 0, followUp: 0, noStep: 0, redline: 0 },
    kb: { good: 0, bad: 0 }, kbMix: { good: 0, bad: 0, knowledge: 0, ref: 0 }, exGateBlocked: 0
  };
  for (var d0 = 0; d0 < DIM_NAMES.length; d0++) st.dist[DIM_NAMES[d0]] = {};
  for (var i = 0; i < results.length; i++) {
    var r = results[i] || {};
    if (r.exGate && r.exGate.blocked) st.exGateBlocked++;
    if (r.grade === '无法质检') { st.na++; continue; }
    if (isReferenceCaseResult(r)) st.ref++;
    if (r.redlineViolation) st.redline++;
    for (var d = 0; d < DIM_NAMES.length; d++) {
      var sc = (r.scores || {})[DIM_NAMES[d]];
      if (sc === undefined || sc === null) continue;
      st.dist[DIM_NAMES[d]][sc] = (st.dist[DIM_NAMES[d]][sc] || 0) + 1;
    }
    var pd = (r.details || {})['流程&操作完整性'] || {};
    var pi = pd.issues || [];
    if (pd.grade === '不达标') {
      var checks = pd.sopChecks || [], bad = 0;
      if (checks.length) {
        for (var c = 0; c < checks.length; c++) {
          var ck = checks[c] || {};
          if (!ck.acted || ck.consistent) continue;
          bad++;
          if (ck.key === 'refundReg') { st.procFail.regRefund++; if (!String(ck.value == null ? '' : ck.value).trim()) st.procFail.refundBlank++; }
          else if (ck.key === 'issueFeedback') st.procFail.regFeedback++;
          else if (ck.key === 'replenishment') st.procFail.regReplen++;
        }
      }
      if (bad) st.procFail.reg++;
      else if (r.redlineViolation) st.procFail.redline++;
      else if (qlIssuesHas(pi, '遗漏跟进')) st.procFail.followUp++;
      else if (checks.length) st.procFail.noStep++;
      else if (qlIssuesHas(pi, '核查明细不一致') || /是否有退款登记|是否有问题反馈|是否有补件/.test(pi.join('；'))) {
        var txt = pi.join('；');
        st.procFail.reg++;
        if (/是否有退款登记/.test(txt)) { st.procFail.regRefund++; if (/是否有退款登记」为空白/.test(txt)) st.procFail.refundBlank++; }
        if (/是否有问题反馈/.test(txt)) st.procFail.regFeedback++;
        if (/是否有补件/.test(txt)) st.procFail.regReplen++;
      }
      else st.procFail.noStep++;
    } else if (pd.grade) st.procUp++;
    var ks = r.knowledgeSummary || {};
    if (ks.goodHits) st.kb.good++;
    if (ks.badHits) st.kb.bad++;
  }
  for (var m = 0; m < KNOWLEDGE_BASE.length; m++) {
    var it = KNOWLEDGE_BASE[m] || {};
    if (it.kind === 'reference-case') st.kbMix.ref++;
    else if (it.type === 'case-good') st.kbMix.good++;
    else if (it.type === 'case-bad') st.kbMix.bad++;
    else st.kbMix.knowledge++;
  }
  return st;
}
// 数据落点前缀：条数实时统计，不再写死快照日期
function qlLandingPrefix(st) {
  return '本批数据落点（基于当前明细实时统计，共 ' + st.total + ' 条）';
}
function renderQcLogicLive() {
  var maxLang = getDimMax('语言语法表达'), maxSol = getDimMax('方案合理性'), maxProc = getDimMax('流程&操作完整性'),
    maxSkill = getDimMax('服务技巧'), maxAtt = getDimMax('服务态度');
  var procPass = getStandardScore('流程&操作完整性', '达标'); if (!(procPass > 0)) procPass = 25;
  var procFail = getStandardScore('流程&操作完整性', '不达标'); if (!(procFail > 0)) procFail = 10;
  var procPartial = Math.round(procPass * QC_SCORE.procPartialRatio);
  var langPass = getStandardScore('语言语法表达', '达标'); if (!(langPass > 0)) langPass = 5;
  var SOL = QC_SCORE.solution, SK = QC_SCORE.skill, AT = QC_SCORE.attitude;

  // —— 目录与各节标题的满分 ——
  qlSetText('qlTocLang', maxLang); qlSetText('qlTocSol', maxSol); qlSetText('qlTocProc', maxProc);
  qlSetText('qlTocSkill', maxSkill); qlSetText('qlTocAtt', maxAtt);
  qlSetText('qlMaxLang', maxLang); qlSetText('qlMaxSol', maxSol); qlSetText('qlMaxProc', maxProc);
  qlSetText('qlMaxSkill', maxSkill); qlSetText('qlMaxAtt', maxAtt);

  // —— 0 节流程图 ——
  var totalMax = maxLang + maxSol + maxProc + maxSkill + maxAtt;
  qlSetText('qlTotalMax', totalMax);
  qlSetText('qlFlowLang', maxLang); qlSetText('qlFlowSol', maxSol); qlSetText('qlFlowProc', maxProc);
  qlSetText('qlFlowSkill', maxSkill); qlSetText('qlFlowAtt', maxAtt);
  qlSetText('qlFlowTotalMax', totalMax);
  qlSetText('qlFlowGrade', qlGradeThresholdText());

  // —— 各维度档位分值 ——
  qlSetText('qlLangPass', langPass); qlSetText('qlLangPass2', langPass);
  qlSetText('qlSolFail', SOL.fail); qlSetText('qlSolFail2', SOL.fail);
  qlSetText('qlSolEx', SOL.excellent); qlSetText('qlSolPassOne', SOL.passOne); qlSetText('qlSolPassNone', SOL.passNone);
  qlSetText('qlProcFail', procFail); qlSetText('qlProcFail2', procFail);
  qlSetText('qlProcFail3', procFail); qlSetText('qlProcFail4', procFail);
  qlSetText('qlProcPass', procPass); qlSetText('qlProcPass2', procPass); qlSetText('qlProcPass3', procPass);
  qlSetText('qlProcPartial', procPartial); qlSetText('qlProcPartial3', procPartial);
  qlSetText('qlSkillEx', SK.excellent); qlSetText('qlSkillStrong', SK.passStrong);
  qlSetText('qlSkillOne', SK.passOne); qlSetText('qlSkillFail', SK.fail);
  qlSetText('qlAttEx', AT.excellent); qlSetText('qlAttPass', AT.passCount);
  qlSetText('qlAttOther', AT.other); qlSetText('qlAttFail', AT.fail);
  qlSetText('qlAttOther2', AT.other); qlSetText('qlAttFail2', AT.fail);
  qlSetText('qlProcRatioPct', Math.round(QC_SCORE.procPartialRatio * 100));

  // —— 知识库叠加比例（与引擎常量同源） ——
  qlSetText('qlKbFloorPct', Math.round(KB_SOP_FLOOR_RATIO * 100));
  qlSetText('qlKbDeductPct', Math.round(KB_BAD_DEDUCT_RATIO * 100));
  qlSetText('qlKbDeductMin', KB_BAD_DEDUCT_MIN);

  // —— 同步状态（版本 / 指纹 / 条数） ——
  qlSetText('qlSyncState', QC_LOGIC_VERSION + ' · ' + standardsFingerprint() + ' · ' + results.length + ' 条明细');
  var st = getQcLogicStats();
  qlSetText('qlExGate', String(st.exGateBlocked || 0));

  // —— 数据落点 ——
  var st = getQcLogicStats();
  var prefix = qlLandingPrefix(st);
  qlSetText('qlLandLang', prefix + '：' + qlDistText(st.dist['语言语法表达']) + (st.redline ? '（含红线条 ' + st.redline + ' 条，整单 0 分）' : '') + '。');
  qlSetText('qlLandSol', prefix + '：' + qlDistText(st.dist['方案合理性']) + (st.redline ? '（含红线条 ' + st.redline + ' 条）' : '') + '。');
  qlSetText('qlLandSkill', prefix + '：' + qlDistText(st.dist['服务技巧']) + (st.redline ? '（含红线条 ' + st.redline + ' 条）' : '') + '。');
  qlSetText('qlLandAtt', prefix + '：' + qlDistText(st.dist['服务态度']) + (st.redline ? '（含红线条 ' + st.redline + ' 条）' : '') + '。');
  var pf = st.procFail, procFailTotal = pf.reg + pf.followUp + pf.noStep + pf.redline;
  qlSetText('qlLandProc', prefix + '：' + qlDistText(st.dist['流程&操作完整性']) + '。不达标 ' + procFailTotal + ' 条中：登记类 ' + pf.reg + ' 条（退款登记 ' + pf.regRefund + ' + 问题反馈 ' + pf.regFeedback + '）、遗漏跟进 ' + pf.followUp + ' 条、未体现操作步骤 ' + pf.noStep + ' 条' + (pf.redline ? '、红线 ' + pf.redline + ' 条' : '') + (pf.refundBlank ? '。其中 ' + pf.refundBlank + ' 条为退款登记空白，需重传带齐四列登记的完整表才能消除。' : '。'));
  qlSetText('qlLandProh', prefix + '：红线 ' + st.redline + ' 条；通过 ' + (st.total - st.na - st.redline) + ' 条；无法质检 ' + st.na + ' 条。');
  qlSetText('qlLandKb', prefix + '：' + st.kb.good + ' 条命中好案例获得保底、' + st.kb.bad + ' 条命中坏案例被扣分、' + st.ref + ' 条参考案例。');
  qlSetText('qlKbComposition', '当前「质检知识库」共 ' + KNOWLEDGE_BASE.length + ' 条：好案例 ' + st.kbMix.good + ' · 不好案例 ' + st.kbMix.bad + ' · 质检知识 ' + st.kbMix.knowledge + ' · 参考案例 ' + st.kbMix.ref + '（增删知识后本页统计与明细会同步刷新）。');
  qlSetText('qlEdgeRegBlank', pf.refundBlank);
}

// ============================================================
// 质检完成后
// ============================================================
function onQualityCheckDone() {
  document.getElementById('detailEmpty').style.display = 'none';
  document.getElementById('detailContent').style.display = 'block';
  document.getElementById('dataInfo').style.display = 'block';
  document.getElementById('dataCount').textContent = results.length;
  document.getElementById('detailBadge').textContent = results.length;
  populateFilters();
  renderDetailTable();
  renderDashboard();
  // 「质检逻辑」板块的落点统计与当前明细联动：重跑完成后同步刷新
  if (document.getElementById('qcLogicScoreTableWrap')) renderQcLogic();
  cloudSaveState().then(function(){ showToast('质检完成！共质检 ' + results.length + ' 条数据，已保存到云端', 'success'); }).catch(function(err) { showToast('质检完成，但云端保存失败：' + ((err && (err.message || err.details || err.hint)) || '请检查云端权限'), 'error'); });
}


// ============================================================
// 明细筛选：账号/客服/等级多选 + 批量粘贴（2026-11-17）
// 口径：多选内部是「或」；多选之间、与批量粘贴之间是「且」。
//       批量粘贴按换行/逗号/分号/空白切分，精确匹配「平台单号」或「账号」；
//       长度 >= 6 的词额外允许包含匹配（方便粘贴截断单号）。
// 兼容：原 <select> 保留但隐藏，jumpToDetailByDim 等写 .value 仍然有效。
// ============================================================
var multiSelState = { account: [], agent: [], grade: [] };
var bulkTerms = [];
var MULTI_META = {
  account: { sel: 'detailFilterAccount', label: '账号' },
  agent:   { sel: 'detailFilterAgent',   label: '客服' },
  grade:   { sel: 'detailFilterGrade',   label: '等级' }
};
function multiOptions(key) {
  var sel = document.getElementById(MULTI_META[key].sel);
  if (!sel) return [];
  var out = [];
  for (var i = 0; i < sel.options.length; i++) if (sel.options[i].value) out.push(sel.options[i].value);
  return out;
}
function getMultiValues(key) {
  var arr = multiSelState[key] || [];
  if (arr.length) return arr;
  var sel = document.getElementById(MULTI_META[key].sel);
  return (sel && sel.value) ? [sel.value] : [];
}
function multiBtnText(key) {
  var v = getMultiValues(key);
  return v.length ? (MULTI_META[key].label + '：已选 ' + v.length) : ('全部' + MULTI_META[key].label);
}
function updateMultiBtn(key) {
  var b = document.querySelector('#msel_' + key + ' .msel-btn');
  if (b) b.innerHTML = escHtml(multiBtnText(key)) + ' <span class="msel-caret">▾</span>';
}
function renderMultiSel(key) {
  var wrap = document.getElementById('msel_' + key);
  if (!wrap) return;
  var opts = multiOptions(key), vals = getMultiValues(key);
  var h = '<button type="button" class="msel-btn" onclick="toggleMultiPanel(\'' + key + '\')">'
        + escHtml(multiBtnText(key)) + ' <span class="msel-caret">▾</span></button>';
  h += '<div class="msel-panel" id="mselpanel_' + key + '" style="display:none;">';
  h += '<div class="msel-tools"><span onclick="setMultiAll(\'' + key + '\',true)">全选</span><span onclick="setMultiAll(\'' + key + '\',false)">清空</span></div>';
  for (var i = 0; i < opts.length; i++) {
    var v = opts[i], on = vals.indexOf(v) >= 0;
    h += '<label class="msel-opt"><input type="checkbox" value="' + escHtml(v) + '"' + (on ? ' checked' : '')
       + ' onchange="onMultiCheck(\'' + key + '\',this)"><span>' + escHtml(v) + '</span></label>';
  }
  h += '</div>';
  wrap.innerHTML = h;
}
function refreshAllMultiSel() {
  renderMultiSel('account'); renderMultiSel('agent'); renderMultiSel('grade');
}
function toggleMultiPanel(key) {
  var p = document.getElementById('mselpanel_' + key);
  if (!p) return;
  var open = p.style.display !== 'none';
  ['account','agent','grade'].forEach(function(k) {
    var el = document.getElementById('mselpanel_' + k);
    if (el) el.style.display = 'none';
  });
  p.style.display = open ? 'none' : 'block';
}
function clearHiddenSelect(key) {
  var sel = document.getElementById(MULTI_META[key].sel);
  if (sel) sel.value = '';
}
function onMultiCheck(key, el) {
  var cur = getMultiValues(key).slice(), idx = cur.indexOf(el.value);
  if (el.checked && idx < 0) cur.push(el.value);
  if (!el.checked && idx >= 0) cur.splice(idx, 1);
  multiSelState[key] = cur;
  clearHiddenSelect(key);
  updateMultiBtn(key);
  renderDetailTable();
}
function setMultiAll(key, on) {
  multiSelState[key] = on ? multiOptions(key) : [];
  clearHiddenSelect(key);
  renderMultiSel(key);
  var p = document.getElementById('mselpanel_' + key);
  if (p) p.style.display = 'block';
  renderDetailTable();
}
function resetMultiSels() {
  multiSelState = { account: [], agent: [], grade: [] };
  bulkTerms = [];
  var t = document.getElementById('detailBulk');
  if (t) t.value = '';
  var hnt = document.getElementById('bulkHint');
  if (hnt) hnt.textContent = '';
  refreshAllMultiSel();
}
function applyBulkFilter() {
  var t = document.getElementById('detailBulk');
  var raw = t ? t.value : '';
  bulkTerms = raw.split(/[\n\r,，;；\t ]+/).map(function(x) { return x.trim(); }).filter(function(x) { return !!x; });
  var hnt = document.getElementById('bulkHint');
  if (hnt) hnt.textContent = bulkTerms.length ? ('已粘贴 ' + bulkTerms.length + ' 项') : '';
  renderDetailTable();
}
function clearBulkFilter() {
  var t = document.getElementById('detailBulk');
  if (t) t.value = '';
  bulkTerms = [];
  var hnt = document.getElementById('bulkHint');
  if (hnt) hnt.textContent = '';
  renderDetailTable();
}
function bulkMatches(r) {
  if (!bulkTerms.length) return true;
  for (var i = 0; i < bulkTerms.length; i++) {
    var t = bulkTerms[i];
    if (r.order === t || r.account === t) return true;
    if (t.length >= 6 && ((r.order || '').indexOf(t) >= 0 || (r.account || '').indexOf(t) >= 0)) return true;
  }
  return false;
}
function multiMatches(value, key) {
  var vals = getMultiValues(key);
  if (!vals.length) return true;
  // 客服维度同人归一：选中「尹玉婷」也要命中「尹玉婷1」的单（反之亦然）
  if (key === 'agent') value = canonicalAgentName(value);
  return vals.indexOf(value) >= 0;
}

function populateFilters() {
  var accounts = {}, agents = {}, groups = {};
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.account) accounts[r.account] = true;
    if (r.agent) { agents[canonicalAgentName(r.agent)] = true; groups[dashboardGroup(r)] = true; }
  }
  function buildOpts(obj, allLabel) {
    var html = '<option value="">' + allLabel + '</option>';
    Object.keys(obj).sort().forEach(function(a) { html += '<option value="' + escHtml(a) + '">' + escHtml(a) + '</option>'; });
    return html;
  }
  document.getElementById('detailFilterGroup').innerHTML = buildOpts(groups, '全部');
  document.getElementById('detailFilterAccount').innerHTML = buildOpts(accounts, '全部');
  document.getElementById('detailFilterAgent').innerHTML = buildOpts(agents, '全部');
  var dimHtml = '<option value="">全部</option>';
  for (var di = 0; di < DIM_NAMES.length; di++) dimHtml += '<option value="' + escHtml(DIM_NAMES[di]) + '">' + escHtml(DIM_NAMES[di]) + '</option>';
  document.getElementById('detailFilterDim').innerHTML = dimHtml;
  document.getElementById('detailFilterAppeal').value = '';
  var fAsEl = document.getElementById('detailFilterAssessed');
  if (fAsEl) fAsEl.value = '';
  document.getElementById('dashFilterGroup').innerHTML = buildOpts(groups, '全部组别');
  document.getElementById('dashFilterAccount').innerHTML = buildOpts(accounts, '全部账号');
  document.getElementById('dashFilterAgent').innerHTML = buildOpts(agents, '全部客服');
  refreshAllMultiSel();
}

function onDetailFilterChange() {
  var group = document.getElementById('detailFilterGroup').value;
  var agents = {};
  for (var i = 0; i < results.length; i++) if (!group || getGroupByAgent(results[i].agent) === group) agents[canonicalAgentName(results[i].agent)] = true;
  var html = '<option value="">全部</option>';
  Object.keys(agents).sort().forEach(function(a) { html += '<option value="' + escHtml(a) + '">' + escHtml(a) + '</option>'; });
  document.getElementById('detailFilterAgent').innerHTML = html;
  renderMultiSel('agent');
  renderDetailTable();
}

function onDashFilterChange() {
  var group = document.getElementById('dashFilterGroup').value;
  var agents = {}, accounts = {};
  for (var i = 0; i < results.length; i++) {
    if (!group || dashboardGroup(results[i]) === group) {
      agents[canonicalAgentName(results[i].agent)] = true;
      accounts[results[i].account] = true;
    }
  }
  function buildOpts(obj, label) {
    var html = '<option value="">' + label + '</option>';
    Object.keys(obj).sort().forEach(function(a) { html += '<option value="' + escHtml(a) + '">' + escHtml(a) + '</option>'; });
    return html;
  }
  document.getElementById('dashFilterAgent').innerHTML = buildOpts(agents, '全部客服');
  document.getElementById('dashFilterAccount').innerHTML = buildOpts(accounts, '全部账号');
  renderDashboard();
}

// ============================================================
// 「去信数 / 占比 / 是否考核」按**单**算（2026-11-16 v4 定稿）
// 口径：
//   · 1 封客服去信 = 回邮数据里带 [发送成功] / [发送失败] / [已撤回] 的一封邮件
//   · 每封客服去信前面带署名（如「林文玉2026-08-07 16:23:46[发送成功]」），按署名归到具体客服
//   · 去信数 = 本单**该客服**（明细「客服」字段那位）发出的信封数
//   · 占比   = 该客服去信 ÷ 本单全部客服去信（同一顾客可能被多位客服服务过）
//     一封都没有 → 0.0%（按要求显示 0%，不是「-」）
//   · 是否考核 = 占比 ≥ 50% → 是；否则 否（只有「是」的单进数据看板）
//   · 兜底1：回邮里完全没有署名（老格式）→ 整单客服去信都归该客服（占比 100%）
//   · 兜底2：无「收起」结构、也无「拉取时间」标记的纯回邮 → 按 1 封且归该客服
//   · 客服维度跨单累计数只放在单元格 tooltip 里，不占列
// 展示名刻意取短：列头「去信数」「占比」「是否考核」。
// ============================================================
function countAgentLetters(reply) {
  var src = String(reply == null ? '' : reply);
  if (!src || src === '无联客记录') return 0;
  var n = (src.match(/\[(发送成功|发送失败|已撤回)\]/g) || []).length;
  // 兜底：既无会话结构（无「收起」）、也没有拉取时间/发送状态标记的纯回邮，按「整段就是一封客服去信」计 1
  // （只有顾客来信、没有任何客服去信的纯客诉文本不算，避免把 0 封误记成 1 封）
  if (!n && src.indexOf('收起') < 0 && src.indexOf('拉取时间') < 0) n = 1;
  return n;
}
function normalizeAgentName(s) {
  return String(s == null ? '' : s).replace(/[\s·・.。]/g, '').toLowerCase();
}
// 同人别名（2026-11-19 用户确认）：登录账号带数字后缀与本人名是同一个客服，
// 考核统计必须合并为一个人（否则看板/汇总把尹玉婷1、尹玉婷拆成两个人，数据各少一半）
var AGENT_ALIAS = { '尹玉婷1': '尹玉婷', '李肖1': '李肖' };
function canonicalAgentName(name) {
  var s = String(name == null ? '' : name).trim();
  return AGENT_ALIAS[s] || s;
}
// 取一封客服回邮的署名：发送状态标记前面那一段的尾部名字
// 注意：导出文本里常混入界面按钮文字（「复制」/「收起」/「收起中」等），
// 按「收起」切块后会把「中」粘到下一块的署名前面（→「中林文玉」），必须剥掉
function agentNameBeforeMark(block, markIdx) {
  var pre = block.substring(0, markIdx).replace(/[\s　]+$/, '');
  pre = pre.replace(/\d{4}[-/.]\d{1,2}[-/.]\d{1,2}(\s*\d{1,2}:\d{2}(:\d{2})?)?\s*$/, '');
  pre = pre.replace(/[（(]拉取时间[^)）]*[)）]\s*$/, '');
  if (pre.slice(-4) === '收起中') pre = pre.slice(0, -3);
  else if (pre.slice(-2) === '收起') pre = pre.slice(0, -2);
  if (pre.slice(-2) === '复制') pre = pre.slice(0, -2);
  var m = pre.match(/([^\s，。！？、,.!?：:；;()（）\[\]]{1,24})\s*$/);
  var raw = m ? m[1] : '';
  // 再兜一层：署名前面粘连的界面文字
  raw = raw.replace(/^(复制|收起|中)+/, '').replace(/(复制|收起)+$/, '');
  return raw;
}
// 署名比对：允许署名比客服名多出前缀（如「中林文玉」= 界面上残留的「中」+ 林文玉）；
// 也允许账号名比署名多出数字后缀（如登录账号「尹玉婷1」/「李肖1」，邮件署名是本名「尹玉婷」/「李肖」）
function agentNameMatches(candidate, target) {
  // 先做同人别名归一（尹玉婷1=尹玉婷、李肖1=李肖），再走通用前后缀比对
  candidate = canonicalAgentName(candidate);
  target = canonicalAgentName(target);
  var c = normalizeAgentName(candidate), t = normalizeAgentName(target);
  if (!c || !t) return false;
  if (c === t) return true;
  if (c.length > t.length && c.slice(-t.length) === t) return true;
  var tBase = t.replace(/\d+$/, '');
  if (tBase && tBase !== t) return c === tBase || (c.length > tBase.length && c.slice(-tBase.length) === tBase);
  return false;
}
// 本单去信账单：mine = 该客服封数，total = 本单客服去信合计，pct = 占比，assessed = 是否考核
// 2026-11-19 修复：旧版把算错的 _part 写进了云端/本地缓存，导致匹配规则修好后页面仍显示 0%。
// 现在只复用「本次运行内存里算出、且带当前算法版本戳」的结果；历史脏 _part 一律忽略并重算。
var QC_PART_VER = 2;
function sessionParticipation(r) {
  if (r && r._part && r._part.v === QC_PART_VER) return r._part;
  var reply = String((r && r.reply) == null ? '' : r.reply);
  var res = { mine: 0, total: 0, pct: 0, assessed: false };
  if (reply && reply !== '无联客记录') {
    var blocks = reply.indexOf('收起') >= 0 ? reply.split('收起') : [reply];
    var named = 0, target = normalizeAgentName(canonicalAgentName(r && r.agent));
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (!b || !b.trim()) continue;
      var re = /\[(发送成功|发送失败|已撤回)\]/g, mm;
      while ((mm = re.exec(b)) !== null) {
        res.total++;
        var nm = agentNameBeforeMark(b, mm.index);
        if (nm) { named++; if (target && agentNameMatches(nm, target)) res.mine++; }
      }
    }
    if (!res.total && reply.indexOf('收起') < 0 && reply.indexOf('拉取时间') < 0) { res.total = 1; res.mine = 1; }
    if (res.total && !named) res.mine = res.total;
  }
  res.pct = res.total > 0 ? (res.mine / res.total) * 100 : 0;
  res.assessed = res.mine > 0 && res.pct >= 50;
  res.v = QC_PART_VER;
  if (r) r._part = res;
  return res;
}
// 看板统计准入：只有参与考核的单进数据看板
function isAssessedResult(r) { return sessionParticipation(r).assessed; }
function recordSendCount(r) { return sessionParticipation(r).mine; }
// 明细列：count = 该客服本单去信数，pct = 该客服占本单客服去信的比
function orderSendStat(r) {
  var p = sessionParticipation(r);
  return { count: p.mine, pct: p.total > 0 ? p.pct.toFixed(1) + '%' : '0.0%' };
}
function buildSendStat() {
  var byAgent = {}, total = 0;
  for (var i = 0; i < results.length; i++) {
    var n = recordSendCount(results[i]);
    if (!n) continue;
    var a = canonicalAgentName(results[i].agent) || '（未填写客服）';
    byAgent[a] = (byAgent[a] || 0) + n;
    total += n;
  }
  return { byAgent: byAgent, total: total };
}

// ============================================================
// 渲染：质检明细表
// ============================================================
// ===== overview strip below search bar (2026-11-17) =====
// 口径（只写在代码注释里，界面上不显示说明文字）：
//  - 客服 / 账号 前 5：当前筛选结果内出现次数最多的 5 个值；色块宽度 = 该项计数 ÷ 第 1 名计数。
//  - 行内「总数」= 该客服/账号在范围内的单数；「考核/不考核」= 其中参与考核 / 未参与的单数；
//    「均去信」= 该客服（该账号全部客服）在这些考核单上的去信总数 ÷ 考核单数。
//  - 质检总数 = 当前筛选结果条数。
//  - 平均去信数 = 全部客服去信总数 ÷ 参与考核的订单数（按订单算，不分客服），回答「一单平均要回几封」。
//  - 等级显示情况 = 当前筛选结果各等级计数（参考案例单独计）。
//  - 重点关注：只要「特别」的，一般的不写 ——
//      ① 平台禁忌红线违规（整单 0 分）；
//      ② 服务态度/服务技巧不达标且问题文本命中「强硬 / 质问 / 反问 / 责备 / 强迫 / 推诿」等会惹怒买家的表述；
//      ③ 同一账号同类问题累计 ≥ 2 次（重复犯）。
//    仅「缺乏同理心表达、个性化称呼」这类一般问题不进重点关注（实测只有这种的会有一大片），
//    要看全量走「等级 = 不达标」。默认显示 5 行，超出折叠。
// 交互（全部在本页联动，不跳页）：
//  - 点客服 / 账号行 → 只筛该值（再点一次取消），表格与整条概览一起收窄。
//  - 点重点关注行 → 用批量筛选锁定该单号，直接定位到明细行。
//  - 点等级胶囊 / 考核数字 → 联动「等级」「是否考核」筛选。
var ovFocusOpen = false;
var lastOvFiltered = null;
var OV_SEVERE_RE = /强硬|质问|反问|责备|命令式|说教|强迫|强行|必须接受|不接受则|推诿|不耐烦|敷衍|惹怒/;
function ovIssueText(r) {
  var t = '';
  for (var d = 0; d < DIM_NAMES.length; d++) {
    var dn = DIM_NAMES[d];
    if (dn !== '服务技巧' && dn !== '服务态度') continue;
    var det = r.details && r.details[dn];
    if (!det || det.grade !== '不达标' || !(r.scores[dn] >= 0)) continue;
    t += ' ' + String(det.detail || '') + ' ' + (det.issues || []).join(' ');
  }
  return t;
}
function ovFocusList(data) {
  // 同一账号服务意识不达标次数（判断「重复犯」）
  var cntByAcc = {};
  for (var i = 0; i < data.length; i++) {
    var rr = data[i];
    if (rr.redlineViolation) continue;
    var txt = ovIssueText(rr);
    if (!txt.trim()) continue;
    var ak = String(rr.account || '未填写账号');
    cntByAcc[ak] = (cntByAcc[ak] || 0) + 1;
  }
  var out = [];
  for (var j = 0; j < data.length; j++) {
    var r = data[j];
    if (r.redlineViolation) {
      out.push({ r: r, sev: 0, tag: '违规', why: '平台禁忌红线违规，整单 0 分' });
      continue;
    }
    var text = ovIssueText(r);
    if (!text.trim()) continue;
    var ak2 = String(r.account || '未填写账号');
    var rep = cntByAcc[ak2] || 1;
    var tag = '';
    if (/强迫|强行|必须接受|不接受则/.test(text)) tag = '强迫接受';
    else if (/强硬|质问|反问|责备|命令式|说教|不耐烦|敷衍|惹怒/.test(text)) tag = '语气强硬';
    else if (rep >= 2) tag = '重复' + rep + '次';
    if (!tag) continue;
    out.push({ r: r, sev: (tag === '重复' + rep + '次') ? 2 : 1, tag: tag, why: '服务态度/服务技巧：' + text.replace(/\s+/g, ' ').trim().slice(0, 80) });
  }
  out.sort(function (a, b) {
    if (a.sev !== b.sev) return a.sev - b.sev;
    var sa = a.r.totalScore >= 0 ? a.r.totalScore : 0, sb = b.r.totalScore >= 0 ? b.r.totalScore : 0;
    return sa - sb || String(a.r.order).localeCompare(String(b.r.order));
  });
  return out;
}
function ovScrollToTable() {
  var t = document.getElementById('detailTable');
  if (!t) return;
  var box = t.parentNode;
  setTimeout(function () {
    // 表格已经在视野里就不动页面，避免点一下整页跳走
    var rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) return;
    try { box.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { box.scrollIntoView(); }
  }, 40);
}
// 点客服 / 账号名 → 单选该值；再点取消
function ovPickRank(key, value) {
  var cur = getMultiValues(key);
  var on = cur.length === 1 && cur[0] === value;
  multiSelState[key] = on ? [] : [value];
  var sel = document.getElementById(MULTI_META[key].sel);
  if (sel) sel.value = '';
  renderMultiSel(key);
  renderDetailTable();
  ovScrollToTable();
}
// 清掉某个维度的全部选择（多选时用）
function ovClearKey(key) {
  multiSelState[key] = [];
  var sel = document.getElementById(MULTI_META[key].sel);
  if (sel) sel.value = '';
  renderMultiSel(key);
  renderDetailTable();
}
// 点等级胶囊 → 联动等级筛选
function ovPickGrade(g) {
  var cur = getMultiValues('grade');
  var on = cur.length === 1 && cur[0] === g;
  multiSelState['grade'] = on ? [] : [g];
  var sel = document.getElementById('detailFilterGrade');
  if (sel) sel.value = '';
  renderMultiSel('grade');
  renderDetailTable();
  ovScrollToTable();
}
// 点考核 / 不考核数字 → 联动是否考核筛选
function ovPickAssessed(v) {
  var s = document.getElementById('detailFilterAssessed');
  if (!s) return;
  s.value = (s.value === v) ? '' : v;
  renderDetailTable();
  ovScrollToTable();
}
// 点重点关注行 → 用批量筛选锁定该单号
function ovPickOrder(order) {
  if (!order) return;
  var t = document.getElementById('detailBulk');
  if (t) t.value = order;
  applyBulkFilter();
  ovScrollToTable();
}
function ovExpandFocus() {
  ovFocusOpen = !ovFocusOpen;
  if (lastOvFiltered) renderDetailOverview(lastOvFiltered);
}
// 一键还原概览条上所有联动筛选
function ovClearAll() {
  multiSelState = { account: [], agent: [], grade: [] };
  bulkTerms = [];
  var t = document.getElementById('detailBulk'); if (t) t.value = '';
  var h = document.getElementById('bulkHint'); if (h) h.textContent = '';
  var s = document.getElementById('detailFilterAssessed'); if (s) s.value = '';
  refreshAllMultiSel();
  renderDetailTable();
}
var ovRankOpen = {};
function ovToggleRank(key){ ovRankOpen[key] = !ovRankOpen[key]; if (typeof lastOvFiltered !== "undefined") renderDetailOverview(lastOvFiltered); }
function ovTogglePop(popId){ var el = document.getElementById(popId); if(!el) return; el.style.display = (el.style.display === "none" || !el.style.display) ? "block" : "none"; }
function renderDetailOverview(filtered) {
  var host = document.getElementById('detailOverview');
  if (!host) return;
  lastOvFiltered = filtered;
  if (!filtered || !filtered.length) { host.innerHTML = ''; return; }
  function topN(key, n) {
    var m = {};
    for (var i = 0; i < filtered.length; i++) {
      var k = canonicalAgentName(filtered[i][key]) || (key === 'agent' ? '未填写客服' : '未填写账号');
      m[k] = (m[k] || 0) + 1;
    }
    var arr = [];
    for (var k2 in m) if (m.hasOwnProperty(k2)) arr.push({ k: k2, n: m[k2] });
    arr.sort(function (a, b) { return b.n - a.n || a.k.localeCompare(b.k, 'zh-CN'); });
    return arr.slice(0, n);
  }
  // 单个客服 / 账号的：考核数、不考核数、均去信（考核单）
  function rankStat(key, value) {
    var assessed = 0, unassessed = 0, letters = 0;
    for (var i = 0; i < filtered.length; i++) {
      var r = filtered[i];
      if ((canonicalAgentName(r[key]) || (key === 'agent' ? '未填写客服' : '未填写账号')) !== value) continue;
      if (!isAssessedResult(r)) { unassessed++; continue; }
      assessed++;
      var p = sessionParticipation(r);
      letters += (key === 'agent' ? (p.mine || 0) : (p.total || 0));
    }
    return { assessed: assessed, unassessed: unassessed, avg: assessed ? (letters / assessed).toFixed(1) : '0.0' };
  }
  function rankBox(key, title) {
    var allArr = topN(key, 9999);
    var picked = getMultiValues(key);
    var top = allArr.length ? allArr[0].n : 1;
    function buildRows(list) {
      var rows = '';
      for (var i = 0; i < list.length; i++) {
        var x = list[i];
        var w = Math.max(24, Math.round(x.n / top * 100));
        var on = (picked.length === 1 && picked[0] === x.k) ? ' on' : '';
        var st = rankStat(key, x.k);
        rows += '<div class="ov-rank r' + (i + 1) + on + '" title="只看 ' + escHtml(x.k) + ' 的数据（再点一次取消）" onclick="ovPickRank(\'' + key + '\',' + htmlAttrJsStr(x.k) + ')">'
              + '<span class="ov-fill" style="width:' + w + '%"></span>'
              + '<span class="ov-rk">' + (i + 1) + '</span>'
              + '<span class="ov-nm">' + escHtml(x.k) + '</span>'
              + '<span class="ov-c1">' + x.n + '</span>'
              + '<span class="ov-c2">' + st.assessed + '/' + st.unassessed + '</span>'
              + '<span class="ov-c3">' + st.avg + '</span></div>';
      }
      return rows;
    }
    var rowsInner = buildRows(allArr.slice(0, 5));
    var rows = !rowsInner ? '<div class="ov-empty">暂无数据</div>' : '<div class="ov-rank-list">' + rowsInner + '</div>';
    var reset = '';
    if (picked.length === 1) reset = '<span class="ov-reset" onclick="ovPickRank(\'' + key + '\',' + htmlAttrJsStr(picked[0]) + ')" title="取消该筛选">✕ ' + escHtml(picked[0]) + '</span>';
    else if (picked.length > 1) reset = '<span class="ov-reset" onclick="ovClearKey(\'' + key + '\')" title="取消该筛选">✕ 已筛 ' + picked.length + ' 项</span>';
    var head = '<div class="ov-toprow"><span class="ov-label">' + title + '</span>' + reset
         + '<div class="ov-cols"><span class="ov-c1">总数</span><span class="ov-c2">考核/不考核</span><span class="ov-c3">均去信</span></div></div>';
    var bar = '', pop = '';
    if (allArr.length > 5) {
      var popId = 'ovPop_' + key;
      bar = '<div class="ov-expand-bar" onclick="ovTogglePop(\'' + popId + '\')">▼ 展开全部 ' + allArr.length + ' 人</div>';
      pop = '<div class="ov-pop" id="' + popId + '" style="display:none">'
          + '<div class="ov-pop-head"><span class="ov-label">' + title + '</span>'
          + '<span class="ov-allnum">全部 ' + allArr.length + ' 人</span>'
          + '<div class="ov-cols"><span class="ov-c1">总数</span><span class="ov-c2">考核/不考核</span><span class="ov-c3">均去信</span></div></div>'
          + '<div class="ov-pop-body">' + buildRows(allArr) + '</div>'
          + '<div class="ov-pop-foot"><span class="ov-pop-close" onclick="ovTogglePop(\'' + popId + '\')">▲ 收起</span></div></div>';
    }
    return '<div class="ov-box ov-popbox">' + head + rows + bar + pop + '</div>';
  }

  var assessedN = 0, orderLetters = 0, accSet = {}, agtSet = {}, gradeCnt = {};
  for (var j = 0; j < filtered.length; j++) {
    var r = filtered[j];
    var mine = recordSendCount(r);
    if (mine > 0) {
      accSet[r.account || '未填写账号'] = 1; agtSet[r.agent || '未填写客服'] = 1;
    }
    if (isAssessedResult(r)) {
      assessedN++;
      orderLetters += (sessionParticipation(r).total || 0);
    }
    var g = isReferenceCaseResult(r) ? '参考案例' : (r.grade || '未评级');
    gradeCnt[g] = (gradeCnt[g] || 0) + 1;
  }
  var avgPerOrder = assessedN ? (orderLetters / assessedN).toFixed(1) : '0.0';
  var curGrade = getMultiValues('grade');
  var gradeHtml = ['优秀', '达标', '不达标', '无法质检'].map(function (g) {
    var cls = { '优秀': 'g-you', '达标': 'g-da', '不达标': 'g-bu', '无法质检': 'g-wu' }[g];
    var on = (curGrade.length === 1 && curGrade[0] === g) ? ' on' : '';
    return '<span class="' + cls + on + '" title="只看等级为「' + g + '」的单（再点一次取消）" onclick="ovPickGrade(' + htmlAttrJsStr(g) + ')">' + g + ' ' + (gradeCnt[g] || 0) + '</span>';
  }).join('');
  if (gradeCnt['参考案例']) {
    var onRef = (curGrade.length === 1 && curGrade[0] === '参考案例') ? ' on' : '';
    gradeHtml += '<span class="g-ref' + onRef + '" onclick="ovPickGrade(' + htmlAttrJsStr('参考案例') + ')">参考案例 ' + gradeCnt['参考案例'] + '</span>';
  }
  var curAs = (document.getElementById('detailFilterAssessed') || {}).value || '';
  // 重点关注：做成卡片（标签 + 账号 + 单号 + 一句问题），不足 4 条时用占位把框撑满
  var focus = ovFocusList(filtered);
  var OV_FOCUS_MAX = 4;
  var showN = Math.min(focus.length, OV_FOCUS_MAX);
  function buildFCards(list) {
    var h = '';
    for (var fi = 0; fi < list.length; fi++) {
      var it = list[fi], rr = it.r;
      h += '<div class="ov-fcard' + (it.sev === 0 ? '' : ' amber') + '" title="点击定位到该单" onclick="ovPickOrder(' + htmlAttrJsStr(rr.order) + ')">'
           + '<div class="ov-frow"><span class="ov-tag ' + (it.sev === 0 ? 't-red' : 't-amber') + '">' + escHtml(it.tag) + '</span>'
           + '<span class="ov-facc">' + escHtml(rr.account || '未填写账号') + '</span>'
           + '<span class="ov-ford">' + escHtml(rr.order || '') + '</span></div>'
           + '<div class="ov-fwhy">' + escHtml(it.why) + '</div></div>';
    }
    return h;
  }
  var frows = buildFCards(focus.slice(0, showN));
  var fbar = '', fpop = '';
  if (focus.length > OV_FOCUS_MAX) {
    fbar = '<div class="ov-expand-bar" onclick="ovTogglePop(\'ovPop_focus\')">▼ 展开全部 ' + focus.length + ' 条</div>';
    fpop = '<div class="ov-pop ov-pop-focus" id="ovPop_focus" style="display:none">'
         + '<div class="ov-pop-head"><span class="ov-label ov-focus-title">⚠ 重点关注</span>'
         + '<span class="ov-allnum">全部 ' + focus.length + ' 条</span></div>'
         + '<div class="ov-pop-body">' + buildFCards(focus) + '</div>'
         + '<div class="ov-pop-foot"><span class="ov-pop-close" onclick="ovTogglePop(\'ovPop_focus\')">▲ 收起</span></div></div>';
  }
  if (!focus.length) frows += '<div class="ov-frest">本范围内无需重点关注的记录</div>';
  else if (focus.length < OV_FOCUS_MAX) frows += '<div class="ov-frest">其余记录无需重点关注</div>';
  // 等级分布堆叠条：各等级占比，点色块可直接筛选该等级
  var gradeBarHtml = '';
  (function () {
    var defs = [['优秀', 'var(--success)'], ['达标', 'var(--primary)'], ['不达标', 'var(--danger)'], ['无法质检', 'var(--gray-400)'], ['参考案例', 'var(--warning)']];
    var total = filtered.length || 1;
    var segs = '';
    for (var gi = 0; gi < defs.length; gi++) {
      var gc = gradeCnt[defs[gi][0]] || 0;
      if (!gc) continue;
      var gp = (gc / total * 100).toFixed(1);
      segs += '<span class="gb-seg" style="width:' + gp + '%;background:' + defs[gi][1] + '" title="' + defs[gi][0] + ' ' + gc + ' 条（点击筛选）" onclick="ovPickGrade(' + htmlAttrJsStr(defs[gi][0]) + ')"></span>';
    }
    gradeBarHtml = '<div class="ov-gradebar">' + segs + '</div>';
  })();
  var dirty = getMultiValues('agent').length || getMultiValues('account').length || curGrade.length || curAs || (bulkTerms && bulkTerms.length);
  host.innerHTML =
    rankBox('agent', '客服 · 前 5') +
    rankBox('account', '账号 · 前 5') +
    '<div class="ov-box ov-focusbox"><div class="ov-head"><span class="ov-label ov-focus-title">⚠ 重点关注</span>'
      + (dirty ? '<span class="ov-reset" onclick="ovClearAll()" title="清空概览条上的全部联动筛选">✕ 重置全部</span>' : '<span class="ov-cnt">' + focus.length + '</span>')
      + '</div>' + frows + fbar + fpop + '</div>' +
    '<div class="ov-metrics">' +
      '<div class="ov-metric m-purple"><div class="ov-label">质检总数</div><div class="ov-big">' + filtered.length + '</div><div class="ov-sub">条质检记录</div></div>' +
      '<div class="ov-metric m-blue ov-clk' + (curAs ? ' on' : '') + '" title="点击只看参与考核 / 不参与考核的单"><div class="ov-label">考核 / 不考核</div><div class="ov-big"><span onclick="ovPickAssessed(\'是\')" style="cursor:pointer;">' + assessedN + '</span><small> / <span onclick="ovPickAssessed(\'否\')" style="cursor:pointer;">' + (filtered.length - assessedN) + '</span></small></div><div class="ov-asbar"><span style="width:' + (filtered.length ? (assessedN / filtered.length * 100).toFixed(0) : 0) + '%"></span></div></div>' +
      '<div class="ov-metric m-amber" title="全部客服去信总数 ÷ 参与考核的订单数：一单平均要回几封"><div class="ov-label">平均去信数</div><div class="ov-big">' + avgPerOrder + '<small> 封/单</small></div><div class="ov-sub">' + orderLetters + ' 封 / ' + assessedN + ' 考核单</div></div>' +
      '<div class="ov-metric m-gray"><div class="ov-label">等级分布</div>' + gradeBarHtml + '<div class="ov-grade">' + gradeHtml + '</div></div>' +
    '</div>';
}

// 金额列：形如「外币值 / 人民币值」，用 / 分隔；取"不带货币符号"的那段作为人民币金额
function qcMoney(account, amount) {
  if (amount === undefined || amount === '' || amount === null) return '-';
  var s = String(amount).trim();
  // 外币标识：货币符号 或 外币文字代码/名称（带这些的一侧是外币，跳过）
  var CUR = /[¥￥$€£]|\b(?:USD|EUR|GBP|JPY|AUD|CAD)\b|美元|欧元|英镑|日元|澳元|加元/i;
  // 按 / 切成多段，逐段找"含数字但不带外币标识"的那一段 = 人民币
  var parts = s.split('/');
  for (var i = 0; i < parts.length; i++) {
    var seg = parts[i].trim();
    if (!seg) continue;
    if (CUR.test(seg)) continue;           // 外币段，跳过
    var m = seg.match(/(\d[\d,]*(?:\.\d+)?)/);
    if (m) return '¥' + Number(m[1].replace(/,/g, '')).toFixed(2);
  }
  // 兜底1：整格是纯数字（无 / 分隔）→ 视为人民币
  if (/^-?\d[\d,]*(?:\.\d+)?$/.test(s)) {
    var neg = s.charAt(0) === '-';
    return (neg ? '-' : '') + '¥' + Number(s.replace(/^-/, '').replace(/,/g, '')).toFixed(2);
  }
  // 兜底2：无 / 且带符号时，取最后一个不带符号的数字
  var nums = s.match(/\d[\d,]*(?:\.\d+)?/g);
  if (nums && nums.length) return '¥' + Number(nums[nums.length - 1].replace(/,/g, '')).toFixed(2);
  return s;
}
function renderDetailTable() {
  var fG = document.getElementById('detailFilterGroup').value;
  var fA = getMultiValues('account');
  var fAg = getMultiValues('agent');
  var fGr = getMultiValues('grade');
  var fAp = document.getElementById('detailFilterAppeal').value;
  var fAs = document.getElementById('detailFilterAssessed') ? document.getElementById('detailFilterAssessed').value : '';
  var fDim = document.getElementById('detailFilterDim') ? document.getElementById('detailFilterDim').value : '';
  var filtered = [];
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (fG && getGroupByAgent(r.agent) !== fG) continue;
    if (!multiMatches(r.account || '', 'account')) continue;
    if (!multiMatches(r.agent || '', 'agent')) continue;
    if (!multiMatches((isReferenceCaseResult(r) ? '参考案例' : r.grade) || '', 'grade')) continue;
    if (!bulkMatches(r)) continue;
    if (fAp && getAppealStatus(r) !== fAp) continue;
    if (fAs && (sessionParticipation(r).assessed ? '是' : '否') !== fAs) continue;
    if (fDim && !(r.scores[fDim] >= 0 && r.details[fDim] && r.details[fDim].grade === '不达标')) continue;
    if (detailOrderExact && r.order !== detailOrderExact) continue;
    filtered.push(r);
  }
  var html = '<thead><tr><th>序号</th><th>组别</th><th>日期</th><th>账号</th><th class="cell-center" title="FBM 订单缺陷率">ODR</th><th>客服</th><th>平台单号</th>';
  for (var d = 0; d < DIM_NAMES.length; d++) html += '<th>' + DIM_NAMES[d] + '</th>';
  html += '<th>总分</th><th>等级</th><th>申诉状态</th><th>操作</th>'
       + '<th title="本单里「客服」字段那位发出的信封数（按回邮署名归属）">去信数</th>'
       + '<th title="该客服去信 ÷ 本单全部客服去信（同一顾客可能被多位客服服务过）">占比</th>'
       + '<th title="占比 ≥ 50% 参与考核，只有「是」的单计入数据看板">是否考核</th></tr></thead><tbody>';
  var sendStat = buildSendStat(); // 只用于单元格 tooltip（该客服跨单累计）
  if (filtered.length === 0) {
    html += '<tr><td colspan="' + (7 + DIM_NAMES.length + 7) + '" style="padding:40px;text-align:center;color:var(--gray-400);">暂无数据</td></tr>';
  } else {
    for (var j = 0; j < filtered.length; j++) {
      var r = filtered[j];
      html += '<tr><td>' + (j + 1) + '</td><td>' + escHtml(getGroupByAgent(r.agent)) + '</td><td class="cell-nowrap">' + escHtml(r.date) + '</td><td class="cell-nowrap">' + escHtml(r.account) + '</td><td class="cell-center">' + (r.fbmDefectRate !== undefined && r.fbmDefectRate !== '' ? escHtml(r.fbmDefectRate) : '-') + '</td><td class="cell-nowrap">' + escHtml(canonicalAgentName(r.agent)) + '</td><td class="cell-nowrap">' + escHtml(r.order) + '</td>';
      for (var d2 = 0; d2 < DIM_NAMES.length; d2++) {
        var score = r.scores[DIM_NAMES[d2]];
        if (score === -1) html += '<td><span class="score-badge score-na">-</span></td>';
        else if (DIM_NAMES[d2] === '平台禁忌' && score === 0 && r.redlineViolation) html += '<td><span class="score-badge score-fail">违规</span></td>';
        else {
          var det = r.details[DIM_NAMES[d2]];
          var gr = det ? det.grade : '';
          var cls = gr === '优秀' ? 'score-excellent' : (gr === '达标' ? 'score-pass' : 'score-fail');
          html += '<td><span class="score-badge ' + cls + '">' + score + '</span></td>';
        }
      }
      if (r.totalScore === -1) { html += '<td><span class="score-badge score-na">-</span></td><td><span class="score-badge score-na">无法质检</span></td>'; }
      else if (isReferenceCaseResult(r)) { html += '<td><span class="score-badge score-na">-</span></td><td><span class="score-badge score-na">参考案例</span></td>'; }
      else { var tc = r.grade === '优秀' ? 'score-excellent' : (r.grade === '达标' ? 'score-pass' : 'score-fail'); html += '<td><span class="score-badge ' + tc + '">' + r.totalScore + '</span></td><td><span class="score-badge ' + tc + '">' + r.grade + '</span></td>'; }
      var appealStatus = getAppealStatus(r);
      html += '<td>' + appealStatusBadge(appealStatus) + '</td><td><span class="clickable" onclick="showDetail(' + r._index + ')">查看详情</span> <span class="clickable" onclick="openAppealModal(' + r._index + ')">申诉</span></td>';
      var _os = orderSendStat(r);
      var _part = sessionParticipation(r);
      var _agentTotal = sendStat.byAgent[canonicalAgentName(r.agent) || '（未填写客服）'] || 0;
      html += '<td title="本单：该客服 ' + _os.count + ' 封 / 客服合计 ' + _part.total + ' 封；该客服名下全部质检单累计 ' + _agentTotal + ' 封">' + _os.count + '</td><td>' + _os.pct + '</td>'
            + '<td><span class="score-badge ' + (_part.assessed ? 'score-pass' : 'score-na') + '">' + (_part.assessed ? '是' : '否') + '</span></td></tr>';
    }
  }
  html += '</tbody>';
  document.getElementById('detailTable').innerHTML = html;
  var badge = document.getElementById('detailBadge');
  if (badge) badge.textContent = filtered.length;
  renderDetailOverview(filtered);
  qcDashSyncCheck();
  try { if (typeof qcRefreshAppealBadges === "function") qcRefreshAppealBadges(); } catch (e) {}
}

// ============================================================
// 质检明细 → 数据看板 联动（2026-11-18）
// 明细数据一有变化（上传 / 申诉审核 / 云端同步 / 重跑质检），看板自动同步：
//   · 看板当前可见 → 立即重算 KPI / 组别统计 / 图表 / 汇总报表，并重建筛选选项
//   · 看板不可见 → 只标记待刷新，切到看板时再算（避免在隐藏容器里初始化图表）
// 用「数据指纹」判断真假变化：仅切换筛选不改数据，不会多余重算。
// ============================================================
var __qcDashFp = '';
var __qcDashDirty = false;
function qcDataFingerprint() {
  var n = results.length, h = 5381;
  for (var i = 0; i < n; i++) {
    var r = results[i] || {};
    var s = (r.account || '') + '|' + (r.agent || '') + '|' + (r.date || '') + '|'
      + (r.grade || '') + '|' + (r.totalScore === undefined || r.totalScore === null ? '' : r.totalScore) + '|'
      + (r.appeal && r.appeal.status ? r.appeal.status : '') + '|' + (isAssessedResult(r) ? 1 : 0);
    for (var k = 0; k < s.length; k++) h = ((h * 33) ^ s.charCodeAt(k)) >>> 0;
  }
  return n + '-' + h;
}
function qcRebuildDashFilters() {
  var groups = {}, accounts = {}, agents = {};
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.account) accounts[r.account] = true;
    if (r.agent) { agents[canonicalAgentName(r.agent)] = true; groups[dashboardGroup(r)] = true; }
  }
  function fill(id, obj, label) {
    var el = document.getElementById(id); if (!el) return;
    var prev = el.value;
    var html = '<option value="">' + label + '</option>';
    Object.keys(obj).sort().forEach(function(x) { html += '<option value="' + escHtml(x) + '">' + escHtml(x) + '</option>'; });
    el.innerHTML = html;
    el.value = (prev && obj[prev]) ? prev : '';
  }
  fill('dashFilterGroup', groups, '全部组别');
  fill('dashFilterAccount', accounts, '全部账号');
  fill('dashFilterAgent', agents, '全部客服');
}
function qcSyncDashboard() {
  if (!document.getElementById('dashboardContent')) return;
  try { qcRebuildDashFilters(); } catch (e) {}
  try { renderDashboard(); } catch (e) {}
  __qcDashFp = qcDataFingerprint();
  __qcDashDirty = false;
}
function qcDashSyncCheck() {
  var fp = qcDataFingerprint();
  if (fp === __qcDashFp) return;
  __qcDashFp = fp;
  __qcDashDirty = true;
  var t = document.getElementById('tab-dashboard');
  if (t && t.classList.contains('active')) qcSyncDashboard();
}
function jsStr(s) {
  // 生成单引号 JS 字符串，内部转义单引号、反斜杠、换行
  return "'" + String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r') + "'";
}
function htmlAttrJsStr(s) {
  // 在 jsStr 基础上再做 HTML 双引号属性编码，使字符串可安全嵌入 onclick="..." 中
  return jsStr(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
// 显示层订单号掩码：把疑似订单号/物流单号格式统一为 [订单号]，
// 避免"3-7-7 订单号被误判为电话"造成视觉上的"问题案例=订单号"假象
function maskOrderNoForDisplay(s) {
  if (s == null) return '';
  var t = String(s);
  var patterns = [
    /\b\d{3}[\-‐‑‒–—―]\d{7}[\-‐‑‒–—―]\d{7}\b/g,
    /\b\d{3}[\-‐‑‒–—―]\d{3}[\-‐‑‒–—―]\d{4}[\-‐‑‒–—―]\d{4}\b/g,
    /\b\d{3}[\-‐‑‒–—―]\d{7}\b/g,
    /\b\d{10,}\b/g,
    /\b1Z[0-9A-Z]{10,}\b/gi,
    /\bTBA\d{10,}\b/gi
  ];
  for (var i = 0; i < patterns.length; i++) t = t.replace(patterns[i], '[订单号]');
  return t;
}
function displayText(s) { return maskOrderNoForDisplay(s); }

function ensureSelectOption(sel, value) {
  if (!sel || !value) return;
  for (var i = 0; i < sel.options.length; i++) { if (sel.options[i].value === value) return; }
  var opt = document.createElement('option');
  opt.value = value; opt.textContent = value;
  sel.appendChild(opt);
}

function switchTabByName(name) {
  var tabs = document.querySelectorAll('.tab-item');
  for (var i = 0; i < tabs.length; i++) {
    var oc = tabs[i].getAttribute('onclick') || '';
    if (oc.indexOf("switchTab('" + name + "'") >= 0 || oc.indexOf('switchTab("' + name + '"') >= 0) { switchTab(name, tabs[i]); return; }
  }
}

function jumpToDetailByDim(group, dim, agent, account) {
  var g = document.getElementById('detailFilterGroup');
  var d = document.getElementById('detailFilterDim');
  var a = document.getElementById('detailFilterAccount');
  var ag = document.getElementById('detailFilterAgent');
  var gr = document.getElementById('detailFilterGrade');
  var ap = document.getElementById('detailFilterAppeal');
  ensureSelectOption(g, group);
  ensureSelectOption(d, dim);
  ensureSelectOption(a, account);
  ensureSelectOption(ag, agent);
  if (g) g.value = group || '';
  if (d) d.value = dim || '';
  if (a) a.value = account || '';
  if (ag) ag.value = agent || '';
  if (gr) gr.value = '';
  if (ap) ap.value = '';
  resetMultiSels();
  renderDetailTable();
  switchTabByName('detail');
}
function jumpToDetailByOrder(order) {
  if (!order) return;
  var g = document.getElementById('detailFilterGroup');
  var d = document.getElementById('detailFilterDim');
  var a = document.getElementById('detailFilterAccount');
  var ag = document.getElementById('detailFilterAgent');
  var gr = document.getElementById('detailFilterGrade');
  var ap = document.getElementById('detailFilterAppeal');
  if (g) g.value = '';
  if (d) d.value = '';
  if (a) a.value = '';
  if (ag) ag.value = '';
  if (gr) gr.value = '';
  if (ap) ap.value = '';
  resetMultiSels();
  detailOrderExact = order;
  renderDetailTable();
  detailOrderExact = '';
  switchTabByName('detail');
  document.getElementById('detailModal').classList.add('minimized');
}

// 「回邮数据」块公共构建（明细详情与申诉弹窗共用，按订单号对应同一份内容）
// boxId 用于回邮气泡渲染的容器标识（两处弹窗各自独立，避免 ID 冲突）
function buildReplyDataBlockHtml(r, boxId) {
  var html = '<div class="detail-section">';
  // 回邮数据区顶部：账号 / 平台订单号 / 订单金额 / 客服 / 总分（数据与基本信息一致）
  var _sb = '<span class="score-badge ';
  if (r.totalScore === -1) _sb += 'score-na">无法质检' + (r.noAgentReply ? '（无客服回邮）' : '');
  else if (isReferenceCaseResult(r)) _sb += 'score-na">参考案例（不参与统计）';
  else if (r.grade === '优秀') _sb += 'score-excellent">' + r.totalScore + ' 分（优秀）';
  else if (r.grade === '达标') _sb += 'score-pass">' + r.totalScore + ' 分（达标）';
  else _sb += 'score-fail">' + r.totalScore + ' 分（不达标）';
  _sb += '</span>';
  html += '<div class="rc-card">';
  html += '<div class="rc-card-head"><h4 class="rc-title">回邮数据</h4></div>';
  html += '<div class="rc-card-body">';
  html += '<div class="rc-base-row">'
        + '<div class="rc-base"><span class="rc-base-l">账号</span><span class="rc-base-v">' + escHtml(r.account) + '</span></div>'
        + '<div class="rc-base"><span class="rc-base-l">平台订单号</span><span class="rc-base-v">' + escHtml(r.order) + '</span></div>'
        + '<div class="rc-base rc-base-amt"><span class="rc-base-l">订单金额</span><span class="rc-base-v rc-amt-v">' + qcMoney(r.account, r.orderAmount) + '</span></div>'
        + '<div class="rc-base"><span class="rc-base-l">客服</span><span class="rc-base-v">' + escHtml(canonicalAgentName(r.agent)) + '</span></div>'
        + '<div class="rc-base"><span class="rc-base-l">总分</span>' + _sb + '</div>'
        + '</div>';
  var _reg = [['是否需要检查流程操作', r.processCheck], ['是否有退款登记', r.refundReg], ['是否有问题反馈', r.issueFeedback], ['是否有补件', r.replenishment]];
  html += '<div class="rc-reg-row">';
  for (var _ri = 0; _ri < _reg.length; _ri++) {
    html += '<div class="rc-reg"><span class="rc-reg-l">' + _reg[_ri][0] + '</span><span class="rc-reg-v">' + escHtml(_reg[_ri][1] || '') + '</span></div>';
  }
  html += '</div>';
  html += '</div></div>';
  if (r.noAgentReply) html += '<div style="margin-bottom:8px;padding:6px 10px;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;color:#475569;font-size:12px;">本单' + (r.amazonOnlySession ? '回邮段落全部为亚马逊系统来信、' : '') + '没有客服回邮，已标记为「无法质检」并 <b>不纳入任何统计</b>（不计入质检量 / 达标率 / 不达标率 / 等级分布）。</div>';
  else if (r.amazonExcluded > 0) html += '<div style="margin-bottom:8px;padding:6px 10px;background:#fff7e6;border:1px solid #ffe0a3;border-radius:4px;color:#9a6700;font-size:12px;">已识别并排除 ' + r.amazonExcluded + ' 段亚马逊系统来信（如销售伙伴支持团队），这些内容不参与客诉质检。</div>';
  else if (r.amazonIncluded > 0) html += '<div style="margin-bottom:8px;padding:6px 10px;background:#eaf3ff;border:1px solid #b6d4fe;border-radius:4px;color:#1a5fb4;font-size:12px;">本单含亚马逊系统来信，因存在客服回邮，已按正常质检流程纳入判分。</div>';
  // 回邮数据：完整展示上传的全部内容（位置保持不变，超长时框内滚动，不再截断）
  var dr = r.reply || '';
  var _qcAgentNames = [];
  for (var _qa = 0; _qa < rawData.length; _qa++) { var _qn = rawData[_qa] && String(rawData[_qa].agent || '').trim(); if (_qn && _qcAgentNames.indexOf(_qn) < 0) _qcAgentNames.push(_qn); }
  // 同人归一：把别名（尹玉婷1→尹玉婷）也加进名单，保证署名气泡能按人匹配高亮
  for (var _qb = 0; _qb < _qcAgentNames.length; _qb++) { var _qc = canonicalAgentName(_qcAgentNames[_qb]); if (_qc && _qcAgentNames.indexOf(_qc) < 0) _qcAgentNames.push(_qc); }
  if (_qcAgentNames.indexOf('robot') < 0) _qcAgentNames.push('robot');
  html += '<div class="detail-msg-box rc-msgbox">' + renderReplyChatHtml(dr, boxId, _qcAgentNames) + '</div>';
  // 四个登记字段已上移到“回邮数据”标题行横向并列
  html += '</div>';
  return html;
}
function showDetail(index) {
  var r = results[index];
  if (!r) return;
  normalizeResultAppeal(r);
  var html = '<div class="detail-section"><h4>基本信息</h4><table class="data-table" style="font-size:13px;">';
  html += '<tr><td style="width:100px;font-weight:600;">组别</td><td>' + escHtml(getGroupByAgent(r.agent)) + '</td></tr>';
  html += '<tr><td style="font-weight:600;">账号</td><td>' + escHtml(r.account) + '</td></tr>';
  html += '<tr><td style="font-weight:600;">ODR</td><td>' + (r.fbmDefectRate !== undefined && r.fbmDefectRate !== '' ? escHtml(r.fbmDefectRate) : '-') + '</td></tr>';
  html += '<tr><td style="font-weight:600;">客服</td><td>' + escHtml(canonicalAgentName(r.agent)) + '</td></tr>';
  html += '<tr><td style="font-weight:600;">平台单号</td><td>' + escHtml(r.order) + '</td></tr>';
  html += '<tr><td style="font-weight:600;">订单金额</td><td>' + (r.orderAmount !== undefined && r.orderAmount !== '' ? escHtml(r.orderAmount) : '-') + '</td></tr>';
  html += '<tr><td style="font-weight:600;">日期</td><td>' + escHtml(r.date) + '</td></tr>';
  var _dp = sessionParticipation(r);
  html += '<tr><td style="font-weight:600;">客服去信</td><td>该客服 ' + _dp.mine + ' 封 / 本单客服合计 ' + _dp.total + ' 封 · 占比 ' + _dp.pct.toFixed(1) + '%'
        + ' <span class="score-badge ' + (_dp.assessed ? 'score-pass' : 'score-na') + '">' + (_dp.assessed ? '参与考核' : '不参与考核') + '</span></td></tr>';
  html += '<tr><td style="font-weight:600;">总分</td><td><span class="score-badge ';
  if (r.totalScore === -1) html += 'score-na">无法质检' + (r.noAgentReply ? '（无客服回邮）' : '');
  else if (isReferenceCaseResult(r)) html += 'score-na">参考案例（不参与统计）';
  else if (r.grade === '优秀') html += 'score-excellent">' + r.totalScore + ' 分（优秀）';
  else if (r.grade === '达标') html += 'score-pass">' + r.totalScore + ' 分（达标）';
  else html += 'score-fail">' + r.totalScore + ' 分（不达标）';
  if (r.exGate && r.exGate.reasons) html += '<div style="margin-top:6px;color:#9a3412;font-size:12px;">优秀门槛未达：' + escHtml(r.exGate.reasons.join('；')) + '</div>';
  html += '</span></td></tr></table></div>';
  html += '<div class="detail-section"><h4>各维度质检结果</h4><table class="score-detail-table"><thead><tr><th>维度</th><th>得分</th><th>等级</th><th>问题说明</th></tr></thead><tbody>';
  for (var i = 0; i < DIM_NAMES.length; i++) {
    var dn = DIM_NAMES[i], score = r.scores[dn], det = r.details[dn] || {};
    html += '<tr><td style="font-weight:600;">' + dn + '</td>';
    if (score === -1) html += '<td><span class="score-badge score-na">-</span></td><td>-</td><td>-</td>';
    else {
      var gr = det.grade || '', cls = gr === '优秀' ? 'score-excellent' : (gr === '达标' ? 'score-pass' : 'score-fail');
      html += '<td><span class="score-badge ' + cls + '">' + score + '</span></td><td><span class="score-badge ' + cls + '">' + gr + '</span></td><td class="issue-list">' + renderDimensionReasonHtml(dn, det, r, '自动打分理由（含回邮证据）') + '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  if (r.knowledgeEvidence && r.knowledgeEvidence.length) { html += '<div class="detail-section"><h4>知识库命中记录</h4><div class="detail-msg-box">'; for (var ke = 0; ke < r.knowledgeEvidence.length; ke++) { var kev = r.knowledgeEvidence[ke]; html += '<div style="margin-bottom:8px;"><b>' + escHtml(kev.title) + '</b>（' + escHtml(knowledgeTypeLabel(kev.type)) + '）<br>' + escHtml(kev.content); var kevb = findKnowledgeById(kev.id); if (kevb && kevb.sourceType === 'url') html += ' <a href="' + escHtml(kevb.url) + '" target="_blank" style="color:var(--primary);text-decoration:underline;">🔗 打开文档</a>'; else if (kevb && kevb.sourceType === 'file') html += ' <a href="#" onclick="openKnowledgeFileById(\'' + escHtml(kevb.id) + '\');return false;" style="color:var(--primary);text-decoration:underline;">📄 打开附件</a>'; html += '</div>'; } html += '</div></div>'; }
  html += buildReplyDataBlockHtml(r, 'replyChat_' + index);
  html += '<div class="detail-section"><h4>申诉状态</h4>' + appealStatusBadge(getAppealStatus(r)) + ' <button class="btn btn-outline btn-sm" onclick="closeRecordModal();openAppealModal(' + index + ')">查看/处理申诉</button></div>';
  document.getElementById('recordModalBody').innerHTML = html;
  document.getElementById('recordModal').classList.add('show');
}

function closeModal() { var ov = document.getElementById('detailModal'); if (ov) { ov.classList.remove('show'); ov.classList.remove('minimized'); } }
function closeRecordModal() { var ov = document.getElementById('recordModal'); if (ov) ov.classList.remove('show'); }
function toggleModalMinimize() { var ov = document.getElementById('detailModal'); if (ov) ov.classList.toggle('minimized'); }
function closeAppealModal() { document.getElementById('appealModal').classList.remove('show'); }
function appealAttachmentList(appeal) {
  var list = appeal.attachments || [];
  if (!list.length) return '<div style="margin-top:8px;color:var(--gray-400);">暂无附件</div>';
  var html = '<div class="appeal-attachment-list">';
  for (var i = 0; i < list.length; i++) {
    var a = list[i];
    html += '<div class="appeal-attachment-item"><span>' + escHtml(a.name || '附件') + '（' + Math.max(1, Math.round((a.size || 0) / 1024)) + ' KB）</span><button class="btn-link" onclick="openAppealAttachmentByIndex(' + i + ')">查看</button></div>';
  }
  return html + '</div>';
}
function qcAppealScoreId(dim) { return 'appealScore-' + String(dim == null ? '' : dim).replace(/[^0-9A-Za-z\u3400-\u9fff]/g, '_'); }
function renderAppealReviewModules(result) {
  var modules = getAppealReviewModules(result);
  var html = '<div class="appeal-module-list">';
  for (var ri = 0; ri < modules.length; ri++) {
    var dim = modules[ri];
    var det = (result.details && result.details[dim]) || {};
    var cur = result.scores ? result.scores[dim] : undefined;
    var curVal = (cur === undefined || cur === null || Number(cur) < 0 || isNaN(Number(cur))) ? '' : Number(cur);
    var max = getDimMax(dim) || 0;
    var sid = qcAppealScoreId(dim);
    html += '<div class="appeal-module-item appeal-module-score">'
      + '<label class="appeal-module-head"><input type="checkbox" name="appealReviewModules" value="' + escHtml(dim) + '" checked> <b>' + escHtml(dim) + '</b>'
      + '<span class="appeal-orig">原得分 <b>' + (curVal === '' ? '-' : curVal) + '</b> / ' + max + ' 分 · 原等级 ' + escHtml(det.grade || '-') + '</span></label>'
      + renderDimensionReasonHtml(dim, det, result, '自动打分理由（含回邮证据）')
      + '<div class="appeal-score-row"><span class="appeal-score-cap">组长重新打分</span>'
      + '<input type="number" class="appeal-score-input" id="' + sid + '" data-dim="' + escHtml(dim) + '" min="0" max="' + max + '" step="1" value="' + (curVal === '' ? 0 : curVal) + '" oninput="qcAppealPreview()" onchange="qcAppealPreview()">'
      + '<span class="appeal-score-total">/ ' + max + ' 分</span>'
      + '<span class="appeal-score-grade" id="' + sid + '-grade">' + escHtml(qcDimGradeForScore(dim, curVal === '' ? 0 : curVal)) + '</span>'
      + '<button type="button" class="btn-link" onclick="qcAppealSetScore(\'' + sid + '\',' + max + ')">按满分</button>'
      + '<button type="button" class="btn-link" onclick="qcAppealSetScore(\'' + sid + '\',' + (curVal === '' ? 0 : curVal) + ')">恢复原分</button>'
      + '</div></div>';
  }
  html += '</div>';
  document.getElementById('appealReviewModuleList').innerHTML = html || '<div style="color:var(--gray-500);font-size:12px;">暂无待复核模块</div>';
  qcAppealPreview();
}
function qcAppealSetScore(sid, val) {
  var el = document.getElementById(sid);
  if (!el) return;
  el.value = val;
  qcAppealPreview();
}
function qcAppealCollectScores() {
  var out = {};
  var box = document.getElementById('appealReviewModuleList');
  if (!box) return out;
  var inputs = box.querySelectorAll('.appeal-score-input');
  for (var i = 0; i < inputs.length; i++) {
    var dim = inputs[i].getAttribute('data-dim');
    var v = Number(inputs[i].value);
    if (isNaN(v)) v = 0;
    var max = getDimMax(dim) || 0;
    if (v < 0) v = 0;
    if (max > 0 && v > max) v = max;
    out[dim] = Math.round(v);
  }
  return out;
}
function qcAppealPreview() {
  var idx = Number(document.getElementById('appealRecordIndex').value);
  var r = results[idx];
  var box = document.getElementById('appealReviewModuleList');
  if (!r || !box) return;
  var scores = JSON.parse(JSON.stringify(r.scores || {}));
  var inputs = box.querySelectorAll('.appeal-score-input');
  var changed = 0;
  for (var i = 0; i < inputs.length; i++) {
    var dim = inputs[i].getAttribute('data-dim');
    var max = getDimMax(dim) || 0;
    var v = Number(inputs[i].value);
    if (isNaN(v)) v = 0;
    if (v < 0) v = 0;
    if (max > 0 && v > max) v = max;
    scores[dim] = v;
    var gEl = document.getElementById(qcAppealScoreId(dim) + '-grade');
    if (gEl) {
      var g = qcDimGradeForScore(dim, v);
      gEl.textContent = g;
      gEl.className = 'appeal-score-grade' + (g === '不达标' ? ' is-fail' : (g === '优秀' ? ' is-excellent' : ' is-pass'));
    }
    if (Number(r.scores && r.scores[dim]) !== v) changed++;
  }
  var total = 0;
  for (var d = 0; d < DIM_NAMES.length; d++) if (scores[DIM_NAMES[d]] >= 0 && DIM_NAMES[d] !== '平台禁忌') total += scores[DIM_NAMES[d]];
  var before = Number(r.totalScore);
  if (isNaN(before)) before = 0;
  var grade = determineGrade(total);
  var delta = total - before;
  var el = document.getElementById('appealRecalcPreview');
  if (!el) return;
  el.innerHTML = '<span class="recalc-label">重算后总分</span>'
    + '<span class="recalc-old"><s>' + before + ' 分</s> ' + escHtml(r.grade || '') + '</span>'
    + '<span class="recalc-arrow">→</span>'
    + '<span class="recalc-new">' + total + ' 分</span>'
    + '<span class="recalc-grade' + (grade === '不达标' ? ' is-fail' : '') + '">' + escHtml(grade) + '</span>'
    + (changed ? '<span class="recalc-delta">改了 ' + changed + ' 项（' + (delta > 0 ? '+' : '') + delta + ' 分）</span>' : '<span class="recalc-delta is-idle">未改动任何项</span>');
}
function qcAppealBulkScore(mode) {
  var box = document.getElementById('appealReviewModuleList');
  if (!box) return;
  var idx = Number(document.getElementById('appealRecordIndex').value);
  var r = results[idx];
  var inputs = box.querySelectorAll('.appeal-score-input');
  for (var i = 0; i < inputs.length; i++) {
    var dim = inputs[i].getAttribute('data-dim');
    if (mode === 'max') { inputs[i].value = getDimMax(dim) || 0; }
    else {
      var orig = r && r.scores ? Number(r.scores[dim]) : 0;
      inputs[i].value = (isNaN(orig) || orig < 0) ? 0 : orig;
    }
  }
  qcAppealPreview();
}
function openAppealModal(index) {
  var r = results[index];
  if (!r) return;
  normalizeResultAppeal(r);
  document.getElementById('appealRecordIndex').value = index;
  document.getElementById('appealReason').value = r.appeal.reason || '';
  document.getElementById('appealReviewReason').value = r.appeal.reviewReason || '';
  document.getElementById('appealFiles').value = '';
  document.getElementById('appealReviewFiles').value = '';
  document.getElementById('appealAddToKnowledge').checked = !!r.appeal.referenceAdded;
  var appealModules = getAppealSubmitModules(r);
  var reviewModules = getAppealReviewModules(r);
  var defaultReviewModules = reviewModules;
  var moduleHtml = '<div class="appeal-module-list">';
  for (var mi = 0; mi < appealModules.length; mi++) { var md = appealModules[mi], mdet = r.details && r.details[md] || {}, mscore = r.scores && r.scores[md]; moduleHtml += '<label class="appeal-module-item"><input type="checkbox" name="appealModules" value="' + escHtml(md) + '" checked> <b>' + escHtml(md) + '</b> <span class="score-badge ' + (mdet.grade === '不达标' ? 'score-fail' : 'score-pass') + '">' + (mscore === -1 ? '-' : mscore) + '分 / ' + escHtml(mdet.grade || '-') + '</span>' + renderDimensionReasonHtml(md, mdet, r, '自动打分理由（含回邮证据）') + '</label>'; }
  moduleHtml += '</div>';
  document.getElementById('appealModuleList').innerHTML = moduleHtml;
  renderAppealReviewModules(r);
  var _rvLine = document.getElementById('appealReviewerLine');
  if (_rvLine) { var _rvLabel = qcReviewerLabel(); _rvLine.innerHTML = '当前复核身份：' + (_rvLabel ? '<b>' + escHtml(_rvLabel) + '</b>' : '<span style="color:var(--danger);">未设置（请到「客服组织架构」选择组长身份）</span>'); }
  document.getElementById('appealCurrentStatus').innerHTML = appealStatusBadge(r.appeal.status);
  document.getElementById('appealHistory').innerHTML = (r.appeal.submittedAt || r.appeal.reviewedAt) ? '<div class="appeal-review-box"><b>申诉理由：</b>' + escHtml(r.appeal.reason || '-') + '<br><b>提交时间：</b>' + escHtml(r.appeal.submittedAt || '-') + (r.appeal.reviewedAt ? '<br><b>审核理由：</b>' + escHtml(r.appeal.reviewReason || '-') + '<br><b>复核人：</b>' + escHtml(r.appeal.reviewer || '-') + '<br><b>审核时间：</b>' + escHtml(r.appeal.reviewedAt || '-') : '') + '</div>' : '';
  document.getElementById('appealExistingFiles').innerHTML = appealAttachmentList(r.appeal);
  // 复核申诉面板上方展示回邮数据块（与明细详情完全一致，按订单号对应）
  var _rb = document.getElementById('appealReplyBlock');
  if (_rb) _rb.innerHTML = buildReplyDataBlockHtml(r, 'appealReplyChat_' + index);
  document.getElementById('appealSubmitPanel').style.display = r.appeal.status === '无申诉' ? 'block' : 'none';
  var _rvShow = (r.appeal.status === '待审核' && reviewModules.length);
  var _canRv = (typeof qcCanReviewResult === 'function') ? qcCanReviewResult(r) : true;
  document.getElementById('appealReviewPanel').style.display = (_rvShow && _canRv) ? 'block' : 'none';
  if (_rvShow && !_canRv && _rvLine) _rvLine.innerHTML += ' <span style="color:var(--danger);font-weight:600;">· 没有这一单的复核权限</span>';
  document.getElementById('appealModalTitle').textContent = '申诉：' + (r.order || '当前质检记录');
  document.getElementById('appealModal').classList.add('show');
}
function appealFileKey(index, file) { var r = results[index]; var base = String((r && r.recordKey) || ('record-' + index)).replace(/[^a-zA-Z0-9_-]/g, '_'); var name = String(file.name || 'attachment').replace(/[^a-zA-Z0-9._-]/g, '_'); return base + '/' + Date.now() + '-' + name; }
function validateAppealFiles(files) { if (files.length > 5) throw new Error('一次最多上传5个附件'); for (var i = 0; i < files.length; i++) { if (files[i].size > 10 * 1024 * 1024) throw new Error('单个附件不能超过10MB'); if (!/^image\/(png|jpeg|jpg|gif|webp)$/.test(files[i].type) && files[i].type !== 'application/pdf') throw new Error('只支持PNG、JPG、GIF、WEBP或PDF附件'); } }
function uploadAppealFiles(index, files) {
  if (!files.length) return Promise.resolve([]);
  if (!cloudApp || !cloudApp.storage || typeof cloudApp.storage.from !== 'function') return Promise.reject(new Error('云端附件存储尚未初始化'));
  try { validateAppealFiles(files); } catch (e) { return Promise.reject(e); }
  var bucket = cloudApp.storage.from('qc-appeals');
  var uploaded = [];
  var chain = Promise.resolve();
  for (var i = 0; i < files.length; i++) (function(file) { chain = chain.then(function() { var path = appealFileKey(index, file); return bucket.upload(path, file).then(function(res) { if (res && res.error) throw res.error; uploaded.push({ path: path, name: file.name, size: file.size, type: file.type, uploadedAt: new Date().toISOString() }); }); }); })(files[i]);
  return chain.then(function() { return uploaded; });
}
function openAppealAttachmentByIndex(attachmentIndex) { var index = Number(document.getElementById('appealRecordIndex').value); var r = results[index]; var attachment = r && r.appeal && r.appeal.attachments ? r.appeal.attachments[attachmentIndex] : null; if (!attachment) { showToast('附件地址不可用', 'error'); return; } openAppealAttachment(attachment.path, attachment.name); }
function openAppealAttachment(path, name) { if (!path || !cloudApp || !cloudApp.storage) { showToast('附件地址不可用', 'error'); return; } cloudApp.storage.from('qc-appeals').createSignedUrl(path, 3600).then(function(res) { var url = res && (res.fullSignedURL || res.signedUrl || res.url); if (!url) throw new Error('未获取到附件访问地址'); window.open(url, '_blank'); }).catch(function(err) { showToast('附件打开失败：' + ((err && (err.message || err.details)) || '请稍后重试'), 'error'); }); }
function saveAppeal(index, action) {
  var r = results[index];
  if (!r) return;
  normalizeResultAppeal(r);
  if (action === 'submit' && r.appeal.status !== '无申诉') { showToast('该质检已提交过申诉，不能重复提交', 'error'); return; }
  if (action !== 'submit') {
    if (!requireAppealReviewer(r)) return;
    if (r.appeal.status !== '待审核') { showToast('只有「待审核」状态可以复核打分', 'error'); return; }
  }
  var reason = String((document.getElementById(action === 'submit' ? 'appealReason' : 'appealReviewReason') || {}).value || '').trim();
  if (!reason) { showToast(action === 'submit' ? '请填写申诉理由' : '请填写复核说明', 'error'); return; }
  var filesEl = document.getElementById(action === 'submit' ? 'appealFiles' : 'appealReviewFiles');
  var files = filesEl ? filesEl.files : [];
  var selectedModules = action === 'submit' ? getCheckedValues('appealModuleList', 'appealModules') : getCheckedValues('appealReviewModuleList', 'appealReviewModules');
  if (!selectedModules.length) { showToast('请至少选择一个模块', 'error'); return; }
  var scoreMap = action === 'submit' ? {} : qcAppealCollectScores();
  var beforeTotal = Number(r.totalScore);
  if (isNaN(beforeTotal)) beforeTotal = 0;
  var submitButton = document.getElementById(action === 'submit' ? 'appealSubmitButton' : (action === 'approve' ? 'appealApproveButton' : 'appealRejectButton'));
  if (submitButton) submitButton.disabled = true;
  uploadAppealFiles(index, files).then(function(newFiles) {
    if (action === 'submit') {
      r.appeal.status = '待审核'; r.appeal.reason = reason; r.appeal.submittedAt = new Date().toISOString();
      r.appeal.reviewReason = ''; r.appeal.reviewer = ''; r.appeal.reviewedAt = '';
      r.appeal.modules = selectedModules; r.appeal.moduleDecisions = {}; r.appeal.moduleReviewReasons = {}; r.appeal.moduleScores = {};
    } else {
      var rv = qcGetReviewer();
      r.appeal.reviewer = rv ? (rv.name + '（' + rv.group + '组长）') : '管理员';
      r.appeal.reviewedAt = new Date().toISOString();
      r.appeal.reviewReason = reason;
      r.appeal.modules = r.appeal.modules.length ? r.appeal.modules : selectedModules;
      r.appeal.moduleScores = r.appeal.moduleScores || {};
      for (var si = 0; si < selectedModules.length; si++) {
        var dim = selectedModules[si];
        var orig = Number(r.scores && r.scores[dim]);
        if (isNaN(orig)) orig = 0;
        var val = Number(scoreMap[dim]);
        if (isNaN(val)) val = orig;
        if (action === 'approve') {
          r.appeal.moduleScores[dim] = Math.round(val);
          r.appeal.moduleDecisions[dim] = (Math.round(val) !== Math.round(orig)) ? '通过' : '被拒';
        } else {
          r.appeal.moduleDecisions[dim] = '被拒';
        }
        r.appeal.moduleReviewReasons[dim] = reason;
      }
      updateAppealStatusFromModules(r);
      applyAppealApprovedGrade(r);
      // 以「重算后总分是否变化」作为申诉通过/被拒的最终依据
      if (r.appealAdjusted) {
        if (Number(r.totalScore) > beforeTotal) r.appeal.status = '申诉通过';
        else r.appeal.status = '申诉被拒';
      } else {
        r.appeal.status = '申诉被拒';
      }
      if (action === 'approve' && document.getElementById('appealAddToKnowledge') && document.getElementById('appealAddToKnowledge').checked && (r.appeal.status === '申诉通过' || r.appeal.status === '部分通过')) addAppealReferenceKnowledge(r);
    }
    r.appeal.attachments = (r.appeal.attachments || []).concat(newFiles);
    renderDetailTable();
    try { if (typeof qcSyncDashboard === 'function') qcSyncDashboard(); else renderDashboard(); } catch (e) { try { renderDashboard(); } catch (e2) {} }
    closeAppealModal();
    saveDataToUrl();
    return cloudSaveState();
  }).then(function() {
    if (action === 'submit') { showToast('申诉已提交，状态为待审核', 'success'); return; }
    if (action === 'reject') { showToast('已按原分驳回申诉，总分保持不变', 'success'); return; }
    showToast('复核分数已生效：总分 ' + beforeTotal + ' → ' + r.totalScore + '（' + r.grade + '），看板已同步', 'success');
  }).catch(function(err) {
    showToast((err && err.message) || '申诉保存失败，请重试', 'error');
  }).finally(function() { if (submitButton) submitButton.disabled = false; });
}

// ============================================================
// 渲染：数据看板
// ============================================================

// ============================================================
// 看板环比引擎（2026-11-17）
// 口径只写在这里，界面上不出现任何说明文字：
//   · 自然周以周一为起点（周一 00:00 ~ 周日 24:00）
//   · 「本周」= 全部数据中最晚日期所在的自然周（数据驱动，不依赖系统时间）
//   · 「上周」= 紧邻的前一自然周；若该周无数据，回退到最近的更早有数据周
//     （回退是为了稀疏数据不至于整片空白，口径仍为「与上一有数据周相比」）
//   · 「历史均值」= 本周之前所有有数据周的该指标算术平均（每周等权）
//   · 比率类差值单位 pp，分值/计数类用原单位（分 / 条）
//   · 颜色按指标变好/变差：均分/达标率升=好，不达标率/不达标量/差距降=好，纯计数中性
// ============================================================
var WOW_CONTEXT = null;
var WOW_DIM_META = {};
function wowPad(n) { return String(n).padStart(2, '0'); }
function wowMonday(dateStr) {
  var s = String(dateStr == null ? '' : dateStr).trim();
  var m = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/.exec(s);
  if (!m) return '';
  var d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (isNaN(d.getTime())) return '';
  var wd = d.getDay();
  d.setDate(d.getDate() - (wd === 0 ? 6 : wd - 1));
  return d.getFullYear() + '-' + wowPad(d.getMonth() + 1) + '-' + wowPad(d.getDate());
}
function wowShiftMonday(key, deltaDays) {
  if (!key) return '';
  var p = key.split('-');
  var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]) + deltaDays);
  return d.getFullYear() + '-' + wowPad(d.getMonth() + 1) + '-' + wowPad(d.getDate());
}
function wowBuildContext(allRows) {
  WOW_DIM_META = {};
  var byWeek = {}, maxMonday = '';
  for (var i = 0; i < allRows.length; i++) {
    var k = wowMonday(allRows[i] && allRows[i].date);
    if (!k) continue;
    if (!byWeek[k]) byWeek[k] = [];
    byWeek[k].push(allRows[i]);
    if (k > maxMonday) maxMonday = k;
  }
  var keys = Object.keys(byWeek).sort();
  var prevKey = wowShiftMonday(maxMonday, -7);
  if (maxMonday && keys.indexOf(prevKey) < 0) {
    for (var j = keys.length - 1; j >= 0; j--) { if (keys[j] < maxMonday) { prevKey = keys[j]; break; } }
  }
  WOW_CONTEXT = {
    byWeek: byWeek, keys: keys, curKey: maxMonday, prevKey: prevKey,
    histKeys: keys.filter(function(k) { return k < maxMonday; })
  };
  return WOW_CONTEXT;
}
function wowDimMeta(dn) {
  if (WOW_DIM_META[dn]) return WOW_DIM_META[dn];
  var max = 0, pass = 0;
  for (var c = 0; c < STANDARDS.length; c++) {
    var cat = STANDARDS[c];
    for (var i = 0; i < cat.items.length; i++) {
      if (cat.items[i].name === dn) {
        max = cat.items[i].maxScore || 0;
        var levels = cat.items[i].levels || [];
        for (var j = 0; j < levels.length; j++) { if (levels[j].grade === '达标') { pass = levels[j].score || 0; break; } }
        break;
      }
    }
    if (max > 0) break;
  }
  WOW_DIM_META[dn] = { max: max, pass: pass };
  return WOW_DIM_META[dn];
}
function wowRawMetric(rows, metric) {
  if (!rows || !rows.length) return null;
  var i, r, n = rows.length;
  if (metric === 'total') { var t = 0; for (i = 0; i < n; i++) t += dashboardTotal(rows[i]); return t; }
  if (metric === 'valid') { var v = 0; for (i = 0; i < n; i++) v += dashboardValidTotal(rows[i]); return v; }
  if (metric === 'avg') { var s = 0, c = 0; for (i = 0; i < n; i++) { if (dashboardValidTotal(rows[i])) { s += dashboardScoreSum(rows[i]); c++; } } return c ? s / c : null; }
  if (metric === 'passRate') { var t2 = 0, p = 0; for (i = 0; i < n; i++) { t2 += dashboardTotal(rows[i]); p += dashboardPassCount(rows[i]); } return t2 ? p / t2 * 100 : null; }
  if (metric === 'failRate') { var t3 = 0, f = 0; for (i = 0; i < n; i++) { t3 += dashboardTotal(rows[i]); f += dashboardFailCount(rows[i]); } return t3 ? f / t3 * 100 : null; }
  if (metric.indexOf('grade:') === 0) { var g = metric.slice(6), cg = 0; for (i = 0; i < n; i++) if (rows[i].grade === g) cg++; return cg; }
  var dim = null;
  if (metric.indexOf('dimFailRate:') === 0) dim = metric.slice(12);
  else if (metric.indexOf('dimFailCount:') === 0) dim = metric.slice(14);
  else if (metric.indexOf('dimAvg:') === 0) dim = metric.slice(7);
  else if (metric.indexOf('dimGap:') === 0) dim = metric.slice(7);
  else if (metric.indexOf('dimPassRate:') === 0) dim = metric.slice(13);
  if (dim !== null) {
    var meta = wowDimMeta(dim), total = 0, fail = 0, sum = 0, scored = 0, passCnt = 0;
    for (i = 0; i < n; i++) {
      r = rows[i];
      total += dashboardTotal(r);
      var sc = r && r.scores ? r.scores[dim] : null;
      if (typeof sc === 'number' && sc >= 0) {
        scored++; sum += sc;
        if (r.details && r.details[dim] && r.details[dim].grade === '不达标') fail++;
        if (meta.pass && sc >= meta.pass) passCnt++;
      }
    }
    if (metric.indexOf('dimFailRate:') === 0) return total ? fail / total * 100 : null;
    if (metric.indexOf('dimFailCount:') === 0) return fail;
    if (metric.indexOf('dimAvg:') === 0) return scored ? sum / scored : null;
    if (metric.indexOf('dimGap:') === 0) return (meta.max && scored) ? meta.max - sum / scored : null;
    if (metric.indexOf('dimPassRate:') === 0) return scored ? passCnt / scored * 100 : null;
  }
  return null;
}
function wowMetricUnit(metric) {
  if (metric === 'passRate' || metric === 'failRate' || metric.indexOf('dimFailRate:') === 0 || metric.indexOf('dimPassRate:') === 0) return 'pp';
  if (metric === 'avg' || metric.indexOf('dimAvg:') === 0 || metric.indexOf('dimGap:') === 0) return '分';
  return '条';
}
function wowFmtDelta(cur, base, metric) {
  if (cur === null || base === null || !isFinite(cur) || !isFinite(base)) return { text: '—', good: null };
  var d = cur - base, unit = wowMetricUnit(metric), digits = unit === '条' ? 0 : 1;
  var text = (d > 0 ? '+' : d < 0 ? '−' : '') + Math.abs(d).toFixed(digits) + unit;
  var good = null;
  if (Math.abs(d) > 1e-9) {
    var higherBetter = (metric === 'avg' || metric === 'passRate' || metric.indexOf('dimAvg:') === 0 || metric.indexOf('dimPassRate:') === 0);
    var lowerBetter = (metric === 'failRate' || metric.indexOf('dimFailRate:') === 0 || metric.indexOf('dimFailCount:') === 0 || metric.indexOf('dimGap:') === 0);
    if (higherBetter) good = d > 0;
    else if (lowerBetter) good = d < 0;
  }
  return { text: text, good: good };
}
function wowCompare(rows, metric) {
  var ctx = WOW_CONTEXT;
  if (!ctx || !ctx.curKey) return null;
  function rowsOf(key) {
    var all = ctx.byWeek[key] || [];
    if (!rows || !rows.length) return all;
    return all.filter(function(r) { return rows.indexOf(r) >= 0; });
  }
  var cur = wowRawMetric(rowsOf(ctx.curKey), metric);
  var prev = ctx.prevKey ? wowRawMetric(rowsOf(ctx.prevKey), metric) : null;
  var histVals = [];
  for (var i = 0; i < ctx.histKeys.length; i++) {
    var v = wowRawMetric(rowsOf(ctx.histKeys[i]), metric);
    if (v !== null) histVals.push(v);
  }
  var hist = histVals.length ? histVals.reduce(function(a, b) { return a + b; }, 0) / histVals.length : null;
  return { cur: cur, prev: prev, hist: hist, wow: wowFmtDelta(cur, prev, metric), historical: wowFmtDelta(cur, hist, metric) };
}
function wowClass(r) { return r.good === null ? 'wow-flat' : (r.good ? 'wow-good' : 'wow-bad'); }
function wowTip(rows, metric) {
  var c = wowCompare(rows, metric);
  if (!c) return '';
  return '周度环比 ' + c.wow.text + ' ｜ 历史环比 ' + c.historical.text;
}
function wowKpiHtml(rows, metric) {
  var c = wowCompare(rows, metric);
  if (!c) return '';
  return '<div class="kpi-wow"><span class="' + wowClass(c.wow) + '" title="周度环比">周度 ' + c.wow.text + '</span>'
       + '<span class="' + wowClass(c.historical) + '" title="历史环比">历史 ' + c.historical.text + '</span></div>';
}
function wowApplyTitle(cell, tip) {
  if (!cell || !tip) return;
  var els = [cell], inner = cell.querySelectorAll('[title]');
  for (var i = 0; i < inner.length; i++) els.push(inner[i]);
  for (var j = 0; j < els.length; j++) {
    var old = els[j].getAttribute('title') || '';
    els[j].setAttribute('title', old ? old + '；' + tip : tip);
  }
}
function wowDecorateKPI(data) {
  var grid = document.getElementById('kpiGrid');
  if (!grid) return;
  var cards = grid.querySelectorAll('.kpi-card');
  var metrics = ['total', 'avg', 'passRate', 'failRate'];
  for (var i = 0; i < cards.length && i < metrics.length; i++) cards[i].insertAdjacentHTML('beforeend', wowKpiHtml(data, metrics[i]));
}
function wowDecorateGroupStats(data) {
  var wrap = document.getElementById('groupStatsWrap');
  if (!wrap) return;
  var table = wrap.querySelector('table');
  if (!table || !table.tBodies || !table.tBodies[0]) return;
  var rows = table.tBodies[0].rows, n = DIM_NAMES.length;
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].cells;
    if (cells.length < 6 + 2 * n) continue;
    var gname = (cells[0].textContent || '').trim();
    var subset = gname === '汇总' ? data : data.filter(function(r) { return dashboardGroup(r) === gname; });
    wowApplyTitle(cells[1], wowTip(subset, 'total'));
    wowApplyTitle(cells[2], wowTip(subset, 'valid'));
    wowApplyTitle(cells[3], wowTip(subset, 'avg'));
    wowApplyTitle(cells[4], wowTip(subset, 'passRate'));
    wowApplyTitle(cells[5], wowTip(subset, 'failRate'));
    for (var d = 0; d < n; d++) {
      wowApplyTitle(cells[6 + d], wowTip(subset, 'dimFailRate:' + DIM_NAMES[d]));
      wowApplyTitle(cells[6 + n + d], wowTip(subset, 'dimFailCount:' + DIM_NAMES[d]));
    }
  }
}
function wowDecorateSummary(data, dimension) {
  var wrap = document.getElementById('summaryTableWrap');
  if (!wrap) return;
  var table = wrap.querySelector('table');
  if (!table || !table.tBodies || !table.tBodies[0]) return;
  var rows = table.tBodies[0].rows, n = DIM_NAMES.length;
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].cells;
    // 汇总行第一列是 colspan=2，所以比普通行少一个单元格
    if (cells.length < 5 + 2 * n) continue;
    var isTotal = (cells[0].textContent || '').trim() === '汇总';
    var off = isTotal ? -1 : 0;
    var group = isTotal ? '' : (cells[0].textContent || '').trim();
    var label = isTotal ? '' : (cells[1].textContent || '').trim();
    var subset = isTotal ? data : data.filter(function(r) {
      return dashboardGroup(r) === group && (dimension === 'account' ? (r.account || '未填写账号') === label : (canonicalAgentName(r.agent) || '未填写客服') === label);
    });
    wowApplyTitle(cells[3 + off], wowTip(subset, 'total'));
    wowApplyTitle(cells[4 + off], wowTip(subset, 'avg'));
    for (var d = 0; d < n; d++) {
      wowApplyTitle(cells[5 + off + d], wowTip(subset, 'dimFailRate:' + DIM_NAMES[d]));
      wowApplyTitle(cells[5 + off + n + d], wowTip(subset, 'dimFailCount:' + DIM_NAMES[d]));
    }
  }
}
function wowChartLine(rows, metric) {
  var c = wowCompare(rows, metric);
  return c ? ('周度环比 ' + c.wow.text + ' ｜ 历史环比 ' + c.historical.text) : '';
}

function dashboardGroup(item) { return getGroupByAgent(item.agent); }
function dashboardTotal(item) { return item.grade === '无法质检' ? 0 : 1; } // 「无法质检」不纳入统计（2026-10-15）
function dashboardValidTotal(item) { return item.totalScore >= 0 ? 1 : 0; }
function dashboardScoreSum(item) { return item.totalScore >= 0 ? Number(item.totalScore) || 0 : 0; }
function dashboardPassCount(item) { return (item.grade === '优秀' || item.grade === '达标' || item.grade === '参考案例') ? 1 : 0; } // 「无法质检」不再计为达标
function dashboardFailCount(item) { return item.grade === '不达标' ? 1 : 0; }
// ============ 总质检量 · 周度统计（按明细日期归周一~周日）2026-11-19 ============
function qcWeekRangeOf(dateStr) {
  var s = String(dateStr || '').trim();
  var d = new Date(s.replace(/-/g, '/'));
  if (isNaN(d.getTime())) {
    var m = /^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})/.exec(s);
    if (m) d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    if (!m || isNaN(d.getTime())) return null;
  }
  var day = d.getDay();
  var diff = (day === 0) ? 6 : day - 1;
  var mon = new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
  var sun = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + 6);
  function f(x) { return x.getFullYear() + '-' + ('0' + (x.getMonth() + 1)).slice(-2) + '-' + ('0' + x.getDate()).slice(-2); }
  return { key: f(mon), start: f(mon), end: f(sun) };
}
// 上传批次归属周：上传动作发生时，固定记录「上传当时的上一周」（本周一往前推 7 天）的周一~周日
// 每条新上传明细都会写入 qcWeek=上周一日期；历史批次的 qcWeek 一旦写入不再改动
function qcUploadWeekRange(now) {
  now = now || new Date();
  var day = now.getDay();
  var diff = (day === 0) ? 6 : day - 1;
  var thisMonday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diff);
  var lastMonday = new Date(thisMonday.getFullYear(), thisMonday.getMonth(), thisMonday.getDate() - 7);
  var lastSunday = new Date(lastMonday.getFullYear(), lastMonday.getMonth(), lastMonday.getDate() + 6);
  function f(x) { return x.getFullYear() + '-' + ('0' + (x.getMonth() + 1)).slice(-2) + '-' + ('0' + x.getDate()).slice(-2); }
  return { key: f(lastMonday), start: f(lastMonday), end: f(lastSunday) };
}
function renderWeeklyKpi(data) {
  var card = document.getElementById('weeklyKpiCard'), wrap = document.getElementById('weeklyKpiWrap');
  if (!card || !wrap) return;
  if (!data || !data.length) { card.style.display = 'none'; return; }
  // 按每条明细的批次归属周 qcWeek 分组累积；老数据没有 qcWeek 时兜底按明细日期归周
  var weeks = {}, order = [], grandTotal = 0;
  for (var i = 0; i < data.length; i++) {
    var it = data[i];
    var t = dashboardTotal(it); if (!t) continue;
    var key = it.qcWeek || (qcWeekRangeOf(it.date) || {}).key || '';
    if (!key) key = '0000-00-00';
    if (!weeks[key]) { weeks[key] = { key: key, n: 0, pass: 0, fail: 0 }; order.push(key); }
    weeks[key].n += t;
    weeks[key].pass += dashboardPassCount(it);
    weeks[key].fail += dashboardFailCount(it);
    grandTotal += t;
  }
  if (!grandTotal) { card.style.display = 'none'; return; }
  order.sort();
  var rows = '';
  for (var w = order.length - 1; w >= 0; w--) {
    var g = weeks[order[w]];
    var rng = qcWeekRangeOf(g.key) || { start: g.key, end: '' };
    var pct = Math.round(g.n / grandTotal * 1000) / 10;
    rows += '<div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid #eef2f7;flex-wrap:wrap;">'
      + '<span style="font-weight:700;min-width:190px;color:#1e293b;">' + rng.start.replace(/-/g, '/') + ' - ' + rng.end.replace(/-/g, '/') + '</span>'
      + '<span style="color:#334155;">质检量 <b style="font-size:15px;">' + g.n + '</b> 条（' + pct + '%）</span>'
      + '<span style="color:#16a34a;">达标 ' + g.pass + '</span>'
      + '<span style="color:#dc2626;">不达标 ' + g.fail + '</span>'
      + '</div>';
  }
  var lastRng = qcWeekRangeOf(order[order.length - 1]) || { end: '' };
  var ep = String(lastRng.end).split('-');
  var title = '截至 ' + Number(ep[0]) + '年' + Number(ep[1]) + '月' + Number(ep[2]) + '日';
  wrap.innerHTML = '<div class="card-header"><h3>总质检量 · 周度统计（' + title + '）</h3><span style="font-size:12px;color:#6b7280;">按上传批次归属周累积（周一至周日），历史批次不改动，合计 ' + grandTotal + ' 条</span></div><div class="card-body" style="padding-top:6px;">' + rows + '</div>';
  card.style.display = 'block';
}

function renderDashboard() {
  if (results.length === 0) { document.getElementById('dashboardEmpty').style.display = 'block'; document.getElementById('dashboardContent').style.display = 'none'; return; }
  document.getElementById('dashboardEmpty').style.display = 'none';
  document.getElementById('dashboardContent').style.display = 'block';
  var fG = document.getElementById('dashFilterGroup').value;
  var fA = document.getElementById('dashFilterAccount').value;
  var fAg = document.getElementById('dashFilterAgent').value;
  var filtered = [];
  var skippedUnassessed = 0;
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (fG && dashboardGroup(r) !== fG) continue;
    if (fA && r.account !== fA) continue;
    if (fAg && canonicalAgentName(r.agent) !== fAg) continue;
    // 只有「是否考核 = 是」（客服会话参与占比 ≥ 50%）的单才计入看板统计
    if (!isAssessedResult(r)) { skippedUnassessed++; continue; }
    filtered.push(r);
  }
  var dashboardData = filtered;
  // 环比上下文用全部 results（含未参与考核的单）建立，避免筛选变化时基准周漂移
  wowBuildContext(results);
  renderKPI(dashboardData, skippedUnassessed);
  try { if (typeof renderWeeklyKpi === 'function') renderWeeklyKpi(dashboardData); } catch (e) {}
  wowDecorateKPI(dashboardData);
  var _dim = (document.getElementById('summaryDimension') || {}).value || 'agent';
  renderGroupStats(dashboardData);
  wowDecorateGroupStats(dashboardData);
  renderSummaryTable(dashboardData, _dim);
  wowDecorateSummary(dashboardData, _dim);
  setTimeout(function() { renderCharts(dashboardData, _dim); }, 100);
}

function renderKPI(data, skippedUnassessed) {
  var total = 0, validTotal = 0, scoreSum = 0, pass = 0, fail = 0, naCount = 0;
  for (var i = 0; i < data.length; i++) { total += dashboardTotal(data[i]); validTotal += dashboardValidTotal(data[i]); scoreSum += dashboardScoreSum(data[i]); pass += dashboardPassCount(data[i]); fail += dashboardFailCount(data[i]); if (data[i].grade === '无法质检') naCount++; }
  var avg = validTotal > 0 ? (scoreSum / validTotal).toFixed(1) : 0;
  var pr = total > 0 ? ((pass / total) * 100).toFixed(1) : 0;
  var fr = total > 0 ? ((fail / total) * 100).toFixed(1) : 0;
  var kpiSub = '有效数据 ' + validTotal + ' 条';
  if (naCount > 0) kpiSub += ' · 无法质检 ' + naCount + ' 条已剔除';
  if (skippedUnassessed > 0) kpiSub += ' · 未参与考核 ' + skippedUnassessed + ' 条已剔除';
  document.getElementById('kpiGrid').innerHTML =
    '<div class="kpi-card"><div class="kpi-label">总质检量</div><div class="kpi-value">' + total + '</div><div class="kpi-sub">' + kpiSub + '</div></div>' +
    '<div class="kpi-card success"><div class="kpi-label">质检平均分</div><div class="kpi-value">' + avg + '</div><div class="kpi-sub">满分 100 分</div></div>' +
    '<div class="kpi-card success"><div class="kpi-label">达标率</div><div class="kpi-value">' + pr + '%</div><div class="kpi-sub">达标 ' + pass + ' 条</div></div>' +
    '<div class="kpi-card danger"><div class="kpi-label">不达标率</div><div class="kpi-value">' + fr + '%</div><div class="kpi-sub">不达标 ' + fail + ' 条</div></div>';
}

function renderGroupStats(data) {
  var groups = {};
  for (var i = 0; i < data.length; i++) {
    var r = data[i];
    var gn = dashboardGroup(r);
    if (!groups[gn]) {
      groups[gn] = { name: gn, total: 0, validTotal: 0, scoreSum: 0, passCount: 0, failCount: 0, naCount: 0, failDim: {}, failDimTotal: {} };
      for (var d = 0; d < DIM_NAMES.length; d++) { groups[gn].failDim[DIM_NAMES[d]] = 0; groups[gn].failDimTotal[DIM_NAMES[d]] = 0; }
    }
    groups[gn].total += dashboardTotal(r);
    groups[gn].validTotal += dashboardValidTotal(r);
    groups[gn].scoreSum += dashboardScoreSum(r);
    groups[gn].passCount += dashboardPassCount(r);
    groups[gn].failCount += dashboardFailCount(r);
    for (var d2 = 0; d2 < DIM_NAMES.length; d2++) {
      var dn = DIM_NAMES[d2];
      if (r.scores[dn] >= 0 && r.details[dn] && r.details[dn].grade === '不达标') groups[gn].failDim[dn]++;
      if (r.scores[dn] >= 0) groups[gn].failDimTotal[dn]++;
    }
  }
  var gl = [];
  for (var k in groups) if (groups.hasOwnProperty(k)) gl.push(groups[k]);
  gl.sort(function(a, b) { return a.name.localeCompare(b.name, 'zh-CN'); });

  var totalTotal = 0, totalValid = 0, totalScoreSum = 0, totalPass = 0, totalFail = 0;
  var totalFailDim = {};
  for (var d = 0; d < DIM_NAMES.length; d++) totalFailDim[DIM_NAMES[d]] = 0;
  for (var k2 in groups) if (groups.hasOwnProperty(k2)) {
    var g2 = groups[k2];
    totalTotal += g2.total;
    totalValid += g2.validTotal;
    totalScoreSum += g2.scoreSum;
    totalPass += g2.passCount;
    totalFail += g2.failCount;
    for (var d5 = 0; d5 < DIM_NAMES.length; d5++) totalFailDim[DIM_NAMES[d5]] += g2.failDim[DIM_NAMES[d5]];
  }

  var html = '<table class="summary-table"><thead><tr><th rowspan="2">组别</th><th rowspan="2">质检量</th><th rowspan="2">有效质检</th><th rowspan="2">平均分</th><th rowspan="2">达标率</th><th rowspan="2">不达标率</th><th colspan="' + DIM_NAMES.length + '">各维度不达标率</th><th colspan="' + DIM_NAMES.length + '">各维度不达标量</th></tr><tr>';
  for (var h = 0; h < DIM_NAMES.length; h++) html += '<th class="dim-sub-header">' + DIM_NAMES[h] + '</th>';
  for (var h2 = 0; h2 < DIM_NAMES.length; h2++) html += '<th class="dim-sub-header">' + DIM_NAMES[h2] + '</th>';
  html += '</tr></thead><tbody>';
  if (gl.length === 0) { html += '<tr><td colspan="' + (6 + 2 * DIM_NAMES.length) + '" style="padding:30px;text-align:center;color:var(--gray-400);">暂无数据</td></tr>'; }
  else {
    var summaryAvg = totalValid > 0 ? (totalScoreSum / totalValid).toFixed(1) : '-';
    var summaryPr = totalTotal > 0 ? ((totalPass / totalTotal) * 100).toFixed(1) + '%' : '-';
    var summaryFr = totalTotal > 0 ? ((totalFail / totalTotal) * 100).toFixed(1) + '%' : '-';
    var summaryPcls = totalTotal === 0 || (totalPass / totalTotal) >= 0.8 ? 'rate-good' : (totalPass / totalTotal >= 0.6 ? 'rate-warn' : 'rate-bad');
    var summaryFcls = totalFail === 0 ? 'rate-good' : (totalTotal > 0 && totalFail / totalTotal <= 0.2 ? 'rate-warn' : 'rate-bad');
    html += '<tr class="total-row"><td style="font-weight:600;">汇总</td><td>' + totalTotal + '</td><td>' + totalValid + '</td><td>' + summaryAvg + '</td><td class="' + summaryPcls + '">' + summaryPr + '</td><td class="' + summaryFcls + '">' + summaryFr + '</td>';
    for (var d6 = 0; d6 < DIM_NAMES.length; d6++) {
      var dn6 = DIM_NAMES[d6], fc6 = totalFailDim[dn6];
      var rate6 = totalTotal > 0 ? ((fc6 / totalTotal) * 100).toFixed(1) + '%' : '-';
      var cls6 = fc6 === 0 ? 'rate-good' : (totalTotal > 0 && fc6 / totalTotal <= 0.2 ? 'rate-warn' : 'rate-bad');
      html += '<td class="' + cls6 + '">' + rate6 + '</td>';
    }
    for (var d7 = 0; d7 < DIM_NAMES.length; d7++) {
      var dn7 = DIM_NAMES[d7], fc7 = totalFailDim[dn7];
      var cls7 = fc7 === 0 ? 'rate-good' : (totalTotal > 0 && fc7 / totalTotal <= 0.2 ? 'rate-warn' : 'rate-bad');
      var grpArg7 = htmlAttrJsStr(''), dnArg7 = htmlAttrJsStr(dn7);
      if (fc7 > 0) html += '<td class="' + cls7 + '"><span class="cell-clickable" title="点击查看该维度不达标明细" onclick="jumpToDetailByDim(' + grpArg7 + ',' + dnArg7 + ')">' + fc7 + '</span></td>';
      else html += '<td class="' + cls7 + '">' + fc7 + '</td>';
    }
    html += '</tr>';

    for (var g = 0; g < gl.length; g++) {
      var grp = gl[g];
      var avg = grp.validTotal > 0 ? (grp.scoreSum / grp.validTotal).toFixed(1) : '-';
      var pr = grp.total > 0 ? ((grp.passCount / grp.total) * 100).toFixed(1) + '%' : '-';
      var fr = grp.total > 0 ? ((grp.failCount / grp.total) * 100).toFixed(1) + '%' : '-';
      var pcls = grp.total === 0 || (grp.passCount / grp.total) >= 0.8 ? 'rate-good' : (grp.passCount / grp.total >= 0.6 ? 'rate-warn' : 'rate-bad');
      var fcls = grp.failCount === 0 ? 'rate-good' : (grp.total > 0 && grp.failCount / grp.total <= 0.2 ? 'rate-warn' : 'rate-bad');
      html += '<tr><td style="font-weight:600;">' + escHtml(grp.name) + '</td><td>' + grp.total + '</td><td>' + grp.validTotal + '</td><td>' + avg + '</td><td class="' + pcls + '">' + pr + '</td><td class="' + fcls + '">' + fr + '</td>';
      for (var d3 = 0; d3 < DIM_NAMES.length; d3++) {
        var dn3 = DIM_NAMES[d3], fc = grp.failDim[dn3];
        var rate3 = grp.total > 0 ? ((fc / grp.total) * 100).toFixed(1) + '%' : '-';
        var cls = fc === 0 ? 'rate-good' : (grp.total > 0 && fc / grp.total <= 0.2 ? 'rate-warn' : 'rate-bad');
        html += '<td class="' + cls + '">' + rate3 + '</td>';
      }
      for (var d4 = 0; d4 < DIM_NAMES.length; d4++) {
        var dn4 = DIM_NAMES[d4], fc2 = grp.failDim[dn4];
        var cls2 = fc2 === 0 ? 'rate-good' : (grp.total > 0 && fc2 / grp.total <= 0.2 ? 'rate-warn' : 'rate-bad');
        var grpArg = htmlAttrJsStr(grp.name), dnArg = htmlAttrJsStr(dn4);
        if (fc2 > 0) html += '<td class="' + cls2 + '"><span class="cell-clickable" title="点击查看该维度不达标明细" onclick="jumpToDetailByDim(' + grpArg + ',' + dnArg + ')">' + fc2 + '</span></td>';
        else html += '<td class="' + cls2 + '">' + fc2 + '</td>';
      }
      html += '</tr>';
    }
  }
  html += '</tbody></table>';
  document.getElementById('groupStatsWrap').innerHTML = html;
}

function compareDashboardGroups(a, b, direction) {
  var sa = String(a || ''), sb = String(b || '');
  var na = /^\s*(\d+)\s*组?\s*$/.exec(sa), nb = /^\s*(\d+)\s*组?\s*$/.exec(sb);
  var c;
  if (na && nb) c = Number(na[1]) - Number(nb[1]);
  else if (na && !nb) c = -1;
  else if (!na && nb) c = 1;
  else c = sa.localeCompare(sb, 'zh-CN');
  return direction === 'desc' ? -c : c;
}
function renderSummaryTableFromDashboard() { renderDashboard(); }
function sectionToJson(sec) {
  var goodArr = [];
  for (var gi = 0; gi < sec.good.length; gi++) {
    var gd = sec.good[gi];
    var gbest = '';
    if (gd.best) gbest = ',best:{label:' + htmlAttrJsStr(gd.best.label) + ',avg:' + (gd.best.avg >= 0 ? gd.best.avg : -1) + ',fail:' + gd.best.fail + '}';
    var gordArr = [];
    if (gd.orders) for (var go = 0; go < gd.orders.length; go++) gordArr.push(htmlAttrJsStr(gd.orders[go]));
    goodArr.push('{name:' + htmlAttrJsStr(gd.name) + ',why:' + htmlAttrJsStr(gd.why) + ',caseGood:' + htmlAttrJsStr(gd.caseGood) + (gordArr.length ? ',orders:[' + gordArr.join(',') + ']' : '') + gbest + '}');
  }
  var impArr = [];
  for (var ii = 0; ii < sec.improve.length; ii++) {
    var itm = sec.improve[ii];
    var focusArr = [];
    if (itm.focus) for (var fi = 0; fi < itm.focus.length; fi++) focusArr.push('{label:' + htmlAttrJsStr(itm.focus[fi].label) + ',count:' + itm.focus[fi].count + '}');
    var ordArr = [];
    if (itm.orders) for (var oi = 0; oi < itm.orders.length; oi++) ordArr.push(htmlAttrJsStr(itm.orders[oi]));
    impArr.push('{name:' + htmlAttrJsStr(itm.name) + ',count:' + itm.count + ',why:' + htmlAttrJsStr(itm.why) + ',problem:' + htmlAttrJsStr(itm.problem) + ',suggestion:' + htmlAttrJsStr(itm.suggestion) + ',optRewrite:' + htmlAttrJsStr(itm.optRewrite || '') + ',caseBad:' + htmlAttrJsStr(itm.caseBad) + (itm.caseBadBasis ? ',caseBadBasis:' + htmlAttrJsStr(itm.caseBadBasis) : '') + (ordArr.length ? ',orders:[' + ordArr.join(',') + ']' : '') + (focusArr.length ? ',focus:[' + focusArr.join(',') + ']' : '') + '}');
  }
  return '{group:' + htmlAttrJsStr(sec.group) + ',good:[' + goodArr.join(',') + '],improve:[' + impArr.join(',') + ']}';
}
function renderSummaryTable(data, dimension) {
  dimension = dimension === 'account' ? 'account' : 'agent';
  var groups = {};
  for (var i = 0; i < data.length; i++) {
    var r = data[i];
    var groupName = dashboardGroup(r);
    var dimensionValue = dimension === 'account' ? (r.account || '未填写账号') : (canonicalAgentName(r.agent) || '未填写客服');
    var key = dimensionValue + '||' + groupName;
    if (!groups[key]) {
      groups[key] = { label: dimensionValue, agent: dimension === 'agent' ? dimensionValue : '', account: dimension === 'account' ? dimensionValue : '', group: groupName, date: getCurrentDate(), total: 0, validTotal: 0, scoreSum: 0, passTotal: 0, failTotal: 0, failCount: {} };
      for (var d = 0; d < DIM_NAMES.length; d++) groups[key].failCount[DIM_NAMES[d]] = 0;
    }
    groups[key].total += dashboardTotal(r);
    groups[key].validTotal += dashboardValidTotal(r);
    groups[key].scoreSum += dashboardScoreSum(r);
    // 汇总栏达标数/不达标数：按质检明细每条的等级统计（随明细实时联动）
    groups[key].passTotal += dashboardPassCount(r);
    groups[key].failTotal += dashboardFailCount(r);
    for (var d2 = 0; d2 < DIM_NAMES.length; d2++) {
      var dn = DIM_NAMES[d2];
      if (r.scores[dn] >= 0 && r.details[dn] && r.details[dn].grade === '不达标') groups[key].failCount[dn]++;
    }
  }
  var gl = [];
  for (var k in groups) if (groups.hasOwnProperty(k)) gl.push(groups[k]);
  gl.sort(function(a, b) {
    var aAvg = a.validTotal > 0 ? a.scoreSum / a.validTotal : -1;
    var bAvg = b.validTotal > 0 ? b.scoreSum / b.validTotal : -1;
    if (aAvg !== bAvg) return dimension === 'agent' ? bAvg - aAvg : aAvg - bAvg;
    return a.label.localeCompare(b.label, 'zh-CN');
  });
  var dimensionLabel = dimension === 'account' ? '账号' : '客服';
  var html = '<table class="summary-table" style="table-layout:fixed;"><colgroup>' +
    '<col style="width:70px"><col style="width:96px"><col style="width:92px"><col style="width:64px"><col style="width:68px"><col style="width:56px"><col style="width:56px">' +
    '<col span="' + DIM_NAMES.length + '" style="width:52px"><col span="' + DIM_NAMES.length + '" style="width:52px">' +
    '<col style="width:110px"></colgroup><thead><tr>';
  html += '<th rowspan="2" class="group-header">组别</th><th rowspan="2" class="group-header">' + dimensionLabel + '</th><th rowspan="2" class="group-header">更新日期</th><th colspan="4" class="group-header">汇总</th><th colspan="' + DIM_NAMES.length + '">各维度不达标率</th><th colspan="' + DIM_NAMES.length + '">各维度不达标量</th><th rowspan="2" class="group-header">建议</th></tr><tr>';
  html += '<th class="sub-header">被质检量</th><th class="sub-header">质检平均分</th><th class="sub-header">达标数</th><th class="sub-header">不达标数</th>';
  for (var j = 0; j < DIM_NAMES.length; j++) html += '<th class="dim-sub-header">' + DIM_NAMES[j] + '</th>';
  for (var j2 = 0; j2 < DIM_NAMES.length; j2++) html += '<th class="dim-sub-header">' + DIM_NAMES[j2] + '</th>';
  html += '</tr></thead><tbody>';
  if (gl.length === 0) { html += '<tr><td colspan="18" style="padding:30px;text-align:center;color:var(--gray-400);">暂无数据</td></tr>'; }
  else {
    var gt = 0, gv = 0, gs = 0, gpt = 0, gft = 0, gf = {};
    for (var m = 0; m < DIM_NAMES.length; m++) gf[DIM_NAMES[m]] = 0;
    for (var g = 0; g < gl.length; g++) {
      var grp = gl[g];
      gt += grp.total; gv += grp.validTotal; gs += grp.scoreSum; gpt += grp.passTotal; gft += grp.failTotal;
      for (var n = 0; n < DIM_NAMES.length; n++) gf[DIM_NAMES[n]] += grp.failCount[DIM_NAMES[n]];
    }
    var ga = gv > 0 ? (gs / gv).toFixed(1) : '-';
    // 总计行置顶
    html += '<tr class="total-row"><td colspan="2" style="text-align:center;font-weight:600;">汇总</td><td>' + getCurrentDate() + '</td><td>' + gt + '</td><td>' + ga + '</td><td>' + gpt + '</td><td>' + gft + '</td>';
    for (var s = 0; s < DIM_NAMES.length; s++) { var fc0 = gf[DIM_NAMES[s]]; var cls0 = fc0 === 0 ? 'rate-good' : (gt > 0 && fc0 / gt <= 0.2 ? 'rate-warn' : 'rate-bad'); var rate0 = gt > 0 ? ((fc0 / gt) * 100).toFixed(1) + '%' : '-'; html += '<td class="' + cls0 + '">' + rate0 + '</td>'; }
    for (var s2 = 0; s2 < DIM_NAMES.length; s2++) { var fc1 = gf[DIM_NAMES[s2]]; var cls1 = fc1 === 0 ? 'rate-good' : (gt > 0 && fc1 / gt <= 0.2 ? 'rate-warn' : 'rate-bad'); var grpArgT = htmlAttrJsStr(''), dnArgT = htmlAttrJsStr(DIM_NAMES[s2]); if (fc1 > 0) html += '<td class="' + cls1 + '"><span class="cell-clickable" title="点击查看该维度不达标明细" onclick="jumpToDetailByDim(' + grpArgT + ',' + dnArgT + ')">' + fc1 + '</span></td>'; else html += '<td class="' + cls1 + '">' + fc1 + '</td>'; }
    // 汇总建议：按小组分组（数据统计保持聚合不变，仅建议按小组组织）
    var groupDimFail = {};
    for (var gi = 0; gi < gl.length; gi++) {
      var rowG = gl[gi];
      if (!groupDimFail[rowG.group]) { groupDimFail[rowG.group] = {}; for (var d = 0; d < DIM_NAMES.length; d++) groupDimFail[rowG.group][DIM_NAMES[d]] = 0; }
      for (var d = 0; d < DIM_NAMES.length; d++) groupDimFail[rowG.group][DIM_NAMES[d]] += rowG.failCount[DIM_NAMES[d]];
    }
    var groupNames = [];
    for (var kn in groupDimFail) if (groupDimFail.hasOwnProperty(kn)) groupNames.push(kn);
    groupNames.sort(function(a, b) { return compareDashboardGroups(a, b, 'asc'); });
    var sections = [];
    var focusLabel = dimension === 'agent' ? '重点关注客服' : '重点关注账号';
    var bestLabel = dimension === 'agent' ? '表现最好的客服' : '表现最好的账号';
    // 预计算每组每维度真实订单号：不达标订单 + 达标(标杆)订单（去重）；并缓存真实案例记录
    var failOrders = {};
    var goodOrders = {};
    var failRec = {};
    var passRec = {};
    var passRecAny = {};
    for (var fo = 0; fo < data.length; fo++) {
      var rfo = data[fo];
      if (!rfo.order) continue;
      var gfo = dashboardGroup(rfo);
      if (!failOrders[gfo]) failOrders[gfo] = {};
      if (!goodOrders[gfo]) goodOrders[gfo] = {};
      if (!failRec[gfo]) failRec[gfo] = {};
      if (!passRec[gfo]) passRec[gfo] = {};
      for (var fdn = 0; fdn < DIM_NAMES.length; fdn++) {
        var dnfo = DIM_NAMES[fdn];
        if (rfo.scores[dnfo] < 0 || !rfo.details[dnfo]) continue;
        if (rfo.details[dnfo].grade === '不达标') {
          if (!failOrders[gfo][dnfo]) failOrders[gfo][dnfo] = [];
          if (failOrders[gfo][dnfo].indexOf(rfo.order) < 0) failOrders[gfo][dnfo].push(rfo.order);
          if (!failRec[gfo][dnfo]) failRec[gfo][dnfo] = rfo;
        } else {
          if (!goodOrders[gfo][dnfo]) goodOrders[gfo][dnfo] = [];
          if (goodOrders[gfo][dnfo].indexOf(rfo.order) < 0) goodOrders[gfo][dnfo].push(rfo.order);
          if (!passRec[gfo][dnfo]) passRec[gfo][dnfo] = rfo;
          if (!passRecAny[dnfo]) passRecAny[dnfo] = rfo;
        }
      }
    }
    for (var gnI = 0; gnI < groupNames.length; gnI++) {
      var gname = groupNames[gnI];
      var improveItems = [];
      var goodItems = [];
      var dimAgg = [];
      for (var d = 0; d < DIM_NAMES.length; d++) dimAgg.push({ name: DIM_NAMES[d], cnt: groupDimFail[gname][DIM_NAMES[d]] });
      // 平台禁忌维度只要出现违规，一律视为需要改进（不进入“做得好”），并作为重点关注
      var goodCandidates = dimAgg.filter(function(x) { return !(x.name === '平台禁忌' && x.cnt > 0); });
      var zeroAgg = goodCandidates.filter(function(x) { return x.cnt === 0; });
      var goodAgg = zeroAgg.length ? zeroAgg : (function() { var minF = Math.min.apply(null, goodCandidates.map(function(x) { return x.cnt; })); return goodCandidates.filter(function(x) { return x.cnt === minF; }); })();
      var goodSet = {};
      for (var gk = 0; gk < goodAgg.length; gk++) goodSet[goodAgg[gk].name] = goodAgg[gk].cnt;
      for (var d2 = 0; d2 < DIM_NAMES.length; d2++) {
        var dnA = DIM_NAMES[d2], cntA = groupDimFail[gname][dnA];
        var advA = getDimensionAdviceModel(dnA);
        if (goodSet.hasOwnProperty(dnA)) {
          var itemG = { name: dnA, why: cntA === 0 ? '本维度零不达标，表现稳健' : ('本维度不达标最少（' + cntA + ' 次），组内相对最好'), caseGood: advA.caseGood };
          var pgRec = (passRec[gname] && passRec[gname][dnA]) ? passRec[gname][dnA] : passRecAny[dnA];
          // 标杆回邮优先抽取真实达标的优秀同事回邮（已过滤时间戳/元数据），抽不到则回退维度参考模板
          if (pgRec && pgRec.details && pgRec.details[dnA]) { var mgG = getDimensionReasonModel(dnA, pgRec.details[dnA], pgRec); if (mgG.evidence && !/无可用|未提取到|结合原文复核/.test(mgG.evidence)) itemG.caseGood = mgG.evidence; }
          var blist = [];
          for (var bi = 0; bi < gl.length; bi++) { if (gl[bi].group === gname) { var bavg = gl[bi].validTotal > 0 ? gl[bi].scoreSum / gl[bi].validTotal : -1; blist.push({ label: gl[bi].label, avg: bavg, fail: gl[bi].failCount[dnA] }); } }
          if (blist.length >= 2) { blist.sort(function(a, b) { if ((a.fail === 0) !== (b.fail === 0)) return a.fail === 0 ? -1 : 1; if (a.fail !== b.fail) return a.fail - b.fail; return b.avg - a.avg; }); itemG.best = blist[0]; }
          var goodOrd = (goodOrders[gname] && goodOrders[gname][dnA]) ? goodOrders[gname][dnA] : [];
          itemG.orders = goodOrd.slice(0, 3);
          goodItems.push(itemG);
        } else {
          var itemA = { name: dnA, count: cntA, why: '本维度不达标 ' + cntA + ' 次', problem: advA.problem, suggestion: advA.suggestion, caseBad: advA.caseBad, caseGood: advA.caseGood };
          var frRec = (failRec[gname] && failRec[gname][dnA]);
          itemA.optRewrite = getOptimizedRewrite(dnA, frRec);
          // 问题案例优先抽取真实不达标回邮（已过滤时间戳/元数据），判定依据一并带出；抽不到则回退维度参考模板
          if (frRec && frRec.details && frRec.details[dnA]) { var mfA = getDimensionReasonModel(dnA, frRec.details[dnA], frRec); if (mfA.evidence && !/无可用|未提取到|结合原文复核/.test(mfA.evidence)) itemA.caseBad = mfA.evidence; if (mfA.basis) itemA.caseBadBasis = mfA.basis; }
          var pgRec2 = (passRec[gname] && passRec[gname][dnA]) ? passRec[gname][dnA] : passRecAny[dnA];
          if (pgRec2 && pgRec2.details && pgRec2.details[dnA]) { var mgA = getDimensionReasonModel(dnA, pgRec2.details[dnA], pgRec2); if (mgA.evidence && !/无可用|未提取到|结合原文复核/.test(mgA.evidence)) itemA.caseGood = mgA.evidence; }
          var flist = [];
          for (var ri = 0; ri < gl.length; ri++) { if (gl[ri].group === gname && gl[ri].failCount[dnA] > 0) flist.push({ label: gl[ri].label, count: gl[ri].failCount[dnA] }); }
          flist.sort(function(a, b) { return b.count - a.count; });
          itemA.focus = flist.slice(0, 1);
          var ordList = (failOrders[gname] && failOrders[gname][dnA]) ? failOrders[gname][dnA] : [];
          itemA.orders = ordList.slice(0, 3);
          improveItems.push(itemA);
        }
      }
      improveItems.sort(function(a, b) { return b.count - a.count; });
      if (goodItems.length > 0 || improveItems.length > 0) sections.push({ group: gname, good: goodItems, improve: improveItems });
    }
    var totalSugHtml = '暂无突出问题';
    if (sections.length > 0) {
      var secJson = [];
      for (var si = 0; si < sections.length; si++) secJson.push(sectionToJson(sections[si]));
      totalSugHtml = '<span class="cell-clickable" title="点击展开查看各组改进建议与重点关注" onclick="showGroupedAdviceModal(' + htmlAttrJsStr('汇总 - 各组改进建议') + ',[' + secJson.join(',') + '],' + htmlAttrJsStr(focusLabel) + ',' + htmlAttrJsStr(bestLabel) + ')">查看建议（' + sections.length + '组）</span>';
    }
    html += '<td>' + totalSugHtml + '</td></tr>';
    for (var g2 = 0; g2 < gl.length; g2++) {
      var grp2 = gl[g2];
      var avg = grp2.validTotal > 0 ? (grp2.scoreSum / grp2.validTotal).toFixed(1) : '-';
      var sf = [];
      for (var n2 = 0; n2 < DIM_NAMES.length; n2++) if (grp2.failCount[DIM_NAMES[n2]] > 0) sf.push({ name: DIM_NAMES[n2], count: grp2.failCount[DIM_NAMES[n2]] });
      sf.sort(function(a, b) { return b.count - a.count; });
      // 具体客服/账号维度：参照汇总，按“做得好的维度 / 需要改进的维度”结构化展示，并使用该客服/账号的真实回邮案例
      var accImprove = [], accGood = [];
      var dimAggAcc = [];
      for (var dac = 0; dac < DIM_NAMES.length; dac++) dimAggAcc.push({ name: DIM_NAMES[dac], cnt: grp2.failCount[DIM_NAMES[dac]] });
      var zeroAcc = dimAggAcc.filter(function(x) { return x.cnt === 0; });
      var goodAccSet = {};
      if (zeroAcc.length) zeroAcc.forEach(function(x) { goodAccSet[x.name] = true; });
      else { var minAcc = Math.min.apply(null, dimAggAcc.map(function(x) { return x.cnt; })); dimAggAcc.filter(function(x) { return x.cnt === minAcc; }).forEach(function(x) { goodAccSet[x.name] = true; }); }
      for (var dIdx = 0; dIdx < DIM_NAMES.length; dIdx++) {
        var dnX = DIM_NAMES[dIdx], cntX = grp2.failCount[dnX];
        var advX = getDimensionAdviceModel(dnX);
        var recFail = null, recPass = null, goOrd = [], foOrd = [];
        for (var rrI = 0; rrI < data.length; rrI++) {
          var rr = data[rrI];
          if (dimension === 'account' ? rr.account !== grp2.label : rr.agent !== grp2.label) continue;
          if (rr.scores[dnX] < 0 || !rr.details[dnX]) continue;
          if (rr.details[dnX].grade === '不达标') { if (!recFail) recFail = rr; if (foOrd.length < 3) foOrd.push(rr.order); }
          else { if (!recPass) recPass = rr; if (goOrd.length < 3) goOrd.push(rr.order); }
        }
        if (goodAccSet[dnX]) {
          var giX = { name: dnX, why: cntX === 0 ? '本维度零不达标，表现稳健' : ('本维度不达标最少（' + cntX + ' 次），相对最好'), caseGood: advX.caseGood };
          if (recPass && recPass.details[dnX]) { var mgAX = getDimensionReasonModel(dnX, recPass.details[dnX], recPass); if (mgAX.evidence && !/无可用|未提取到|结合原文复核/.test(mgAX.evidence)) giX.caseGood = mgAX.evidence; }
          giX.best = { label: grp2.label, avg: grp2.validTotal > 0 ? grp2.scoreSum / grp2.validTotal : -1, fail: cntX };
          giX.orders = goOrd;
          accGood.push(giX);
        } else {
          var iiX = { name: dnX, count: cntX, why: '本维度不达标 ' + cntX + ' 次', problem: advX.problem, suggestion: advX.suggestion, caseBad: advX.caseBad, caseGood: advX.caseGood, optRewrite: getOptimizedRewrite(dnX, recFail) };
          if (recFail && recFail.details[dnX]) { var mfAX = getDimensionReasonModel(dnX, recFail.details[dnX], recFail); if (mfAX.evidence && !/无可用|未提取到|结合原文复核/.test(mfAX.evidence)) iiX.caseBad = mfAX.evidence; if (mfAX.basis) iiX.caseBadBasis = mfAX.basis; }
          if (recPass && recPass.details[dnX]) { var mgBX = getDimensionReasonModel(dnX, recPass.details[dnX], recPass); if (mgBX.evidence && !/无可用|未提取到|结合原文复核/.test(mgBX.evidence)) iiX.caseGood = mgBX.evidence; }
          iiX.focus = [{ label: grp2.label, count: cntX }];
          iiX.orders = foOrd;
          accImprove.push(iiX);
        }
      }
      var sectionAcc = { group: grp2.label + '（' + grp2.group + '）', good: accGood, improve: accImprove };
      var sugHtml = '暂无突出问题';
      if (accImprove.length > 0) sugHtml = '<span class="cell-clickable" title="点击展开查看该' + dimensionLabel + '的改进建议与重点关注" onclick="showGroupedAdviceModal(' + htmlAttrJsStr(grp2.label + ' - 改进建议') + ',[' + sectionToJson(sectionAcc) + '],' + htmlAttrJsStr(focusLabel) + ',' + htmlAttrJsStr(bestLabel) + ')">查看建议（' + accImprove.length + '项）</span>';
      html += '<tr><td>' + escHtml(grp2.group) + '</td><td>' + escHtml(grp2.label) + '</td><td>' + escHtml(grp2.date) + '</td><td>' + grp2.total + '</td><td>' + avg + '</td><td class="rate-good">' + grp2.passTotal + '</td><td class="rate-bad">' + grp2.failTotal + '</td>';
      for (var p = 0; p < DIM_NAMES.length; p++) { var fc = grp2.failCount[DIM_NAMES[p]]; var cls = fc === 0 ? 'rate-good' : (grp2.total > 0 && fc / grp2.total <= 0.2 ? 'rate-warn' : 'rate-bad'); var rate = grp2.total > 0 ? ((fc / grp2.total) * 100).toFixed(1) + '%' : '-'; html += '<td class="' + cls + '">' + rate + '</td>'; }
      for (var q = 0; q < DIM_NAMES.length; q++) { var fc2 = grp2.failCount[DIM_NAMES[q]]; var cls2 = fc2 === 0 ? 'rate-good' : (grp2.total > 0 && fc2 / grp2.total <= 0.2 ? 'rate-warn' : 'rate-bad'); var grpArg = htmlAttrJsStr(grp2.group), dnArg = htmlAttrJsStr(DIM_NAMES[q]); var agentArg = htmlAttrJsStr(dimension === 'agent' ? grp2.label : ''); var accountArg = htmlAttrJsStr(dimension === 'account' ? grp2.label : ''); if (fc2 > 0) html += '<td class="' + cls2 + '"><span class="cell-clickable" title="点击查看该维度不达标明细" onclick="jumpToDetailByDim(' + grpArg + ',' + dnArg + ',' + agentArg + ',' + accountArg + ')">' + fc2 + '</span></td>'; else html += '<td class="' + cls2 + '">' + fc2 + '</td>'; }
      html += '<td>' + sugHtml + '</td></tr>';
    }
  }
  html += '</tbody></table>';
  document.getElementById('summaryTableWrap').innerHTML = html;
}

function chartValueLabels() { return { display: true, anchor: 'end', align: 'top', color: '#374151', font: { size: 11, weight: '600' }, formatter: function(value, context) { return context.chart.config.type === 'doughnut' ? value : (context.dataset.label && context.dataset.label.indexOf('%') >= 0 ? value + '%' : value); } }; }
function setupChartScroll(canvasId, count, axis) {
  var canvas = document.getElementById(canvasId);
  if (!canvas || !canvas.parentNode) return;
  var inner = canvas.parentNode; // .chart-container
  if (axis === 'y') {
    var h = Math.max(count * 24 + 50, 190);
    inner.style.height = h + 'px';
    inner.style.width = '';
  } else {
    var w = Math.max(count * 30 + 70, inner.clientWidth || 320);
    inner.style.width = w + 'px';
    inner.style.height = '190px';
  }
}
function renderCharts(data, dimension) {
  dimension = dimension === 'account' ? 'account' : 'agent';
  for (var k in charts) if (charts[k]) { charts[k].destroy(); delete charts[k]; }
  if (!HAS_CHART) { var cs = document.querySelectorAll('.chart-container'); for (var c = 0; c < cs.length; c++) cs[c].innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-400);">图表库未加载，请刷新页面</div>'; return; }
  if (typeof ChartDataLabels !== 'undefined') Chart.register(ChartDataLabels);
  var validData = [];
  for (var v = 0; v < data.length; v++) if (data[v].totalScore >= 0) validData.push(data[v]);
  // 通用：根据 dimension 聚合被质检记录，键=客服/账号，值={total,sum}（用于均分）
  function aggregateByDimension(items) {
    var g = {};
    for (var i = 0; i < items.length; i++) {
      var r = items[i];
      var key = dimension === 'account' ? (r.account || '未填写账号') : (canonicalAgentName(r.agent) || '未填写客服');
      if (!g[key]) g[key] = { label: key, total: 0, sum: 0 };
      g[key].total += 1;
      g[key].sum += Number(r.totalScore) || 0;
    }
    return g;
  }
  var gAgg = aggregateByDimension(validData);
  var labelsAgg = Object.keys(gAgg);
  var avgsAgg = labelsAgg.map(function(k) { return gAgg[k].total > 0 ? Math.round(gAgg[k].sum / gAgg[k].total * 10) / 10 : 0; });
  // ① 客服绩效对比 - 全部展示、按均分排序、按排名配色：agent维度从高到低；account维度从低到高
  var paired = labelsAgg.map(function(name, i) { return { name: name, avg: avgsAgg[i] }; });
  paired.sort(function(a, b) { return dimension === 'account' ? (a.avg - b.avg) : (b.avg - a.avg); });
  // 账号维度下若账号>10，只展示"最好5 + 最差5"共10条，避免长滚动；客服维度仍全量展示
  var sdOrigTotal = paired.length;
  var sdIsAccountSliced = dimension === 'account' && paired.length > 10;
  if (sdIsAccountSliced) {
    var best5 = paired.slice(-5);
    var worst5 = paired.slice(0, 5);
    paired = best5.slice().reverse().concat(worst5);
  }
  var sdLabels = paired.map(function(p) { return p.name; });
  var sdValues = paired.map(function(p) { return p.avg; });
  setupChartScroll('chartDimScores', sdLabels.length, 'y');
  // 按排名配色：绿=表现最好前3名，橙=中间，红=表现最差后3名（无论从高到低还是从低到高，始终是"好=绿、差=红"）
  var sdTotal = sdLabels.length;
  var sdIsAcc = dimension === 'account';
  var sdColors = sdValues.map(function(v, idx) {
    if (sdTotal <= 0) return '#fb923c';
    if (sdIsAcc) {
      if (idx < 3) return '#f87171';
      if (idx >= sdTotal - 3) return '#4ade80';
      return '#fb923c';
    } else {
      if (idx < 3) return '#4ade80';
      if (idx >= sdTotal - 3) return '#f87171';
      return '#fb923c';
    }
  });
  // 在卡片标题下追加「总数 + 颜色图例」，方便看出还有多少人未显示
  var dsCanvas = document.getElementById('chartDimScores');
  if (dsCanvas && dsCanvas.parentNode && dsCanvas.parentNode.parentNode && dsCanvas.parentNode.parentNode.parentNode) {
    var card = dsCanvas.parentNode.parentNode.parentNode;
    var oldNote = card.querySelector('.ds-legend');
    if (oldNote) oldNote.parentNode.removeChild(oldNote);
    var note = document.createElement('div');
    note.className = 'ds-legend';
    note.style.cssText = 'font-size:11px;color:#6b7280;margin:2px 0 4px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;';
    note.innerHTML =
      '<span>共 <b style="color:#374151;font-size:12px;">' + sdOrigTotal + '</b> 位' + (sdIsAcc ? '账号' : '客服') + (sdIsAccountSliced ? '（仅展示最好 5 + 最差 5）' : '') + '</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#4ade80;border-radius:2px;display:inline-block;"></span>表现最好前3名</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#fb923c;border-radius:2px;display:inline-block;"></span>中间</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#f87171;border-radius:2px;display:inline-block;"></span>表现最差后3名</span>' +
      (sdTotal > 14 && !sdIsAccountSliced ? '<span style="color:#22d3ee;">（数据较多，可向下滑动查看）</span>' : '');
    var h4 = card.querySelector('h4');
    if (h4) h4.textContent = sdIsAcc ? '账号绩效对比' : '客服绩效对比';
    if (h4 && h4.nextSibling) card.insertBefore(note, h4.nextSibling);
    else card.insertBefore(note, card.firstChild);
  }
  charts.dimScores = new Chart(document.getElementById('chartDimScores'), {
    type: 'bar',
    data: { labels: sdLabels, datasets: [{ label: '质检均分', data: sdValues, backgroundColor: sdColors, borderRadius: 4 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        datalabels: { display: true, anchor: 'end', align: 'right', color: '#374151', font: { size: 11, weight: '600' }, formatter: function(v) { return v; } },
        tooltip: { callbacks: { afterLabel: function(ctx) {
          var nm = ctx.label;
          var sub = data.filter(function(r) { return (dimension === 'account' ? (r.account || '未填写账号') : (canonicalAgentName(r.agent) || '未填写客服')) === nm; });
          return wowChartLine(sub, 'avg');
        } } }
      },
      scales: { x: { beginAtZero: true, max: 100 }, y: { ticks: { autoSkip: false } } }
    }
  });
  // ③ 各项等级占比 - 饼图：3档(优秀/达标/不达标)占比，「无法质检」已从统计中完全剔除，分片内显示数量+百分比，图例置底并贴近饼图
  var gc = { '优秀': 0, '达标': 0, '不达标': 0 };
  for (var i2 = 0; i2 < data.length; i2++) { if (gc[data[i2].grade] !== undefined) gc[data[i2].grade]++; }
  var frContainer = document.getElementById('chartFailRate');
  if (frContainer && frContainer.parentNode) {
    // 去掉旧的顶部比例提示行；并把容器高度收紧，让图例贴近饼图
    var oldNote = frContainer.parentNode.querySelector('.grade-ratio-note');
    if (oldNote) oldNote.parentNode.removeChild(oldNote);
    frContainer.parentNode.style.height = '195px';
  }
  charts.failRate = new Chart(document.getElementById('chartFailRate'), {
    type: 'pie',
    data: {
      labels: ['优秀', '达标', '不达标'],
      datasets: [{
        data: [gc['优秀'], gc['达标'], gc['不达标']],
        backgroundColor: ['#4ade80', '#22d3ee', '#f87171'],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      layout: { padding: { top: 0, bottom: 0 } },
      plugins: {
        legend: { position: 'bottom', labels: { font: { size: 12 }, padding: 4, boxWidth: 12, boxHeight: 10 } },
        datalabels: {
          color: '#ffffff',
          font: { size: 12, weight: '600' },
          formatter: function(value, ctx) {
            if (!value) return '';
            var total = ctx.chart.data.datasets[0].data.reduce(function(a, b) { return a + b; }, 0);
            if (!total) return '';
            var pct = Math.round(value / total * 100);
            // 占比太小(<8%)的扇区不内嵌标签，避免重叠，留给 legend/tooltip
            return pct >= 8 ? (value + ' (' + pct + '%)') : '';
          }
        },
        tooltip: { callbacks: { label: function(ctx) {
          var total = ctx.chart.data.datasets[0].data.reduce(function(a, b) { return a + b; }, 0);
          var pct = total ? Math.round(ctx.parsed / total * 100) : 0;
          var lines = [ctx.label + ': ' + ctx.parsed + ' 条 (' + pct + '%)'];
          var wl = wowChartLine(data, 'grade:' + ctx.label);
          if (wl) lines.push(wl);
          return lines;
        } } }
      }
    }
  });
  // ⑤ 各维度差距分支 - 柱状图：按 STANDARDS 各维度满分 - 实际平均分，按差距降序展示
  var dimStats = [];
  for (var di = 0; di < DIM_NAMES.length; di++) {
    var dn = DIM_NAMES[di];
    // 从 STANDARDS 查该维度的 maxScore（红线类 平台禁忌 max=0，下面会跳过）
    var max = 0;
    for (var ci = 0; ci < STANDARDS.length; ci++) {
      var cat = STANDARDS[ci];
      for (var ii2 = 0; ii2 < cat.items.length; ii2++) {
        if (cat.items[ii2].name === dn) { max = cat.items[ii2].maxScore || 0; break; }
      }
      if (max > 0) break;
    }
    // 平台禁忌（红线）满分=0，不参与"差距"统计；保留其它维度
    if (max <= 0) continue;
    // 实际平均分（score >= 0 视为有效计分）
    var sum = 0, cnt = 0;
    for (var ri = 0; ri < data.length; ri++) {
      var rec2 = data[ri];
      var s2 = rec2 && rec2.scores ? rec2.scores[dn] : null;
      if (typeof s2 === 'number' && s2 >= 0) { sum += s2; cnt++; }
    }
    var avg = cnt > 0 ? Math.round(sum / cnt * 10) / 10 : 0;
    var gap = Math.round((max - avg) * 10) / 10;
    dimStats.push({ name: dn, max: max, avg: avg, gap: gap });
  }
  dimStats.sort(function(a, b) { return b.gap - a.gap; });
  // X 轴使用维度全称（用户要求恢复全称，不再缩写）
  var dgLabels = dimStats.map(function(s) { return s.name; });
  var dgGaps = dimStats.map(function(s) { return s.gap; });
  // 颜色按 gap/max 比例：≥30%红、10-30%橙、<10%绿
  var dgColors = dimStats.map(function(s) {
    var ratio = s.max > 0 ? s.gap / s.max : 0;
    if (ratio >= 0.3) return '#f87171';
    if (ratio >= 0.1) return '#fb923c';
    return '#4ade80';
  });
  // y 轴留适度头顶白：suggestedMax 比最大差距多留约 1 分余量，柱子不贴顶、在画布内居中悬浮（白框里面居中）
  var dgMax = dgGaps.length ? Math.max.apply(null, dgGaps) : 1;
  // 在标题下加图例+样本量提示
  var dgCanvas = document.getElementById('chartDimGap');
  if (dgCanvas && dgCanvas.parentNode && dgCanvas.parentNode.parentNode && dgCanvas.parentNode.parentNode.parentNode) {
    var dgCard = dgCanvas.parentNode.parentNode.parentNode;
    var oldDg = dgCard.querySelector('.dg-legend');
    if (oldDg) oldDg.parentNode.removeChild(oldDg);
    var dgNote = document.createElement('div');
    dgNote.className = 'dg-legend';
    dgNote.style.cssText = 'font-size:11px;color:#6b7280;margin:2px 0 4px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;';
    dgNote.innerHTML =
      '<span>基于 <b style="color:#374151;font-size:12px;">' + data.length + '</b> 条质检计算各维度平均分（-1 视作未计分）</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#f87171;border-radius:2px;display:inline-block;"></span>差距≥30%</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#fb923c;border-radius:2px;display:inline-block;"></span>差距10%-30%</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#4ade80;border-radius:2px;display:inline-block;"></span>差距<10%</span>';
    var dgH4 = dgCard.querySelector('h4');
    if (dgH4 && dgH4.nextSibling) dgCard.insertBefore(dgNote, dgH4.nextSibling);
    else dgCard.insertBefore(dgNote, dgCard.firstChild);
  }
  charts.dimGap = new Chart(document.getElementById('chartDimGap'), {
    type: 'bar',
    data: {
      labels: dgLabels,
      datasets: [{
        label: '距满分差距',
        data: dgGaps,
        backgroundColor: dgColors,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      layout: { padding: { top: 6, bottom: 0, left: 0, right: 0 } },
      plugins: {
        legend: { display: false },
        datalabels: { display: true, anchor: 'end', align: 'top', clamp: true, color: '#374151', font: { size: 11, weight: '600' }, formatter: function(v) { if (v === 0) return '✓达标'; return '+' + v; } },
        tooltip: { callbacks: { label: function(ctx) {
          var s = dimStats[ctx.dataIndex];
          var lines = ['平均 ' + s.avg + ' / 满分 ' + s.max + ' → 差距 ' + s.gap + ' 分'];
          var wl = wowChartLine(data, 'dimGap:' + s.name);
          if (wl) lines.push(wl);
          return lines;
        } } }
      },
      scales: { y: { beginAtZero: true, suggestedMax: dgMax + 1, ticks: { callback: function(v) { return v + '分'; }, padding: 2 } }, x: { ticks: { padding: 4, font: { size: 10 }, autoSkip: false, maxRotation: 35, minRotation: 0 } } }
    }
  });
  // ⑥ 占比目标达成 - 柱状图：各维度「达标率」= 达到达标线的记录占比(%)，按达标率升序（最该关注的维度排前）
  var taStats = [];
  for (var ti = 0; ti < DIM_NAMES.length; ti++) {
    var tn = DIM_NAMES[ti];
    var tmax = 0, tpass = 0;
    for (var tc = 0; tc < STANDARDS.length; tc++) {
      var tcat = STANDARDS[tc];
      for (var ti2 = 0; ti2 < tcat.items.length; ti2++) {
        if (tcat.items[ti2].name === tn) {
          tmax = tcat.items[ti2].maxScore || 0;
          var tlevels = tcat.items[ti2].levels || [];
          for (var tl = 0; tl < tlevels.length; tl++) { if (tlevels[tl].grade === '达标') { tpass = tlevels[tl].score || 0; break; } }
          break;
        }
      }
      if (tmax > 0) break;
    }
    if (tmax <= 0) continue; // 红线类(平台禁忌) max=0 跳过
    var tcnt = 0, tpassCnt = 0;
    for (var tr = 0; tr < data.length; tr++) {
      var trec = data[tr];
      var ts = trec && trec.scores ? trec.scores[tn] : null;
      if (typeof ts === 'number' && ts >= 0) { tcnt++; if (ts >= tpass) tpassCnt++; }
    }
    var rate = tcnt > 0 ? Math.round(tpassCnt / tcnt * 100) : 0;
    taStats.push({ name: tn, max: tmax, pass: tpass, cnt: tcnt, passCnt: tpassCnt, rate: rate });
  }
  taStats.sort(function(a, b) { return a.rate - b.rate; });
  var taLabels = taStats.map(function(s) { return s.name; });
  var taRates = taStats.map(function(s) { return s.rate; });
  var taColors = taStats.map(function(s) { return s.rate >= 90 ? '#4ade80' : (s.rate >= 70 ? '#fb923c' : '#f87171'); });
  var taCanvas = document.getElementById('chartTargetAchieve');
  if (taCanvas && taCanvas.parentNode && taCanvas.parentNode.parentNode && taCanvas.parentNode.parentNode.parentNode) {
    var taCard = taCanvas.parentNode.parentNode.parentNode;
    var oldTa = taCard.querySelector('.ta-legend');
    if (oldTa) oldTa.parentNode.removeChild(oldTa);
    var taNote = document.createElement('div');
    taNote.className = 'ta-legend';
    taNote.style.cssText = 'font-size:11px;color:#6b7280;margin:2px 0 4px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;';
    taNote.innerHTML =
      '<span>基于 <b style="color:#374151;font-size:12px;">' + data.length + '</b> 条质检，各维度达到达标线的记录占比</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#4ade80;border-radius:2px;display:inline-block;"></span>≥90%</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#fb923c;border-radius:2px;display:inline-block;"></span>70%-90%</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:12px;height:10px;background:#f87171;border-radius:2px;display:inline-block;"></span><70%</span>';
    var taH4 = taCard.querySelector('h4');
    if (taH4 && taH4.nextSibling) taCard.insertBefore(taNote, taH4.nextSibling);
    else taCard.insertBefore(taNote, taCard.firstChild);
  }
  charts.targetAchieve = new Chart(document.getElementById('chartTargetAchieve'), {
    type: 'bar',
    data: {
      labels: taLabels,
      datasets: [{ label: '目标达成率', data: taRates, backgroundColor: taColors, borderRadius: 4 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      layout: { padding: { top: 4, bottom: 0, left: 0, right: 0 } },
      plugins: {
        legend: { display: false },
        datalabels: { display: true, anchor: 'end', align: 'top', color: '#374151', font: { size: 11, weight: '600' }, formatter: function(v) { return v + '%'; } },
        tooltip: { callbacks: { label: function(ctx) {
          var s = taStats[ctx.dataIndex];
          var lines = ['达标 ' + s.passCnt + '/' + s.cnt + ' 条 → 达成率 ' + s.rate + '%（达标线 ' + s.pass + '/' + s.max + ' 分）'];
          var wl = wowChartLine(data, 'dimPassRate:' + s.name);
          if (wl) lines.push(wl);
          return lines;
        } } }
      },
      scales: { y: { beginAtZero: true, max: 100, ticks: { stepSize: 20, callback: function(v) { return v + '%'; }, padding: 2 } }, x: { ticks: { padding: 0 } } }
    }
  });
}

// ============================================================
// 质检知识库（案例 + 质检知识）
// ============================================================
var GENERIC_CN = {'客服':1,'订单':1,'邮件':1,'客户':1,'我们':1,'你们':1,'他们':1,'她们':1,'它们':1,'自己':1,'这个':1,'那个':1,'这些':1,'那些':1,'可以':1,'没有':1,'应该':1,'需要':1,'进行':1,'提供':1,'问题':1,'处理':1,'回复':1,'亚马':1,'马逊':1,'亚马逊':1,'您好':1,'谢谢':1,'请问':1,'亲爱':1,'已经':1,'如果':1,'及时':1,'帮助':1,'支持':1,'感谢':1,'确认':1,'收到':1,'为您':1,'稍后':1,'尽快':1,'请您':1,'麻烦':1,'抱歉':1,'理解':1,'情况':1,'希望':1,'建议':1,'注意':1,'确保':1,'务必':1,'一定':1,'信息':1,'相关':1,'以下':1,'如下':1,'由于':1,'因为':1,'所以':1,'但是':1,'并且':1,'以及':1,'或者':1,'通过':1,'对于':1,'根据':1,'按照':1,'针对':1,'关于':1,'不要':1,'不能':1,'不会':1,'不是':1,'就是':1,'还是':1,'这样':1,'那样':1,'什么':1,'怎么':1,'如何':1,'为什么':1,'一个':1,'一种':1,'一些':1,'多少':1,'非常':1,'比较':1,'可能':1,'大概':1,'一般':1,'主要':1,'重要':1,'具体':1,'其他':1,'另外':1,'然后':1,'首先':1,'其次':1,'最后':1,'例如':1,'比如':1,'包括':1,'是否':1,'能否':1,'此时':1,'对此':1,'上述':1,'时间':1,'时候':1,'这里':1,'那里':1,'哪儿':1,'哪里':1,'怎样':1,'这么':1,'那么':1,'几个':1,'每次':1,'每天':1,'每月':1,'每年':1,'这种':1,'那种':1};
var GENERIC_EN = {'the':1,'and':1,'that':1,'with':1,'this':1,'your':1,'our':1,'from':1,'have':1,'will':1,'order':1,'email':1,'amazon':1,'please':1,'thank':1,'sorry':1,'hello':1,'dear':1,'they':1,'their':1,'when':1,'what':1,'which':1,'about':1,'would':1,'could':1,'should':1,'there':1,'here':1,'each':1,'more':1,'some':1,'able':1,'need':1,'just':1,'know':1,'want':1,'soon':1,'also':1,'into':1,'than':1,'then':1,'them':1,'are':1,'was':1,'were':1,'been':1,'being':1,'you':1,'for':1,'but':1,'not':1,'all':1,'any':1,'can':1,'has':1,'had':1,'out':1,'use':1,'how':1,'who':1,'why':1,'yes':1,'day':1,'days':1,'hour':1,'hours':1,'min':1,'mins':1};
var CS_EQUIV = { '退款':['refund','refunded','reimburse'], '退货':['return','returned','returnable'], '换货':['exchange','replace'], '到帐':['received','credited'],'到账':['received','credited'], '等待':['wait','waiting'],'催促':['expedite','urgent'], '承诺':['promise','commit','guarantee'],'保证':['guarantee','ensure'], '时限':['deadline','timeframe'],'期限':['deadline','timeframe'], '跟进':['followup','followup'],'更新':['update'], '安抚':['apolog','empathy','concern'],'同理':['empathy','understand'], '投诉':['complaint','complain'],'不满':['unhappy','unsatisfied','frustrated','disappointed'], '情绪':['unhappy','angry','frustrated'],'生气':['angry','upset'], '升级':['escalat','supervisor','senior'],'转交':['escalat','transfer'], '补偿':['compensat','goodwill','gesture'],'赔偿':['compensat','refund'], '物流':['ship','shipping','delivery'],'发货':['ship','shipping','dispatch'], '丢件':['lost','missing'],'丢包':['lost','missing'],'遗失':['lost','missing'], '破损':['damaged','broken'],'损坏':['damaged','broken'], '延迟':['delay','delayed','late'],'延误':['delay','delayed'], '发票':['invoice'],'票据':['invoice','receipt'], '追踪':['tracking'],'物流单':['tracking'], '解决':['resolve','solution'],'方案':['solution','option'], '确认':['confirm','confirmation'],'核实':['verify','confirm'], '感谢':['thank','thanks'],'致谢':['thank','thanks'], '态度':['attitude','polite','professional'],'语气':['tone','polite'], '时效':['sla','timely','response'],'及时':['timely','prompt'], '时效内':['sla','timely'],'催促':['expedite'], '不达标':['fail','unqualified'],'达标':['qualified','meet'], '退款流程':['refund'],'退货流程':['return'],'退货政策':['return','policy'], '客户要求':['request','demand'],'诉求':['request','concern'], '主动':['proactive','initiative'],'被动':['passive'], '邮件':['email','message'],'回邮':['reply','email'],'回复':['reply','respond'], '订单':['order'],'账号':['account'],};
// ===================== 要求（判分依据）提取 =====================
// 领域词表：在「标题 + 内容 / 判断依据」中命中即视为一条明确要求，全部参与后续判分
var KB_TERM_DICT = ['退款','退货','退换','换货','补发','重发','补寄','寄回','退回','取消订单','取消','补偿','赔偿','折扣','优惠券','优惠','核实','确认','查询','安排','处理','跟进','催办','回访','更新','物流','发货','寄出','配送','签收','运输','维修','更换','解决','方案','步骤','流程','附件','说明','解释','提醒','建议','避免','风险','替代方案','替代','备选','主动','及时','时效','时限','期限','到账','到帐','退款时间','退款金额','订单号','平台单号','发票','收据','破损','损坏','丢件','丢失','遗失','延迟','延误','超时','未发货','情绪','不满','投诉','安抚','同理','道歉','歉意','致歉','理解','态度','语气','礼貌','称呼','个性化','响应','承诺','升级','转交','主管','上级','二次','再次','重复','等待','催促','催单','处理结果','处理进度','退款流程','退货流程','退货政策','退货地址','物流单号','追踪号','运单号','跟踪','查询链接','物流链接','包装','质量','产品','商品','配件','说明书','安装','使用','操作','指导','视频','截图','凭证','回邮','回复','答复','邮件','电话','沟通','确认收货','收到','抱歉','感谢','谢谢','辛苦','祝好','此致','敬礼','语言','语法','拼写','错别字','表达','格式','礼节','问候','签名','专业','诉求','诉求点','赔偿方案','处理时效','操作步骤'];
// 知识条目里的「元信息」词：属于记录说明，不是质检要求，不作为判分依据
var KB_META_TERMS = {'好案例':1,'不好案例':1,'案例':1,'质检':1,'原质检':1,'质检结果':1,'结果为':1,'经申诉':1,'申诉':1,'审核':1,'审核结论':1,'审核通过':1,'可推广':1,'推广':1,'做法':1,'复盘':1,'参考':1,'同类场景':1,'申诉理由':1,'有效处理':1,'处理方式':1,'沉淀':1,'不达标':1,'达标':1,'结论':1,'后续':1,'本次':1,'结合':1,'作为':1,'参照':1,'流程进行':1,'进行质检':1,'质检时':1,'需要参照':1,'这个流程':1};
var KB_REQ_MARKER = /必须|必需|务必|不得|禁止|避免|确保|保证|需要|应当|应该|应|须|不能|不可以|要求|建议|提醒|注意|主动|及时|第一时间|优先|至少|最多|不超过|超过/;
var KB_REQ_MARKER_EN = /must|shall|should|need to|required|avoid|ensure|make sure|be sure|recommend|suggest|within\s*\d+/i;

// ---- 适用维度（支持多选）----
var KB_DIM_OPTIONS = ['方案合理性', '流程&操作完整性', '服务技巧', '服务态度', '语言语法表达', '平台禁忌', '综合'];
function normalizeKnowledgeDimName(v) {
  var t = String(v == null ? '' : v).replace(/&amp;/g, '&').trim();
  if (!t) return '';
  for (var i = 0; i < KB_DIM_OPTIONS.length; i++) if (KB_DIM_OPTIONS[i] === t) return t;
  if (/^流程.*操作完整性$/.test(t) || t === '流程操作完整性') return '流程&操作完整性';
  if (/^语言/.test(t) && /表达$/.test(t)) return '语言语法表达';
  if (t === '全部' || t === '全部维度' || t === '所有维度' || t === '通用') return '综合';
  return t;
}
function parseKnowledgeDimensions(value) {
  var raw = String(value == null ? '' : value).split(/[\u3001,\uff0c;\uff1b\/|]+/);
  var seen = {}, out = [];
  for (var i = 0; i < raw.length; i++) { var d = normalizeKnowledgeDimName(raw[i]); if (!d || seen[d]) continue; seen[d] = 1; out.push(d); }
  if (!out.length) out.push('综合');
  return out;
}
function getKnowledgeDimensions(item) {
  if (item && item.dimensions && item.dimensions.length) return parseKnowledgeDimensions(item.dimensions.join('\u3001'));
  return parseKnowledgeDimensions(item ? item.dimension : '');
}
function knowledgeDimensionMatches(item, dim) {
  var dims = getKnowledgeDimensions(item);
  for (var i = 0; i < dims.length; i++) if (dims[i] === '综合' || dims[i] === dim) return true;
  return false;
}
function knowledgeDimensionsOverlap(a, b) {
  var da = getKnowledgeDimensions(a), db = getKnowledgeDimensions(b);
  for (var i = 0; i < da.length; i++) for (var j = 0; j < db.length; j++) if (da[i] === db[j]) return true;
  return (da.indexOf('综合') >= 0 && db.indexOf('综合') >= 0);
}
function getDimensionCheckboxes() {
  var box = document.getElementById('knowledgeDimensionBox');
  if (!box) return [];
  var all = box.querySelectorAll('input[type="checkbox"]'), out = [];
  for (var i = 0; i < all.length; i++) out.push(all[i]);
  return out;
}
function setKnowledgeDimensionUI(values) {
  var dims = parseKnowledgeDimensions(values);
  var onlyOverall = dims.length === 1 && dims[0] === '综合';
  var cbs = getDimensionCheckboxes();
  for (var i = 0; i < cbs.length; i++) {
    var v = normalizeKnowledgeDimName(cbs[i].value);
    cbs[i].checked = onlyOverall ? (v === '综合') : (v !== '综合' && dims.indexOf(v) >= 0);
  }
  var hidden = document.getElementById('knowledgeDimension');
  if (hidden) hidden.value = onlyOverall ? '综合' : dims.join('\u3001');
}
function getSelectedKnowledgeDimensions() {
  var cbs = getDimensionCheckboxes(), picked = [];
  for (var i = 0; i < cbs.length; i++) if (cbs[i].checked) picked.push(normalizeKnowledgeDimName(cbs[i].value));
  var dims = parseKnowledgeDimensions(picked.join('\u3001'));
  if (dims.length > 1 && dims.indexOf('综合') >= 0) dims = dims.filter(function(d) { return d !== '综合'; });
  return dims;
}
function onKnowledgeDimensionChange() {
  var hidden = document.getElementById('knowledgeDimension');
  if (hidden) hidden.value = getSelectedKnowledgeDimensions().join('\u3001');
  checkKnowledgeDuplicate();
  previewKnowledgeHits();
}

// 从「标题 + 内容 / 判断依据」中提取全部要求：
//   core = 明确要求（外语术语、时间/数量约束、引号原话、领域术语、同义词扩展），全部参与判分
//   aux  = 兜底参考词（标题分词与其余中文短语），仅在无核心要求命中时按 ≥2 项兜底
function kbExtractRequirements(item) {
  var title = String((item && item.title) || '');
  var content = String((item && item.content) || '');
  var text = title + '\n' + content;
  var seen = {}, core = [], aux = [];
  function norm(raw) {
    return String(raw == null ? '' : raw).replace(/[\s"'“”‘’【】\[\]（）()《》<>·、，,。；;：:!！?？\-—_/\\|]+/g, ' ').trim().toLowerCase();
  }
  // 具体性判定：越具体越算「核心要求」，泛词只作参考词兜底
  function classify(t) {
    if (/\d/.test(t) && /(小时|天|工作日|自然日|周|月|分钟|hour|day|week|month|minute)/.test(t)) return 'core';
    var cjk = (t.match(/[\u4e00-\u9fff]/g) || []).length;
    var latin = (t.match(/[a-z]/g) || []).length;
    if (cjk >= 3) return 'core';
    if (cjk === 0 && (latin >= 5 || /\s/.test(t))) return 'core';
    return 'aux';
  }
  function add(raw, force) {
    var t = norm(raw);
    if (t.length < 2) return;
    if (GENERIC_EN[t] || GENERIC_CN[t] || KB_META_TERMS[t]) return;
    if (seen[t]) return;
    seen[t] = 1;
    var bucket = force || classify(t);
    (bucket === 'core' ? core : aux).push(t);
  }
  // 1) 外语术语
  var en = text.match(/[A-Za-z][A-Za-z'\-]{2,}/g) || [];
  for (var a = 0; a < en.length; a++) add(en[a]);
  // 2) 时间 / 数量约束（明确要求）
  var du = text.match(/\d+\s*(?:个)?\s*(?:工作日|自然日|天|小时|分钟|周|月)|within\s*\d+\s*(?:hours?|days?|business\s+days?|minutes?)|in\s*\d+\s*(?:hours?|days?)/gi) || [];
  for (var b = 0; b < du.length; b++) add(du[b], 'core');
  // 3) 引号 / 书名号 / 括号内的原话（明确要求）
  var q = text.match(/[\u3010\u300c\u201c\u2018\u300e\uff08\[\u3014\u300a]([^\u3011\u300d\u201d\u2019\u300f\uff09\]\u3015\u300b]{2,30})[\u3011\u300d\u201d\u2019\u300f\uff09\]\u3015\u300b]/g) || [];
  for (var c = 0; c < q.length; c++) { var inner = q[c].replace(/^[\u3010\u300c\u201c\u2018\u300e\uff08\[\u3014\u300a]/, '').replace(/[\u3011\u300d\u201d\u2019\u300f\uff09\]\u3015\u300b]$/, ''); add(inner, 'core'); }
  // 4) 领域术语（全部，不截断）
  for (var d = 0; d < KB_TERM_DICT.length; d++) if (text.indexOf(KB_TERM_DICT[d]) >= 0) add(KB_TERM_DICT[d]);
  // 5) 同义词扩展（属于"相关词"，不算明确要求，只作参考词兜底）
  for (var ck in CS_EQUIV) { if (text.indexOf(ck) >= 0) { var eq = CS_EQUIV[ck]; for (var eqi = 0; eqi < eq.length; eqi++) add(eq[eqi], 'aux'); } }
  // 6) 标题分词（参考词）
  var titleTokens = title.split(/[\s,，。；;、.!！？?：:（）()\[\]{}<>|/\\]+/).filter(function(t) { return t.length >= 2; });
  for (var ti = 0; ti < titleTokens.length; ti++) add(titleTokens[ti]);
  // 7) 兜底参考词：其余中文短语
  var cnRuns = text.match(/[\u4e00-\u9fff]{2,}/g) || [];
  for (var h = 0; h < cnRuns.length; h++) { var r2 = cnRuns[h]; for (var m = 0; m + 1 < r2.length; m++) add(r2.substr(m, 2), 'aux'); }
  if (core.length > 300) core = core.slice(0, 300);
  if (aux.length > 300) aux = aux.slice(0, 300);
  return { keywords: core.concat(aux), core: core, aux: aux };
}
function deriveKeywords(item) { return kbExtractRequirements(item).keywords; }function ensureKnowledgeRequirements() {
  var changed = 0;
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) {
    var it = KNOWLEDGE_BASE[i];
    var req = kbExtractRequirements(it);
    if (!it.coreKeywords || !it.auxKeywords || JSON.stringify(it.keywords || []) !== JSON.stringify(req.keywords)) {
      it.keywords = req.keywords; it.coreKeywords = req.core; it.auxKeywords = req.aux; changed++;
    }
    if (!it.dimensions || !it.dimensions.length) it.dimensions = parseKnowledgeDimensions(it.dimension);
    it.dimension = it.dimensions.join('\u3001');
  }
  return changed;
}
function knowledgeItemMatch(text, item) {
  var hay = String(text || '').toLowerCase();
  if (!hay || !item) return null;
  var negative = (item.type === 'case-bad' || item.kind === 'missed');
  var core = (item.coreKeywords && item.coreKeywords.length) ? item.coreKeywords : (item.keywords || []);
  var aux = item.auxKeywords || [];
  for (var i = 0; i < core.length; i++) if (core[i] && hay.indexOf(String(core[i]).toLowerCase()) >= 0) return { keyword: core[i], kind: 'core' };
  // 负向知识（不好案例 / 容易漏检）：必须有明确要求命中才判定，避免通用词误伤；
  // 仅当该知识本身提取不到明确要求时，才退化为参考词 ≥3 项的兜底。
  var need = negative ? (core.length === 0 ? 3 : 99) : 2;
  if (need > 90) return null;
  var hits = [];
  for (var j = 0; j < aux.length; j++) if (aux[j] && hay.indexOf(String(aux[j]).toLowerCase()) >= 0) { hits.push(aux[j]); if (hits.length >= need) return { keyword: hits.join(' + '), kind: 'aux' }; }
  return null;
}
function knowledgeTypeLabel(type) { return type === 'case-good' ? '好案例' : (type === 'case-bad' ? '不好案例' : '质检知识'); }
function knowledgeKindLabel(kind, summaryKind) { return kind === 'missed' ? '容易漏检' : (kind === 'reference-case' ? '申诉通过·' + (summaryKind === 'missed' ? '质检知识' : (summaryKind === 'can-do' ? '可推广' : '参考案例')) : '可以推广'); }
function knowledgeSearchText(item) { return [item.title, item.dimension, (item.keywords || []).join(' '), item.content, item.url || '', knowledgeTypeLabel(item.type), knowledgeKindLabel(item.kind, item.summaryKind), item.summaryKind].join(' ').toLowerCase(); }
function findKnowledgeById(id) { for (var i = 0; i < KNOWLEDGE_BASE.length; i++) if (KNOWLEDGE_BASE[i].id === id) return KNOWLEDGE_BASE[i]; return null; }
function getKnowledgeSearchQuery(type) { var id = type === 'case' ? 'caseSearch' : 'knowledgeSearch'; var el = document.getElementById(id); return el ? String(el.value || '').trim().toLowerCase() : ''; }
function highlightSearchText(value, query) {
  var text = escHtml(value || '');
  if (!query) return text;
  var words = query.split(/\s+/).filter(function(w) { return w.length > 0; }).sort(function(a, b) { return b.length - a.length; });
  for (var i = 0; i < words.length; i++) { var safe = words[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); if (safe) text = text.replace(new RegExp('(' + safe + ')', 'ig'), '<mark style="background:#fef08a;color:#854d0e;padding:0 2px;border-radius:2px;">$1</mark>'); }
  return text;
}
function filterKnowledgeList(list, query) { if (!query) return list; var words = query.split(/\s+/).filter(function(w) { return w.length > 0; }); return list.filter(function(item) { var hay = knowledgeSearchText(item); for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) < 0) return false; return true; }); }
function renderKnowledgeBase() {
  var cases = [], knowledges = [];
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) { if (KNOWLEDGE_BASE[i].type === 'knowledge') knowledges.push(KNOWLEDGE_BASE[i]); else cases.push(KNOWLEDGE_BASE[i]); }
  var caseQuery = getKnowledgeSearchQuery('case'), knowledgeQuery = getKnowledgeSearchQuery('knowledge');
  cases = filterKnowledgeList(cases, caseQuery); knowledges = filterKnowledgeList(knowledges, knowledgeQuery);
  function updateHint(id, query, count) { var el = document.getElementById(id); if (!el) return; if (!query) { el.style.display = 'none'; return; } el.style.display = 'block'; el.textContent = '已按标题、维度、关键词和内容模糊搜索，匹配 ' + count + ' 条'; }
  updateHint('caseSearchHint', caseQuery, cases.length); updateHint('knowledgeSearchHint', knowledgeQuery, knowledges.length);
  function renderRows(list, query, editClass) {
    if (!list.length) return '<div style="padding:30px;text-align:center;color:var(--gray-400);">' + (query ? '没有找到匹配知识' : '暂无内容，点击右上角按钮新增') + '</div>';
    var html = '<table class="standard-table"><thead><tr><th style="width:90px;">类型</th><th style="width:170px;">标题</th><th style="width:150px;">适用维度（可多选）</th><th style="width:220px;">判分依据（自动提取的全部要求）</th><th>内容 / 判断依据</th><th style="width:120px;">操作</th></tr></thead><tbody>';
    for (var j = 0; j < list.length; j++) { var item = list[j]; var tone = item.type === 'case-good' ? 'var(--success)' : (item.type === 'case-bad' || item.kind === 'missed' ? 'var(--danger)' : 'var(--info)'); var srcBadge = item.sourceType === 'file' ? '📄 ' : (item.sourceType === 'url' ? '🔗 ' : ''); var srcActions = item.sourceType === 'file' ? '<button class="btn-link" onclick="openKnowledgeFileById(\'' + item.id + '\')">打开</button><button class="btn-link" onclick="downloadKnowledgeFileById(\'' + item.id + '\')">下载</button>' : (item.sourceType === 'url' ? '<button class="btn-link" onclick="openKnowledgeFileById(\'' + item.id + '\')">打开链接</button>' : ''); html += '<tr id="knowledge-row-' + escHtml(item.id) + '"><td style="color:' + tone + ';font-weight:600;">' + escHtml(knowledgeTypeLabel(item.type)) + '<br><span style="font-size:11px;font-weight:400;">' + escHtml(knowledgeKindLabel(item.kind, item.summaryKind)) + '</span></td><td style="font-weight:600;">' + srcBadge + highlightSearchText(item.title, query) + '</td><td>' + highlightSearchText(getKnowledgeDimensions(item).join('\u3001'), query) + '</td><td style="font-size:12px;">' + '<div style="max-height:150px;overflow:auto;line-height:1.55;">' + ((item.coreKeywords && item.coreKeywords.length) ? '<div><span style="color:#b45309;font-weight:600;">明确要求(' + item.coreKeywords.length + ')：</span>' + highlightSearchText(item.coreKeywords.join('、'), query) + '</div>' : '') + ((item.auxKeywords && item.auxKeywords.length) ? '<div style="margin-top:3px;color:var(--gray-500);"><span style="color:var(--gray-400);">参考词(' + item.auxKeywords.length + ')：</span>' + highlightSearchText(item.auxKeywords.join('、'), query) + '</div>' : '') + '</div><div style="margin-top:4px;color:var(--gray-400);font-size:11px;">共 ' + ((item.coreKeywords || []).length + (item.auxKeywords || []).length) + ' 项要求</div>' + '</td><td style="white-space:pre-wrap;line-height:1.6;">' + highlightSearchText(item.content, query) + '</td><td class="' + editClass + '"><button class="btn-link" onclick="openKnowledgeModal(\'' + item.type + '\',\'' + item.id + '\')">修改</button>' + srcActions + '<button class="btn-link danger" onclick="deleteKnowledgeItem(\'' + item.id + '\')">删除</button></td></tr>'; }
    return html + '</tbody></table>';
  }
  document.getElementById('caseLibraryWrap').innerHTML = renderRows(cases, caseQuery, 'case-edit-only');
  document.getElementById('knowledgeLibraryWrap').innerHTML = renderRows(knowledges, knowledgeQuery, 'admin-only');
  var badge = document.getElementById('knowledgeBadge'); if (badge) badge.textContent = KNOWLEDGE_BASE.length;
}
function knowledgeItemMatches(text, item) {
  return !!knowledgeItemMatch(text, item);
}
function previewKnowledgeHits() {
  var box = document.getElementById('knowledgeHitPreview'); if (!box) return;
  var title = (document.getElementById('knowledgeTitle').value || '').trim();
  var content = document.getElementById('knowledgeContent').value || '';
  if (!title && !content) { box.innerHTML = ''; return; }
  var dims = getSelectedKnowledgeDimensions();
  var req = kbExtractRequirements({ title: title, content: content });
  var draft = { id: document.getElementById('knowledgeEditId').value, type: document.getElementById('knowledgeEditType').value, kind: document.getElementById('knowledgeKind').value || 'can-do', title: title, dimension: dims.join('\u3001'), dimensions: dims, content: content, keywords: req.keywords, coreKeywords: req.core, auxKeywords: req.aux };
  var hits = 0;
  for (var i=0;i<rawData.length;i++) { var t = String(rawData[i].reply || '') + '\n' + String(rawData[i].customer || ''); if (knowledgeItemMatches(t, draft)) hits++; }
  var wk = req.core.length, ak = req.aux.length;
  var dimTxt = '适用维度：<b>' + escHtml(dims.join('\u3001')) + '</b>；';
  var reqTxt = '已提取 <b style="color:var(--primary)">' + (wk + ak) + '</b> 项要求（明确要求 ' + wk + ' 项 + 参考词 ' + ak + ' 项）；';
  if (rawData.length === 0) box.innerHTML = dimTxt + reqTxt + '当前未上传邮件数据，保存后不会自动重跑（请先上传数据再保存）。';
  else if (hits === 0) box.innerHTML = dimTxt + reqTxt + '预计命中 <b style="color:var(--danger)">0</b> / ' + rawData.length + ' 条邮件——这些要求在当前邮件中未出现，保存后不会改变质检分数。建议补充英文术语或粘贴实际 SOP 原文（例如 refund / return / follow up）。';
  else box.innerHTML = dimTxt + reqTxt + '预计命中 <b style="color:var(--primary)">' + hits + '</b> / ' + rawData.length + ' 条邮件，保存后这些邮件将按本知识重新判分。';
}
function openKnowledgeModal(type, id) { if (!qcRequireKnowledgeEdit(type)) return;
  if (!requireCloudAdmin()) return;
  var item = null;
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) if (KNOWLEDGE_BASE[i].id === id) item = KNOWLEDGE_BASE[i];
  document.getElementById('knowledgeEditId').value = item ? item.id : '';
  document.getElementById('knowledgeEditType').value = type;
  document.getElementById('knowledgeModalTitle').textContent = item ? '修改' + knowledgeTypeLabel(type) : '新增' + knowledgeTypeLabel(type);
  document.getElementById('knowledgeTitle').value = item ? item.title : '';
  document.getElementById('knowledgeKind').value = item ? (item.kind || 'can-do') : (type === 'case-bad' ? 'missed' : 'can-do');
  setKnowledgeDimensionUI(item ? getKnowledgeDimensions(item) : ['综合']);
  document.getElementById('knowledgeContent').value = item ? item.content : '';
  var st = item ? (item.sourceType || 'text') : 'text';
  var sRadios = document.querySelectorAll('input[name="knowledgeSource"]'); for (var sri = 0; sri < sRadios.length; sri++) sRadios[sri].checked = (sRadios[sri].value === st);
  pendingKnowledgeFile = (item && item.sourceType === 'file') ? { path: item.fileCloudPath, name: item.fileName, size: item.fileSize, type: item.fileType } : null;
  document.getElementById('knowledgeUrl').value = (item && item.url) ? item.url : '';
  renderKnowledgeFileStatus(); onKnowledgeSourceChange();
  document.getElementById('knowledgeDuplicateHint').style.display = 'none';
  document.getElementById('knowledgeModal').classList.add('show');
  ['knowledgeTitle', 'knowledgeContent', 'knowledgeDimension', 'knowledgeKind'].forEach(function(id) { document.getElementById(id).oninput = function(){ checkKnowledgeDuplicate(); previewKnowledgeHits(); }; document.getElementById(id).onchange = function(){ checkKnowledgeDuplicate(); previewKnowledgeHits(); }; });
  previewKnowledgeHits();
}
function closeKnowledgeModal() { document.getElementById('knowledgeModal').classList.remove('show'); }
function normalizeKnowledgeText(value) { return String(value || '').toLowerCase().replace(/[\s,，。；;、.!！？?：:（）()\[\]{}]/g, ''); }
function knowledgeSimilarity(item, draft) {
  var titleA = normalizeKnowledgeText(item.title), titleB = normalizeKnowledgeText(draft.title);
  var contentA = normalizeKnowledgeText(item.content), contentB = normalizeKnowledgeText(draft.content);
  var keywordsA = (item.keywords || []).map(normalizeKnowledgeText).filter(function(s) { return !!s; });
  var keywordsB = (draft.keywords || []).map(normalizeKnowledgeText).filter(function(s) { return !!s; });
  var sharedKeywords = keywordsB.filter(function(k) { return k && (keywordsA.indexOf(k) >= 0 || titleA.indexOf(k) >= 0 || contentA.indexOf(k) >= 0); });
  var reasons = [];
  if (titleA && titleB && (titleA.indexOf(titleB) >= 0 || titleB.indexOf(titleA) >= 0)) reasons.push('标题高度重合');
  if (contentA && contentB && (contentA.indexOf(contentB) >= 0 || contentB.indexOf(contentA) >= 0)) reasons.push('内容高度重合');
  if (sharedKeywords.length >= 1 && knowledgeDimensionsOverlap(item, draft)) reasons.push('适用维度和关键词重合');
  return { score: reasons.length + (sharedKeywords.length >= 2 ? 1 : 0), reasons: reasons, sharedKeywords: sharedKeywords };
}
function findSimilarKnowledge(draft) { var found = []; for (var i = 0; i < KNOWLEDGE_BASE.length; i++) { if (KNOWLEDGE_BASE[i].id === draft.id) continue; var sim = knowledgeSimilarity(KNOWLEDGE_BASE[i], draft); if (sim.score >= 1) found.push({ item: KNOWLEDGE_BASE[i], similarity: sim }); } return found.sort(function(a, b) { return b.similarity.score - a.similarity.score; }).slice(0, 5); }
function showKnowledgeDuplicateHint(matches) { var box = document.getElementById('knowledgeDuplicateHint'); if (!box) return; if (!matches.length) { box.style.display = 'none'; box.innerHTML = ''; return; } var html = '<b>发现可能重合的知识：</b><br><span style="font-size:12px;">建议先查看已有内容，避免重复维护。</span>'; for (var i = 0; i < matches.length; i++) html += '<div style="margin-top:7px;padding-top:7px;border-top:1px solid #fed7aa;"><a href="#" onclick="jumpToKnowledge(\'' + matches[i].item.id + '\');return false;" style="color:var(--primary);font-weight:600;">' + escHtml(matches[i].item.title) + '</a>（' + escHtml(knowledgeTypeLabel(matches[i].item.type)) + '）<br><span style="font-size:12px;">' + escHtml(matches[i].similarity.reasons.join('、') || '关键词存在重合') + '</span></div>'; box.innerHTML = html; box.style.display = 'block'; }
function checkKnowledgeDuplicate() { var dims = getSelectedKnowledgeDimensions(); var req = kbExtractRequirements({ title: document.getElementById('knowledgeTitle').value, content: document.getElementById('knowledgeContent').value }); var draft = { id: document.getElementById('knowledgeEditId').value, type: document.getElementById('knowledgeEditType').value, title: document.getElementById('knowledgeTitle').value, dimension: dims.join('\u3001'), dimensions: dims, content: document.getElementById('knowledgeContent').value, keywords: req.keywords, coreKeywords: req.core, auxKeywords: req.aux }; showKnowledgeDuplicateHint(findSimilarKnowledge(draft)); }
function jumpToKnowledge(id) { closeKnowledgeModal(); var item = null; for (var i = 0; i < KNOWLEDGE_BASE.length; i++) if (KNOWLEDGE_BASE[i].id === id) item = KNOWLEDGE_BASE[i]; if (!item) return; var searchId = item.type === 'knowledge' ? 'knowledgeSearch' : 'caseSearch'; var search = document.getElementById(searchId); if (search) { search.value = item.title; } renderKnowledgeBase(); var row = document.getElementById('knowledge-row-' + id); if (row) { row.scrollIntoView({ behavior: 'smooth', block: 'center' }); row.classList.add('knowledge-highlight'); setTimeout(function() { row.classList.remove('knowledge-highlight'); }, 2200); } }
function saveKnowledgeItem() { if (!qcRequireKnowledgeEdit(document.getElementById('knowledgeEditType').value)) return;
  if (!requireCloudAdmin()) return;
  var id = document.getElementById('knowledgeEditId').value;
  var type = document.getElementById('knowledgeEditType').value;
  var sourceType = (document.querySelector('input[name="knowledgeSource"]:checked') || {}).value || 'text';
  var title = document.getElementById('knowledgeTitle').value.trim();
  var content = document.getElementById('knowledgeContent').value.trim();
  var dims = getSelectedKnowledgeDimensions();
  var item = { id: id || 'kb-' + type + '-' + Date.now(), type: type, kind: document.getElementById('knowledgeKind').value || 'can-do', title: title, dimension: dims.join('\u3001'), dimensions: dims, keywords: [], coreKeywords: [], auxKeywords: [], content: content, sourceType: sourceType };
  if (!title) { showToast('请填写标题', 'error'); return; }
  if (sourceType === 'file') {
    if (!pendingKnowledgeFile) { showToast('请先选择要上传的本地文档', 'error'); return; }
    item.fileCloudPath = pendingKnowledgeFile.path; item.fileName = pendingKnowledgeFile.name; item.fileSize = pendingKnowledgeFile.size; item.fileType = pendingKnowledgeFile.type;
    if (!content) item.content = '【详见附件文档：' + (item.fileName || '未命名文件') + '】';
  } else if (sourceType === 'url') {
    var url = document.getElementById('knowledgeUrl').value.trim();
    if (!url) { showToast('请填写网页链接', 'error'); return; }
    item.url = url; if (!content) item.content = '【详见网页：' + url + '】';
  } else {
    if (!content) { showToast('请填写内容 / 判断依据', 'error'); return; }
  }
  // 根据「内容 / 判断依据」（含附件名）提取全部要求，全部参与后续判分
  var req = kbExtractRequirements({ title: title, content: [item.content || '', item.fileName || ''].join('\n') });
  item.coreKeywords = req.core; item.auxKeywords = req.aux; item.keywords = req.keywords;
  item.dimension = dims.join('\u3001'); item.dimensions = dims;
  var similar = findSimilarKnowledge(item);
  if (similar.length && !window.confirm('发现 ' + similar.length + ' 条可能重合的知识，是否仍然保存？点击取消可返回查看相应知识。')) { showKnowledgeDuplicateHint(similar); return; }
  var oldItem = null; for (var oi = 0; oi < KNOWLEDGE_BASE.length; oi++) if (KNOWLEDGE_BASE[oi].id === id) oldItem = KNOWLEDGE_BASE[oi];
  if (oldItem && oldItem.fileCloudPath && sourceType !== 'file') { try { if (cloudApp && cloudApp.storage) cloudApp.storage.from('qc-appeals').delete(oldItem.fileCloudPath).catch(function(){}); } catch (e) {} }
  var found = false;
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) if (KNOWLEDGE_BASE[i].id === id) { KNOWLEDGE_BASE[i] = item; found = true; break; }
  if (!found) KNOWLEDGE_BASE.push(item);
  closeKnowledgeModal(); renderKnowledgeBase();
  scheduleSensitiveWordsRefresh();
  if (rawData.length) { runQualityCheck(); showToast('知识已保存，提取 ' + item.coreKeywords.length + ' 项要求，正在重新质检全部数据', 'info'); }
  else { cloudSaveState(); showToast('知识已保存，提取 ' + item.coreKeywords.length + ' 项要求', 'success'); }
}
function deleteKnowledgeItem(id) { var _it = null; for (var _k = 0; _k < KNOWLEDGE_BASE.length; _k++) if (KNOWLEDGE_BASE[_k].id === id) _it = KNOWLEDGE_BASE[_k]; if (!_it) return; if (!qcRequireKnowledgeEdit(_it.type)) return;
  if (!requireCloudAdmin()) return;
  var item = null; for (var i = 0; i < KNOWLEDGE_BASE.length; i++) if (KNOWLEDGE_BASE[i].id === id) item = KNOWLEDGE_BASE[i];
  if (!item || !confirm('确认删除“' + item.title + '”？删除后会重新质检全部已有数据。')) return;
  if (item.fileCloudPath && cloudApp && cloudApp.storage) { try { cloudApp.storage.from('qc-appeals').delete(item.fileCloudPath).catch(function(){}); } catch (e) {} }
  KNOWLEDGE_BASE = KNOWLEDGE_BASE.filter(function(k) { return k.id !== id; });
  renderKnowledgeBase(); scheduleSensitiveWordsRefresh();
  if (rawData.length) { runQualityCheck(); showToast('知识已删除，正在重新质检全部数据', 'info'); } else { cloudSaveState(); showToast('知识已删除并同步云端', 'success'); }
}
function exportKnowledgeBase() {
  var blob = new Blob([JSON.stringify({ version: '1.0', exportTime: new Date().toISOString(), knowledgeBase: KNOWLEDGE_BASE }, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = '质检知识库.json'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); showToast('已导出质检知识库', 'success');
}

// 知识来源（文本 / 本地文档 / 网页链接）相关
var pendingKnowledgeFile = null;
function onKnowledgeSourceChange() {
  var v = (document.querySelector('input[name="knowledgeSource"]:checked') || {}).value || 'text';
  var fw = document.getElementById('knowledgeFileWrap'); if (fw) fw.style.display = (v === 'file') ? 'block' : 'none';
  var uw = document.getElementById('knowledgeUrlWrap'); if (uw) uw.style.display = (v === 'url') ? 'block' : 'none';
}
function uploadKnowledgeFile(file) {
  if (!cloudApp || !cloudApp.storage || typeof cloudApp.storage.from !== 'function') return Promise.reject(new Error('云端附件存储尚未初始化'));
  if (!file) return Promise.reject(new Error('未选择文件'));
  if (file.size > 20 * 1024 * 1024) return Promise.reject(new Error('单个文档不能超过 20MB'));
  if (!/^image\/(png|jpeg|jpg|gif|webp)$/.test(file.type) && !/^application\/(pdf|msword|vnd\.openxmlformats-officedocument\.wordprocessingml\.document|vnd\.ms-excel|vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet)$/.test(file.type) && file.type !== 'application/vnd.ms-excel' && file.type !== 'text/plain' && file.type !== '') return Promise.reject(new Error('仅支持 PDF/Word/Excel/图片/TXT'));
  var bucket = cloudApp.storage.from('qc-appeals');
  var safeName = String(file.name || 'file').replace(/[^a-zA-Z0-9._-]/g, '_');
  var path = 'knowledge/' + Date.now() + '-' + safeName;
  return bucket.upload(path, file).then(function(res) { if (res && res.error) throw res.error; return { path: path, name: file.name, size: file.size, type: file.type }; });
}
function onKnowledgeFileSelect(e) {
  var file = e && e.target && e.target.files && e.target.files[0];
  if (!file) return;
  showToast('正在上传文档…', 'info');
  uploadKnowledgeFile(file).then(function(meta) { pendingKnowledgeFile = meta; renderKnowledgeFileStatus(); showToast('文档已上传：' + meta.name, 'success'); }).catch(function(err) { showToast('上传失败：' + ((err && err.message) || err), 'error'); pendingKnowledgeFile = null; renderKnowledgeFileStatus(); });
}
function renderKnowledgeFileStatus() {
  var wrap = document.getElementById('knowledgeFileStatus'); if (!wrap) return;
  if (pendingKnowledgeFile) { wrap.style.display = 'flex'; var nm = document.getElementById('knowledgeFileName'); if (nm) nm.textContent = (pendingKnowledgeFile.name || '未命名') + '（' + (pendingKnowledgeFile.size ? Math.round(pendingKnowledgeFile.size / 1024) + ' KB' : '未知大小') + '）'; }
  else { wrap.style.display = 'none'; }
}
function clearKnowledgeFile() { pendingKnowledgeFile = null; var inp = document.getElementById('knowledgeFile'); if (inp) inp.value = ''; renderKnowledgeFileStatus(); }
function openKnowledgeFile(item) {
  if (!item) return;
  if (item.sourceType === 'url') { if (item.url) window.open(item.url, '_blank'); else showToast('链接不可用', 'error'); return; }
  if (item.sourceType !== 'file' || !item.fileCloudPath) { showToast('该知识没有可打开的文件', 'error'); return; }
  if (!cloudApp || !cloudApp.storage) { showToast('云端存储未初始化', 'error'); return; }
  cloudApp.storage.from('qc-appeals').createSignedUrl(item.fileCloudPath, 3600).then(function(res) { var url = res && (res.fullSignedURL || res.signedUrl || res.url); if (!url) throw new Error('未获取到访问地址'); window.open(url, '_blank'); }).catch(function(err) { showToast('打开失败：' + ((err && (err.message || err.details)) || '请稍后重试'), 'error'); });
}
function downloadKnowledgeFile(item) {
  if (!item) return;
  if (item.sourceType === 'url') { window.open(item.url, '_blank'); return; }
  if (item.sourceType !== 'file' || !item.fileCloudPath) { showToast('该知识没有可下载的文件', 'error'); return; }
  if (!cloudApp || !cloudApp.storage) { showToast('云端存储未初始化', 'error'); return; }
  cloudApp.storage.from('qc-appeals').createSignedUrl(item.fileCloudPath, 3600).then(function(res) { var url = res && (res.fullSignedURL || res.signedUrl || res.url); if (!url) throw new Error('未获取到下载地址'); var a = document.createElement('a'); a.href = url; a.download = item.fileName || 'file'; document.body.appendChild(a); a.click(); document.body.removeChild(a); }).catch(function(err) { showToast('下载失败：' + ((err && (err.message || err.details)) || '请稍后重试'), 'error'); });
}
function openKnowledgeFileById(id) { openKnowledgeFile(findKnowledgeById(id)); }
function downloadKnowledgeFileById(id) { downloadKnowledgeFile(findKnowledgeById(id)); }

// ============================================================
// 渲染：质检标准（可编辑）
// ============================================================
function renderStandard() {
  var canEdit = qcCan('standard.edit');
  var html = '';
  if (!canEdit) html += '<div class="std-ro-banner">👁 当前为<b>只读视图</b>：质检标准只有管理员可以修改，你可以查看全部分值、等级与核查明细。</div>';
  html += '<table class="standard-table"><thead><tr><th style="width:120px;">一级指标</th><th style="width:130px;">二级指标</th><th style="width:70px;">分值</th><th style="width:70px;">等级</th><th>核查明细</th><th style="width:200px;">举例说明</th></tr></thead><tbody>';
  for (var i = 0; i < STANDARDS.length; i++) {
    var cat = STANDARDS[i];
    var rs = 0;
    for (var j = 0; j < cat.items.length; j++) rs += cat.items[j].levels.length;
    for (var j2 = 0; j2 < cat.items.length; j2++) {
      var item = cat.items[j2];
      for (var k = 0; k < item.levels.length; k++) {
        var level = item.levels[k];
        html += '<tr>';
        if (j2 === 0 && k === 0) html += '<td class="category-cell" rowspan="' + rs + '">' + escHtml(cat.category) + '</td>';
        if (k === 0) html += '<td rowspan="' + item.levels.length + '" style="font-weight:600;">' + escHtml(item.name) + '</td>';
        if (item.isRedline) html += '<td style="text-align:center;color:var(--danger);font-weight:600;">整单0分</td>';
        else if (canEdit) html += '<td style="text-align:center;"><input type="number" value="' + level.score + '" data-cat="' + i + '" data-item="' + j2 + '" data-level="' + k + '" data-field="score" style="width:50px;"></td>';
        else html += '<td style="text-align:center;"><span class="std-ro-score">' + level.score + '</span></td>';
        var gc = level.grade === '优秀' ? 'grade-excellent' : (level.grade === '达标' ? 'grade-pass' : 'grade-fail');
        html += '<td style="text-align:center;"><span class="' + gc + '">' + level.grade + '</span></td>';
        if (canEdit) html += '<td><textarea data-cat="' + i + '" data-item="' + j2 + '" data-level="' + k + '" data-field="detail">' + escHtml(level.detail) + '</textarea></td>';
        else html += '<td><span class="std-ro-text">' + escHtml(level.detail) + '</span></td>';
        if (canEdit) html += '<td><textarea data-cat="' + i + '" data-item="' + j2 + '" data-level="' + k + '" data-field="example">' + escHtml(level.example) + '</textarea></td>';
        else html += '<td><span class="std-ro-text">' + escHtml(level.example || '—') + '</span></td>';
        html += '</tr>';
      }
    }
  }
  html += '</tbody></table>';
  document.getElementById('standardTableWrap').innerHTML = html;
  var gh = '<table class="standard-table"><thead><tr><th>等级</th><th>分数范围</th><th>说明</th></tr></thead><tbody>';
  for (var g = 0; g < GRADE_RULES.length; g++) {
    var rule = GRADE_RULES[g];
    var gc2 = rule.grade === '优秀' ? 'grade-excellent' : (rule.grade === '达标' ? 'grade-pass' : 'grade-fail');
    gh += '<tr><td style="text-align:center;"><span class="' + gc2 + '">' + rule.grade + '</span></td><td style="text-align:center;">';
    if (!canEdit) {
      if (rule.grade === '优秀') gh += '<b>' + rule.minScore + '</b> 分以上';
      else if (rule.grade === '达标') gh += '<b>' + rule.minScore + '</b> - <b>' + rule.maxScore + '</b> 分';
      else gh += '<b>' + rule.maxScore + '</b> 分以下';
    } else {
      if (rule.grade === '优秀') gh += '<input type="number" value="' + rule.minScore + '" data-grade="' + g + '" data-field="minScore" style="width:50px;"> 分以上';
      else if (rule.grade === '达标') gh += '<input type="number" value="' + rule.minScore + '" data-grade="' + g + '" data-field="minScore" style="width:50px;"> - <input type="number" value="' + rule.maxScore + '" data-grade="' + g + '" data-field="maxScore" style="width:50px;"> 分';
      else gh += '<input type="number" value="' + rule.maxScore + '" data-grade="' + g + '" data-field="maxScore" style="width:50px;"> 分以下';
    }
    gh += '</td><td>';
    if (canEdit) gh += '<input type="text" value="' + escHtml(rule.description) + '" data-grade="' + g + '" data-field="description" style="width:100%;">';
    else gh += '<span class="std-ro-text">' + escHtml(rule.description) + '</span>';
    gh += '</td></tr>';
  }
  gh += '<tr><td colspan="3" style="text-align:center;font-weight:600;background:var(--gray-50);">总分：100分</td></tr></tbody></table>';
  document.getElementById('gradeRulesWrap').innerHTML = gh;
  var notice = document.getElementById('stdNotice');
  if (notice) notice.innerHTML = canEdit
    ? '⚠️ 修改标准后请点击「保存标准」，保存后将应用于后续质检。如需对已质检数据重新质检，请重新上传数据。'
    : '👁 只读：质检标准与等级阈值只有管理员可以修改。';
}
// 「刷新数据」：管理员按当前质检标准重新质检全部明细（历史+新数据一并应用）—— 2026-11-19
function qcRefreshData() {
  if (!requireAdmin('刷新数据')) return;
  if (rawData.length === 0) { showToast('暂无质检数据，无需刷新', 'info'); return; }
  if (!confirm('确认按当前质检标准重新质检全部明细吗？\n历史数据与新上传数据都会应用最新标准（申诉记录保留）。\n共 ' + rawData.length + ' 条，约需几十秒。')) return;
  showToast('正在按当前标准重新质检全部明细...', 'info');
  setTimeout(runQualityCheck, 300);
}

function saveStandard() { if (!requireAdmin('保存质检标准')) return;
  if (!requireCloudAdmin()) return;
  var inputs = document.querySelectorAll('#standardTableWrap input, #standardTableWrap textarea, #gradeRulesWrap input');
  for (var i = 0; i < inputs.length; i++) {
    var inp = inputs[i];
    var cat = inp.getAttribute('data-cat'), item = inp.getAttribute('data-item'), level = inp.getAttribute('data-level');
    var field = inp.getAttribute('data-field'), grade = inp.getAttribute('data-grade'), val = inp.value;
    if (cat !== null) { cat = parseInt(cat); item = parseInt(item); level = parseInt(level); if (field === 'score') val = parseInt(val) || 0; STANDARDS[cat].items[item].levels[level][field] = val; }
    else if (grade !== null) { grade = parseInt(grade); if (field === 'minScore' || field === 'maxScore') val = parseInt(val) || 0; GRADE_RULES[grade][field] = val; }
  }
  // 保存标准后立即按新标准重跑全部明细（含累计上传的历史数据），保证明细直接应用最新标准
  var hasData = rawData.length > 0;
  cloudSaveState().then(function(){
    // 流程&操作完整性：回邮数据 × 登记列 的核查规则直接来自「核查明细」文本，保存后立即生效
    var _pr = getProcessRules();
    var _prMsg = (_pr.crossChecks.length
      ? '（流程&操作完整性：已识别 ' + _pr.crossChecks.length + ' 条「回邮数据 × 登记列」核查规则' + (_pr.followUp.enabled ? '，含遗漏跟进核查' : '') + '）'
      : '（注意：核查明细中未识别到「回邮数据 × 登记列」条款，该部分交叉校验已停用）');
    if (hasData) { showToast('质检标准已保存' + _prMsg + '，正在按新标准重新质检全部明细...', 'success'); setTimeout(runQualityCheck, 400); }
    else showToast('质检标准已保存到云端' + _prMsg + '！后续上传的数据将使用新标准质检', 'success');
  }).catch(function(){ showToast('质检标准本地已保存，但云端同步失败', 'error'); });
}

function resetStandard() { if (!requireAdmin('恢复默认标准')) return;
  if (!requireCloudAdmin()) return;
  STANDARDS = JSON.parse(JSON.stringify(DEFAULT_STANDARDS));
  GRADE_RULES = JSON.parse(JSON.stringify(DEFAULT_GRADE_RULES));
  renderStandard();
  if (rawData.length > 0) { showToast('已重置为默认标准，正在按默认标准重新质检全部明细...', 'info'); setTimeout(runQualityCheck, 400); }
  else { cloudSaveState(); showToast('已重置为默认标准', 'info'); }
}

// ============================================================
// 客服组织架构
// ============================================================
function renderOrg() {
  normalizeOrgData();
  var html = '';
  for (var i = 0; i < ORG_DATA.length; i++) {
    var grp = ORG_DATA[i];
    var opts = '<option value="">未设置组长</option>';
    for (var o = 0; o < grp.agents.length; o++) opts += '<option value="' + escHtml(grp.agents[o]) + '"' + (grp.leader === grp.agents[o] ? ' selected' : '') + '>' + escHtml(grp.agents[o]) + '</option>';
    html += '<div class="org-group-card"><div class="org-group-header"><div><span class="group-name">' + escHtml(grp.group) + '</span><span class="group-count">' + grp.agents.length + '人</span>' + (grp.leader ? '<span class="org-leader-badge">组长 · ' + escHtml(grp.leader) + '</span>' : '<span class="org-leader-badge org-leader-empty">未设组长</span>') + '</div><button class="btn-link danger admin-only" onclick="deleteGroup(' + i + ')">删除组别</button></div><div class="org-group-body">';
    html += '<div class="org-leader-row admin-only"><span class="org-leader-label">组长（拥有本组申诉复核权限）</span><select class="org-leader-select" onchange="setGroupLeader(' + i + ', this.value)">' + opts + '</select></div>';
    for (var j = 0; j < grp.agents.length; j++) {
      var isLeader = grp.leader === grp.agents[j];
      html += '<div class="org-agent-item' + (isLeader ? ' is-leader' : '') + '"><span class="agent-name" id="agent-name-' + i + '-' + j + '">' + escHtml(grp.agents[j]) + (isLeader ? ' <span class="org-leader-chip">组长</span>' : '') + '</span><div class="agent-actions admin-only"><button class="btn-link" onclick="editAgent(' + i + ',' + j + ')">修改</button><button class="btn-link danger" onclick="deleteAgent(' + i + ',' + j + ')">删除</button></div></div>';
    }
    html += '<div class="org-add-agent admin-only" onclick="addAgentInline(' + i + ')">+ 添加客服</div></div></div>';
  }
  document.getElementById('orgGrid').innerHTML = html;
  renderReviewerBar();
}
function setGroupLeader(groupIdx, name) { if (AUTH && !requireAdmin('设置组长')) return;
  var grp = ORG_DATA[groupIdx];
  if (!grp) return;
  if (!requireCloudAdmin()) { renderOrg(); return; }
  var val = String(name == null ? '' : name).trim();
  if (val && grp.agents.indexOf(val) < 0) val = '';
  if ((grp.leader || '') === val) return;
  grp.leader = val;
  saveOrg(); renderOrg(); cloudSaveState();
  showToast(val ? ('已设「' + grp.group + '」组长：' + val + '（可复核本组申诉）') : ('已取消「' + grp.group + '」组长'), 'success');
}
function toggleGroupLeader(groupIdx, agentIdx) {
  var grp = ORG_DATA[groupIdx];
  if (!grp || !grp.agents[agentIdx]) return;
  var name = grp.agents[agentIdx];
  setGroupLeader(groupIdx, grp.leader === name ? '' : name);
}

// ===== sync org structure from AMZ (2026-11-17) =====
var AMZ_SYNC_URL = 'https://ljpaugwnyoegaumshbnm.supabase.co';
var AMZ_SYNC_ANON = 'sb_publishable_zuV-Roc02QN2epZYwb0SJQ_qOB9felB';
function openAmzSyncModal() { if (AUTH && !requireAdmin('从 AMZ 同步')) return;
  if (!requireCloudAdmin()) return;
  try {
    var c = JSON.parse(sessionStorage.getItem('qc_amz_cred') || 'null');
    if (c && c.u) document.getElementById('amzSyncUser').value = c.u;
    if (c && c.p) document.getElementById('amzSyncPwd').value = c.p;
  } catch (e) {}
  document.getElementById('amzSyncMsg').textContent = '';
  document.getElementById('amzSyncModal').classList.add('show');
}
function closeAmzSyncModal() { document.getElementById('amzSyncModal').classList.remove('show'); }
function amzSyncRpc(fn, body, token) {
  var headers = { 'apikey': AMZ_SYNC_ANON, 'Authorization': 'Bearer ' + AMZ_SYNC_ANON, 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  return fetch(AMZ_SYNC_URL + '/rest/v1/rpc/' + fn, { method: 'POST', headers: headers, body: JSON.stringify(body || {}) })
    .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && (j.message || j.detail)) || ('HTTP ' + r.status)); return j; }); });
}
function confirmSyncOrgFromAMZ() {
  if (!requireCloudAdmin()) return;
  var u = document.getElementById('amzSyncUser').value.trim();
  var pwd = document.getElementById('amzSyncPwd').value;
  var msg = document.getElementById('amzSyncMsg');
  var btn = document.getElementById('amzSyncBtn');
  if (!u || !pwd) { msg.textContent = '请填写 AMZ 用户名和密码'; return; }
  msg.textContent = '正在连接 AMZ…'; btn.disabled = true;
  amzSyncRpc('amz_login', { p_user: u, p_pwd: pwd }).then(function (login) {
    if (!login || !login.ok || !login.token) throw new Error('AMZ 登录失败，请检查用户名/口令');
    msg.textContent = '已登录，正在读取达标设置…';
    return amzSyncRpc('amz_pull', { p_token: login.token }, login.token);
  }).then(function (data) {
    var cfg = (data && data.config && data.config.stdCfg) || {};
    var catMap = cfg.csCatMap || {};
    var removed = cfg.csRemoved || [];
    var rmSet = {};
    for (var ri = 0; ri < removed.length; ri++) rmSet[String(removed[ri]).trim()] = 1;
    var groups = {};
    Object.keys(catMap).forEach(function (cs) {
      var name = String(cs == null ? '' : cs).trim();
      var cat = String(catMap[cs] == null ? '' : catMap[cs]).trim();
      if (!name || !cat || rmSet[name]) return;
      if (!groups[cat]) groups[cat] = [];
      if (groups[cat].indexOf(name) < 0) groups[cat].push(name);
    });
    var newOrg = Object.keys(groups).map(function (g) { return { group: g, agents: groups[g] }; });
    if (!newOrg.length) throw new Error('AMZ 的「客服 → 分类组」映射为空，未做改动');
    var agentN = newOrg.reduce(function (a, g) { return a + g.agents.length; }, 0);
    if (!confirm('从 AMZ 读取到 ' + newOrg.length + ' 个分类组 / ' + agentN + ' 名客服：\n' + newOrg.map(function (g) { return '  · ' + g.group + '（' + g.agents.length + '人）'; }).join('\n') + '\n\n确认覆盖当前组织架构？')) { msg.textContent = '已取消'; btn.disabled = false; return; }
    var _oldLeaders = {};
    for (var _oi = 0; _oi < ORG_DATA.length; _oi++) if (ORG_DATA[_oi] && ORG_DATA[_oi].leader) _oldLeaders[ORG_DATA[_oi].group] = ORG_DATA[_oi].leader;
    for (var _ni = 0; _ni < newOrg.length; _ni++) { var _ld = _oldLeaders[newOrg[_ni].group]; if (_ld && newOrg[_ni].agents.indexOf(_ld) >= 0) newOrg[_ni].leader = _ld; }
    ORG_DATA = newOrg;
    saveOrg(); renderOrg(); cloudSaveState();
    try { sessionStorage.setItem('qc_amz_cred', JSON.stringify({ u: u, p: pwd })); } catch (e) {}
    closeAmzSyncModal(); btn.disabled = false;
    showToast('已从 AMZ 同步组织架构：' + newOrg.length + ' 个分类组 / ' + agentN + ' 名客服', 'success');
  }).catch(function (err) {
    msg.textContent = '同步失败：' + ((err && err.message) || err); btn.disabled = false;
  });
}

function showAddGroupModal() { if (AUTH && !requireAdmin('添加组别')) return;
  if (!requireCloudAdmin()) return;
  document.getElementById('newGroupName').value = '';
  document.getElementById('addGroupModal').classList.add('show');
  setTimeout(function() { document.getElementById('newGroupName').focus(); }, 100);
}
function closeAddGroupModal() { document.getElementById('addGroupModal').classList.remove('show'); }
function confirmAddGroup() { if (AUTH && !requireAdmin('添加组别')) return;
  if (!requireCloudAdmin()) return;
  var name = document.getElementById('newGroupName').value.trim();
  if (!name) { showToast('请输入组别名称', 'error'); return; }
  for (var i = 0; i < ORG_DATA.length; i++) if (ORG_DATA[i].group === name) { showToast('组别名称已存在', 'error'); return; }
  ORG_DATA.push({ group: name, agents: [] });
  saveOrg(); renderOrg(); cloudSaveState(); closeAddGroupModal();
  showToast('已添加组别：' + name, 'success');
}
function deleteGroup(index) { if (AUTH && !requireAdmin('删除组别')) return;
  if (!requireCloudAdmin()) return;
  var grp = ORG_DATA[index];
  if (!confirm('确认删除组别「' + grp.group + '」？该组下的 ' + grp.agents.length + ' 名客服将被移除。')) return;
  ORG_DATA.splice(index, 1); saveOrg(); renderOrg(); cloudSaveState();
  showToast('已删除组别：' + grp.group, 'success');
}
function editAgent(groupIdx, agentIdx) { if (AUTH && !requireAdmin('修改客服')) return;
  if (!requireCloudAdmin()) return;
  var span = document.getElementById('agent-name-' + groupIdx + '-' + agentIdx);
  if (!span) return;
  var oldName = ORG_DATA[groupIdx].agents[agentIdx];
  var parent = span.parentNode;
  var input = document.createElement('input');
  input.type = 'text'; input.value = oldName; input.style.width = '120px';
  parent.replaceChild(input, span);
  input.focus(); input.select();
  input.onblur = function() {
    var newName = input.value.trim();
    if (!newName) { var s = document.createElement('span'); s.className = 'agent-name'; s.id = 'agent-name-' + groupIdx + '-' + agentIdx; s.textContent = oldName; parent.replaceChild(s, input); return; }
    for (var i = 0; i < ORG_DATA.length; i++) for (var j = 0; j < ORG_DATA[i].agents.length; j++) {
      if (i === groupIdx && j === agentIdx) continue;
      if (ORG_DATA[i].agents[j] === newName) { showToast('客服名字已存在：' + newName, 'error'); var s2 = document.createElement('span'); s2.className = 'agent-name'; s2.id = 'agent-name-' + groupIdx + '-' + agentIdx; s2.textContent = oldName; parent.replaceChild(s2, input); return; }
    }
    if (ORG_DATA[groupIdx].leader === oldName) ORG_DATA[groupIdx].leader = newName;
    ORG_DATA[groupIdx].agents[agentIdx] = newName; saveOrg(); renderOrg(); cloudSaveState();
    showToast('已修改客服名字：' + oldName + ' → ' + newName, 'success');
  };
  input.onkeydown = function(e) {
    if (e.key === 'Enter') input.blur();
    if (e.key === 'Escape') { var s3 = document.createElement('span'); s3.className = 'agent-name'; s3.id = 'agent-name-' + groupIdx + '-' + agentIdx; s3.textContent = oldName; parent.replaceChild(s3, input); }
  };
}
function deleteAgent(groupIdx, agentIdx) { if (AUTH && !requireAdmin('删除客服')) return;
  if (!requireCloudAdmin()) return;
  var name = ORG_DATA[groupIdx].agents[agentIdx];
  if (!confirm('确认删除客服「' + name + '」？')) return;
  if (ORG_DATA[groupIdx].leader === name) ORG_DATA[groupIdx].leader = '';
  ORG_DATA[groupIdx].agents.splice(agentIdx, 1); saveOrg(); renderOrg(); cloudSaveState();
  showToast('已删除客服：' + name, 'success');
}
function addAgentInline(groupIdx) { if (AUTH && !requireAdmin('添加客服')) return;
  if (!requireCloudAdmin()) return;
  var name = prompt('请输入客服名字：');
  if (!name || !name.trim()) return;
  name = name.trim();
  for (var i = 0; i < ORG_DATA.length; i++) for (var j = 0; j < ORG_DATA[i].agents.length; j++) if (ORG_DATA[i].agents[j] === name) { showToast('客服名字已存在：' + name, 'error'); return; }
  ORG_DATA[groupIdx].agents.push(name); saveOrg(); renderOrg(); cloudSaveState();
  showToast('已添加客服：' + name + ' 到 ' + ORG_DATA[groupIdx].group, 'success');
}
function handleOrgFileSelect(event) {
  if (!requireCloudAdmin()) { event.target.value = ''; return; }
  var file = event.target.files[0];
  if (!file) return;
  event.target.value = '';
  var name = file.name.toLowerCase();
  if (name.indexOf('.csv') >= 0) {
    readCSVMultiEncoding(file, function(text) { try { importOrgFromData(parseCSV(text)); } catch(err) { showToast('CSV解析失败: ' + err.message, 'error'); } });
  } else if (name.indexOf('.xlsx') >= 0 || name.indexOf('.xls') >= 0) {
    if (!HAS_XLSX) { showToast('Excel库未加载', 'error'); return; }
    var reader = new FileReader();
    reader.onload = function(e) { try { var wb = XLSX.read(e.target.result, { type: 'array' }); var ws = wb.Sheets[wb.SheetNames[0]]; importOrgFromData(XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' })); } catch(err) { showToast('Excel解析失败: ' + err.message, 'error'); } };
    reader.readAsArrayBuffer(file);
  }
}
function importOrgFromData(data) {
  if (!data || data.length < 2) { showToast('数据为空', 'error'); return; }
  var headers = data[0].map(function(h) { return String(h || '').trim(); });
  var gc = -1, ac = -1, lc = -1;
  for (var i = 0; i < headers.length; i++) { if (headers[i] === '组别' || headers[i].toLowerCase() === 'group') gc = i; if (headers[i] === '客服' || headers[i].toLowerCase() === 'agent') ac = i; if (headers[i] === '组长' || headers[i].toLowerCase() === 'leader') lc = i; }
  if (gc < 0 || ac < 0) { showToast('未找到"组别"和"客服"列。检测到的列：' + headers.join(', '), 'error'); return; }
  var newOrg = [], cur = '';
  for (var r = 1; r < data.length; r++) {
    var row = data[r];
    var g = String(row[gc] || '').trim(), a = String(row[ac] || '').trim();
    if (g) cur = g;
    if (!cur || !a) continue;
    var found = false;
    for (var j = 0; j < newOrg.length; j++) {
      if (newOrg[j].group === cur) { var dup = false; for (var k = 0; k < newOrg[j].agents.length; k++) if (newOrg[j].agents[k] === a) { dup = true; break; } if (!dup) newOrg[j].agents.push(a); found = true; break; }
    }
    if (!found) newOrg.push({ group: cur, agents: [a] });
  }
  if (newOrg.length === 0) { showToast('未解析到有效数据', 'error'); return; }
  if (lc >= 0) { var _lm = {}; for (var r2 = 1; r2 < data.length; r2++) { var _g2 = String((data[r2] || [])[gc] || '').trim(), _l2 = String((data[r2] || [])[lc] || '').trim(); if (_g2 && _l2) _lm[_g2] = _l2; } for (var n2 = 0; n2 < newOrg.length; n2++) { var _ld2 = _lm[newOrg[n2].group]; if (_ld2 && newOrg[n2].agents.indexOf(_ld2) >= 0) newOrg[n2].leader = _ld2; } }
  ORG_DATA = newOrg; saveOrg(); renderOrg(); cloudSaveState();
  showToast('已导入 ' + newOrg.length + ' 个组别', 'success');
}
function exportOrg() {
  var rows = [['组别', '客服', '组长（拥有申诉复核权限）']];
  for (var i = 0; i < ORG_DATA.length; i++) for (var j = 0; j < ORG_DATA[i].agents.length; j++) rows.push([j === 0 ? ORG_DATA[i].group : '', ORG_DATA[i].agents[j], j === 0 ? (ORG_DATA[i].leader || '') : '']);
  exportExcel(rows, '客服组织架构');
}

// ============================================================
// 清空数据
// ============================================================
function clearAllData() { if (!requireAdmin('清空数据')) return;
  if (!requireCloudAdmin()) return;
  if (results.length === 0) { showToast('无数据可清空', 'info'); return; }
  if (!confirm('确认清空所有质检数据？此操作不可撤销。')) return;
  rawData = []; results = [];
  clearDataFromUrl();
  cloudClearState();
  document.getElementById('detailEmpty').style.display = 'block';
  document.getElementById('detailContent').style.display = 'none';
  document.getElementById('dataInfo').style.display = 'none';
  document.getElementById('detailBadge').textContent = '0';
  document.getElementById('dashboardEmpty').style.display = 'block';
  document.getElementById('dashboardContent').style.display = 'none';
  showToast('已清空所有数据', 'success');
}

// ============================================================
// 导出功能
// ============================================================
function exportDetail(type) {
  if (results.length === 0) { showToast('无数据可导出', 'error'); return; }
  var headers = ['序号', '组别', '账号', 'ODR', '客服', '平台单号', '订单金额', '日期'].concat(DIM_NAMES).concat(['是否需要检查流程操作', '是否有退款登记', '是否有问题反馈', '是否有补件', '总分', '等级', '问题说明', '申诉状态', '申诉理由', '审核理由', '附件数量', '附件名称', '去信数', '占比', '是否考核']);
  var rows = [headers];
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    var row = [i + 1, getGroupByAgent(r.agent), r.account, r.fbmDefectRate || '', r.agent, r.order, r.orderAmount || '', r.date];
    for (var d = 0; d < DIM_NAMES.length; d++) { var s = r.scores[DIM_NAMES[d]]; row.push(s === -1 ? '-' : s); }
    var appeal = normalizeAppeal(r.appeal);
    row.push(r.processCheck || '', r.refundReg || '', r.issueFeedback || '', r.replenishment || '');
    row.push(r.totalScore === -1 ? '-' : r.totalScore, r.grade, (r.issues || []).join('；'), appeal.status, appeal.reason, appeal.reviewReason, appeal.attachments.length, appeal.attachments.map(function(a) { return a.name || ''; }).join('；'));
    var _eos = orderSendStat(r);
    row.push(_eos.count, _eos.pct, sessionParticipation(r).assessed ? '是' : '否');
    rows.push(row);
  }
  if (type === 'csv') exportCSV(rows, '质检明细'); else exportExcel(rows, '质检明细');
}

function exportDashboard(type) {
  if (results.length === 0) { showToast('无数据可导出', 'error'); return; }
  var fG = document.getElementById('dashFilterGroup').value;
  var fA = document.getElementById('dashFilterAccount').value;
  var fAg = document.getElementById('dashFilterAgent').value;
  var filtered = [];
  for (var i = 0; i < results.length; i++) { var r = results[i]; if (fG && getGroupByAgent(r.agent) !== fG) continue; if (fA && r.account !== fA) continue; if (fAg && canonicalAgentName(r.agent) !== fAg) continue; if (!isAssessedResult(r)) continue; filtered.push(r); }
  var exportDimension = (document.getElementById('summaryDimension') || {}).value || 'agent';
  var h1 = ['组别', exportDimension === 'account' ? '账号' : '客服', '更新日期', '汇总', '', '', '', '不达标量', '', '', '', '', '', '不达标率', '', '', '', '', '', '', '建议'];
  var h2 = ['', '', '', '被质检量', '质检平均分', '达标数', '不达标数'].concat(DIM_NAMES).concat(DIM_NAMES).concat(['']);
  var rows = [h1, h2];
  var groups = {};
  for (var i2 = 0; i2 < filtered.length; i2++) {
    var r2 = filtered[i2];
    var exportGroup = getGroupByAgent(r2.agent);
    var exportLabel = exportDimension === 'account' ? (r2.account || '未填写账号') : (canonicalAgentName(r2.agent) || '未填写客服');
    var key = exportLabel + '||' + exportGroup;
    if (!groups[key]) { groups[key] = { label: exportLabel, agent: r2.agent, account: r2.account, group: exportGroup, total: 0, validTotal: 0, scoreSum: 0, passTotal: 0, failTotal: 0, failCount: {} }; for (var d = 0; d < DIM_NAMES.length; d++) groups[key].failCount[DIM_NAMES[d]] = 0; }
    groups[key].total++;
    if (r2.totalScore >= 0) { groups[key].validTotal++; groups[key].scoreSum += r2.totalScore; }
    groups[key].passTotal += dashboardPassCount(r2);
    groups[key].failTotal += dashboardFailCount(r2);
    for (var d2 = 0; d2 < DIM_NAMES.length; d2++) { var dn = DIM_NAMES[d2]; if (r2.details[dn] && r2.details[dn].grade === '不达标') groups[key].failCount[dn]++; }
  }
  var gl = [];
  for (var k in groups) if (groups.hasOwnProperty(k)) gl.push(groups[k]);
  gl.sort(function(a, b) {
    var aAvg = a.validTotal > 0 ? a.scoreSum / a.validTotal : -1;
    var bAvg = b.validTotal > 0 ? b.scoreSum / b.validTotal : -1;
    if (aAvg !== bAvg) return exportDimension === 'agent' ? bAvg - aAvg : aAvg - bAvg;
    return a.label.localeCompare(b.label, 'zh-CN');
  });
  for (var g = 0; g < gl.length; g++) {
    var grp = gl[g];
    var avg = grp.validTotal > 0 ? (grp.scoreSum / grp.validTotal).toFixed(1) : '-';
    var row = [grp.group, grp.label, getCurrentDate(), grp.total, avg, grp.passTotal, grp.failTotal];
    for (var i3 = 0; i3 < DIM_NAMES.length; i3++) row.push(grp.failCount[DIM_NAMES[i3]]);
    for (var j = 0; j < DIM_NAMES.length; j++) row.push(grp.total > 0 ? ((grp.failCount[DIM_NAMES[j]] / grp.total) * 100).toFixed(0) + '%' : '-');
    var sf = [];
    for (var k2 = 0; k2 < DIM_NAMES.length; k2++) if (grp.failCount[DIM_NAMES[k2]] > 0) sf.push({ name: DIM_NAMES[k2], count: grp.failCount[DIM_NAMES[k2]] });
    sf.sort(function(a, b) { return b.count - a.count; });
    var sug = sf.length > 0 ? '建议加强' + sf.slice(0, 3).map(function(f) { return f.name; }).join('、') + '方面的改进' : '暂无突出问题';
    row.push(sug);
    rows.push(row);
  }
  if (type === 'csv') exportCSV(rows, '质检汇总报表'); else exportExcel(rows, '质检汇总报表');
}

function exportStandard() {
  var rows = [['一级指标', '二级指标', '分值', '等级', '核查明细', '举例说明', '备注']];
  rows.push(['亚飞客服质检标准-V1.0', '', '', '', '', '', '']);
  for (var i = 0; i < STANDARDS.length; i++) { var cat = STANDARDS[i]; for (var j = 0; j < cat.items.length; j++) { var item = cat.items[j]; for (var k = 0; k < item.levels.length; k++) { var level = item.levels[k]; rows.push([k === 0 && j === 0 ? cat.category : '', k === 0 ? item.name : '', item.isRedline ? '整单0分' : level.score, level.grade, level.detail, level.example, '']); } } }
  rows.push(['']);
  rows.push(['总分', '100分', '', '', '', '', '']);
  for (var g = 0; g < GRADE_RULES.length; g++) { var rule = GRADE_RULES[g]; rows.push([rule.grade, rule.grade === '优秀' ? rule.minScore + '分以上' : (rule.grade === '达标' ? rule.minScore + '-' + rule.maxScore + '分' : rule.maxScore + '分以下'), '', '', rule.description, '', '']); }
  exportExcel(rows, '质检标准');
}

function exportCSV(rows, filename) {
  var csv = '\uFEFF';
  for (var i = 0; i < rows.length; i++) {
    var line = rows[i].map(function(cell) { var s = String(cell || ''); s = s.replace(/"/g, '""'); if (s.indexOf(',') >= 0 || s.indexOf('\n') >= 0 || s.indexOf('"') >= 0) s = '"' + s + '"'; return s; }).join(',');
    csv += line + '\n';
  }
  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename + '_' + getCurrentDate() + '.csv';
  link.click();
  showToast('CSV已导出: ' + filename, 'success');
}

function exportExcel(rows, filename) {
  if (!HAS_XLSX) { exportCSV(rows, filename); return; }
  var ws = XLSX.utils.aoa_to_sheet(rows);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, filename + '_' + getCurrentDate() + '.xlsx');
  showToast('Excel已导出: ' + filename, 'success');
}

// ============================================================
// 模板下载
// ============================================================
function downloadTemplate() {
  var headers = ['账号', '客服', '平台单号', '回邮数据', '是否需要检查流程操作', '是否有退款登记', '是否有问题反馈', '是否有补件'];
  var sample = [
    ['POPMALL-UK-FBM', '张三', '205-5133562-0211514', 'Dear customer, thank you for contacting us. We have processed a full refund for your order. The refund will be credited to your account within 72 hours. Please check later. Best regards!', '否', '是', '是', '否'],
    ['POPMALL-US-FBM', '李四', '112-3456789-0123456', 'Dear customer, we sincerely apologize for the delay. We have arranged a replacement for you and it will be shipped within 2 business days. We will update you with the tracking number once available. Best regards!', '是', '否', '否', '是']
  ];
  exportExcel([headers].concat(sample), '邮件质检模板');
}

// ============================================================
// 示例数据
// ============================================================
function loadSampleData() { if (!requireAdmin('加载示例数据')) return;
  rawData = [
    { account: 'POPMALL-UK-FBM', agent: '林文玉', order: '205-5133562-0211514', date: '2026-07-01', reply: '无联客记录' },
    { account: 'POPMALL-UK-FBM', agent: '林文玉', order: '202-8107026-2608322', date: '2026-07-02', reply: 'oaulwebber 2026-06-08(拉取时间:2026-06-08,已回复)Cannot wait until June 20th林文玉2026-06-09[发送成功]Dear customer, we hope you can understand that we are a self-shipping seller based in China, and international shipping typically takes 15-18 days. Currently, your package has already been dispatched, and we are unable to intercept it. Could you please wait for the package to arrive and keep it? We would be happy to offer you a 15% refund after you receive the package. Looking forward to your reply. Best regards!收起' },
    { account: 'POPMALL-UK-FBM', agent: '林文玉', order: '026-6072362-3804318', date: '2026-07-03', reply: 'Jane 2026-07-26(拉取时间:2026-07-26,已回复)This so called package does not exist, there are no tracking details for it and I have been waiting for 6 six weeks.林文玉2026-07-26[发送成功]Dear Customer, we sincerely regret the logistical issue with your order. We have confirmed that your package was lost in transit. We have arranged a full refund for you. Normally, it will be returned to your payment account within 72 hours. We have also initiated a formal inquiry with the logistics provider to prevent these incidents from happening again. We apologize for the inconvenience caused and appreciate your understanding. Best regards!收起' },
    { account: 'POPMALL-US-FBM', agent: '钟桂芳', order: '112-3456789-0123456', date: '2026-07-05', reply: 'John 2026-07-04(拉取时间:2026-07-04,已回复)I never received my order and want a refund now!钟桂芳2026-07-05[发送成功]Dear Customer, we are very sorry for the delay. We have processed a full refund for your order. Please check your Amazon account in 72 hours. If you have any questions, please contact us. Best regards!收起' },
    { account: 'POPMALL-US-FBM', agent: '钟桂芳', order: '112-9876543-6543210', date: '2026-07-06', reply: 'Mike 2026-07-05(拉取时间:2026-07-05,已回复)The product arrived damaged. I want a replacement.钟桂芳2026-07-06[发送成功]ok收起' },
    { account: 'POPMALL-DE-FBM', agent: '尹玉婷', order: '301-1234567-1234567', date: '2026-07-07', reply: 'Hans 2026-07-06(拉取时间:2026-07-06,已回复)Ich habe meine Bestellung noch nicht erhalten.尹玉婷2026-07-07[发送成功]Dear customer, sorry for the delay. We will check with the logistics company and update you within 48 hours. Please wait patiently. Best regards!收起' },
    { account: 'POPMALL-DE-FBM', agent: '尹玉婷', order: '301-7654321-7654321', date: '2026-07-08', reply: 'Greta 2026-07-07(拉取时间:2026-07-07,已回复)Mein Produkt ist kaputt. Ich möchte eine Rückerstattung.尹玉婷2026-07-08[发送成功]Dear Greta, we sincerely apologize for the damaged product. We have processed a full refund for you. The refund will be credited to your account within 72 hours. We have also reported this issue to our quality team to prevent it from happening again. Is there anything else we can help you with? Please do not hesitate to contact us. Kind regards!收起' },
    { account: 'POPMALL-UK-FBM', agent: '林文玉', order: '205-9999999-9999999', date: '2026-07-09', reply: 'Tom 2026-07-08(拉取时间:2026-07-08,已回复)Can you send me the tracking number?林文玉2026-07-09[发送成功]Dear customer, please provide your order number so we can check for you. Also please send us your email address: we will contact you via paypal.收起' },
    { account: 'POPMALL-US-FBM', agent: '钟桂芳', order: '112-5555555-5555555', date: '2026-07-10', reply: 'Sarah 2026-07-09(拉取时间:2026-07-09,已回复)I want to return the product for a refund. It does not match the description.钟桂芳2026-07-10[发送成功]Dear Sarah, thank you for contacting us. We understand your concern about the product not matching the description. We apologize for any inconvenience this may have caused. We would like to offer you two options: 1) A full refund if you return the product, or 2) A 30% discount and you can keep the item. Please let us know which option you prefer. We are committed to resolving this issue to your satisfaction. Best regards!收起' },
    { account: 'POPMALL-DE-FBM', agent: '尹玉婷', order: '301-3333333-3333333', date: '2026-07-11', reply: 'Klaus 2026-07-10(拉取时间:2026-07-10,已回复)Wo ist meine Bestellung?尹玉婷2026-07-11[发送成功]Dear customer, sorry. We will check. Please wait.收起' },
    { account: 'POPMALL-UK-FBM', agent: '戴海燕', order: '205-7777777-7777777', date: '2026-07-12', reply: 'Emma 2026-07-11(拉取时间:2026-07-11,已回复)The item I received is wrong, I ordered a blue one but got a red one.戴海燕2026-07-12[发送成功]Dear Emma, thank you for letting us know about the color mix-up. We sincerely apologize for this error. We have immediately arranged a replacement with the correct blue item, which will be shipped within 2 business days. You do not need to return the red one. We will send you the tracking number once it is available. We have also checked our warehouse process to prevent similar errors. Thank you for your patience and understanding. Best regards!收起' },
    { account: 'POPMALL-US-FBM', agent: '蔡佳欣', order: '112-4444444-4444444', date: '2026-07-13', reply: 'David 2026-07-12(拉取时间:2026-07-12,已回复)Refund me now or I will file an A-to-Z claim!蔡佳欣2026-07-13[发送成功]Dear customer, we understand your frustration. We have already processed a full refund for your order. Please check your original payment method within 72 hours. We apologize for the inconvenience. If you need any further assistance, please feel free to contact us. Best regards!收起' }
  ];
  showToast('已加载 ' + rawData.length + ' 条示例数据，开始质检...', 'success');
  setTimeout(runQualityCheck, 300);
}

// ============================================================
// 工具函数
// ============================================================
function getCurrentDate() {
  var d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function escHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function showToast(msg, type) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast ' + (type || 'info') + ' show';
  setTimeout(function() { toast.classList.remove('show'); }, 3000);
}
function showProgress(text, detail) {
  document.getElementById('progressText').textContent = text || '处理中...';
  document.getElementById('progressDetail').textContent = detail || '';
  document.getElementById('progressBarFill').style.width = '0%';
  document.getElementById('progressOverlay').classList.add('show');
}
function updateProgress(pct, text, detail) {
  document.getElementById('progressBarFill').style.width = pct + '%';
  if (text) document.getElementById('progressText').textContent = text;
  if (detail) document.getElementById('progressDetail').textContent = detail;
}
function hideProgress() { document.getElementById('progressOverlay').classList.remove('show'); }

// ============================================================
// 数据导出/导入
// ============================================================
function exportAllData() {
  if (rawData.length === 0 && results.length === 0) {
    showToast('暂无数据可导出', 'error');
    return;
  }
  var exportObj = {
    version: '3.0',
    exportTime: new Date().toISOString(),
    rawData: rawData,
    results: results,
    orgData: ORG_DATA,
    standards: STANDARDS,
    gradeRules: GRADE_RULES,
    knowledgeBase: KNOWLEDGE_BASE
  };
  var jsonStr = JSON.stringify(exportObj);
  var blob = new Blob([jsonStr], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  var d = new Date();
  var fname = '质检数据_' + d.getFullYear() + (d.getMonth()+1<10?'0':'') + (d.getMonth()+1) + (d.getDate()<10?'0':'') + d.getDate() + '.json';
  a.href = url;
  a.download = fname;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('已导出 ' + results.length + ' 条质检数据', 'success');
}

function importAllData(data) {
  if (!data || !data.results || !data.rawData) {
    showToast('网址中的数据格式不正确', 'error');
    return;
  }
  rawData = data.rawData;
  results = data.results.map(function(r, i) { r._index = i; delete r._part; if (data.rawData[i] && typeof data.rawData[i].reply === 'string') { r.reply = data.rawData[i].reply; } return normalizeResultAppeal(r); });
  if (data.orgData) { ORG_DATA = data.orgData; normalizeOrgData(); saveOrg(); }
  try { if (typeof qcEnsureOrgAccounts === 'function') qcEnsureOrgAccounts(true); } catch (e) {}
  if (data.standards) { STANDARDS = data.standards; }
  if (data.gradeRules) { GRADE_RULES = data.gradeRules; }
  if (data.knowledgeBase && data.knowledgeBase.length) { KNOWLEDGE_BASE = data.knowledgeBase; }
  var kbBackfilled = ensureKnowledgeRequirements();
  scheduleSensitiveWordsRefresh();
  document.getElementById('detailEmpty').style.display = 'none';
  document.getElementById('detailContent').style.display = 'block';
  document.getElementById('dashboardEmpty').style.display = 'none';
  document.getElementById('dashboardContent').style.display = 'block';
  document.getElementById('dataInfo').style.display = 'block';
  document.getElementById('dataCount').textContent = results.length;
  document.getElementById('detailBadge').textContent = results.length;
  populateFilters();
  renderDetailTable();
  renderDashboard();
  renderOrg();
  // 「质检逻辑」板块的数字与当前明细 / 标准 / 知识库联动：重跑完成后同步刷新（若已渲染过）
  if (document.getElementById('qcLogicScoreTableWrap')) renderQcLogic();
  renderStandard();
  renderKnowledgeBase();
  if (kbBackfilled > 0 && rawData.length > 0) { showToast('已为 ' + kbBackfilled + ' 条知识自动补全判分依据，正在重跑质检', 'info'); runQualityCheck(); return; }
  // 质检引擎/质检标准升级迁移：云端明细由旧版判分逻辑或旧标准生成时，自动重跑全部质检（申诉记录保留），
  // 使「质检标准」里保存的修改在「质检明细」中直接生效
  var _fpNow = standardsFingerprint();
  var _fpCloud = data.standardsFingerprint || '';
  var _staleReason = (data.qcLogicVersion !== QC_LOGIC_VERSION) ? '质检判分逻辑已升级' : (_fpCloud !== _fpNow ? '质检标准已更新' : '');
  if (rawData.length > 0 && _staleReason && !window._qcLogicMigrating) {
    window._qcLogicMigrating = true;
    showToast(_staleReason + '，正在按最新标准重新质检全部明细...', 'info');
    setTimeout(runQualityCheck, 400);
  }
}

// ============================================================
// 自动网址数据保存（数据压缩编码到URL）
// ============================================================
function clearDataFromUrl() {
  try {
    window.history.replaceState(null, '', window.location.origin + window.location.pathname);
    var status = document.getElementById('urlDataStatus');
    if (status) status.style.display = 'none';
  } catch(e) {}
}

function saveDataToUrl() {
  if (!HAS_LZ || results.length === 0) return;
  try {
    var data = {
      v: '3',
      t: new Date().toISOString(),
      rawData: rawData,
      results: results,
      orgData: ORG_DATA,
      standards: STANDARDS,
      gradeRules: GRADE_RULES,
      knowledgeBase: KNOWLEDGE_BASE
    };
    var compressed = LZString.compressToEncodedURIComponent(JSON.stringify(data));
    var newUrl = window.location.origin + window.location.pathname + '#d=' + compressed;
    window.history.replaceState(null, '', newUrl);
    var status = document.getElementById('urlDataStatus');
    if (status) status.style.display = 'block';
  } catch(e) {
    showToast('网址保存失败，数据量可能过大，请使用导出数据备份', 'error');
  }
}

function loadFromUrlHash() {
  var hash = window.location.hash;
  if (!hash || hash.indexOf('#d=') !== 0) return;
  if (!HAS_LZ) {
    showToast('数据压缩库未加载，请刷新页面重试', 'error');
    return;
  }
  try {
    var compressed = hash.substring(3);
    var jsonStr = LZString.decompressFromEncodedURIComponent(compressed);
    if (!jsonStr) {
      showToast('网址中的数据已损坏', 'error');
      return;
    }
    var data = JSON.parse(jsonStr);
    if (data && data.results && data.rawData) {
      importAllData(data);
      var status = document.getElementById('urlDataStatus');
      if (status) { status.style.display = 'block'; status.textContent = '数据已从网址加载'; }
      showToast('已自动加载网址中的 ' + data.results.length + ' 条质检数据', 'success');
    } else {
      showToast('网址中的数据格式不正确', 'error');
    }
  } catch(err) {
    showToast('加载网址数据失败：' + err.message, 'error');
  }
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  try { if (typeof qcLoadCacheFast === 'function') qcLoadCacheFast(); } catch (e) { console.warn('cache load failed', e); }
  try { setTimeout(function(){ qcFetchLatestAndRefresh(false); }, 300); } catch (e) {}
  try { qcAuthBoot(); } catch (e) { console.warn('auth boot failed', e); }
  document.getElementById('detailModal').addEventListener('click', function(e) { if (e.target === this) closeModal(); });
  document.getElementById('recordModal').addEventListener('click', function(e) { if (e.target === this) closeRecordModal(); });
  document.getElementById('uploadModal').addEventListener('click', function(e) { if (e.target === this) closeUploadModal(); });
  document.getElementById('addGroupModal').addEventListener('click', function(e) { if (e.target === this) closeAddGroupModal(); });
  document.getElementById('knowledgeModal').addEventListener('click', function(e) { if (e.target === this) closeKnowledgeModal(); });
  renderStandard();
  renderKnowledgeBase();
  renderOrg();
  initAdminMode();
  loadFromUrlHash();
  if (window.CloudBaseSDK) initCloudBase();
});


// ===== 回邮数据气泡排版 v3（20261118）：按发送者名界限分段、完整保留正文 =====
function qcFmtTime(s) { return String(s || '').replace(/^(\d{4}-\d{2}-\d{2})\s*(\d{2}:\d{2}:\d{2})$/, '$1 $2'); }
var QC_RC_SENDER_EXTRA = ['robot', '机器人', '自动回复'];
// 只清理界面工具条噪声，正文一律保留（含换行）
function qcRcStripNoise(s) {
  var t = String(s == null ? '' : s).replace(/\r\n?/g, '\n');
  t = t.replace(/(?:中英|英中|中文|英文|中|英)?(?:复制|收起)/g, ' ');
  t = t.replace(/(?:标签归类设置跟进标签|跟进标签请选择标签归类|客诉标签请选择模板|上传附件发送发票草稿)/g, ' ');
  t = t.replace(/(?:标签归类|跟进标签|客诉标签|请选择模板|请选择|发送发票|上传附件|草稿|设置)/g, ' ');
  t = t.replace(/[ \t\u00a0]+/g, ' ');
  t = t.replace(/\n{3,}/g, '\n\n');
  var prev;
  do {
    prev = t;
    t = t.replace(/\s*(?:[中英]|复制|收起|设置|请选择(?:模板)?|草稿)\s*$/, function (m0) {
      if (/^[中英]$/.test(m0)) return m0;
      return '';
    });
  } while (t !== prev);
  // 工具条去掉后残留的分隔符（如“共配。 /”）
  t = t.replace(/(?<=[\u3400-\u9fff。！？，、；：.!?])[\s\u00a0]*[\/|]+[\s\u00a0]*$/, '');
  return t.replace(/^[\s\u00a0]+/, '').replace(/[ \t\u00a0]+$/, '');
}
function qcRcLooksLikeName(s) {
  if (!s) return false;
  if (/[。！？，、；：.!?,;:()（）【】\[\]"'“”‘’]/.test(s)) return false;
  if (/[\u3400-\u9fff]/.test(s)) return s.length <= 8;
  return s.length <= 30;
}
// 去掉名字前的邮件落款/客套词（Best regards / Mit freundlichen Grüßen / 此致 等）
function qcRcTrimSignoff(s) {
  var t = String(s || '').replace(/^[\s,.:;!\-—]+/, '');
  var re = /^(?:best|kind|warm|many|very|thanks|thank\s+you|regards|sincerely|cheers|greetings|mit\s+freundlichen\s+gr(?:\u00fc|u)(?:\u00df|ss)en|freundliche\s+gr(?:\u00fc|u)(?:\u00df|ss)e|viele\s+gr(?:\u00fc|u)(?:\u00df|ss)e|beste\s+gr(?:\u00fc|u)(?:\u00df|ss)e|liebe\s+gr(?:\u00fc|u)(?:\u00df|ss)e|cordialement|bien\s+[\u00e0a]\s+vous|saludos|atentamente|un\s+saludo|groeten|met\s+vriendelijke\s+groet|med\s+venlig\s+hilsen|pozdrawiam|saluti|obrigado|atenciosamente|\u6b64\u81f4|\u656c\u793c|\u795d\u597d|\u8c22\u8c22|\u611f\u8c22)[\s,.:;!\-—]*/i;
  for (var i = 0; i < 4 && re.test(t); i++) t = t.replace(re, '');
  return t.replace(/^[\s,.:;!\-—]+/, '').trim();
}
// 从“时间戳之前的一段文本”里截出发送者名（名字一定是这段的后缀）
function qcRcNameOf(src, from, to, names) {
  var end = to;
  while (end > from && /[\s\u00a0]/.test(src.charAt(end - 1))) end--;
  var seg = src.slice(from, end);
  if (!seg) return { name: '', start: end };
  var cut = 0, re = /(?:收起|复制|中英|英中|设置|请选择模板|请选择|标签归类|跟进标签|客诉标签|草稿)/g, m;
  while ((m = re.exec(seg)) !== null) cut = m.index + m[0].length;
  var lastP = -1;
  for (var i = cut; i < seg.length; i++) {
    if (/[。！？，、；：.!?,;:]/.test(seg.charAt(i))) lastP = i;
  }
  var cand = seg.slice(Math.max(cut, lastP + 1)).replace(/^[\s\u00a0:：\-—/]+/, '');
  if (!cand) return { name: '', start: end };
  // 名字后面常挂一个未读数字（如“刘琳1”“陈静2”），匹配名字时忽略它
  var candNoDigit = cand.replace(/\d+$/, '');
  var digitLen = cand.length - candNoDigit.length;
  // 已知发送者名（客服/robot/客户）作为界限，取最长后缀匹配
  var best = '';
  for (var k = 0; k < names.length; k++) {
    var nm = String(names[k] == null ? '' : names[k]).trim();
    if (!nm || nm.length > 30 || candNoDigit.length < nm.length) continue;
    if (candNoDigit.slice(candNoDigit.length - nm.length).toLowerCase() === nm.toLowerCase() && nm.length > best.length) best = nm;
  }
  if (best) return { name: best, start: end - best.length - digitLen };
  // 尾部拉丁词串（Laura Montagner / JavierMuñiz / robot）；容忍前面粘着一个工具条残留汉字
  var lm = candNoDigit.match(/[\p{L}\p{M}][\p{L}\p{M}.'\u00b7\-]*(?:\s+[\p{L}\p{M}][\p{L}\p{M}.'\u00b7\-]*){0,4}$/u);
  if (lm && lm[0]) {
    var latin = qcRcTrimSignoff(lm[0].replace(/^[\u3400-\u9fff]+/, '').trim());
    if (latin && latin.length <= 30 && !/[\u3400-\u9fff]/.test(latin)) return { name: latin, start: end - latin.length - digitLen };
  }
  // 纯中文名（≤8 字，允许尾部未读数字；去掉"谢谢/此致"等落款前缀）
  var cm = candNoDigit.match(/[\u3400-\u9fff]{2,8}$/);
  if (cm) {
    var cn = qcRcTrimSignoff(cm[0]);
    if (cn.length >= 2) return { name: cn, start: end - cn.length - digitLen };
  }
  // 兜底：认不出名字就不猜，整段留给正文（正文一个字都不丢）
  return { name: '', start: end };
}
function parseReplyChat(text, names) {
  var src = String(text == null ? '' : text).replace(/\r/g, '');
  names = (names || []).filter(Boolean);
  if (!src || src === '无联客记录') return [];
  var re = /(\d{4}-\d{2}-\d{2})\s*(\d{2}:\d{2}:\d{2})\s*([(（][^)）]*拉取时间[^)）]*[)）]|\[(?:发送成功|发送失败|已撤回)\])/g;
  var marks = [], mm;
  while ((mm = re.exec(src)) !== null) {
    var tail = mm[3], isCust = tail.indexOf('拉取时间') >= 0;
    var sm = tail.match(/(未回复|已回复|发送成功|发送失败|已撤回)/);
    var pm = tail.match(/拉取时间[:：]\s*(\d{4}-\d{2}-\d{2})\s*(\d{2}:\d{2}:\d{2})/);
    marks.push({
      timeStart: mm.index, markEnd: mm.index + mm[0].length,
      role: isCust ? 'customer' : 'agent',
      status: sm ? sm[1] : '',
      pullTime: pm ? pm[1] + ' ' + pm[2] : '',
      time: mm[1] + ' ' + mm[2]
    });
  }
  if (!marks.length) return [];
  var out = [];
  for (var i = 0; i < marks.length; i++) {
    var mk = marks[i];
    var from = i > 0 ? marks[i - 1].markEnd : 0;
    var ni = qcRcNameOf(src, from, mk.timeStart, names);
    var nextStart = (i + 1 < marks.length) ? qcRcNameOf(src, mk.markEnd, marks[i + 1].timeStart, names).start : src.length;
    if (nextStart < mk.markEnd) nextStart = mk.markEnd;
    var body = qcRcStripNoise(src.slice(mk.markEnd, nextStart));
    var name = String(ni.name || '').trim();
    if (!name && !body) continue;
    out.push({ role: mk.role, name: name, sendTime: mk.time, pullTime: mk.pullTime, status: mk.status, body: body });
  }
  var ded = [];
  for (var j = 0; j < out.length; j++) {
    var p = ded[ded.length - 1];
    if (p && p.role === out[j].role && p.sendTime === out[j].sendTime && p.body === out[j].body && p.status === out[j].status) continue;
    ded.push(out[j]);
  }
  return ded;
}
// 两遍解析：第一遍收集客户名，第二遍用完整名库做界限
function parseReplyChatFull(text, agentNames) {
  var names = (agentNames || []).concat(QC_RC_SENDER_EXTRA);
  var arr = parseReplyChat(text, names);
  var extra = [];
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i].name;
    if (n && n.length <= 30 && qcRcLooksLikeName(n) && names.indexOf(n) < 0 && extra.indexOf(n) < 0) extra.push(n);
  }
  if (extra.length) arr = parseReplyChat(text, names.concat(extra));
  return arr;
}
function qcEsc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
// 一条消息正文：外文段与中文段分行，保留原有换行
function qcRcBodyHtml(body) {
  var lines = String(body || '').replace(/\r/g, '').split('\n');
  var html = '';
  for (var i = 0; i < lines.length; i++) {
    var ln = lines[i].replace(/^[ \t\u00a0]+|[ \t\u00a0]+$/g, '');
    if (!ln) continue;
    var m = ln.match(/[\u3400-\u9fff]/);
    if (!m || m.index === 0) { html += '<div class="rc-line rc-cn">' + qcEsc(ln) + '</div>'; continue; }
    var fo = ln.slice(0, m.index).trim(), cn = ln.slice(m.index).trim();
    if (fo) html += '<div class="rc-line">' + qcEsc(fo) + '</div>';
    if (cn) html += '<div class="rc-line rc-cn">' + qcEsc(cn) + '</div>';
  }
  return html;
}
function rcBubbleHtml(x) {
  var isCust = x.role === 'customer';
  var name = x.name || (isCust ? '客户' : '客服');
  var isBot = /^(robot|机器人|自动回复)$/i.test(name);
  var statusHtml = '';
  if (x.status === '未回复') statusHtml = '<span class="rc-status rc-unreplied">未回复</span>';
  else if (x.status === '已回复') statusHtml = '<span class="rc-status rc-replied">已回复</span>';
  else if (x.status) statusHtml = '<span class="rc-status rc-sent">[' + qcEsc(x.status) + ']</span>';
  var metaTail = x.pullTime
    ? '（拉取时间：' + qcEsc(x.pullTime) + (statusHtml ? '，' + statusHtml : '') + '）'
    : (statusHtml ? ' ' + statusHtml : '');
  return '<div class="rc-msg ' + (isCust ? 'rc-cust' : 'rc-agent') + (isBot ? ' rc-bot' : '') + '">'
    + '<div class="rc-meta"><span class="rc-name">' + qcEsc(name) + '</span> <span class="rc-time">' + qcEsc(x.sendTime) + '</span>' + metaTail + '</div>'
    + '<div class="rc-bubble">' + qcRcBodyHtml(x.body) + '</div></div>';
}
function renderReplyChatHtml(text, boxId, agentNames) {
  boxId = boxId || 'replyChat';
  var arr = parseReplyChatFull(text, agentNames);
  if (!arr.length) return '<div class="detail-msg-box">' + qcEsc(text || '') + '</div>';
  return '<div class="rc-wrap" id="' + boxId + '"><div class="rc-all">' + arr.map(rcBubbleHtml).join('') + '</div></div>';
}

function rcToggle(id) { var el = document.getElementById(id); if (!el) return; el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none'; }

// ============================================================
// 账号登录 · 人员权限（2026-11-18）
//   账号名 = 客服组织架构里的中文姓名；初始密码 123，首次登录强制改密
//   角色：管理员 admin / 组长 leader（组织架构里被设为组长的人自动获得）/ 客服 member
//   说明：本页是纯静态站，登录校验在前端完成，用于「分权展示 + 防误操作」；
//         密码按需求明文保存，只有管理员能在「人员管理」里查看与重置。
// ============================================================
var USERS = [];
var AUTH = null;
var USERS_KEY = 'qc_users_v1';
var SESSION_KEY = 'qc_session_v1';
var INIT_PWD = '123';
var SESSION_DAYS = 7;
var PWD_FORCED = false;
var QC_PERMS = {
  admin: ['user.manage', 'standard.edit', 'logic.view', 'knowledge.edit', 'case.edit', 'org.edit', 'data.upload', 'appeal.review'],
  leader: ['case.edit', 'appeal.review'],
  member: []
};

function qcTrim(v) { return String(v == null ? '' : v).trim(); }
function qcLeaderGroup(name) {
  var n = qcTrim(name);
  if (!n) return '';
  normalizeOrgData();
  for (var i = 0; i < ORG_DATA.length; i++) {
    if (ORG_DATA[i] && ORG_DATA[i].leader === n) return ORG_DATA[i].group;
  }
  return '';
}
function qcAgentGroup(name) {
  var n = qcTrim(name);
  var map = getAgentGroupMap();
  return map[n] || '';
}
function qcRoleOfUser(u) {
  if (!u) return '';
  if (u.role === 'admin') return 'admin';
  return qcLeaderGroup(u.name) ? 'leader' : 'member';
}
function qcRoleLabel(u) {
  var r = qcRoleOfUser(u);
  if (r === 'admin') return '管理员';
  var g = qcLeaderGroup(u.name);
  if (g) return '组长（' + g + '）';
  return '客服';
}
function qcCan(perm) {
  if (!AUTH) return false;
  var list = QC_PERMS[AUTH.role] || [];
  return list.indexOf(perm) >= 0;
}
// 质检案例库：组长 + 管理员可编辑；质检知识：仅管理员
function qcRequireCaseEdit(label) {
  if (qcCan('case.edit')) return true;
  showToast('「' + (label || '质检案例库') + '」只有组长和管理员可以修改，当前账号只能查看', 'error');
  return false;
}
function qcRequireKnowledgeEdit(type) {
  if (type === 'knowledge') {
    if (qcCan('knowledge.edit')) return true;
    showToast('「质检知识」只有管理员可以修改，当前账号只能查看', 'error');
    return false;
  }
  return qcRequireCaseEdit('质检案例库');
}
// 这一单能不能复核（不弹提示，供界面用）
function qcCanReviewResult(result) {
  var grp = getAgentGroupMap()[result && result.agent] || '';
  if (AUTH) {
    if (AUTH.role === 'admin') return true;
    if (AUTH.role !== 'leader') return false;
    var mine = AUTH.group || qcLeaderGroup(AUTH.name) || '';
    if (!mine) return false;
    if (!grp) return false;   // 不在组织架构里的客服：只有管理员可复核
    return mine === grp;
  }
  var rv = qcGetReviewer();
  if (!rv) return false;
  return !!grp && rv.group === grp;
}

// ---------- 用户表 ----------
function qcNormalizeUsers(list) {
  var out = [], seen = {};
  list = Array.isArray(list) ? list : [];
  for (var i = 0; i < list.length; i++) {
    var u = list[i] || {};
    var name = qcTrim(u.name);
    if (!name || seen[name]) continue;
    seen[name] = 1;
    out.push({
      name: name,
      role: u.role === 'admin' ? 'admin' : 'member',
      pwd: String(u.pwd == null ? INIT_PWD : u.pwd),
      mustChangePwd: u.mustChangePwd === undefined ? false : !!u.mustChangePwd,
      pwdTs: Number(u.pwdTs) || 0,   // 密码最后变更时间戳：改密/重置时写入，用于跨设备合并取最新
      createdAt: u.createdAt || '',
      updatedAt: u.updatedAt || ''
    });
  }
  return out;
}
function qcDefaultUserList() {
  var list = [{ name: '管理员', role: 'admin', pwd: INIT_PWD, mustChangePwd: true, createdAt: new Date().toISOString() }];
  var seen = { '管理员': 1 };
  normalizeOrgData();
  for (var i = 0; i < ORG_DATA.length; i++) {
    var agents = ORG_DATA[i].agents || [];
    for (var j = 0; j < agents.length; j++) {
      var n = qcTrim(agents[j]);
      if (!n || seen[n]) continue;
      seen[n] = 1;
      list.push({ name: n, role: 'member', pwd: INIT_PWD, mustChangePwd: true, createdAt: new Date().toISOString() });
    }
  }
  return list;
}
// 组织架构里出现的姓名（含组长、带编号的姓名）都视为可登录人员
function qcOrgNameSet() {
  var set = {};
  try { normalizeOrgData(); } catch (e) {}
  for (var i = 0; i < ORG_DATA.length; i++) {
    var g = ORG_DATA[i]; if (!g) continue;
    var ld = qcTrim(g.leader); if (ld) set[ld] = 1;
    var ag = g.agents || [];
    for (var j = 0; j < ag.length; j++) { var n = qcTrim(ag[j]); if (n) set[n] = 1; }
  }
  return set;
}
// 只补齐缺失账号（初始密码 123），绝不覆盖已有账号的密码/角色；返回新增姓名
function qcEnsureOrgAccounts(save) {
  var set = qcOrgNameSet(), added = [], n;
  for (n in set) if (Object.prototype.hasOwnProperty.call(set, n) && !qcFindUser(n)) {
    USERS.push({ name: n, role: 'member', pwd: INIT_PWD, mustChangePwd: true, createdAt: new Date().toISOString() });
    added.push(n);
  }
  if (added.length) {
    USERS = qcNormalizeUsers(USERS);
    qcCacheUsers();
    if (save) qcSaveUsers();
  }
  qcUpdateLoginCount();
  return added;
}
function qcUpdateLoginCount() {
  var el = document.getElementById('loginUserCount');
  if (el) el.textContent = '共 ' + USERS.length + ' 个账号';
}
function qcCacheUsers() { try { localStorage.setItem(USERS_KEY, JSON.stringify(USERS)); } catch (e) {} }
function qcReadCachedUsers() {
  try { var s = localStorage.getItem(USERS_KEY); if (s) { var a = JSON.parse(s); if (Array.isArray(a) && a.length) return a; } } catch (e) {}
  return null;
}
function qcFindUser(name) {
  var n = qcTrim(name);
  if (!n) return null;
  for (var i = 0; i < USERS.length; i++) if (USERS[i].name === n) return USERS[i];
  return null;
}
function qcUserIndex(name) {
  var n = qcTrim(name);
  for (var i = 0; i < USERS.length; i++) if (USERS[i].name === n) return i;
  return -1;
}
function qcAdminCount() {
  var c = 0;
  for (var i = 0; i < USERS.length; i++) if (USERS[i].role === 'admin') c++;
  return c;
}
// 人员表合并（2026-11-19 改密闭环加固）：
// 账号集合以 base 为准；对同名账号，密码状态(pwd / mustChangePwd / pwdTs / updatedAt)取 pwdTs 较新的一方。
// 目的：任何一台设备的"旧快照"都不能把别人已经改好的密码回退成初始密码 123 + 未改密状态。
// load 方向：base=云端名单、other=本地（本地刚改的密码 pwdTs 更新 → 保留）；
// save 方向：base=本地名单、other=云端（云端已有更新的密码 → 不被本地旧快照覆盖）。
function qcMergeUsersPwd(base, other) {
  base = qcNormalizeUsers(base || []);
  other = qcNormalizeUsers(other || []);
  var map = {}, i, k;
  for (i = 0; i < other.length; i++) map[other[i].name] = other[i];
  var out = [];
  for (i = 0; i < base.length; i++) {
    var u = base[i], o = map[u.name];
    var takeOther = false;
    if (o) {
      var oTs = Number(o.pwdTs) || 0, uTs = Number(u.pwdTs) || 0;
      if (oTs > uTs) takeOther = true;
      else if (oTs === uTs) {
        // 兼容旧版改密记录（无 pwdTs 字段=0）：已改密方优先于初始态方，
        // 避免本地旧快照把云端已改好的密码覆盖回 123 + 未改密
        var oChanged = !o.mustChangePwd && String(o.pwd) !== INIT_PWD;
        var uChanged = !u.mustChangePwd && String(u.pwd) !== INIT_PWD;
        if (oChanged && !uChanged) takeOther = true;
      }
    }
    if (takeOther) {
      var m = {}; for (k in u) if (u.hasOwnProperty(k)) m[k] = u[k];
      m.pwd = o.pwd; m.mustChangePwd = o.mustChangePwd; m.pwdTs = o.pwdTs;
      if (o.updatedAt) m.updatedAt = o.updatedAt;
      out.push(m);
    } else out.push(u);
  }
  return out;
}
// 只读云端 qc_users 名单（不触发任何保存 / 同步，避免与 qcCloudLoadUsers 递归）
function qcPullCloudUsersRaw() {
  if (!cloudDb) return Promise.resolve(null);
  try {
    return cloudDb.from('qc_dashboard_state').select('state_json').eq('state_key', 'qc_users').limit(1)
      .then(function (res) {
        if (res && res.error) return null;
        var row = res && res.data && res.data.length ? res.data[0] : null;
        if (!row || !row.state_json) return null;
        var d = null; try { d = JSON.parse(row.state_json); } catch (e) {}
        return (d && Array.isArray(d.users)) ? d.users : null;
      }).catch(function () { return null; });
  } catch (e) { return Promise.resolve(null); }
}
function qcSaveUsers() {
  qcCacheUsers();
  if (!cloudDb) return Promise.resolve(false);
  // 写云端前先拉最新名单合并：本地旧快照不能覆盖云端已被改过的密码
  return qcPullCloudUsersRaw().then(function (cloudUsers) {
    if (cloudUsers && cloudUsers.length) { USERS = qcMergeUsersPwd(USERS, cloudUsers); qcCacheUsers(); }
    var payload = { state_key: 'qc_users', state_json: JSON.stringify({ version: 1, users: USERS, updatedAt: new Date().toISOString() }), updated_by: 'anonymous' };
    return cloudDb.from('qc_dashboard_state').upsert(payload, { onConflict: 'state_key' }).then(function (res) {
      if (res.error) throw res.error;
      return true;
    });
  }).catch(function (err) {
    showToast('人员数据云端同步失败：' + ((err && (err.message || err.details)) || '请稍后重试'), 'error');
    return false;
  });
}
function qcCloudLoadUsers() {
  if (!cloudDb) return Promise.resolve(false);
  var sel = cloudDb.from('qc_dashboard_state').select('state_key,state_json,updated_at').eq('state_key', 'qc_users').limit(1);
  return sel.then(function (res) {
    if (res.error) throw res.error;
    var row = res.data && res.data.length ? res.data[0] : null;
    if (row && row.state_json) {
      var d = null;
      try { d = JSON.parse(row.state_json); } catch (e) {}
      if (d && Array.isArray(d.users) && d.users.length) {
        // 合并而非覆盖：本地若刚改过密码(pwdTs 更新)，保留本地新密码，防止云端旧快照回退
        var cloudNorm = qcNormalizeUsers(d.users), beforeMerge = qcNormalizeUsers(USERS);
        USERS = qcMergeUsersPwd(cloudNorm, beforeMerge);
        qcCacheUsers();
        qcOnUsersSynced();
        // 自愈回写：若本地存在比云端更新的密码（改密时云端写入失败），把它补写回云端
        var cm = {}, k;
        for (k = 0; k < cloudNorm.length; k++) cm[cloudNorm[k].name] = cloudNorm[k];
        var needPush = false;
        for (k = 0; k < USERS.length; k++) {
          var lu = USERS[k], cu = cm[lu.name];
          if (cu && ((Number(lu.pwdTs) || 0) > (Number(cu.pwdTs) || 0))) { needPush = true; break; }
          if (cu && (Number(lu.pwdTs) || 0) === (Number(cu.pwdTs) || 0)
              && !lu.mustChangePwd && String(lu.pwd) !== INIT_PWD
              && (cu.mustChangePwd || String(cu.pwd) === INIT_PWD)) { needPush = true; break; }
        }
        if (needPush) qcSaveUsers();
        return true;
      }
    }
    // 云端还没有人员表：把本机默认名单写上去（只在列表非空时）
    if (USERS.length) qcSaveUsers();
    qcOnUsersSynced();
    return false;
  }).catch(function () { qcOnUsersSynced(); return false; });
}
function qcOnUsersSynced() {
  var added = qcEnsureOrgAccounts(true);
  var el = document.getElementById('loginSync');
  if (el) el.textContent = '账号已同步（共 ' + USERS.length + ' 人）' + (added.length ? ' · 按组织架构新增 ' + added.length + ' 人' : '');
  if (AUTH) { qcApplyAuth(); renderUsersPage(); }
}

// ---------- 登录态 ----------
function qcSessionWrite(a) { try { localStorage.setItem(SESSION_KEY, JSON.stringify(a)); } catch (e) {} }
function qcSessionRead() {
  var s = null;
  try { s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch (e) { s = null; }
  if (!s || !s.name) return null;
  if (!s.ts || (Date.now() - s.ts) > SESSION_DAYS * 864e5) { try { localStorage.removeItem(SESSION_KEY); } catch (e) {} return null; }
  var u = qcFindUser(s.name);
  if (!u) return null;
  return { name: u.name, role: qcRoleOfUser(u), group: qcLeaderGroup(u.name) || '', ts: s.ts, mustChangePwd: !!u.mustChangePwd };
}
function qcAuthBoot() {
  var cached = qcReadCachedUsers();
  USERS = qcNormalizeUsers(cached && cached.length ? cached : qcDefaultUserList());
  qcEnsureOrgAccounts(false);
  qcCacheUsers();
  var s = qcSessionRead();
  if (s) {
    AUTH = s;
    qcApplyAuth();
    qcHideLogin();
    setTimeout(function () { qcReRenderAuthed(); }, 60);
  } else {
    qcShowLogin();
  }
  var sync = document.getElementById('loginSync');
  if (sync && !AUTH) {
    sync.textContent = '正在同步账号…';
    setTimeout(function () {
      var el = document.getElementById('loginSync');
      if (el && el.textContent === '正在同步账号…') el.textContent = '离线：正在使用本机账号缓存';
    }, 6000);
  }
  // 云端 main（含真实组织架构）加载完成后，按最终名单再补齐一次并写回云端
  setTimeout(function () {
    try {
      var added = qcEnsureOrgAccounts(true);
      if (added.length && AUTH) { try { renderUsersPage(); } catch (e) {} }
    } catch (e) {}
  }, 3200);
}
function qcShowLogin() {
  var el = document.getElementById('loginShell');
  if (!el) return;
  el.classList.add('show');
  document.body.classList.add('qc-locked');
  setTimeout(function () { var n = document.getElementById('loginName'); if (n) n.focus(); }, 120);
}
function qcHideLogin() {
  var el = document.getElementById('loginShell');
  if (el) el.classList.remove('show');
  document.body.classList.remove('qc-locked');
}
function qcLoginSubmit() {
  var nameEl = document.getElementById('loginName');
  var pwdEl = document.getElementById('loginPwd');
  var err = document.getElementById('loginError');
  var name = qcTrim(nameEl && nameEl.value);
  var pwd = String((pwdEl && pwdEl.value) || '');
  if (err) err.textContent = '';
  if (!name) { if (err) err.textContent = '请输入姓名'; if (nameEl) nameEl.focus(); return; }
  if (!pwd) { if (err) err.textContent = '请输入密码'; if (pwdEl) pwdEl.focus(); return; }
  var u = qcFindUser(name);
  if (!u) {
    // 组织架构里的人（含组长、带编号姓名）即使账号表还没同步，也可用初始密码登录
    var orgSet = qcOrgNameSet();
    if (Object.prototype.hasOwnProperty.call(orgSet, name)) {
      USERS.push({ name: name, role: 'member', pwd: INIT_PWD, mustChangePwd: true, createdAt: new Date().toISOString() });
      USERS = qcNormalizeUsers(USERS);
      qcCacheUsers();
      qcSaveUsers();
      qcUpdateLoginCount();
      u = qcFindUser(name);
    }
  }
  if (!u) {
    if (err) err.textContent = '没有找到账号「' + name + '」：账号名就是你在客服组织架构里的中文姓名，请联系管理员开通';
    return;
  }
  if (String(u.pwd) !== pwd) {
    if (err) err.textContent = '密码不正确，请重新输入';
    if (pwdEl) { pwdEl.value = ''; pwdEl.focus(); }
    return;
  }
  qcStartSession(u);
}
function qcStartSession(u) {
  AUTH = { name: u.name, role: qcRoleOfUser(u), group: qcLeaderGroup(u.name) || '', ts: Date.now(), mustChangePwd: !!u.mustChangePwd };
  qcSessionWrite(AUTH);
  qcApplyAuth();
  qcHideLogin();
  qcReRenderAuthed();
  showToast('欢迎，' + u.name + '（' + qcRoleLabel(u) + '）', 'success');
  if (u.mustChangePwd) {
    setTimeout(function () {
      var uu = qcFindUser(u.name);
      if (uu && uu.mustChangePwd) qcOpenPwdModal(true);
    }, 300);
  }
}
function qcLogout() {
  try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
  AUTH = null;
  location.reload();
}
function qcApplyAuth() {
  var b = document.body;
  if (!b) return;
  var role = AUTH ? AUTH.role : '';
  b.classList.toggle('admin-mode', role === 'admin');
  b.classList.toggle('leader-mode', role === 'leader');
  b.classList.toggle('member-mode', role === 'member');
  b.classList.toggle('qc-authed', !!AUTH);
  if (role === 'admin') { try { qcLogicUnlock(); } catch (e) {} } else { try { qcLogicLock(); } catch (e) {} }
  var pwdBtn = document.getElementById('pwdBtn');
  var outBtn = document.getElementById('logoutBtn');
  var aqBtn = document.getElementById('adminQuickLoginBtn');
  if (pwdBtn) pwdBtn.style.display = AUTH ? '' : 'none';
  if (outBtn) outBtn.style.display = AUTH ? '' : 'none';
  if (aqBtn) aqBtn.style.display = AUTH ? '' : 'none';
  qcUpdateUserChip();
  try { updateAdminBadge(); } catch (e) {}
}
function qcUpdateUserChip() {
  var el = document.getElementById('userChip');
  if (!el) return;
  if (!AUTH) { el.style.display = 'none'; el.innerHTML = ''; return; }
  var u = qcFindUser(AUTH.name) || { name: AUTH.name, role: AUTH.role === 'admin' ? 'admin' : 'member' };
  var roleTxt = qcRoleLabel(u);
  if (roleTxt === AUTH.name) roleTxt = '';
  el.style.display = '';
  el.innerHTML = '<span class="uc-name">' + escHtml(AUTH.name) + '</span>' + (roleTxt ? '<span class="uc-role">' + escHtml(roleTxt) + '</span>' : '');
}
function qcReRenderAuthed() {
  try { renderStandard(); } catch (e) {}
  try { renderKnowledgeBase(); } catch (e) {}
  try { renderOrg(); } catch (e) {}
  try { renderUsersPage(); } catch (e) {}
  var usersTab = document.getElementById('tab-users');
  if (usersTab && usersTab.classList.contains('active') && !qcCan('user.manage')) switchTabByName('detail');
  var logicTab = document.getElementById('tab-qclogic');
  if (logicTab && logicTab.classList.contains('active') && !qcCan('logic.view')) switchTabByName('detail');
}
// ---------- 管理员快捷登录入口（2026-11-18）：从「修改密码」左侧一键切到管理员 ----------
function qcAdminQuickLogin() {
  var m = document.getElementById('adminLoginModal');
  if (m) m.classList.add('show');
  var e = document.getElementById('adminLoginError'); if (e) e.textContent = '';
  var p = document.getElementById('adminLoginPwd'); if (p) { p.value = ''; setTimeout(function(){ p.focus(); }, 120); }
}
function qcCloseAdminLogin() {
  var m = document.getElementById('adminLoginModal'); if (m) m.classList.remove('show');
}
function qcAdminLoginSubmit() {
  var p = document.getElementById('adminLoginPwd');
  var e = document.getElementById('adminLoginError');
  var pwd = String((p && p.value) || '');
  if (!pwd) { if (e) e.textContent = '请输入管理员密码'; return; }
  // 管理员入口专用密码（2026-11-18 起）：yafex2026，与账号表普通密码解耦
  if (pwd !== 'yafex2026') { if (e) e.textContent = '管理员密码不正确'; return; }
  // 取一个管理员账号作为会话身份；没有则用内置管理员名
  var admins = [];
  for (var i = 0; i < (typeof USERS !== 'undefined' && USERS ? USERS.length : 0); i++) {
    var u0 = USERS[i];
    if (u0 && (u0.role === 'admin' || qcRoleOfUser(u0) === 'admin')) admins.push(u0);
  }
  var hit = admins.length ? admins[0] : { name: '管理员', role: 'admin' };
  qcCloseAdminLogin();
  // 以管理员身份建立会话，并跳过强制改密（管理员入口登录后立即拥有全部权限）
  if (typeof AUTH === 'undefined') { /* noop */ }
  AUTH = { name: hit.name, role: 'admin', group: '', ts: Date.now(), mustChangePwd: false };
  qcSessionWrite(AUTH);
  qcApplyAuth();
  qcHideLogin();
  qcReRenderAuthed();
  showToast('管理员已登录：' + hit.name + '，全部权限已开启', 'success');
  try { qcRefreshAppealBadges(); } catch (ex) {}
}

// 兼容旧入口：右上角不再提供密钥登录
function adminLogin() { showToast('请使用本人的姓名 + 密码登录', 'info'); if (!AUTH) qcShowLogin(); }
function adminLogout() { qcLogout(); }
function qcDevLogin(name) {
  var u = qcFindUser(name) || { name: name, role: 'admin', pwd: INIT_PWD, mustChangePwd: false };
  AUTH = { name: u.name, role: qcRoleOfUser(u), group: qcLeaderGroup(u.name) || '', ts: Date.now(), mustChangePwd: false };
  qcSessionWrite(AUTH); qcApplyAuth(); qcHideLogin(); qcReRenderAuthed();
  return AUTH.role;
}

// ---------- 改密码 ----------
function qcOpenPwdModal(forced) {
  PWD_FORCED = !!forced;
  var t = document.getElementById('pwdModalTitle');
  var hint = document.getElementById('pwdForceHint');
  var cancel = document.getElementById('pwdCancelBtn');
  var closeBtn = document.getElementById('pwdModalClose');
  if (t) t.textContent = forced ? '首次登录 · 修改初始密码' : '修改密码';
  if (hint) hint.style.display = forced ? 'block' : 'none';
  if (cancel) cancel.style.display = forced ? 'none' : '';
  if (closeBtn) closeBtn.style.display = forced ? 'none' : '';
  ['pwdOld', 'pwdNew', 'pwdNew2'].forEach(function (id) { var e = document.getElementById(id); if (e) e.value = ''; });
  var err = document.getElementById('pwdError');
  if (err) err.textContent = '';
  document.getElementById('pwdModal').classList.add('show');
  setTimeout(function () { var o = document.getElementById('pwdOld'); if (o) o.focus(); }, 100);
}
function qcClosePwdModal() {
  if (PWD_FORCED) { showToast('首次登录必须修改初始密码', 'error'); return; }
  document.getElementById('pwdModal').classList.remove('show');
}
function qcSubmitPwd() {
  if (!AUTH) return;
  var u = qcFindUser(AUTH.name);
  if (!u) { showToast('账号不存在，请重新登录', 'error'); return; }
  var oldPwd = String((document.getElementById('pwdOld') || {}).value || '');
  var n1 = String((document.getElementById('pwdNew') || {}).value || '');
  var n2 = String((document.getElementById('pwdNew2') || {}).value || '');
  var err = document.getElementById('pwdError');
  function fail(msg) { if (err) err.textContent = msg; }
  if (String(u.pwd) !== oldPwd) { fail('原密码不正确'); return; }
  if (n1.length < 4) { fail('新密码至少 4 位'); return; }
  if (n1.length > 24) { fail('新密码最多 24 位'); return; }
  if (n1 === String(u.pwd)) { fail('新密码不能和原密码相同'); return; }
  if (n1 !== n2) { fail('两次输入的新密码不一致'); return; }
  u.pwd = n1;
  u.mustChangePwd = false;
  u.pwdTs = Date.now();
  u.updatedAt = new Date().toISOString();
  AUTH.mustChangePwd = false;
  qcSessionWrite(AUTH);
  qcSaveUsers();
  PWD_FORCED = false;
  document.getElementById('pwdModal').classList.remove('show');
  renderUsersPage();
  showToast('密码已修改，请牢记新密码', 'success');
}

// ---------- 人员管理 ----------
function qcSetUser(name, patch) {
  var i = qcUserIndex(name);
  if (i < 0) return false;
  for (var k in patch) if (patch.hasOwnProperty(k)) USERS[i][k] = patch[k];
  USERS[i].updatedAt = new Date().toISOString();
  // 涉及密码/改密状态的变更（如管理员重置密码）打时间戳，保证跨设备合并时取最新
  if (patch.hasOwnProperty('pwd') || patch.hasOwnProperty('mustChangePwd')) USERS[i].pwdTs = Date.now();
  return true;
}
function qcAfterUsersChanged(msg) {
  qcSaveUsers();
  renderUsersPage();
  if (AUTH) {
    var u = qcFindUser(AUTH.name);
    AUTH.role = u ? qcRoleOfUser(u) : 'member';
    AUTH.group = qcLeaderGroup(AUTH.name) || '';
    qcSessionWrite(AUTH);
    qcApplyAuth();
    if (!qcCan('user.manage')) {
      showToast('你的管理员权限已被移除', 'info');
      switchTabByName('detail');
    }
  }
  if (msg) showToast(msg, 'success');
}
function qcRoleBadge(u) {
  var role = qcRoleOfUser(u);
  var cls = role === 'admin' ? 'ur-admin' : (role === 'leader' ? 'ur-leader' : 'ur-member');
  return '<span class="user-role ' + cls + '">' + escHtml(qcRoleLabel(u)) + '</span>';
}
function renderUsersPage() {
  var wrap = document.getElementById('usersTableWrap');
  if (!wrap) return;
  if (!AUTH) { wrap.innerHTML = '<div style="padding:24px;text-align:center;color:var(--gray-400);">请先登录</div>'; return; }
  if (!qcCan('user.manage')) {
    wrap.innerHTML = '<div style="padding:30px;text-align:center;color:var(--gray-500);font-size:13px;">🔒 人员管理仅管理员可见</div>';
    return;
  }
  var q = qcTrim((document.getElementById('userSearch') || {}).value).toLowerCase();
  var list = [];
  for (var i = 0; i < USERS.length; i++) {
    if (q && USERS[i].name.toLowerCase().indexOf(q) < 0) continue;
    list.push(USERS[i]);
  }
  var html = '<table class="standard-table user-table"><thead><tr>'
    + '<th style="width:150px;">姓名（登录账号）</th><th style="width:110px;">角色</th><th style="width:80px;">归属组</th>'
    + '<th style="width:180px;">密码</th><th style="width:110px;">状态</th><th>操作</th></tr></thead><tbody>';
  if (!list.length) {
    html += '<tr><td colspan="6" style="text-align:center;padding:26px;color:var(--gray-400);">没有匹配的人员</td></tr>';
  }
  for (var j = 0; j < list.length; j++) {
    var u = list[j];
    var nm = escHtml(u.name).replace(/'/g, '&#39;');
    var shown = !!(window.__qcPwdShown && window.__qcPwdShown[u.name]);
    var grp = qcLeaderGroup(u.name) || qcAgentGroup(u.name) || '—';
    var inOrg = !!qcAgentGroup(u.name) || !!qcLeaderGroup(u.name);
    var status = u.mustChangePwd ? '<span class="user-flag">未改初始密码</span>'
      : ((inOrg || qcRoleOfUser(u) === 'admin') ? '<span class="user-flag ok">正常</span>' : '<span class="user-flag off">不在组织架构</span>');
    html += '<tr>'
      + '<td style="font-weight:600;">' + escHtml(u.name) + (AUTH && AUTH.name === u.name ? ' <span style="font-size:11px;color:var(--primary);font-weight:600;">（我）</span>' : '') + '</td>'
      + '<td>' + qcRoleBadge(u) + '</td>'
      + '<td style="color:var(--gray-600);">' + escHtml(grp) + '</td>'
      + '<td><span class="pwd-val">' + (shown ? escHtml(u.pwd) : '••••••') + '</span><button class="btn-link" onclick="qcTogglePwd(\'' + nm + '\')">' + (shown ? '隐藏' : '显示') + '</button><button class="btn-link" onclick="qcResetPwd(\'' + nm + '\')">重置</button></td>'
      + '<td>' + status + '</td>'
      + '<td class="ops">'
      + '<button class="btn-link" onclick="qcEditUser(\'' + nm + '\')">编辑</button>'
      + '<button class="btn-link" onclick="qcToggleAdmin(\'' + nm + '\')">' + (u.role === 'admin' ? '取消管理员' : '设为管理员') + '</button>'
      + '<button class="btn-link danger" onclick="qcDeleteUser(\'' + nm + '\')">删除</button>'
      + '</td></tr>';
  }
  html += '</tbody></table>';
  html += '<div style="margin-top:10px;font-size:12px;color:var(--gray-500);">共 ' + USERS.length + ' 个账号 · 管理员 ' + qcAdminCount() + ' 人 · 组长按组织架构自动识别</div>';
  wrap.innerHTML = html;
  renderPermMatrix();
}
function renderPermMatrix() {
  var box = document.getElementById('permMatrixWrap');
  if (!box) return;
  var rows = [
    ['人员管理（账号 / 密码 / 角色）', 'yes', 'no', 'no'],
    ['质检标准（修改分值、等级）', 'yes', 'ro', 'ro'],
    ['质检逻辑（判分说明书）', 'yes', 'no', 'no'],
    ['质检知识（新增 / 修改 / 删除）', 'yes', 'ro', 'ro'],
    ['质检案例库（好案例 / 不好案例）', 'yes', 'yes', 'no'],
    ['客服组织架构（组别 / 组长 / 客服）', 'yes', 'no', 'no'],
    ['上传质检数据', 'yes', 'no', 'no'],
    ['申诉复核（逐项重新打分）', 'yes', '本组', 'no']
  ];
  var html = '<table class="perm-matrix"><thead><tr><th style="width:300px;">功能</th><th style="width:120px;">管理员</th><th style="width:150px;">组长</th><th>客服</th></tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    html += '<tr><td>' + escHtml(r[0]) + '</td>'
      + '<td class="' + (r[1] === 'yes' ? 'yes' : '') + '">' + (r[1] === 'yes' ? '✔ 可编辑' : '—') + '</td>'
      + '<td class="' + (r[2] === 'yes' ? 'yes' : (r[2] === 'ro' ? 'ro' : 'no')) + '">' + (r[2] === 'yes' ? '✔ 可编辑' : (r[2] === 'ro' ? '👁 只读' : (r[2] === '本组' ? '✔ 仅本组' : '—'))) + '</td>'
      + '<td class="' + (r[3] === 'yes' ? 'yes' : (r[3] === 'ro' ? 'ro' : 'no')) + '">' + (r[3] === 'yes' ? '✔ 可编辑' : (r[3] === 'ro' ? '👁 只读' : '—')) + '</td></tr>';
  }
  html += '</tbody></table>';
  html += '<div class="perm-tip">组长身份不在这里设置：在「客服组织架构」里把某人设为组长后，该账号登录即获得本组申诉复核权；组长的上级管理员可复核全部组。<br>账号名必须与组织架构中的中文姓名完全一致，才能自动匹配组别与组长权限。</div>';
  box.innerHTML = html;
}
function qcTogglePwd(name) {
  if (!window.__qcPwdShown) window.__qcPwdShown = {};
  window.__qcPwdShown[name] = !window.__qcPwdShown[name];
  renderUsersPage();
}
function qcResetPwd(name) {
  if (!qcCan('user.manage')) return;
  if (!confirm('把「' + name + '」的密码重置为初始密码 123？该用户下次登录需重新设置密码。')) return;
  qcSetUser(name, { pwd: INIT_PWD, mustChangePwd: true });
  qcAfterUsersChanged('已重置「' + name + '」的密码为 123');
}
function qcToggleAdmin(name) {
  if (!qcCan('user.manage')) return;
  var u = qcFindUser(name);
  if (!u) return;
  if (u.role === 'admin') {
    if (qcAdminCount() <= 1) { showToast('至少要保留 1 个管理员账号', 'error'); return; }
    if (AUTH && AUTH.name === name && !confirm('取消自己的管理员权限后将立即失去人员管理等权限，确认？')) return;
    qcSetUser(name, { role: 'member' });
    qcAfterUsersChanged('已取消「' + name + '」的管理员权限');
  } else {
    qcSetUser(name, { role: 'admin' });
    qcAfterUsersChanged('已把「' + name + '」设为管理员');
  }
}
function qcDeleteUser(name) {
  if (!qcCan('user.manage')) return;
  var u = qcFindUser(name);
  if (!u) return;
  if (AUTH && AUTH.name === name) { showToast('不能删除当前登录的账号', 'error'); return; }
  if (u.role === 'admin' && qcAdminCount() <= 1) { showToast('至少要保留 1 个管理员账号', 'error'); return; }
  if (!confirm('确认删除账号「' + name + '」？删除后该姓名将无法登录（组织架构不受影响）。')) return;
  USERS = USERS.filter(function (x) { return x.name !== name; });
  qcAfterUsersChanged('已删除账号：' + name);
}
function qcEditUser(name) {
  if (!qcCan('user.manage')) return;
  var u = qcFindUser(name);
  if (!u) return;
  var newName = prompt('修改姓名（同时是登录账号）：', u.name);
  if (newName === null) return;
  newName = qcTrim(newName);
  if (!newName) { showToast('姓名不能为空', 'error'); return; }
  if (newName === u.name) return;
  if (qcFindUser(newName)) { showToast('已存在同名账号：' + newName, 'error'); return; }
  var wasSelf = AUTH && AUTH.name === u.name;
  USERS[qcUserIndex(u.name)].name = newName;
  if (wasSelf) { AUTH.name = newName; qcSessionWrite(AUTH); }
  qcAfterUsersChanged('已改名为：' + newName);
}
function qcSyncUsersFromOrg() {
  if (!qcCan('user.manage')) return;
  normalizeOrgData();
  var added = [];
  for (var i = 0; i < ORG_DATA.length; i++) {
    var agents = ORG_DATA[i].agents || [];
    for (var j = 0; j < agents.length; j++) {
      var n = qcTrim(agents[j]);
      if (!n) continue;
      if (!qcFindUser(n)) {
        USERS.push({ name: n, role: 'member', pwd: INIT_PWD, mustChangePwd: true, createdAt: new Date().toISOString() });
        added.push(n);
      }
    }
  }
  USERS = qcNormalizeUsers(USERS);
  qcAfterUsersChanged(added.length ? ('已从组织架构新增 ' + added.length + ' 个账号：' + added.join('、')) : '组织架构里的姓名都已经有账号了');
}
function qcOpenUserModal() {
  if (!qcCan('user.manage')) return;
  document.getElementById('userModalTitle').textContent = '新增人员';
  document.getElementById('userName').value = '';
  document.getElementById('userRole').value = 'member';
  document.getElementById('userPwd').value = INIT_PWD;
  var err = document.getElementById('userError');
  if (err) err.textContent = '';
  document.getElementById('userModal').classList.add('show');
  setTimeout(function () { var n = document.getElementById('userName'); if (n) n.focus(); }, 100);
}
function qcCloseUserModal() { document.getElementById('userModal').classList.remove('show'); }
function qcSubmitUser() {
  if (!qcCan('user.manage')) return;
  var name = qcTrim(document.getElementById('userName').value);
  var role = document.getElementById('userRole').value === 'admin' ? 'admin' : 'member';
  var pwd = String(document.getElementById('userPwd').value || INIT_PWD);
  var err = document.getElementById('userError');
  if (!name) { if (err) err.textContent = '请填写姓名'; return; }
  if (qcFindUser(name)) { if (err) err.textContent = '已存在同名账号：' + name; return; }
  if (pwd.length < 4) { if (err) err.textContent = '初始密码至少 4 位'; return; }
  USERS.push({ name: name, role: role, pwd: pwd, mustChangePwd: true, createdAt: new Date().toISOString() });
  USERS = qcNormalizeUsers(USERS);
  qcCloseUserModal();
  qcAfterUsersChanged('已新增账号：' + name + '（初始密码 ' + pwd + '）');
}

// ============================================================
// 申诉状态三色角标 + 申诉消息中心（2026-11-18）
//   待审核 = 红 / 申诉通过（含部分通过）= 绿 / 申诉被拒 = 黄
//   统计范围按登录账号 + 客服组织架构：
//     管理员 = 全部；组长 = 本组组员；客服 = 本人（result.agent）
//   红 = 实时待处理数（状态驱动，审核后自动减少）
//   绿/黄 = 结果通知未读数，点开对应分类即视为查看 → 标记已读 → 数字消失
//   已读按「用户」存云端 qc_appeal_reads 单独一行（绝不写 main）+ localStorage 即时缓存
// ============================================================
var APPEAL_READS = {};                       // { 用户名: { readKey: 1 } }
var APPEAL_READS_LOCAL = 'qc_appeal_reads_v1';
var APPEAL_READS_ROW = 'qc_appeal_reads';
var APPEAL_BADGE_TAB = 'pending';
var APPEAL_SYNC_AT = 0;
var APPEAL_SYNC_BUSY = false;
var APPEAL_READS_CLOUD_LOADED = false;
var APPEAL_BUCKETS = [
  { key: 'pending',  label: '待审核',   emoji: '🔴', cls: 't-pending' },
  { key: 'passed',   label: '申诉通过', emoji: '🟢', cls: 't-passed' },
  { key: 'rejected', label: '申诉被拒', emoji: '🟡', cls: 't-rejected' }
];

function qcAppealMine() { return (typeof AUTH !== 'undefined' && AUTH) ? AUTH.name : ''; }
function qcAppealStableKey(r) {
  try { return getStableRecordKey(r); }
  catch (e) { return [r.account || '', r.agent || '', r.order || ''].join('||'); }
}
function qcAppealBucket(status) {
  if (status === '待审核') return 'pending';
  if (status === '申诉通过' || status === '部分通过') return 'passed';
  if (status === '申诉被拒') return 'rejected';
  return '';
}
function qcAppealReadKey(r, bucket) {
  var stamp = (r.appeal && (r.appeal.reviewedAt || r.appeal.submittedAt)) || '';
  return qcAppealStableKey(r) + '||' + bucket + '||' + stamp;
}
function qcAppealStatus(r) {
  try { return getAppealStatus(r); }
  catch (e) { return (r.appeal && r.appeal.status) || '无申诉'; }
}
// 这条记录是否落在当前登录人的可见范围
function qcAppealInScope(r) {
  if (typeof AUTH === 'undefined' || !AUTH || !r) return false;
  var me = AUTH.name;
  if (AUTH.role === 'admin') return true;
  if (AUTH.role === 'leader') {
    var mine = AUTH.group || (typeof qcLeaderGroup === 'function' ? qcLeaderGroup(me) : '') || '';
    var grp = '';
    try { grp = getGroupByAgent(r.agent) || ''; } catch (e) {}
    return !!mine && grp === mine;
  }
  // 同人归一：登录名「尹玉婷1」也要看到署名/明细写「尹玉婷」的单（反之亦然）
  return canonicalAgentName(String(r.agent || '').trim()) === canonicalAgentName(String(me || '').trim());
}
function qcAppealIsRead(r, bucket) {
  var me = qcAppealMine();
  if (!me) return true;
  var m = APPEAL_READS[me] || {};
  return !!m[qcAppealReadKey(r, bucket)];
}
// 三个角标的数字
function qcAppealCounts() {
  var c = { pending: 0, passed: 0, rejected: 0 };
  if (typeof AUTH === 'undefined' || !AUTH || typeof results === 'undefined' || !results) return c;
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (!r || !qcAppealInScope(r)) continue;
    var b = qcAppealBucket(qcAppealStatus(r));
    if (!b) continue;
    if (b === 'pending') { c.pending++; continue; }   // 实时待办，不受已读影响
    if (!qcAppealIsRead(r, b)) c[b]++;                 // 结果类：只数未读
  }
  return c;
}
function qcAppealScopeLabel() {
  if (typeof AUTH === 'undefined' || !AUTH) return '';
  if (AUTH.role === 'admin') return '全部申诉';
  if (AUTH.role === 'leader') return '本组（' + (AUTH.group || '') + '）';
  return '我的申诉';
}
// 刷新顶栏三色角标
function qcRefreshAppealBadges() {
  var bar = document.getElementById('appealBadgeBar');
  if (!bar) return;
  if (typeof AUTH === 'undefined' || !AUTH) { bar.style.display = 'none'; return; }
  bar.style.display = 'inline-flex';
  var c = qcAppealCounts();
  var defs = [
    ['pending', 'abNumPending', 'abPending'],
    ['passed', 'abNumPassed', 'abPassed'],
    ['rejected', 'abNumRejected', 'abRejected']
  ];
  for (var i = 0; i < defs.length; i++) {
    var b = defs[i][0];
    var num = document.getElementById(defs[i][1]);
    var chip = document.getElementById(defs[i][2]);
    if (num) num.textContent = c[b];
    if (chip) { if (c[b] > 0) chip.classList.add('has-count'); else chip.classList.remove('has-count'); }
  }
  var scope = document.getElementById('appealBadgeScope');
  if (scope) scope.textContent = qcAppealScopeLabel();
  var scope2 = document.getElementById('appealInboxScope');
  if (scope2) scope2.textContent = '统计范围：' + qcAppealScopeLabel();
}

// ---------- 已读持久化 ----------
function qcAppealMergeReads(o) {
  if (!o || typeof o !== 'object') return;
  for (var u in o) if (Object.prototype.hasOwnProperty.call(o, u)) {
    if (!APPEAL_READS[u]) APPEAL_READS[u] = {};
    var m = o[u] || {}, k;
    for (k in m) if (Object.prototype.hasOwnProperty.call(m, k)) APPEAL_READS[u][k] = 1;
  }
}
function qcAppealLoadLocal() {
  try { var s = localStorage.getItem(APPEAL_READS_LOCAL); if (s) qcAppealMergeReads(JSON.parse(s)); } catch (e) {}
}
function qcAppealCacheLocal() {
  try { localStorage.setItem(APPEAL_READS_LOCAL, JSON.stringify(APPEAL_READS)); } catch (e) {}
}
function qcCloudLoadAppealReads() {
  qcAppealLoadLocal();
  if (typeof cloudDb === 'undefined' || !cloudDb) { try { qcRefreshAppealBadges(); } catch (e) {} return Promise.resolve(false); }
  return cloudDb.from('qc_dashboard_state').select('state_key,state_json').eq('state_key', APPEAL_READS_ROW).limit(1)
    .then(function (res) {
      var row = res && res.data && res.data.length ? res.data[0] : null;
      if (row && row.state_json) {
        try { var d = JSON.parse(row.state_json); if (d && d.reads) qcAppealMergeReads(d.reads); } catch (e) {}
      }
      qcAppealCacheLocal();
      APPEAL_READS_CLOUD_LOADED = true;
      try { qcRefreshAppealBadges(); } catch (e) {}
      return true;
    }).catch(function () { try { qcRefreshAppealBadges(); } catch (e) {} return false; });
}
function qcSaveAppealReads() {
  qcAppealCacheLocal();
  if (typeof cloudDb === 'undefined' || !cloudDb) return Promise.resolve(false);
  var payload = {
    state_key: APPEAL_READS_ROW,
    state_json: JSON.stringify({ version: 1, reads: APPEAL_READS, updatedAt: new Date().toISOString() }),
    updated_by: 'anonymous'
  };
  return cloudDb.from('qc_dashboard_state').upsert(payload, { onConflict: 'state_key' })
    .then(function (res) { if (res && res.error) throw res.error; return true; })
    .catch(function () { return false; });
}
function qcAppealMarkRead(list, bucket) {
  var me = qcAppealMine();
  if (!me) return false;
  if (!APPEAL_READS[me]) APPEAL_READS[me] = {};
  var m = APPEAL_READS[me], changed = false;
  for (var i = 0; i < list.length; i++) {
    var k = qcAppealReadKey(list[i], bucket);
    if (!m[k]) { m[k] = 1; changed = true; }
  }
  if (changed) qcAppealFlushReads();
  return changed;
}
// 写回前先读云端、把别人的已读记录并进来，避免多人同时标记时互相覆盖（只增不减）
function qcAppealFlushReads() {
  if (typeof cloudDb === 'undefined' || !cloudDb) return qcSaveAppealReads();
  return cloudDb.from('qc_dashboard_state').select('state_json').eq('state_key', APPEAL_READS_ROW).limit(1)
    .then(function (res) {
      var row = res && res.data && res.data.length ? res.data[0] : null;
      if (row && row.state_json) {
        try { var d = JSON.parse(row.state_json); if (d && d.reads) qcAppealMergeReads(d.reads); } catch (e) {}
      }
      APPEAL_READS_CLOUD_LOADED = true;
      return qcSaveAppealReads();
    }).catch(function () { return qcSaveAppealReads(); });
}

// ---------- 申诉消息中心 ----------
function qcAppealList(bucket) {
  var out = [];
  if (typeof results === 'undefined' || !results) return out;
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (!r || !qcAppealInScope(r)) continue;
    if (qcAppealBucket(qcAppealStatus(r)) === bucket) out.push(r);
  }
  return out;
}
function qcOpenAppealInbox(bucket) {
  if (typeof AUTH === 'undefined' || !AUTH) { try { showToast('请先登录查看申诉消息', 'error'); } catch (e) {} return; }
  APPEAL_BADGE_TAB = bucket || 'pending';
  var box = document.getElementById('appealInboxModal');
  if (box) box.classList.add('show');
  // 打开结果类分类 = 已查看：标记已读，彩色数字清除
  if (bucket === 'passed' || bucket === 'rejected') qcAppealMarkRead(qcAppealList(bucket), bucket);
  qcRenderAppealInbox();
  qcRefreshAppealBadges();
  qcSyncAppealsFromCloud();   // 跨设备：拉一次云端最新申诉状态（节流 + 静默）
}
function qcCloseAppealInbox() {
  var box = document.getElementById('appealInboxModal');
  if (box) box.classList.remove('show');
}
function qcSwitchAppealTab(bucket) {
  APPEAL_BADGE_TAB = bucket;
  if (bucket === 'passed' || bucket === 'rejected') qcAppealMarkRead(qcAppealList(bucket), bucket);
  qcRenderAppealInbox();
  qcRefreshAppealBadges();
}
function qcRenderAppealInbox() {
  var tabsBox = document.getElementById('appealInboxTabs');
  var listBox = document.getElementById('appealInboxList');
  if (!tabsBox || !listBox) return;
  var c = qcAppealCounts(), th = '';
  for (var t = 0; t < APPEAL_BUCKETS.length; t++) {
    var d = APPEAL_BUCKETS[t];
    var n = d.key === 'pending' ? qcAppealList('pending').length : c[d.key];
    th += '<div class="ai-tab ' + d.cls + (APPEAL_BADGE_TAB === d.key ? ' active' : '') + '" onclick="qcSwitchAppealTab(\'' + d.key + '\')">'
        + d.emoji + ' ' + d.label + ' <span class="ai-tab-num">' + n + '</span></div>';
  }
  tabsBox.innerHTML = th;
  var scope2 = document.getElementById('appealInboxScope');
  if (scope2) scope2.textContent = '统计范围：' + qcAppealScopeLabel();

  var list = qcAppealList(APPEAL_BADGE_TAB);
  var curLabel = '';
  for (var q = 0; q < APPEAL_BUCKETS.length; q++) if (APPEAL_BUCKETS[q].key === APPEAL_BADGE_TAB) curLabel = APPEAL_BUCKETS[q].label;
  if (!list.length) {
    listBox.innerHTML = '<div class="ai-empty"><span class="ai-empty-icon">📭</span>暂无「' + curLabel + '」的申诉记录</div>';
    return;
  }
  var h = '';
  for (var i = 0; i < list.length; i++) {
    var r = list[i], a = r.appeal || {};
    var idx = (r._index !== undefined && r._index !== null) ? r._index : results.indexOf(r);
    var grp = '';
    try { grp = getGroupByAgent(r.agent); } catch (e) {}
    var unread = (APPEAL_BADGE_TAB !== 'pending' && !qcAppealIsRead(r, APPEAL_BADGE_TAB));
    h += '<div class="ai-item">'
      + '<div class="ai-main">'
      +   '<div class="ai-line1"><span class="ai-name">' + escHtml(r.agent || '-') + '</span>'
      +     '<span class="ai-meta">' + escHtml(grp || '未分组') + '</span>'
      +     appealStatusBadge(qcAppealStatus(r))
      +     (unread ? '<span class="ai-unread-dot" title="未读"></span>' : '')
      +   '</div>'
      +   '<div class="ai-line1"><span class="ai-order">平台单号 ' + escHtml(r.order || '-') + '</span>'
      +     '<span class="ai-meta">账号 ' + escHtml(r.account || '-') + '</span>'
      +     '<span class="ai-meta">总分 ' + (r.totalScore === undefined || r.totalScore === null ? '-' : r.totalScore) + '</span></div>'
      +   (a.reason ? '<div class="ai-reason"><b>申诉理由：</b>' + escHtml(a.reason) + '</div>' : '')
      +   (a.reviewReason ? '<div class="ai-reason"><b>复核说明：</b>' + escHtml(a.reviewReason) + '</div>' : '')
      +   (a.reviewer ? '<div class="ai-reason"><b>复核人：</b>' + escHtml(a.reviewer) + (a.reviewedAt ? ' · ' + escHtml(String(a.reviewedAt).replace('T', ' ').slice(0, 19)) : '') + '</div>' : '')
      + '</div>'
      + '<div class="ai-ops"><button class="btn btn-outline btn-sm" onclick="qcInboxGoDetail(' + idx + ')">查看详情</button></div>'
      + '</div>';
  }
  listBox.innerHTML = h;
}
function qcInboxGoDetail(idx) {
  qcCloseAppealInbox();
  try { switchTabByName('detail'); } catch (e) {}
  setTimeout(function () {
    try { openAppealModal(idx); }
    catch (e) { try { showDetail(idx); } catch (e2) {} }
  }, 60);
}

// ---------- 跨设备：打开消息中心时拉一次云端最新申诉状态 ----------
// 只把 appeal 字段合并进本地 results（不重跑质检、不写回 main、不重绘表格），带节流与静默失败
function qcSyncAppealsFromCloud() {
  if (typeof cloudDb === 'undefined' || !cloudDb) return;
  var now = Date.now();
  if (APPEAL_SYNC_BUSY || now - APPEAL_SYNC_AT < 9000) return;
  APPEAL_SYNC_AT = now;
  APPEAL_SYNC_BUSY = true;
  cloudDb.from('qc_dashboard_state').select('state_json').eq('state_key', 'main').limit(1)
    .then(function (res) {
      var row = res && res.data && res.data.length ? res.data[0] : null;
      if (!row || !row.state_json) return;
      var d;
      try { d = JSON.parse(row.state_json); } catch (e) { return; }
      if (!d || !d.results || typeof results === 'undefined' || !results) return;
      var map = {}, i;
      for (i = 0; i < d.results.length; i++) map[qcAppealStableKey(d.results[i])] = d.results[i];
      var changed = false;
      for (i = 0; i < results.length; i++) {
        var r = results[i], cr = map[qcAppealStableKey(r)];
        if (!cr) continue;
        var os = qcAppealStatus(r), ns = (cr.appeal && cr.appeal.status) || '无申诉';
        if (os !== ns) { r.appeal = cr.appeal; changed = true; }
      }
      if (changed) qcRefreshAppealBadges();
      var box = document.getElementById('appealInboxModal');
      if (box && box.classList.contains('show')) qcRenderAppealInbox();
      APPEAL_SYNC_BUSY = false;
    }).catch(function () { APPEAL_SYNC_BUSY = false; });
}

// ---------- 登录 / 会话恢复 / 权限切换后立即按新身份重算角标 ----------
(function () {
  function wrap(name) {
    try {
      var orig = window[name];
      if (typeof orig !== 'function') return;
      window[name] = function () {
        var ret = orig.apply(this, arguments);
        try { qcRefreshAppealBadges(); } catch (e) {}
        return ret;
      };
    } catch (e) {}
  }
  wrap('qcApplyAuth');      // 登录态应用 / 会话恢复 / 权限变化
  wrap('qcStartSession');   // 登录成功
  wrap('qcAfterUsersChanged'); // 人员/角色变更
})();

// ---------- 启动兜底：本地已读 + 云端已读 + 定时重算/跨设备同步 ----------
(function () {
  function boot() {
    qcAppealLoadLocal();
    try { qcRefreshAppealBadges(); } catch (e) {}
    setTimeout(function () { try { qcCloudLoadAppealReads(); } catch (e) {} }, 1600);
    // 登录后拉一次云端最新申诉状态（组员刚提交 / 组长刚审核，另一台设备较快看到）
    setTimeout(function () {
      try { if (typeof AUTH !== 'undefined' && AUTH && cloudDb) qcSyncAppealsFromCloud(); } catch (e) {}
    }, 3200);
    // 低频兜底：登录态下每 15s 重算一次，并拉一次云端最新申诉状态（内部有节流/并发保护）
    setInterval(function () {
      try { qcRefreshAppealBadges(); } catch (e) {}
      try { if (typeof AUTH !== 'undefined' && AUTH && cloudDb) qcSyncAppealsFromCloud(); } catch (e) {}
    }, 15000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
