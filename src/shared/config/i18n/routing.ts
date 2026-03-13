import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'id'],
  defaultLocale: 'id',

  // localePrefix: 'always' (By default)
  // // => e.g: /en/about

  // localePrefix: 'as-needed'
  // => e.g: default 'en' => /about
  // => e.g: other language 'id', 'de', etc. => /id/about

  // localePrefix: 'never'
  // => e.g: /about

  localePrefix: 'always',
});
