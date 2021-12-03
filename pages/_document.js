import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          {/* FONTS */}
          <link rel="stylesheet" href="/fonts/fonts.css" />

          <link
            rel="preload"
            href="/fonts/roboto/Roboto-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/emixvade/emixvade.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/emixvade/emixvade.woff"
            as="font"
            crossOrigin=""
          />
          <meta name="theme-color" content="#fff" />
          <meta name="og:image" content="/icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
