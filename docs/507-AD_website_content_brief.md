# 507-AD 网站内容与项目事实参考

版本日期：2026 年 10 月 9 日  
用途：供网站 worker agent 直接使用的内容与需求文档  
依据：Ben 提供的项目说明，以及本轮已确认的网站方向

本文整理 507-AD 的产品定位、配送流程、开发阶段、首个里程碑、团队故事和网站联系入口。中文内容用于解释事实与实现要求，英文文案是面向网站的建议稿，可在不改变事实的前提下调整。

图片、CAD、3D 资产和视频均由 Ben 后续提供；当前全部保留 placeholder。本文不要求生成这些素材，也不要求现在实现或发布网站。

## 1 项目定位与网站目标

507-AD 是一个由学生发起的宿舍自动送餐机器人项目，目标是把外卖从宿舍外卖交接点送到学生房门口，减少学生在学习、做项目或其他事情进行到一半时被打断的时间。

网站近期用于向 Venture Lab 展示项目，并帮助其他访问者快速了解产品、团队与下一步计划。整体仍以产品体验为主，不需要堆砌投资人话术、融资数据或商业预测。

核心表达：**Built by students. For students.**

访问者看完网站后应理解：

- 507-AD 做的是从宿舍入口到房门口的自动配送。
- 这件事来自团队自身在 Lauder College House 的生活体验。
- 项目仍处于开发阶段，下一目标是获得 funding 后构建首个 MVP，跑通完整配送流程。
- 可以预约会议、直接联系团队，或表达加入团队的兴趣。

已确认的视觉方向：简洁、亲切、有产品质感，带适度科技感；以黑白、暖白和灰色为主，可用少量低饱和科技蓝点缀。产品展示应建立在真实 CAD 上，环境与生活场景可以后续用 AI 辅助制作。

## 2 配送流程

以下是目标体验，不能直接当作已经在真实宿舍验证完成的功能描述。

| 步骤 | 已提供的流程事实 | 网站表达要点 |
|---|---|---|
| 1 外卖交接 | 外卖员在宿舍门口的栅栏外，机器人在栅栏内。外卖员直接把外卖放入机器人内。 | 交接发生在入口，外卖员无需承担宿舍内的最后一段配送。具体开舱、订单关联方式尚未提供。 |
| 2 到达电梯 | 机器人自行导航到电梯。 | 展示入口到电梯的室内路线，突出用户无需下楼取餐。 |
| 3 操作电梯 | 机器人自行按电梯，并前往对应楼层。 | 电梯操作是目标流程的一部分；不要假设所有电梯都已兼容。 |
| 4 到达房门 | 机器人到达对应楼层后，继续导航并停在学生房门口。 | 明确目的地是房门口，而非楼层公共区。 |
| 5 用户取餐 | 机器人在房门口等待学生出来取餐。软件提供位置共享和用户通知。 | 学生走到房门口取餐；通知渠道、取餐验证方式和等待超时规则尚未提供。 |

### 首页三步流程的建议压缩

| 网站步骤 | 英文建议文案 |
|---|---|
| Drop off | Your courier places the order into the robot at the dorm entrance. |
| Head upstairs | The robot navigates to the elevator, presses the buttons, and travels to your floor. |
| Pick up at your door | Follow its location, get notified, and step outside your room to collect your food. |

流程区域使用可见的 **Planned delivery experience** 标注。可以用 UI 动画解释目标流程，避免把动画包装成真实测试录像。

## 3 当前开发阶段

Ben 提供的进度是：正在做硬件，硬件整体接近完成。项目涉及导航、避障、自主按电梯、定位，以及通过软件共享位置和通知用户。

这里需要保留一个关键区别：这些能力属于项目功能范围，但目前没有逐项说明它们是否已经实现、完成集成，或在宿舍实测通过。网站不能把功能列表自动改写成已验证的产品成绩。

| 项目内容 | 当前可以使用的状态表达 |
|---|---|
| 硬件 | 正在开发，整体接近完成；这是团队提供的阶段说明。 |
| 导航与定位 | 属于项目功能范围，具体实现与验证进度待补。 |
| 避障 | 属于项目功能范围，具体实现与验证进度待补。 |
| 自主按电梯 | 属于项目功能范围，具体实现与验证进度待补。 |
| 软件位置共享 | 属于项目功能范围，具体实现与验证进度待补。 |
| 用户通知 | 属于项目功能范围，具体实现与验证进度待补。 |
| 完整配送 | 是首个 MVP 要跑通的目标，尚未提供已完成的实测证据。 |

