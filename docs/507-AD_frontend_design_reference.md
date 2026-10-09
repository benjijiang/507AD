# 507-AD — Frontend Design Reference

版本：v1.0 · 2026-10-09  
用途：交给前端 worker agent，作为网站设计、文案、素材处理与验收的执行依据。  
文档语言：中文；网站默认面向美国校园受众，公开页面文案使用英文。

## 1. 项目与网站目标

507-AD 是一个面向大学宿舍的 autonomous food delivery robot 项目。它希望解决外卖抵达楼下后、学生仍需要中断手头的事去取餐的最后一段配送问题。

目前已有机器人外壳 CAD；硬件尚在开发，缺乏成熟的 demo 视频和专业美术团队。网站需要通过统一的产品渲染、清晰的体验叙事和精致的前端，让访客理解项目并对团队的执行质量建立信任。

**近期网站主要用于向 Venture Lab 展示项目、支持 funding 申请。** 网站仍应保持学生友好的产品表达：让评审快速看到实际校园需求、产品方案和学生团队，而不是把首页做成融资 pitch deck。

访客看完首页，应能回答：

1. 507-AD 是什么？——正在开发的宿舍外卖配送机器人。
2. 它解决什么问题？——把楼下取餐的那段路交给机器人。
3. 计划如何使用？——楼下交接、机器人配送、学生收到通知并取餐。
4. 谁在开发？——学生团队，为学生的日常生活设计。
5. 现在到哪一步？——开发阶段，具体能力与进展以团队确认的信息为准。
6. 如何进一步了解或联系？——了解机器人、阅读项目故事、获得更新或联系团队。

**核心品牌句：Built by students. For students.**

## 2. 优先级与真实性边界

### 已确认的设计要求

| 项目 | 执行要求 |
| --- | --- |
| 品牌 | 使用 507-AD；没有提供正式 logo 时先用精致的文字标识 |
| 产品 | 宿舍 autonomous food delivery robot；网站介绍服务体验 |
| 受众 | 普通学生能理解；Venture Lab 评审能获得清晰 overview |
| 风格 | Tesla 的产品质感、Uber 的亲和力、适量未来感；借鉴原则，不复制品牌布局或素材 |
| 色彩 | 黑、白、暖白、灰为主，少量低饱和科技蓝 |
| 叙事 | Built by students, for students；简洁、可信、有温度 |
| 素材 | 真实 CAD 是产品形态的依据；AI 可补环境和氛围 |
| 阶段 | 明确 In development；没有证据的能力只能写为设计目标或 planned experience |
| 首版范围 | 一页完成主要叙事；优先 Hero、3D Robot、How It Works |

### 尚需团队提供或确认

机器人 CAD / GLB / 多角度截图、尺寸与最终形态、团队姓名与照片、允许公开的学校背景、实际开发进展、已完成测试、联系方式、更新订阅的接收方式。

电梯交互、通知、食品舱开启方式、交接对象、路线导航、授权与试点范围等，均不能仅凭概念设计当作已实现能力发布。

**信息缺失时继续完成可预览的布局，用明确的占位资产或概念标识承接；发布前清除未确认的事实和占位内容。** 不为缺少素材编造团队成员、真实测试照片、性能数字、用户评价、合作关系或融资记录。

### 网站不承担的内容

首版无需 market size、TAM/SAM/SOM、商业模型、融资金额、增长图表或投资人专属入口。工程细节如 SLAM、控制架构、传感器与按钮识别，可以后续放 Technology 页面；首页只在有助于理解产品时简要提及。

## 3. 整体体验方向

关键词：**Effortless · Premium · Approachable · Credible · Subtly futuristic**。

| 感受 | 如何做到 | 需要避免 |
| --- | --- | --- |
| 省心 | 短文案、清晰主按钮、三步流程、突出食物到楼层的便利 | 工程术语先于用户价值 |
| 精致 | 大留白、准确排版、优质材质与光照、统一的素材 | 堆满小卡片、廉价模板感、过度装饰 |
| 亲切 | 暖白背景、自然校园场景、人尺度的产品构图 | 冷蓝科幻滤镜、军事化机器形象 |
| 可信 | 真实 CAD、明确阶段、学生团队与已核实进展 | 看似已经商业运营的虚构展示 |
| 科技感 | 可交互产品模型、精细界面、克制的滚动叙事 | 粒子海、霓虹、扫描线、代码雨 |

