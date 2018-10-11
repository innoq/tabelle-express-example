"use strict";


let express = require("express");
let complate = require("complate-express");
let path = require("path");
let data = require("./people")

const HOST = "localhost";
const PORT = 3000;

let app = express();
app.use(complate(path.resolve(__dirname, "../dist/views.js")));
app.use(express.static('dist'))



function filter(query) {
	console.log(query)
	return data.people
		.filter(p => p.fullname.toLowerCase().includes(query.fullname.toLowerCase()))
		.filter(p => p.username.toLowerCase().includes(query.username.toLowerCase()))
		.filter(p => p.site.toLowerCase().includes(query.site.toLowerCase()))
}

app.get("/", (req, res) => {
	res.complate("SiteIndex", { title: "INNOQ Mitarbeiter", data: filter(req.query) }, {
		fragment: !!req.query.fragment
	});
});

let server = app.listen(PORT, HOST, _ => {
	let { address, port } = server.address();
	console.log(`→ http://${address}:${port}`); // eslint-disable-line no-console
});
