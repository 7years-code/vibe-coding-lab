# 知蕴 · 前端工程（frontend）

> 中华传统文化学习平台「知蕴」的前端部分 —— React + Vite
> 本文件是**运行说明**：照它敲命令，就能在本地把网站跑起来。

---

## 一、环境要求

| 项目 | 要求 | 检查命令 |
|------|------|---------|
| Node.js | 18 或更高（本项目用 v22 开发） | `node --version` |
| npm | 随 Node 一起安装 | `npm --version` |

---

## 二、快速开始（三条命令）

```bash
# 1) 进入前端目录
cd frontend

# 2) 安装依赖（第一次运行、或依赖有变化时执行）
npm install

# 3) 启动本地开发服务器
npm run dev
```

启动成功后，终端会显示一行：

```
➜  Local:   http://localhost:5173/
```

**在浏览器打开 `http://localhost:5173` 即可看到网站。**

> 停止服务器：在终端按 `Ctrl + C`。

---

## 三、其它命令

| 命令 | 作用 |
|------|------|
| `npm run dev` | 启动本地开发服务器（改代码自动刷新） |
| `npm run build` | 打包成静态文件，产物在 `dist/`（部署时用这个） |
| `npm run preview` | 本地预览打包后的产物 |

---

## 四、目录结构

```
frontend/
├── index.html              # 页面外壳（浏览器加载的入口）
├── package.json            # 依赖与脚本
├── vite.config.js          # Vite 配置（端口 5173）
└── src/
    ├── main.jsx            # 应用入口
    ├── App.jsx             # 路由容器 + 全局语言状态
    ├── styles.css          # 全站样式（古风设计变量都在这）
    ├── i18n/
    │   └── index.js        # 全站界面文案（中英成对）
    ├── data/               # 本地数据（将来换成后端接口）
    │   ├── categories.js   #   九大类
    │   ├── subitems.js     #   细分项
    │   └── festivals.js    #   节日详情内容
    └── pages/
        ├── Home.jsx        # 首页：欢迎词 + 九大类卡片（滚动滑出）
        ├── Category.jsx    # 九大类目页：描述 + 细分项
        ├── Detail.jsx      # 小类页：节日详情（十项内容）
        └── ComingSoon.jsx  # 「内容建设中」占位页
```

---

## 五、页面路由一览

| 网址 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 欢迎词 + 滚动滑出九大类 |
| `/category/:slug` | 九大类目页 | 例如 `/category/festivals`（民俗节庆） |
| `/festival/:slug` | 小类页 | 例如 `/festival/mid-autumn`（中秋） |
| `/coming-soon/:slug` | 占位页 | 其余八类细分项点进来的「内容建设中」 |

四类网址的对应关系见 `PRD.md` 第 4.4 节。

---

## 六、常见问题

**Q1：页面打不开 / 一片空白？**
先确认开发服务器还在运行（终端没被关闭、也没按 Ctrl+C）。重新启动：

```bash
cd frontend
npm run dev
```

**Q2：`npm install` 报缓存相关的错（safe-delete / trash 操作失败）？**
说明 npm 缓存目录不可写。把缓存放到一个可写位置：

```bash
npm config set cache "C:\Users\liuzhouqi\.workbuddy\binaries\node\.npm-cache"
```

**Q3：端口 5173 被占用？**
改 `vite.config.js` 里的 `server.port`，或直接看终端提示的备用端口。

**Q4：新增依赖后服务器崩了？**
Vite 重优化依赖时要清理自己的缓存目录；若被系统的安全删除策略拦截，手动清掉再重启：

```bash
rm -rf node_modules/.vite/deps node_modules/.vite/deps_temp_*
npm run dev
```

---

## 七、相关文档

| 文档 | 位置 | 内容 |
|------|------|------|
| 项目规则 | `../AGENTS.md` | 协作方式与约定 |
| 需求研究 | `../research.md` | 标杆产品对比与结论 |
| 产品需求 | `../PRD.md` | 做什么、验收标准 |
| 技术设计 | `../TECH_DESIGN.md` | 技术路线、数据模型、接口 |

---

## 八、当前进度与待办

- ✅ 首页（欢迎词 + 九大类卡片 + 滚动滑出）
- ✅ 九大类目页（描述 + 细分项）
- ✅ 中秋小类页（九项内容，中英双语）
- ✅ 中英语言切换
- ⏳ 其余 7 个节日的内容（目前显示"持续补充中"）
- ⏳ 主题照片素材（目前是文字占位）
- ⏳ 接入 CloudBase 云函数与 PostgreSQL（当前用的是 `src/data/` 本地数据）
