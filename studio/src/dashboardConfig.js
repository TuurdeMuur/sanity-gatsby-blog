export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea7f6b6be844ea95b5078c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ss8fgfss',
                  apiId: '59194a16-23ef-4180-9436-4b42d9be2944'
                },
                {
                  buildHookId: '5ea7f6b6a72f5b34e4578500',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ssishgax',
                  apiId: 'cd5ad529-ecdf-440f-8413-84409296a88d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TuurdeMuur/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ssishgax.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
