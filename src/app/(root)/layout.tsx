import { ReactNode } from "react";
import { cairo, inter } from "@/app/fonts";
import { rootMetadata } from "@/config/site";
import "../globals.css";

export const metadata = rootMetadata;

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
