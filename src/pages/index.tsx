import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <p className={styles.lead}>
          {/* TODO: 写一段 1-2 句的项目描述 */}
        </p>
        <div className={styles.ctaRow}>
          <Link to="/getting-started/quickstart" className={styles.ctaPrimary}>
            开始阅读 →
          </Link>
          <Link to="https://github.com/jeekeagle/mg-16-code" className={styles.ctaSecondary}>
            查看 GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function InstallSection() {
  return (
    <section className={styles.installSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>⚡ Install</Heading>
        <Tabs>
          <TabItem value="linux" label="Linux / macOS / WSL2" default>
            <pre className={styles.codeBlock}><code>{`# TODO: 替换为真实安装命令
curl -fsSL https://your-install-url | bash`}</code></pre>
          </TabItem>
          <TabItem value="windows" label="Windows">
            <pre className={styles.codeBlock}><code>{`# TODO: 替换为 PowerShell 安装命令
iwr https://your-install-url/install.ps1 -useb | iex`}</code></pre>
          </TabItem>
          <TabItem value="android" label="Android">
            <pre className={styles.codeBlock}><code>{`# TODO: 替换为 Termux 安装命令
pkg install your-pkg`}</code></pre>
          </TabItem>
        </Tabs>
      </div>
    </section>
  );
}

// TODO: 填入特性列表（emoji + 标题 + 描述 + 跳转路径）
const FEATURES: {emoji: string; title: string; desc: string; to: string}[] = [
  // {emoji: '🚀', title: '快速开始', desc: '一句话描述。', to: '/getting-started/quickstart'},
];

function FeatureGrid() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>✨ Features</Heading>
        <div className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <Link key={f.title} to={f.to} className={styles.featureCard}>
              <div className={styles.featureEmoji}>{f.emoji}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </Link>
          ))}
          {FEATURES.length === 0 && (
            <p style={{textAlign: 'center', opacity: 0.5, gridColumn: '1/-1'}}>
              {/* TODO: 编辑 src/pages/index.tsx 填入 FEATURES 数组 */}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// TODO: 填入详细亮点列表
const HIGHLIGHTS: {title: string; desc: string}[] = [
  // {title: '亮点一', desc: '描述。'},
];

function HighlightsList() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>🚀 Highlights</Heading>
        <ul className={styles.highlightList}>
          {HIGHLIGHTS.map((h) => (
            <li key={h.title}><strong>{h.title}</strong>——{h.desc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LLMEntry() {
  return (
    <section className={styles.llmSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>🤖 Machine-Readable</Heading>
        <p>提供机器可读端点：</p>
        <ul>
          <li><Link to="/llms.txt">/llms.txt</Link> — 站点索引</li>
          <li><Link to="/llms-full.txt">/llms-full.txt</Link> — 完整上下文</li>
        </ul>
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
        <InstallSection />
        <FeatureGrid />
        <HighlightsList />
        <LLMEntry />
      </main>
    </Layout>
  );
}
