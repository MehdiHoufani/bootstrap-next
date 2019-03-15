import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html lang={"fr"}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <style dangerouslySetInnerHTML={{ __html: styleTags }} />
        </Head>
        <body className="custom_class">
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
