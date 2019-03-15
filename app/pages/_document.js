import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { stylesheet } from "./index.scss";

import App from ".";
import { StaticRouter } from "react-router-dom";

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

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
