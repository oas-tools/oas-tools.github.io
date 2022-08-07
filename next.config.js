const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true
});

module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'en-US'
  },

  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/intro",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/intro",
        statusCode: 302,
      },
    ]
  }
})