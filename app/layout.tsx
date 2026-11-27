import type { Metadata } from "next";

import { Layout } from "@app/components";
import { SITE } from "@app/constants";
import { fraunces, manrope } from "@app/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
};

const RootLayout: React.FC<LayoutProps<"/">> = ({ children }) => {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Layout.SkipLink />
        <Layout.Header />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Layout.Footer />
      </body>
    </html>
  );
};

export default RootLayout;
