import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-9H70XCYC6K"
        />

        <Script id="google-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9H70XCYC6K', { page_path: window.location.pathname });
            `
          }}
        />
      </Head>
      <body className="bg-lblack">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
