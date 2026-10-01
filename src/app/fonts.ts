// Fonts are bundled with the project (via @fontsource-variable) instead of
// being downloaded from Google Fonts at build time. Hosting build servers
// (e.g. Hostinger) can't always reach fonts.googleapis.com, which made
// `next/font/google` fail the whole build.
import "@fontsource-variable/cairo";
import "@fontsource-variable/inter";

// The class names below set the --font-cairo / --font-inter CSS variables
// (defined in globals.css), so the rest of the app keeps using them as before.
export const cairo = { variable: "font-cairo" };
export const inter = { variable: "font-inter" };