网站默认状态标签：**In development**。

保守且准确的英文状态文案：

> We’re developing the hardware for our first prototype. Our next milestone is an end-to-end delivery at Lauder College House, from the entrance handoff point to a student’s room.

在单独的进展区域，如果需要更具体，可以写：

> Hardware development is nearing completion. We’re seeking funding to build our first MVP and bring the full delivery workflow together.

以上为截至本文日期的团队说明，发布前应由 Ben 更新实际阶段。不要添加未经提供的完成百分比、测试次数、可靠性、配送时长、订单量或确定上线日期。

## 4 第一阶段计划

**Funding → 首个 MVP → Lauder College House 完整流程验证。**

拿到 funding 后，团队计划制造第一个 MVP，并在 Lauder College House 内跑通从外卖交接点到学生房门口的流程。

首个里程碑可以在网站中表达为：

> Our first milestone: a complete delivery at Lauder College House, from the entrance to the room.

里程碑涵盖外卖装入、导航到电梯、电梯操作、到达目标楼层、导航到房门、位置共享与用户通知，以及学生取餐这一完整体验。

计划测试地点不等同于已获宿舍管理方批准，也不等同于已建立 Penn 或 Venture Lab 的官方合作。现阶段没有提供 funding 金额、到账时间、制造日期、测试日期或正式服务开放时间，不应自行补写。

## 5 团队信息

当前团队共两人：Ben Jiang 和 Timmy Ma。

| 成员 | 背景 | 项目分工 | 可用于简短介绍的经历 |
|---|---|---|---|
| Ben Jiang | Mechanical Engineering 与 CS 背景 | 参与硬件，并负责其他整体工作。网站可概括为硬件与项目整体开发。 | 曾在 GRASP、Galbot 工作或参与相关项目；有 Penn Electric Racing 经历。具体职位、任期与成果待补。 |
| Timmy Ma | Mechanical Engineering 背景 | 主要负责硬件 | Quakerbots 成员；曾在美国机器人比赛取得较高名次。赛事名称、年份、具体名次与个人角色待补。 |

### 网站团队卡片建议

**Ben Jiang**  
Mechanical Engineering & CS  
Hardware & overall development

> Ben works across the hardware and overall development of 507-AD, with experience at GRASP, Galbot, and Penn Electric Racing.

**Timmy Ma**  
Mechanical Engineering  
Hardware development

> Timmy leads the hardware work for 507-AD and is a member of Quakerbots.

Timmy 的比赛经历应保留在内部事实记录中。待补全赛事与名次后，可增加一句具体英文经历；不要自行写成全国冠军、获奖次数或某一赛事的奖项。

文案边界：Mechanical Engineering & CS 表达的是 Ben 提供的背景，不应改成未经确认的双学位或双专业。GRASP、Galbot、Penn Electric Racing 和 Quakerbots 只用于个人经历，不应放入暗示项目合作、背书或赞助的 logo wall。

团队素材占位：`[ASSET_BEN_PORTRAIT]`、`[ASSET_TIMMY_PORTRAIT]`、`[ASSET_TEAM_PHOTO]`。没有照片时可先使用文字卡片；不生成虚构成员照片。

## 6 创立故事

### 事实版本

Ben 和 Timmy 都喜欢点外卖。他们发现，外卖经常在自己正忙于某件事时送到，必须中断手头的事情、下楼取餐。在 Lauder College House，从房间到外卖交接点的动线较长，中间还要经过 courtyard，取餐过程耗时且打断节奏。

团队因此开始思考：能不能自己做一个机器人，把从入口到房间的这段路交给它完成？

学校食堂不太合口味是创立背景的一部分。公开网站建议重点写学生频繁点外卖和取餐打断工作这一体验。

### Our Story 英文建议稿

**Built by students. For students.**

> We started 507-AD because we kept running into the same interruption: food arriving just as we were in the middle of something.
>
> At Lauder College House, picking up an order means heading downstairs and making the trip through the courtyard to the entrance. We wanted a way to finish what we were doing while our food made the last part of the journey to us.
>
> So we began building a robot to bring delivery from the dorm entrance to the room.

这段故事不应扩写成已验证的市场需求。尚未提供学生访谈、问卷、报名人数或使用反馈，不添加虚构用户引语与评价。