页面主体像一个认真打磨的消费服务品牌。高级感来自比例、材质、节奏和实现质量。

## 4. 信息架构

首版采用单页；不要为了填导航而创建内容不足的独立页面。

导航：`507-AD` · `How it works` · `The robot` · `Our story` · `Get updates`。

建议的页面顺序：

| 顺序 | Section / anchor | 内容任务 | 主要视觉 |
| --- | --- | --- | --- |
| 1 | Hero / `#home` | 第一屏说明产品与价值 | 真实 CAD 的大幅产品渲染 |
| 2 | How it works / `#how-it-works` | 解释计划中的交接与配送体验 | 三步 UI 动画或轻量流程演示 |
| 3 | Meet the robot / `#robot` | 建立产品形态记忆、介绍关键设计 | 可交互 3D + 2–3 个热点 |
| 4 | Built for dorm life / `#dorm-life` | 展示它与学生日常的关系 | 校园生活场景 + 克制的 feature grid |
| 5 | Our story / `#our-story` | 说明学生团队的动机与可信进展 | 真实团队内容 + Development updates |
| 6 | Get updates / `#updates` | 提供下一步入口 | 简洁 CTA、联系或真实订阅 |

FAQ 可作为结尾的紧凑 accordion，放在 CTA 之前；footer 保持轻量。进展内容归入 Our story，不把首版扩展成大型项目门户。

## 5. 各 Section 的设计与默认文案

以下英文文案为首版默认值，可做语义一致的轻微调整。出现计划能力时，相关区域需要可见的阶段说明，不能只在 footer 标注。

### 5.1 Header

- 桌面：左侧文字 logo，中间或右侧页面锚点，最右 `Get updates`。
- 高度约 72–80px；mobile 约 64px。
- sticky；滚动后出现薄边线或轻微底色变化，必要时用克制的 blur。
- 使用锚点滚动并为 sticky header 留出偏移；手机菜单支持关闭、键盘与焦点返回。

### 5.2 Hero — 先解释价值，再展示产品

**Eyebrow:** `AUTONOMOUS DORM DELIVERY`  
**H1:** `Your food. Your floor.`  
**Body:** `We're building a robot to bring food delivery from your dorm lobby to your floor.`  
**Primary CTA:** `Meet the robot` → `#robot`  
**Secondary CTA:** `How it works` → `#how-it-works`  
**Visible status:** `In development · Built by students, for students`

桌面建议左侧文字、右侧大幅机器人三分之四视角；也可采用居中标题配下方大型产品构图。机器人应占据明显视觉份额，有真实材质、柔和阴影与足够呼吸空间，不缩成普通卡片内的小图。

第一屏不需要长段落或技术参数。屏幕底部可稍露出下一节，暗示继续滚动。

手机：标题、简介、按钮、机器人依次排列；不要把宽幅桌面图直接裁到机器人只剩局部。首屏信息与机器人在正常滚动中都容易看到，不强制固定 100vh。

**素材缺失时：** 有 CAD 截图即可先用；无可用产品资产时用明确标记 `Concept visualization` 的临时占位。不能宣称文字生成的机器人是最终产品或 CAD 渲染。

### 5.3 How it works — 用体验动画替代成熟 demo

**H2:** `Delivery, without the detour.`  
**Intro:** `A simpler handoff, from the lobby to your floor.`  
**Label:** `Planned delivery experience`

| Step | 英文标题 | 英文描述 | 视觉 |
| --- | --- | --- | --- |
| 01 | `Lobby handoff` | `Food is placed in the robot at the dorm lobby.` | 取餐袋进入舱体的简洁示意 |
| 02 | `Up to your floor` | `The robot is designed to carry it through the building to your floor.` | 抽象路线或楼层进度；电梯能力保持 planned |
| 03 | `Pick up nearby` | `A notification lets you know when it's ready to collect.` | 示意通知卡与取餐状态 |

