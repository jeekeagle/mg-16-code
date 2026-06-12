import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    { type: 'category', label: '🚀 Getting Started', collapsed: false,
      items: ['getting-started/installation', 'getting-started/quickstart', 'getting-started/learning-path'] },
    { type: 'category', label: '📖 User Guide', items: [] },
    { type: 'category', label: '🔌 Integrations', items: [] },
    { type: 'category', label: '🧭 Guides & Tutorials', items: [] },
    { type: 'category', label: '🏗️ Developer', items: [] },
    { type: 'category', label: '❓ Reference', items: [] },
  ],
};

export default sidebars;