## 7 网站内容结构与英文文案

下面是依据已确认方向整理的页面内容建议，不替代单独的前端设计规范。英文是建议稿，事实与状态限制优先。

| 页面区域 | 内容目标 | 建议文案或入口 | 素材占位 |
|---|---|---|---|
| Hero | 首屏说明做什么、为什么方便 | Your food. Your floor. / We’re building a robot to bring your food from the dorm entrance to your room. / In development | `[ASSET_HERO_ROBOT_RENDER]` |
| How it works | 说明入口到房门的目标体验 | Delivery, without the detour. / Planned delivery experience / 三步流程 | `[ASSET_DELIVERY_FLOW_VISUAL]` |
| Meet the Robot | 展示实际外形与设计目的 | Small robot. Big convenience. / Designed around the last part of dorm delivery. | `[ASSET_ROBOT_GLB]`、`[ASSET_ROBOT_POSTER]`、`[ASSET_ROBOT_DETAIL_RENDERS]` |
| Built for Dorm Life | 把产品放回学生生活语境 | Keep your evening moving. / Less interruption between what you’re doing and what you’re eating. | `[ASSET_DORM_LIFESTYLE]`、`[ASSET_DORM_ENVIRONMENT]` |
| Our Story 与 Team | 讲清问题来源与团队 | Built by students. For students. / 使用第 5 和第 6 节 | `[ASSET_TEAM_PHOTO]` 与两位成员照片 |
| Progress | 说明现在在哪、下一步做什么 | In development / First milestone: entrance-to-room delivery at Lauder College House | `[ASSET_HARDWARE_PROGRESS_PHOTOS]`、`[ASSET_REAL_TEST_VIDEO]` |
| Contact 与 Join | 让访问者联系或加入 | Book a meeting / Join the team / Email us | 不依赖媒体素材 |

建议导航入口：The Robot、How It Works、Our Story、Join Us；主按钮为 **Book a meeting**。

首屏可用 **See how it works** 作为次按钮，跳转到流程区域。网站不使用 Order Now；目前产品阶段与用户目标支持的是联系团队和加入团队。

Meet the Robot 中可展示三项功能方向：

- **Indoor navigation** — Navigating the route from the entrance to your room.
- **Elevator interaction** — Working toward autonomous elevator operation.
- **Location & notifications** — A planned software experience for tracking the robot and knowing when to collect your food.

这些卡片应与 In development 状态一起展示，不暗示功能已通过完整实测。外卖舱可作为设计展示点，但未提供恒温、密封、锁止或食品安全认证，不添加这些属性。

## 8 联系与招募入口

### 预约会议

用户明确希望访问者可以 book a meeting，方便潜在支持者、合作方和其他感兴趣的人 reach out。

建议按钮：**Book a meeting**。  
建议短文案：**Want to learn more about 507-AD? Let’s talk.**

配置占位：`[CONFIG_MEETING_BOOKING_URL]`。

未提供预约链接前，可在预览中保留清楚标注的占位；上线时必须接入真实预约方式。若届时只有已确认邮箱，可改为邮件约时间，不能链接到虚构日历或无效地址。

### 直接邮件联系

建议按钮：**Email us**。  
配置占位：`[CONFIG_CONTACT_EMAIL]`。

实际邮箱由 Ben 后续提供，不能依据姓名推测地址。

### 加入团队

用户明确说明团队正在招人，希望感兴趣的人能直接联系、留下 email，并可上传 resume。

建议标题：**Help build the next dormmate.**  
建议文案：

> We’re a two-person team building 507-AD. Interested in joining us? Tell us what you’d like to work on, or send us your resume.

建议入口：**Join the team**，进入或展开兴趣表单；同时保留 **Email us**。

| 表单字段 | 建议要求 | 说明 |
|---|---|---|
| Email | 必填 | 用户明确要求可以留下邮箱。 |
| Name | 选填 | 帮助团队后续联系。 |
| What would you like to work on? | 选填 | 允许自由描述兴趣；不把尚未确认的岗位当作正式招聘职位。 |
| Resume | 选填 | 支持上传简历，不让没有简历的人无法表达兴趣。 |
| Portfolio or project link | 选填 | 可作为补充材料；此字段是实现建议。 |

配置占位：`[CONFIG_JOIN_FORM_ENDPOINT]`、`[CONFIG_RESUME_UPLOAD_HANDLER]`。

