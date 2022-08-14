const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true
});

module.exports = withNextra({
  // i18n: {
  //   locales: ['en-US', 'es-ES'],
  //   defaultLocale: 'en-US'
  // },
  experimental: {
    images: {
      unoptimized: true
    }
  },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/overview",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started/overview",
        statusCode: 302,
      },
      // {
      //   source: "/blog",
      //   destination: "/blog/index",
      //   statusCode: 301,
      // },
      // {
      //   source: "/blog",
      //   destination: "/blog/index",
      //   statusCode: 302,
      // },
    ]
  }
})