桌面三步横向排列；mobile 纵向排列或切换面板。动画演示只需要让用户理解流程，不制造已接入真实系统的错觉。

可以做一个流程主舞台：显示当前步骤、短进度线与一张简洁 UI 卡。自动演示可暂停，用户能直接选择每一步；手动选择后不立即被自动播放覆盖。

示例 UI 文案：`Lobby handoff` → `On the way` → `Ready to collect`。数字倒计时、定位地图与即时通知若只是 UI prototype，要在近处注明 `Interface concept`。不能显示未经验证的 ETA 或模拟实时订单数据。

### 5.4 Meet the robot — 真实 CAD 成为视觉核心

**Eyebrow:** `MEET YOUR NEW DORMMATE`  
**H2:** `Small robot. Big convenience.`  
**Body:** `An approachable design, built around everyday campus life.`

使用真实 CAD 导出的 `.glb` / `.gltf`。桌面支持拖动旋转、轻微默认转动和热点；限制俯仰与缩放范围，确保模型不会丢失、穿地或进入难看的角度。提供 `Reset view`。

热点最多 2–3 个，只指向已确认的结构。初步方向：

| 热点 | 内容方向 | 说明 |
| --- | --- | --- |
| Food compartment | 食物收纳与交接 | 不宣称锁定、保温、消毒或防盗能力，除非确认 |
| Front interface | 简单的人机交互 | 仅当 CAD 确认有此结构；交互逻辑可注明 planned |
| Mobility base | 室内移动设计 | 不编造速度、承重、坡度或电池续航 |

点击热点显示短说明卡；同一说明必须能通过旁边的文字按钮访问。模型不是唯一的信息入口。

为没有 WebGL、弱设备或用户选择减少动效的情况提供高质量静态 poster。模型加载失败时保留静态图、文字和交互说明。

### 5.5 Built for dorm life — 回到生活价值

**H2:** `Built for dorm life.`  
**Body:** `Less interruption. More time for whatever you're in the middle of.`

推荐一张占比明显的生活场景图，配 2–3 张简洁功能卡。Bento 是组织方式，不要求所有内容都卡片化。

| 卡片 | 默认英文文案 | 可用视觉 |
| --- | --- | --- |
| `Stay in your flow` | `A delivery experience designed around studying, relaxing, and everything in between.` | 学生书桌、晚餐袋、暖光 |
| `Designed for indoors` | `We're developing navigation for the spaces students use every day.` | 走廊环境概念图或路线示意 |
| `A simple handoff` | `Clear cues and an approachable interface are part of the experience we're building.` | 产品细节或 UI concept |

使用自然光、可信的大学宿舍空间和普通学生日常。机器人与人、门、电梯之间的比例要准确。

AI 场景标记 `Concept visualization`，保持小而可读，不设计成警告条。不把 AI 生成的人物冒充团队或真实用户。

### 5.6 Our story — Built by students. For students.

**H2:** `Built by students. For students.`  
**Default body:** `507-AD started with a familiar campus interruption: going downstairs to collect a delivery. We're a student team building a better way to handle that last part of the trip.`

正文控制在 2–4 句。可以在团队确认后加入 Penn 学生背景，说明真实的问题来源与开发动机。学校背景是事实描述，不暗示官方合作或背书。没有授权不要放大学或 Venture Lab logo。

真实团队照片优先；没有正式合影时可以使用真实工作台、CAD 工作过程、装配照片。没有这些素材时采用纯文字排版，preview 中可保留 `Team photo pending` 的明确占位。

团队姓名、角色、头像或个人链接只使用团队提供的信息；不要生成虚构成员来填满网格。

**Development updates** 放在本区域下方，以最多 3 条简洁进展展示真实推进情况。每条包含日期、已确认成果和下一步；没有确认日期就不要编造。

示例编辑结构（不是可直接发布的事实）：

- `[Verified date] — [Confirmed milestone] — [One-sentence explanation]`
- `Next: [Confirmed next step]`