表单收集、简历上传与预约都需要真实可用的接收方式。未接通时，预览必须明确说明尚未启用；只有收到成功响应才显示成功提示。不要让纯前端演示静默丢弃用户邮箱或简历。

具体岗位、人数、薪酬、每周投入、申请截止日期和接收渠道尚未提供，不应自行发布。

## 9 图片 3D 与视频占位表

所有媒体均待 Ben 后续提供。以下是内容槽位，不是已存在的文件或对最终交付文件名的要求。

| Placeholder | 资产用途 | 当前要求 |
|---|---|---|
| `[ASSET_HERO_ROBOT_RENDER]` | 首页主视觉 | 基于实际 CAD 的机器人静态渲染，外形与后续 3D 模型一致。 |
| `[ASSET_ROBOT_GLB]` | 交互式机器人展示 | 后续导出的 Web 3D 资产；当前保留容器和接入点。 |
| `[ASSET_ROBOT_POSTER]` | 3D 加载、移动端或不可用时的静态后备图 | 后续提供，不使用另一款机器人替代。 |
| `[ASSET_ROBOT_DETAIL_RENDERS]` | 舱体、屏幕或其他实际设计细节 | 以最终提供的真实几何结构为准。 |
| `[ASSET_DELIVERY_FLOW_VISUAL]` | 入口、电梯、楼层、房门的流程说明 | 可以先用前端示意；明确为 planned experience。 |
| `[ASSET_DORM_ENVIRONMENT]` | 宿舍入口、走廊、电梯等环境 | 可后续提供真实照片或 AI 场景；AI 场景不冒充 Lauder 实拍。 |
| `[ASSET_DORM_LIFESTYLE]` | 学生生活体验 | 后续提供；概念画面不作为已开展服务的证据。 |
| `[ASSET_BEN_PORTRAIT]` | Ben 团队卡片 | 后续提供真实照片。 |
| `[ASSET_TIMMY_PORTRAIT]` | Timmy 团队卡片 | 后续提供真实照片。 |
| `[ASSET_TEAM_PHOTO]` | 团队故事 | 后续提供真实团队照片。 |
| `[ASSET_HARDWARE_PROGRESS_PHOTOS]` | 硬件进展 | 后续提供真实 CAD、装配或 prototype 照片。 |
| `[ASSET_REAL_TEST_VIDEO]` | 将来实际测试展示 | 当前未提供；无需为第一版网站强行加入视频。 |

Placeholder 应预留合理尺寸和宽高比，避免后续替换导致布局跳动。未有资产时，使用简单中性占位，不补画虚构机器人、团队、测试现场或奖项。

可见的 Asset pending 标签仅用于开发预览。公开页面发布前，应替换对应资产，或暂时隐藏无法成立的媒体模块。AI 生成或合成的概念素材应有适当的概念标注。

## 10 后续补充清单与 worker agent 交付要求

这些信息暂未提供，可先保留配置与内容占位，不需要阻塞首版布局与文案工作。

| 待补项 | 用途 |
|---|---|
| 联系邮箱与会议预约链接 | 启用 Email us 和 Book a meeting。 |
| 招募表单与简历的接收方式 | 启用实际申请和上传。 |
| 图片、CAD、3D、视频 | 替换第 9 节媒体占位。 |
| 各软件功能的实现与测试状态 | 精确更新 Progress 和功能卡片。 |
| Timmy 比赛名称、年份、具体名次与角色 | 完善可核实的个人经历。 |
| 两人的正式介绍与希望使用的角色名称 | 完善团队卡片，当前使用本文的中性表达即可。 |
| Lauder 测试许可及实际时间安排 | 发布具体测试计划；当前只写计划测试地点。 |
| 用户下单关联、目的地设置、开舱与取餐流程 | 后续完善 How it works 和 FAQ。 |
| 安全、隐私、异常处理与电梯兼容范围 | 有实际方案后再补充简短 FAQ。 |

Worker agent 应保留本文确认的事实、联系目标和 placeholder，把计划体验与当前进度清楚区分。首页重点是让人理解入口到房门的产品体验，以及 Built by students. For students. 的真实来源。

验收时确认：流程目的地为房门口；团队只有两人；Lauder 是首个完整流程目标地点；状态为 In development；主要联系入口是 Book a meeting；有招募入口与邮件联系方式；所有缺失媒体和配置均可在后续替换；未出现虚构测试数据、合作背书、团队经历或可用性承诺。
