/* eslint-disable no-console */
const express = require("express");
const next = require("next");
const { parse } = require("url");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3000;
const nextApp = next({ dev, dir: "app" });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    return nextApp.render(req, res, "/index", query);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log("process", process.env.NODE_ENV);
    console.log(
      `App started env: ${process.env.NODE_ENV ||
        " dev"} > Ready on port: ${port}`
    );
  });
});
