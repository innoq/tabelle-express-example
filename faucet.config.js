"use strict";

module.exports = {
	js: [{
		source: "./views/index.js",
		target: "./dist/views.js",
		format: "commonjs",
		jsx: { pragma: "createElement" }
	}]
	// manifest: {
  //   target: './dist/manifest.json',
  //   key: 'short',
  //   webRoot: './dist'
  // }
};
