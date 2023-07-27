import { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'Stephen Chen Portfolio',
    description:
      'A PHP backend developer with some Vue skills and six years of experience in iOS development, who is passionate about web development and design.',
    project: {
      links: {
        github: 'https://github.com/5SMNOONMS5',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Blank', to: { name: 'blank' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Test', to: { name: 'test' } },
            {
              type: 'dropdown',
              title: 'Documentations',
              children: [
                {
                  type: 'link',
                  title: 'Components',
                  to: { name: 'docs-components' },
                },
              ],
            },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Hi I&nbsp;am Stephen&nbsp;Chen',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'stephen chen',
      links: {
        github: 'https://github.com/5SMNOONMS5',
        medium: 'https://tasb00429.medium.com/',
        website: 'stephen-chen-portfolio.netlify.app',
      },
    },
  },
})
