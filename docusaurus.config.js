// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Babylon Blockchain',
  tagline: 'Bringing Bitcoin Security to Cosmos & Beyond',
  url: 'https://cahyosubroto.github.io',
  baseUrl: '/apidoc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://drive.google.com/uc?export=view&id=1LXiSzeRGG1Ij-YLozx9GcYmpmrOVBzBE',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cahyosubroto', // Usually your GitHub org/user name.
  projectName: 'apidoc', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'grpc',
            spec: 'swagger.yaml',
            route: 'docs/grpcrestapi',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'https://drive.google.com/uc?export=view&id=175ZFizw8OFJMliKTcBkChe_LlBKY5bqh',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Docs',
          },
          {
            to: 'docs/grpcrestapi',
            position: 'left',
            label: 'API',
          },
          // {
          //   type: "dropdown",
          //   label: "Demos",
          //   position: "left",
          //   items: [
          //     {
          //       label: "gRPC API",
          //       to: "category/grpcrestapi",
          //     },
          //   ]
          // },
          // {to: 'api/grpcrestapi/babylon-grpc-gateway-docs.info.mdx', label: 'API', position: 'left'},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/babylonchain',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://babylonchain.io/about',
            label: 'About',
            position: 'right',
          },
          {
            href: 'https://babylonchain.io/contact',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/babylon-chain/',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/babylon_chain',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCmnied_wAVVa2ECVLQH2OLQ',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://babylonchain.io/blogs',
              },
            ],
          },
        ],
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "grpcapi", // e.g. "classic" or the plugin-content-docs id
          config: {
            grpc: { // "petstore" is considered the <id> that you will reference in the CLI
              specPath: "docs/grpc/grpcapi/swagger.yml", // path or URL to the OpenAPI spec
              outputDir: "api/grpcrestapi", // output directory for generated *.mdx and sidebar.js files
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag", // generate a sidebar.js slice that groups operations by tag
              },
            }
          }
        },
      ]
    ],
    themes: ["docusaurus-theme-openapi-docs"],
};


module.exports = config;
