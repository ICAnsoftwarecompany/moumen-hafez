import { getRequestConfig } from "next-intl/server";
import { messages } from "@/i18n/messages";
import { defaultLocale, isLocale } from "@/utils/locale";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isLocale(requested) ? requested : defaultLocale;

  return {
    locale,
    messages: messages[locale],
  };
});
