# 启动包 — Docusaurus 文档站空白模板

这是一个**空白启动包**。所有具体内容（文档正文、配色、安装命令、Features 列表、Hero 文案）都已清空/置占位，拿到后跑 `npm install && npm start` 就能直接启动，再按下方清单填你自己的内容即可。

---

## 快速开始

要求：Node.js >= 18。

```bash
# 1. 安装依赖（约 1-2 分钟）
npm install

# 2. 启动开发服务器（默认 http://localhost:3000）
npm start

# 3. 构建生产版本（输出到 build/）
npm run build

# 4. 本地预览生产版本
npm run serve
```

启动后你会看到：
- 6 大类侧栏（多数为空，等你填）
- 首页有 Hero、Install Tabs、Features 网格（空）、Highlights 列表（空）、LLM 入口
- 所有 `<!-- TODO -->` 注释标记了要填的位置

---

## 你需要改的文件清单

按优先级从高到低：

### 1. `docusaurus.config.ts` — 站点基础信息

替换占位：

| 占位 | 替换为 |
|---|---|
| `title: 'My Docs'` | 你的站点名 |
| `tagline: 'Tagline goes here'` | 一句话简介 |
| `url: 'https://your-domain.example.com'` | 生产 URL（如 `https://yourname.github.io`） |
| `baseUrl: '/'` | 子路径（部署到 `https://yourname.github.io/my-repo/` 改成 `'/my-repo/'`） |
| `organizationName: 'your-github-org'` | 你的 GitHub 用户名/组织 |
| `projectName: 'your-repo-name'` | 你的仓库名 |
| `editUrl: 'https://github.com/your-org/your-repo/edit/main/'` | 「编辑此页」按钮指向的 URL |
| Footer `copyright` 和 `links` | 你的版权和链接 |
| Navbar `items` 里的 GitHub 链接 | 替换成你的仓库 |

### 2. `src/css/custom.css` — 主题色

Docusaurus 默认是 Infima 的绿松石色。改成你的品牌色：

```css
:root {
  --ifm-color-primary: #YOUR_LIGHT_PRIMARY;
  /* ... 7 个色阶 */
}
[data-theme='dark'] {
  --ifm-color-primary: #YOUR_DARK_PRIMARY;
  /* ... 7 个色阶 */
}
```

按钮、链接、卡片 hover 边框等会自动跟随 `--ifm-color-primary` 变化。

辅助工具：<https://docusaurus.io/docs/styling-layout#theme-color-generation>

### 3. `static/img/logo.svg` — 站点 Logo

把 SVG 内容替换成你的 logo。要支持亮/暗双主题，加 `srcDark: 'img/logo-dark.svg'` 到 `docusaurus.config.ts` 的 navbar.logo。

### 4. `static/img/favicon.ico` — 浏览器标签图标

放你的 `.ico` 或 `.png` 到此路径。

### 5. `src/pages/index.tsx` — 首页

需要改的位置（文件里有 `// TODO` 注释）：

| TODO 位置 | 填什么 |
|---|---|
| `<p className={styles.lead}>` 内 | 1-2 句项目描述 |
| 安装 Tabs 三个 code 块 | 三个平台的真实安装命令 |
| `FEATURES` 数组 | 卡片网格（emoji + 标题 + 描述 + 跳转路径） |
| `HIGHLIGHTS` 数组 | 详细亮点列表（标题 + 描述） |

### 6. `docs/**/*.md` — 文档

每个 `.md` 都有 frontmatter（id、title、sidebar_label、sidebar_position）和一段 `<!-- TODO -->` 提示。

文件结构：

```
docs/
├── getting-started/   ← installation, quickstart, learning-path
├── user-guide/        ← configuration, messaging, tools, memory, ...
├── voice/             ← voice-mode, voice-with-hermes
├── integrations/      ← mcp, mcp-with-hermes
├── guides/            ← tips
├── developer/         ← architecture
└── reference/         ← faq
```

新增文档：在对应目录创建 `.md`，在 `sidebars.ts` 里引用它的 id。

### 7. `sidebars.ts` — 侧栏分类

当前有 6 大类（Getting Started / User Guide / Integrations / Guides & Tutorials / Developer / Reference）。改类名、加类、删类、改顺序都直接编辑此文件。

### 8. `static/llms.txt` — LLM 入口

`llms.txt` 是给 LLM Agent 消费的索引文件。填成你的文档 URL 列表。规范见 <https://llmstxt.org/>。

---

## 部署到 GitHub Pages

最快的方式是用 GitHub Actions。

### 步骤

1. **创建 GitHub 仓库**（用你的 `your-org/your-repo`）

2. **改 `docusaurus.config.ts`**：把 `url` 设为 `https://<user>.github.io`，`baseUrl` 设为 `/<repo>/`

3. **创建 `.github/workflows/deploy.yml`**：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. **GitHub 仓库 → Settings → Pages → Source 选 GitHub Actions**

5. **首次推送**：

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/your-org/your-repo.git
git push -u origin main
```

之后每次 `git push` 自动部署。

---

## 常用自定义

| 想要 | 改哪里 |
|---|---|
| 加搜索 | `npm i @easyops-cn/docusaurus-search-local`，在 config 的 themes 数组注册 |
| 加多语言 | config.i18n.locales 加语言；`npx docusaurus write-translations --locale zh-Hans` 翻译 |
| 加博客 | config.presets[0][1] 里把 `blog: false` 改 `true` |
| 改字体 | `src/css/custom.css` 里 `@import` Google Fonts，修改 `--ifm-font-family-base` |
| 改站点 favicon | 替换 `static/img/favicon.ico` |

---

## 目录结构

```
startup/
├── docusaurus.config.ts       站点配置（title/navbar/footer/locales）
├── sidebars.ts                侧栏分类
├── package.json               依赖和脚本
├── tsconfig.json              TypeScript 配置
├── docs/                      文档 markdown 文件
│   ├── getting-started/       3 个 .md
│   ├── user-guide/            8 个 .md
│   ├── voice/                 2 个 .md
│   ├── integrations/          2 个 .md
│   ├── guides/                1 个 .md
│   ├── developer/             1 个 .md
│   └── reference/             1 个 .md
├── src/
│   ├── pages/
│   │   ├── index.tsx          首页（Hero + Features + Highlights）
│   │   └── index.module.css   首页样式
│   └── css/
│       └── custom.css         主题变量覆盖
├── static/
│   ├── img/
│   │   ├── logo.svg           站点 logo（SVG）
│   │   └── favicon.ico        浏览器图标（待你添加）
│   └── llms.txt               LLM 入口文件
└── README.md                  本文件
```

---

## 故障排除

- **`npm start` 报端口占用**：`npm start -- --port 3001`
- **改文件没自动刷新**：手动 Ctrl+C 重启 dev server
- **构建报 broken link 错误**：检查 `docs/` 里所有被 `sidebars.ts` 引用的文件 id 是否存在
- **CSS 修改不生效**：清浏览器缓存，dev server 偶尔有 HMR bug，重启即可
- **`mdx-loader` 错误**（dev server 突然挂掉）：Docusaurus 3.10 + Node 24 + Windows 的已知 HMR bug，重启 `npm start` 即可，不影响生产构建

---

## 许可

本启动包基于 [Docusaurus](https://docusaurus.io/)（MIT License）。你可以自由使用、修改、分发。
