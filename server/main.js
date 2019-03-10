/* eslint-disable no-console */
const express = require("express");

const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });

app.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(
      `App started env: ${process.env.NODE_ENV} > Ready on port: ${port}`
    );
  });
});
