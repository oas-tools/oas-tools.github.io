import { useRouter } from "next/router";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "es-ES": "Apórtanos feedback →"
};

export default {
    projectLink: 'https://github.com/oas-tools', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/oas-tools/oas-tools.github.io/blob/main/pages', // base URL for the docs repository
    titleSuffix: ' – OAS Tools',
    search: true,
    unstable_flexsearch: true,
    defaultMenuCollapsed: true,
    floatTOC: true,
    nextLinks: true,
    prevLinks: true,
    darkMode: true,
    footer: true,
    footerEditLink: ({ locale }) => {
      switch (locale) {
        case "es-ES":
          return "Edite esta página en GitHub →";
        default:
          return "Edit this page on GitHub →";
      }
    },
    i18n: [
      { locale: 'en-US', text: 'English' },
      { locale: 'es-ES', text: 'Español' }
    ],
    feedbackLabels: "feedback",
    feedbackLink: () => {
      const { locale } = useRouter();
      return (
        FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
        FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
      );
    },
    footerText: (locale) => Footer(locale),
    logo: () => {
      return (
        <>
          <Logo size={35} />
          <span
            className="mx-4 font-extrabold hidden md:inline select-none"
            title={"OAS Tools: A NodeJS OpenAPI Framework"}
          >
            OAS TOOLS
          </span>
          <span className="text-gray-500 font-normal hidden md:inline">
            A NodeJS OpenAPI framework
          </span>
        </>
      );
    },
    head: (
      <>
        {/* Favicons, meta */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="OAS Tools: A NodeJS OpenAPI framework" />
        <meta name="og:description" content="OAS Tools: A NodeJS OpenAPI framework" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://oas-tools.github.io/public/img/og-image.png" />
        <meta name="twitter:site:domain" content="oas-tools.github.io" />
        <meta name="twitter:url" content="https://oas-tools.github.io" />
        <meta name="og:title" content="OAS Tools: A NodeJS OpenAPI framework" />
        <meta name="og:image" content="https://oas-tools.github.io/public/img/og-image.png" />
        <meta name="apple-mobile-web-app-title" content="OAS Tools" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </>
    )
  }