如果只有外壳 CAD 可确认，可写 `Exterior CAD available; hardware development is ongoing.`，不写“测试成功”“已上线试点”或任意完成率。

### 5.7 FAQ — 回答当前最实际的问题

首版 3–4 个问题即可。默认回答只覆盖已知状态：

| 问题 | 回答方向 |
| --- | --- |
| `Can I use 507-AD today?` | 项目仍在开发；确认试点后再公开 availability |
| `How would delivery work?` | 简述 planned lobby-to-floor 流程，链接流程区 |
| `Can it use elevators?` | 电梯交互属于开发目标，未核实前不能写成已实现 |
| `How are you approaching safety and privacy?` | 需要团队提供真实设计说明；不能承诺未知的认证、加密或数据政策 |

没有确定内容的问题，preview 中标记需要团队确认；发布时只保留有真实回答的问题。不要为了完整性添加空泛保证。

### 5.8 Get updates + Footer

**H2:** `Follow the next steps.`  
**Body:** `See what we're building and hear about future campus trials.`  
**CTA:** `Get updates`

订阅方式未确定时，先使用已确认的项目联系链接；没有联系方式时，在 preview 中明确标注待提供。不得让未连接后台的表单显示订阅成功。

如果实现真实订阅：有清晰邮箱标签、基本校验、提交中状态、失败重试、服务确认后的成功状态，以及与实际数据处理一致的简短说明。先展示可审阅的实现；对外发布和真实数据收集遵循项目已有授权。

没有确认 early access 或等待名单机制时，不用 `Order now`、`Book a delivery`，也不把订阅写成已获得试用资格。

Footer：`507-AD`、页面锚点、已确认的联系入口、`In development`。法律与隐私页面只链接真实存在的内容。

## 6. 视觉系统与初始设计 tokens

以下值为实现起点，允许因真实产品资产和移动排版小幅调整，但整站必须统一。

| Token | 建议值 / 用途 |
| --- | --- |
| `--color-bg` | `#FAFAF7`，暖白主背景 |
| `--color-surface` | `#FFFFFF`，内容卡、输入框 |
| `--color-text` | `#17191C`，正文与标题 |
| `--color-muted` | `#5E646D`，辅助信息；仍需在实际背景上核查对比度 |
| `--color-border` | `#E3E5E8`，轻量边线 |
| `--color-accent` | `#3D628A`，少量焦点、选中状态与细节 |
| `--color-dark` | `#17191C`，可选产品特写背景 |
| 字体 | Inter / Geist 风格 sans-serif；使用现有项目字体或可用的合法字体文件 |
| 字重 | 400 / 500 / 600；避免满页粗体 |
| Desktop H1 | 约 64–88px，line-height 1.0–1.08；允许 fluid sizing |
| Mobile H1 | 约 40–52px；不要依赖强制换行造成溢出 |
| H2 | Desktop 40–56px；mobile 30–38px |
| Body | 16–18px，line-height 1.5–1.65 |
| Microcopy | 12–14px，保证可读，不把关键阶段说明做成极小字 |
| Container | 内容 max-width 1200–1280px；大型产品舞台可更宽 |
| Page padding | Desktop 40–64px；mobile 20–24px |
| Section spacing | Desktop 96–144px；mobile 64–88px |
| Card radius | 16–24px |
| Button radius | 999px；高度约 48px |
| Shadows | 柔和、低对比；不在每个元素上堆重阴影 |

暖白与黑灰应占据绝大多数页面面积。可安排一段 charcoal 产品特写作为节奏变化；避免白黑背景频繁交替。科技蓝是细节色，不把整站变成蓝色 SaaS dashboard。

主按钮建议深色底、浅色字；次按钮可用描边或文字箭头。统一按钮的间距、圆角、hover 和 focus。

## 7. 交互与动效

