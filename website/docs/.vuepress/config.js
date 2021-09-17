module.exports = {
  bundler: '@vuepress/vite',
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Joplin Utils',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Joplin Utils',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        navbar: [
          { text: 'Home', link: '/' },
          {
            text: 'Tools',
            children: [
              {
                text: 'joplin-vscode-plugin',
                link: '/joplin-vscode-plugin/',
              },
              {
                text: 'joplin-batch-web',
                link: '/joplin-batch-web/',
              },
            ],
          },
          {
            text: 'Developer',
            children: [
              {
                text: 'joplin-api',
                link: '/joplin-api/',
              },
              {
                text: 'joplin-plugin-api',
                link: '/zh/joplin-plugin-api/',
              },
            ],
          },
          {
            text: 'Contribute',
            children: [
              {
                text: 'Getting involved',
                link: '/dev/',
              },
              {
                text: 'GitHub',
                link: 'https://github.com/rxliuli/joplin-utils',
              },
            ],
          },
        ],
        sidebar: {
          '/joplin-vscode-plugin/': [
            {
              text: 'Guide',
              children: [
                '/joplin-vscode-plugin/',
                '/joplin-vscode-plugin/guide/faq',
                '/joplin-vscode-plugin/guide/feature',
                '/joplin-vscode-plugin/guide/recommended-extension',
                '/joplin-vscode-plugin/guide/limitations',
              ],
            },
            {
              text: 'Other',
              children: [
                '/joplin-vscode-plugin/other/',
                '/joplin-vscode-plugin/other/roadmap',
                {
                  text: 'Joplin Forum',
                  link: 'https://discourse.joplinapp.org/',
                },
                {
                  text: 'VSCode',
                  collapsable: false,
                  children: [
                    {
                      text: 'VSCode Official Document',
                      link: 'https://code.visualstudio.com/docs',
                    },
                  ],
                },
                {
                  text: 'Markdown',
                  collapsable: false,
                  children: [
                    {
                      text: 'Markdown Guide (English)',
                      link: 'https://www.markdownguide.org/',
                    },
                  ],
                },
                {
                  text: 'VSCode + Markdown',
                  collapsable: false,
                  children: [
                    {
                      text: 'VSCode Markdown Official Document',
                      link: 'https://code.visualstudio.com/docs/languages/markdown',
                    },
                  ],
                },
              ],
            },
          ],
          '/joplin-batch-web/': [
            {
              text: 'Introduction',
              link: '/joplin-batch-web/',
            },
            {
              text: 'Other functions',
              link: '/joplin-batch-web/feature',
            },
            {
              text: 'Online site',
              link: 'https://joplin-utils.rxliuli.com/joplin-batch-web/#/en-US/',
            },
          ],
          '/joplin-api/': [
            { text: 'Introduction', link: '' },
            {
              text: 'API Doc',
              link: 'https://joplin-utils.rxliuli.com/api/joplin-api/',
            },
          ],
          '/dev/': [
            { text: 'Introduction', link: '/dev/' },
            '/dev/doc',
            '/dev/dev',
            '/dev/require',
          ],
        },
      },
      '/zh/': {
        navbar: [
          { text: '首页', link: '/zh/' },
          {
            text: '工具',
            children: [
              {
                text: 'joplin-vscode-plugin',
                link: '/zh/joplin-vscode-plugin/',
              },
              {
                text: 'joplin-blog',
                link: '/zh/joplin-blog/',
              },
              {
                text: 'joplin-batch-web',
                link: '/zh/joplin-batch-web/',
              },
            ],
          },
          {
            text: '开发者',
            children: [
              {
                text: 'joplin-api',
                link: '/zh/joplin-api/',
              },
              {
                text: 'joplin-plugin-api',
                link: '/zh/joplin-plugin-api/',
              },
            ],
          },
          {
            text: '贡献',
            children: [
              {
                text: '参与项目',
                link: '/zh/dev/',
              },
              {
                text: 'GitHub',
                link: 'https://github.com/rxliuli/joplin-utils',
              },
            ],
          },
        ],
        sidebar: {
          '/zh/joplin-vscode-plugin/': [
            {
              text: '指南',
              children: [
                '/zh/joplin-vscode-plugin/',
                '/zh/joplin-vscode-plugin/guide/faq',
                '/zh/joplin-vscode-plugin/guide/feature',
                '/zh/joplin-vscode-plugin/guide/recommended-extension',
                '/zh/joplin-vscode-plugin/guide/limitations',
              ],
            },
            {
              text: '其他',
              children: [
                '/zh/joplin-vscode-plugin/other/',
                '/zh/joplin-vscode-plugin/other/dev',
                '/zh/joplin-vscode-plugin/other/roadmap',
                {
                  text: 'Joplin 论坛',
                  link: 'https://discourse.joplinapp.org/',
                },
                {
                  text: 'VSCode',
                  collapsable: false,
                  children: [
                    {
                      text: 'VSCode 官方文档',
                      link: 'https://code.visualstudio.com/docs',
                    },
                    {
                      text: 'VSCode 中文翻译文档',
                      link: 'https://jeasonstudio.gitbooks.io/vscode-cn-doc/',
                    },
                  ],
                },
                {
                  text: 'Markdown',
                  collapsable: false,
                  children: [
                    {
                      text: 'Markdown 指南（英文）',
                      link: 'https://www.markdownguide.org/',
                    },
                    {
                      text: 'Markdown 指南（翻译）',
                      link: 'https://www.markdown.xyz/',
                    },
                  ],
                },
                {
                  text: 'VSCode + Markdown',
                  collapsable: false,
                  children: [
                    {
                      text: 'VSCode Markdown 官方文档',
                      link: 'https://code.visualstudio.com/docs/languages/markdown',
                    },
                    {
                      text: 'VSCode 搭建 markdown 写作环境',
                      link: 'https://blog.rxliuli.com/p/43851eb5/',
                    },
                    {
                      text: 'Markdown Extension Pack(吾辈发布的)',
                      link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.markdown-extension-pack',
                    },
                  ],
                },
              ],
            },
          ],
          '/zh/joplin-batch-web/': [
            {
              text: '简介',
              link: '/zh/joplin-batch-web/',
            },
            {
              text: '其他功能',
              link: '/zh/joplin-batch-web/feature',
            },
            {
              text: '在线网站',
              link: 'https://joplin-utils.rxliuli.com/joplin-batch-web/#/zh-CN/',
            },
          ],
          '/zh/joplin-blog/': [
            { text: '简介', link: '/zh/joplin-blog/' },
            '/zh/joplin-blog/guide',
            {
              text: 'NPM',
              link: 'https://www.npmjs.com/package/joplin-blog',
            },
            {
              text: 'blog 示例',
              children: [
                {
                  text: 'hexo',
                  link: 'https://joplin-utils.rxliuli.com/blog/hexo/',
                },
                {
                  text: 'vuepress',
                  link: 'https://joplin-utils.rxliuli.com/blog/vuepress/',
                },
              ],
            },
            {
              text: 'wiki 示例',
              children: [
                {
                  text: 'vuepress',
                  link: 'https://joplin-utils.rxliuli.com/wiki/vuepress/',
                },
                {
                  text: 'docsify',
                  link: 'https://joplin-utils.rxliuli.com/wiki/docsify/',
                },
              ],
            },
          ],
          '/zh/joplin-api/': [
            { text: '简介', link: '/zh/joplin-api/' },
            {
              text: 'NPM',
              link: 'https://www.npmjs.com/package/joplin-api',
            },
            {
              text: 'API 文档',
              link: 'https://joplin-utils.rxliuli.com/api/joplin-api/',
            },
          ],
          '/zh/joplin-plugin-api/': [
            { text: '简介', link: '/zh/joplin-plugin-api/' },
            {
              text: 'API 文档',
              link: 'https://joplin-utils.rxliuli.com/api/joplin-plugin-api/',
            },
          ],
          '/zh/dev/': [
            { text: '简介', link: '/zh/dev/' },
            '/zh/dev/doc',
            '/zh/dev/dev',
            '/zh/dev/require',
          ],
        },
      },
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
}
