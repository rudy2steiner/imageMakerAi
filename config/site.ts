export const siteConfig: any = {
  name: "Image Maker Ai",
  url: process.env.NEXTAUTH_URL || "https://imagemakerai.co",
  domain: "imagemakerai.co",
  mail: "support@imagemakerai.co",
  effectiveDate: "2024.8.9"
};

import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const languages = [
  { lang: "en", label: "English", hrefLang: "en-US" },
] as const;

export const locales = languages.map((lang) => lang.lang);

export const localePrefix: LocalePrefix<typeof locales> = "as-needed";//"always";
