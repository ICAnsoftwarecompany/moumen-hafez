import createNextIntlPlugin from "next-intl/plugin";

// Plain JS (not next.config.ts): Hostinger's build server has glibc 2.28,
// so Next's native SWC can't load to transpile a TypeScript config file.
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
