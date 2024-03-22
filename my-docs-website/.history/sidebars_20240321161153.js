/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'release-notes',
    {
      type: 'category',
      label: 'Installing',
      items: [
        'install-requirements',
        {
          type: 'category',
          label: 'Installing in Your Own Cluster',
          items: [
            'install',
            'install-air-gap',
          ],
        },
        {
          type: 'category',
          label: 'Installing in an Embedded Cluster',
          items: [
            'install-embedded',
            'install-embedded-air-gap',
          ],
        },
        {
          type: 'category',
          label: '[Other Installation Option]',
          items: [
            'install-other',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Admin Console',
      items: [
        'admin-console-access',
        'admin-console-password',
    {
      type: 'category',
      label: 'Configuring',
      items: [
        'configuring',
      ],
    },
    {
      type: 'category',
      label: 'Using',
      items: [
        'using',
      ],
    },
    {
      type: 'category',
      label: 'Updating',
      items: [
        'updating',
        'license-sync',
      ],
    },
    {
      type: 'category',
      label: 'Backup and Restore',
      items: [
        'snapshots-storage',
        'snapshots-create-backup',
        'snapshots-restore',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting',
        'support-bundles',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'link', 
          href: 'https://docs.replicated.com/reference/kots-cli-getting-started',
          label: 'kots CLI Documentation',
        }
      ],
    },
  ],
};

export default sidebars;
