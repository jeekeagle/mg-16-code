# 管理者的十六字心法

> 人心惟危，道心惟微；惟精惟一，允执厥中。

一本书用三千年中国制度史照见今天的管理困境。本站是该书的在线阅读版，基于 [Docusaurus](https://docusaurus.io/) 构建，部署在 GitHub Pages。

**在线阅读**：[https://jeekeagle.github.io/mg-16-code/](https://jeekeagle.github.io/mg-16-code/)

## 全书结构

| 编 | 标题 | 章节 |
|---|---|---|
| 引言 | 管理者的两难 | — |
| 第一编 | 起点：人心不可靠 | 第 1-4 章 |
| 第二编 | 文化管理的失灵 | 第 5-7 章 |
| 第三编 | 制度管理的失灵 | 第 8-10 章 |
| 第四编 | 礼法再合 | 第 11-14 章 |
| 第五编 | 十六字心法 | 第 15-19 章 + 番外 + 后记 |

共 19 章 + 番外（智能时代）+ 后记，按五编组织。

## 本地运行

要求：Node.js >= 18。

```bash
npm install
npm start          # 开发服务器：http://localhost:3000
npm run build      # 生产构建（输出到 build/）
npm run serve      # 预览生产版本
```

## 目录结构

```
startup/
├── docusaurus.config.ts       站点配置（title/navbar/footer）
├── sidebars.ts                五编侧栏分类
├── docs/
│   ├── 01-intro/              引言
│   ├── 02-part-one/           第一编（1-4 章）
│   ├── 03-part-two/           第二编（5-7 章）
│   ├── 04-part-three/         第三编（8-10 章）
│   ├── 05-part-four/          第四编（11-14 章）
│   └── 06-part-five/          第五编（15-19 + 番外 + 后记）
├── src/
│   ├── pages/index.tsx        首页（Hero + 十六字 + 五编 + 引文）
│   ├── pages/index.module.css 首页样式
│   └── css/custom.css         主题色：深蓝 + 暗金
├── static/
│   ├── img/logo.svg           「心」字朱砂红
│   ├── img/favicon.svg        浏览器图标
│   └── llms.txt               LLM 入口索引
└── .github/workflows/deploy.yml  GitHub Pages 自动部署
```

## 部署

每次 push 到 `main` 分支，GitHub Actions 自动 build 并部署到 `gh-pages`。

仓库：[github.com/jeekeagle/mg-16-code](https://github.com/jeekeagle/mg-16-code)

## 许可

书稿正文版权归属作者。本仓库代码基于 Docusaurus（MIT License）。
