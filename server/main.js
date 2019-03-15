/* eslint-disable no-console */
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3000;
const nextApp = next({ dev, dir: "app" });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get("*", (req, res) => {
    return nextApp.render(req, res, "/index");
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(
      `App started env: ${process.env.NODE_ENV} > Ready on port: ${port}`
    );
  });
});
