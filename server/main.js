/* eslint-disable no-console */
const { createServer } = require("http");

const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });

app.prepare().then(() => {
  createServer((req, res) => {
    app.render(req, res, "/index");
  }).listen(port, err => {
    if (err) throw err;
    console.log(
      `App started env: ${process.env.NODE_ENV} > Ready on port: ${port}`
    );
  });
});
