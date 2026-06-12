import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '管理者的十六字心法',
  tagline: '人心惟危，道心惟微；惟精惟一，允执厥中',
  favicon: 'img/favicon.svg',

  future: { v4: true },

  url: 'https://jeekeagle.github.io',
  baseUrl: '/mg-16-code/',

  organizationName: 'jeekeagle',
  projectName: 'mg-16-code',

  onBrokenLinks: 'throw',

  i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans'] },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jeekeagle/mg-16-code/edit/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true, defaultMode: 'light' },
    navbar: {
      title: '管理者的十六字心法',
      logo: { alt: '心', src: 'img/logo.svg' },
      items: [
        { to: '/', label: '首页', position: 'left' },
        { to: '/intro/intro', label: '开始阅读', position: 'left' },
        { to: '/part-five/chapter-19', label: '十六字心法', position: 'left' },
        { href: 'https://github.com/jeekeagle/mg-16-code', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '本书',
          items: [
            { label: '引言', to: '/intro/intro' },
            { label: '第一编 · 起点', to: '/part-one/chapter-1' },
            { label: '第五编 · 十六字心法', to: '/part-five/chapter-19' },
            { label: '后记', to: '/part-five/postscript' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'GitHub 仓库', href: 'https://github.com/jeekeagle/mg-16-code' },
            { label: '完整索引', to: '/llms.txt' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} jeekeagle · 人心惟危，道心惟微；惟精惟一，允执厥中`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
