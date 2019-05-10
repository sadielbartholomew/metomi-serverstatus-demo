module.exports = {
  title: '(Metomi-Managed) Servers Status Page',
  description: 'Status page for servers managed by team Metomi',
  baseUrl: 'https://metomi-servers-demo.io',
  defaultLocale: 'en',
  locales: [
    { code: 'en', iso: 'en-GB', name: 'English', file: 'en.json' }
  ],
  content: {
    frontMatterFormat: 'yaml',
    systems: [
      'Cylc servers',
      'SPICE servers',
      'FCM Servers',
      'Standalone servers'
    ]
  },
  theme: {
    links: {
      en: {
        contact: "​mailto:metomi@metoffice.gov.uk",
        support: "https://github.com/metomi"
      }
    }
  }
}