| 元素 | 推荐行为 | 边界 |
| --- | --- | --- |
| Button | 150–250ms 的颜色或轻微位移反馈 | 不明显弹跳、不扭曲文字 |
| Section reveal | 350–600ms 淡入 + 约 12–24px 位移 | JS 未运行时内容仍可见 |
| 3D idle | 极慢、有限幅度转动 | 用户拖动、失去可见性或 reduced motion 时停止 |
| Product scrollytelling | 一个短段落内从整体到局部，文字与视角对应 | 不 scroll hijack、不强制用户看完多屏动画 |
| Delivery flow | 清晰、可暂停的步骤切换 | 文字先可读，再考虑动画 |
| Hotspots | hover / focus / click 可访问的说明 | mobile 点击可用，不依赖 hover |
| Accordion | 简短展开动画，正确的展开状态 | 支持键盘，内容不被动画截断 |

`prefers-reduced-motion` 下使用静态状态或即时切换，停用自动旋转、视差与非必要滚动动画。首版最多一个主要 3D canvas；不要让每个 section 都启动独立渲染循环。

## 8. 素材制作与命名要求

**工作流：真实 SolidWorks CAD → 几何整理 / 导出 → Blender 或 WebGL 材质灯光 → 产品渲染与 GLB → 必要的 AI 环境合成 → 网站。**

真实 CAD 决定机器人轮廓、部件、尺寸比例。AI 补环境、氛围和生活叙事；合成后必须检查机器人有无变形或新增部件。

### 推荐资产清单

| 建议文件名 | 作用 | 来源要求 |
| --- | --- | --- |
| `robot-hero.webp` | 首屏三分之四视角 | 真实 CAD 产品渲染 |
| `robot-poster.webp` | 3D 加载中、失败或静态模式 | 与 GLB 同一产品版本 |
| `robot.glb` | 交互模型 | 真实 CAD，优化后的公开展示模型 |
| `robot-detail-compartment.webp` | 食物舱特写 | 真实 CAD；结构必须存在 |
| `robot-detail-interface.webp` | 前面交互细节 | 真实 CAD；结构必须存在 |
| `dorm-hallway-concept.webp` | 使用环境 | AI 概念图可用，标明来源性质 |
| `student-life-concept.webp` | 学生日常 | AI 概念图可用，不充当真实用户证言 |
| `team.webp` | 团队介绍 | 真实照片，或发布时省略 |

以上是目标清单，不意味着素材已经存在。保存资产来源、产品版本、真实或概念分类及可用裁切信息，以便复用。

### 渲染风格

- 主视角用中性或微暖 studio 光；轮廓清楚，材质自然。
- 保持 CAD 的实际几何；材质可以精细化，不擅自改机器人造型。
- 柔和接触阴影，让产品有重量，不悬浮在背景上。
- 同一材质、轮子、屏幕、舱体与产品版本贯穿所有页面。
- 特写可用深灰背景、精确轮廓光；不过曝、不做夸张霓虹效果。
- 若未确定量产材料或配色，写 `Design visualization`，不把效果图当成实物照片。
- 不用文字生成的 logo、团队合影、testimonial 或测试成绩来填内容。

### 模型准备

去掉展示不需要的内部零件、隐藏几何与过细的螺纹；保留外观关键结构。清理材质、法线、单位与坐标，设定稳定原点。不要直接把未经整理的巨大 CAD 装配体放入网页。

## 9. 前端实施要求

沿用已有项目的框架和目录结构。若从零开始，可采用 React、TypeScript 和现有项目支持的样式系统；交互模型可以用 Three.js / React Three Fiber 或适合能力范围的模型查看组件。技术选择服务于视觉与稳定性，不为首版引入大型平台。

建议组件划分：`SiteHeader`、`Hero`、`DeliveryFlow`、`RobotViewer`、`DormLife`、`OurStory`、`DevelopmentUpdates`、`FAQ`、`UpdatesCTA`、`SiteFooter`。这是职责划分，不要求逐个创建文件。

文案、团队内容、进展、FAQ、模型热点与素材配置应集中维护，便于替换真实信息；不要在多个组件里重复硬编码同一个项目状态。

### Responsive 与 accessibility

