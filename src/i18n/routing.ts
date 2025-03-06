import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh', 'de'],
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    /* '/about': {
      en: '/about-us',
      de: '/about',
    }, */
  },
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]
