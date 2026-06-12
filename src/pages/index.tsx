import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// === Hero ===
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.eyebrow}>中国制度史 · 三千年试错 · 一本书说透</div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          人心惟危，道心惟微；惟精惟一，允执厥中
        </p>
        <p className={styles.lead}>
          从周武王牧野之战的恐惧，到汉武帝独尊儒术的从容；
          从商君之法的崩塌，到 KPI 驱动下的组织溃散——
          三千年制度史的试错链，落到今天的管理桌上，是这十六个字。
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro/intro" className={styles.ctaPrimary}>
            从引言开始读 →
          </Link>
          <Link to="/part-five/chapter-19" className={styles.ctaSecondary}>
            直接看十六字心法
          </Link>
        </div>
      </div>
    </header>
  );
}

// === 十六字卡片（4 × 4） ===
const SIXTEEN = [
  { char: '人', label: '人心', desc: '不可预期' },
  { char: '心', label: '不可', desc: '完全信任' },
  { char: '惟', label: '只能', desc: '建网兜住' },
  { char: '危', label: '危', desc: '因变量，非恒量' },

  { char: '道', label: '道心', desc: '细微难察' },
  { char: '心', label: '规律', desc: '藏在细节里' },
  { char: '惟', label: '从教训', desc: '提炼规律' },
  { char: '微', label: '微', desc: '细到不能忽视' },

  { char: '惟', label: '惟', desc: '精准' },
  { char: '精', label: '精准', desc: '判断方向' },
  { char: '惟', label: '惟一', desc: '所有动作' },
  { char: '一', label: '一', desc: '指向同一方向' },

  { char: '允', label: '允', desc: '诚然、确实' },
  { char: '执', label: '执', desc: '坚持' },
  { char: '厥', label: '厥', desc: '其' },
  { char: '中', label: '中', desc: '动态校准的中' },
];

function SixteenGrid() {
  return (
    <section className={styles.sixteenSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          十六字 · 四道关
        </Heading>
        <p className={styles.sectionLead}>
          每一句对应一个判断，每一个判断对应一种管理智慧。
        </p>
        <div className={styles.sixteenGrid}>
          {SIXTEEN.map((s, i) => (
            <div key={i} className={styles.sixteenCell}>
              <div className={styles.sixteenChar}>{s.char}</div>
              <div className={styles.sixteenLabel}>{s.label}</div>
              <div className={styles.sixteenDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 五编结构 ===
const PARTS = [
  {
    label: '第一编',
    title: '起点：人心不可靠',
    chapters: '第一章 ~ 第四章',
    to: '/part-one/chapter-1',
    desc: '周公从牧野之战看到人心不可靠，编了一张叫礼制的网。',
  },
  {
    label: '第二编',
    title: '文化管理的失灵',
    chapters: '第五章 ~ 第七章',
    to: '/part-two/chapter-5',
    desc: '礼制僵化、脱离现实。文化变口号，人心变表演。',
  },
  {
    label: '第三编',
    title: '制度管理的失灵',
    chapters: '第八章 ~ 第十章',
    to: '/part-three/chapter-8',
    desc: '秦亡五因、KPI 溃散。只靠法统，撑不住。',
  },
  {
    label: '第四编',
    title: '礼法再合',
    chapters: '第十一章 ~ 第十四章',
    to: '/part-four/chapter-11',
    desc: '秦塑形，汉塑魂。文化与制度指向同一个方向。',
  },
  {
    label: '第五编',
    title: '十六字心法',
    chapters: '第十五章 ~ 第十九章',
    to: '/part-five/chapter-15',
    desc: '为什么只走一条路必死。动态校准——允执厥中怎么做。',
  },
];

function PartsGrid() {
  return (
    <section className={styles.partsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          五编结构
        </Heading>
        <p className={styles.sectionLead}>
          全书十九章，按"起、承、破、合、收"五编组织。
        </p>
        <div className={styles.partsGrid}>
          {PARTS.map((p) => (
            <Link key={p.label} to={p.to} className={styles.partCard}>
              <div className={styles.partLabel}>{p.label}</div>
              <h3 className={styles.partTitle}>{p.title}</h3>
              <div className={styles.partChapters}>{p.chapters}</div>
              <p className={styles.partDesc}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 全书引文 ===
function QuoteBlock() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p>
            "周公没有沉浸在胜利里。他们从牧野的战场上看到了一个比商纣更可怕的东西：
            人心的不可靠。今天倒戈的是商军，明天会不会倒戈的是自己的军队？"
          </p>
          <cite>—— 第一章《人心不可靠》</cite>
        </blockquote>
        <blockquote className={styles.quote}>
          <p>
            "三千年试错，试出的不是'礼法并举'四个字——那只是结论。
            试出的是一套方法：看到偏移，然后调回来。"
          </p>
          <cite>—— 后记</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <SixteenGrid />
        <PartsGrid />
        <QuoteBlock />
      </main>
    </Layout>
  );
}
