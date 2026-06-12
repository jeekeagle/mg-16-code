import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '管理学的十六字心法',
  tagline: '管理之道，十六字以概之',
  favicon: 'img/favicon.ico',

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
    image: 'img/social-card.png',
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: '管理学的十六字心法',
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: '文档' },
        { href: 'https://github.com/jeekeagle/mg-16-code', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [{ title: '文档', items: [{ label: '快速开始', to: '/getting-started/quickstart' }] }],
      copyright: `Copyright © ${new Date().getFullYear()} jeekeagle. Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