- 在 360–430px 手机宽度、768px 平板与 1280–1440px 桌面检查。
- 避免横向溢出，图片与模型留有稳定尺寸，减少布局跳动。
- 触控目标建议不小于 44px；所有互动具有可见 focus。
- 使用语义标题层级、明确按钮名称、表单 label、合理 alt 文本。
- 导航和内容能用键盘操作；模型拖动不阻碍整页滚动。
- 3D 展示、交互动画和图片之外，关键产品信息都有可访问文本。
- 关键文本满足实际颜色背景下的可读性与对比度要求。

### 性能与错误状态

- 首屏优先加载 product poster 与文案；3D 延后或接近 viewport 再加载。
- 图片使用适合的尺寸与现代格式，明确 width / height 或 aspect-ratio。
- 首版参考预算：hero 图约 200–500KB；交互 GLB 尽量控制在 5MB 内。预算是目标，不是强行牺牲产品轮廓的硬限制。
- 弱设备优先 static poster 或点击后加载 3D；不把手机统一判定为无法交互。
- 3D loading / error 都保留完整产品介绍；表单 failure 不丢用户输入。
- 内容离开屏幕时停止不必要渲染；不要用长 loading animation 隐藏性能问题。
- 以移动网络下首屏可用性为验收重点，记录实际加载表现，不编造性能成绩。

## 10. Worker agent 的执行顺序

1. 阅读本文件，确认已有项目结构与可用资产；梳理事实、目标、概念和缺失信息。
2. 建立统一 tokens、排版、导航和六段单页结构，用可读的英文文案先完成产品 overview。
3. 优先打磨 Hero 的布局与真实产品素材；缺失素材明确标识。
4. 完成三步流程的静态状态与可操作切换，再加克制动画。
5. 接入真实模型及 poster / error fallback；模型未到位时先保留同一舞台结构。
6. 加入 Dorm life、真实团队内容与已核实的 development updates。
7. 连接有实际目标的 CTA；所有缺失内容显式记录，订阅不做虚假成功。
8. 完成手机适配、键盘与 reduced motion 检查，再微调光照与动效。
9. 给出可审阅预览，并列出发布前需要团队提供的少量关键信息。

本文件授权的是设计与实施参考，不自动授权部署上线、启用外部数据收集或声称官方合作；这些动作按用户当前任务的明确范围执行。

## 11. 首版验收 checklist

- [ ] 不读后续 section，第一屏已经说明 dorm food delivery 与开发阶段。
- [ ] 快速浏览可理解 lobby → floor → collection 的计划体验。
- [ ] 产品视觉与 CAD 一致；不同素材不出现不同款机器人。
- [ ] 页面以黑白暖灰为主，有科技产品质感，也有校园生活的亲和力。
- [ ] Built by students. For students. 是清晰叙事，有真实内容支持。
- [ ] 没有未经证实的性能、订单、用户评价、试点、投资或学校背书。
- [ ] 概念图与 planned experience 的标注清楚且不过度干扰排版。
- [ ] 所有按钮有正确目标；没有假订阅成功、死链接或空白页面。
- [ ] 手机布局、图像裁切、3D fallback 和失败状态可用。
- [ ] 键盘、focus、触控、reduced motion 与普通页面滚动正常。
- [ ] 首页没有被技术参数或融资材料挤占；评审能获得完整产品 overview。
- [ ] 发布前移除所有待确认占位，或省略无法真实填充的对应内容。

## 12. 可直接粘贴给 worker agent 的任务说明

> 根据本 reference 实现 507-AD 的英文单页官网。方向是精致、亲切、可信、带适量未来感的宿舍外卖配送产品网站；主要用于让 Venture Lab 理解学生团队的项目并支持 funding 申请。首页突出 “Your food. Your floor.” 与 “Built by students. For students.”，不要额外添加融资 pitch 内容。优先完成 Hero、How it works 和真实 CAD 的产品展示，再补校园生活、团队、进展和更新入口。产品还在开发：计划体验与已完成能力要分清，AI 场景需要概念标注，所有团队资料与测试事实必须真实。沿用已有项目框架，完成响应式、可访问性、克制动效与模型静态 fallback。缺少素材时继续完成可审阅预览，明确记录缺项；不要编造素材来源、成员、功能完成度或订阅结果。交付预览和发布前待补清单。
