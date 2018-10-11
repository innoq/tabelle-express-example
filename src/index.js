"use strict";


let express = require("express");
let complate = require("complate-express");
let path = require("path");
let data = require("./people")
let people = data.people

const HOST = "localhost";
const PORT = 3000;

let app = express();
app.use(complate(path.resolve(__dirname, "../dist/views.js")));
app.use(express.static('dist'))

function sortBy(key, direction) {
	return (a, b) => {
		var less = direction === 'asc' ? -1 : 1
		var more = direction === 'asc' ? 1 : -1

		var x = a[key].toLowerCase()
		var y = b[key].toLowerCase()
		return x < y ? less : x > y ? more : 0;
	}
}

function filterColumn(key, filterValue) {
	if (!filterValue) {
		return () => true
	}
	let searchString = filterValue.toLowerCase()
	return p => p[key].toLowerCase().includes(searchString)
}

function filter(query) {
	let filtered = data.people
		.filter(filterColumn('fullname', query.fullname))
		.filter(filterColumn('username', query.username))
		.filter(filterColumn('site', query.site))

	if (!query.sort || query.sort.split('-').length !== 2) {
		return filtered
	}

	let split = query.sort.split('-')
	let key = split[0]
	let direction = split[1]

	return filtered.sort(sortBy(key, direction))
		// .filter(p => p.fullname.toLowerCase().includes(query.fullname.toLowerCase()))
		// .filter(p => p.username.toLowerCase().includes(query.username.toLowerCase()))
		// .filter(p => p.site.toLowerCase().includes(query.site.toLowerCase()))
}

app.get("/", (req, res) => {
	res.complate("SiteIndex", { title: "INNOQ Mitarbeiter", data: filter(req.query), query: req.query }, {
		fragment: !!req.query.fragment
	});
});

let server = app.listen(PORT, HOST, _ => {
	let { address, port } = server.address();
	console.log(`→ http://${address}:${port}`); // eslint-disable-line no-console
});
