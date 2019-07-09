import React from "react";
import App, { Container } from "next/app";
import MobileDetect from "mobile-detect";

class ArrowApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const md = new MobileDetect(ctx.req.header("user-agent"));

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, isMobile: !!md.mobile() };
  }

  render() {
    const { Component, pageProps, isMobile } = this.props;
    return (
      <Container>
        <Component {...pageProps} isMobile={isMobile} />
      </Container>
    );
  }
}

export default ArrowApp;
