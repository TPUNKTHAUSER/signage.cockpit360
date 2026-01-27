import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Import messages statically for static export
import deMessages from '../../messages/de.json';
import enMessages from '../../messages/en.json';

const messagesMap: Record<string, typeof deMessages> = {
  de: deMessages,
  en: enMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as 'de' | 'en')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messagesMap[locale] || messagesMap.de
  };
});
