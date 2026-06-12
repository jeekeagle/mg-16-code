import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// 《管理者的十六字心法》侧栏：按五编组织
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: '引言',
      collapsed: false,
      items: ['01-intro/intro'],
    },
    {
      type: 'category',
      label: '第一编 · 起点：人心不可靠',
      collapsed: false,
      items: [
        '02-part-one/01-chapter-1',
        '02-part-one/02-chapter-2',
        '02-part-one/03-chapter-3',
        '02-part-one/04-chapter-4',
      ],
    },
    {
      type: 'category',
      label: '第二编 · 文化管理的失灵',
      collapsed: false,
      items: [
        '03-part-two/05-chapter-5',
        '03-part-two/06-chapter-6',
        '03-part-two/07-chapter-7',
      ],
    },
    {
      type: 'category',
      label: '第三编 · 制度管理的失灵',
      collapsed: false,
      items: [
        '04-part-three/08-chapter-8',
        '04-part-three/09-chapter-9',
        '04-part-three/10-chapter-10',
      ],
    },
    {
      type: 'category',
      label: '第四编 · 礼法再合',
      collapsed: false,
      items: [
        '05-part-four/11-chapter-11',
        '05-part-four/12-chapter-12',
        '05-part-four/13-chapter-13',
        '05-part-four/14-chapter-14',
      ],
    },
    {
      type: 'category',
      label: '第五编 · 十六字心法',
      collapsed: false,
      items: [
        '06-part-five/15-chapter-15',
        '06-part-five/16-chapter-16',
        '06-part-five/17-chapter-17',
        '06-part-five/18-chapter-18',
        '06-part-five/19-chapter-19',
        '06-part-five/20-extras',
        '06-part-five/21-postscript',
      ],
    },
  ],
};

export default sidebars;
