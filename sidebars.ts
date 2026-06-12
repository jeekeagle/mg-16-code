import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// 《管理者的十六字心法》侧栏：按五编组织
// 注意：Docusaurus 默认从文件名生成 id，会自动去掉前导数字
// 例如 docs/02-part-one/01-chapter-1.md → id 为 "part-one/chapter-1"
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: '引言',
      collapsed: false,
      items: ['intro/intro'],
    },
    {
      type: 'category',
      label: '第一编 · 起点：人心不可靠',
      collapsed: false,
      items: [
        'part-one/chapter-1',
        'part-one/chapter-2',
        'part-one/chapter-3',
        'part-one/chapter-4',
      ],
    },
    {
      type: 'category',
      label: '第二编 · 文化管理的失灵',
      collapsed: false,
      items: [
        'part-two/chapter-5',
        'part-two/chapter-6',
        'part-two/chapter-7',
      ],
    },
    {
      type: 'category',
      label: '第三编 · 制度管理的失灵',
      collapsed: false,
      items: [
        'part-three/chapter-8',
        'part-three/chapter-9',
        'part-three/chapter-10',
      ],
    },
    {
      type: 'category',
      label: '第四编 · 礼法再合',
      collapsed: false,
      items: [
        'part-four/chapter-11',
        'part-four/chapter-12',
        'part-four/chapter-13',
        'part-four/chapter-14',
      ],
    },
    {
      type: 'category',
      label: '第五编 · 十六字心法',
      collapsed: false,
      items: [
        'part-five/chapter-15',
        'part-five/chapter-16',
        'part-five/chapter-17',
        'part-five/chapter-18',
        'part-five/chapter-19',
        'part-five/extras',
        'part-five/postscript',
      ],
    },
  ],
};

export default sidebars;
