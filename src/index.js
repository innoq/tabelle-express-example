"use strict";

let express = require("express");
let complate = require("complate-express");
let path = require("path");

const HOST = "localhost";
const PORT = 3000;

let app = express();
app.use(complate(path.resolve(__dirname, "../dist/views.js")));
app.use(express.static('dist'))

app.get("/", (req, res) => {
	res.complate("SiteIndex", { title: "Hello World" }, {
		fragment: !!req.query.fragment
	});
});

// app.get("/bootstrap", (req, res) => {
// 	res.complate("BootstrapSample", { title: "Boostrap sample" });
// });

let server = app.listen(PORT, HOST, _ => {
	let { address, port } = server.address();
	console.log(`→ http://${address}:${port}`); // eslint-disable-line no-console
});
