import React from "react";
import App from "next/app";
import MobileDetect from "mobile-detect";

class ArrowApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let md = { mobile: () => null };

    if (typeof ctx.req.header === "function") {
      md = new MobileDetect(ctx.req.header("user-agent"));
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, isMobile: !!md.mobile() };
  }

  render() {
    const { Component, pageProps, isMobile } = this.props;
    return <Component {...pageProps} isMobile={isMobile} />;
  }
}

export default ArrowApp;
