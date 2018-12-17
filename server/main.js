/* eslint-disable no-console */
const { createServer } = require("http");

const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });


app.prepare().then(() => {
	createServer((req, res) => {
		app.render(req, res, "/index");

			

	}).listen(3000, err => {
		if (err) throw err;
		console.log("> Ready on http://localhost:3000");
	});
});