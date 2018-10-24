import { createElement } from "complate-stream";

export default function DefaultLayout({ title, stylesheets, scripts, bodyClass }, ...children) {
	return <html>
		<head>
			<meta charset="utf-8" />
			<title>{title}</title>
			{renderStyleSheets(stylesheets)}
			<style>
				{`body {
					margin-left: 4rem;
				}`}
			</style>
		</head>

		<body class={bodyClass}>
			{children}
		</body>
		{renderScripts(scripts)}
	</html>;
}

function renderStyleSheets(items) {
	if(!items || !items.length) {
		return;
	}

	return items.map(stylesheet => {
		if(stylesheet.hash) {
			var { uri, hash } = stylesheet; // eslint-disable-line no-var
		} else { // string
			uri = stylesheet;
		}

		/* eslint-disable indent */
		return <link rel="stylesheet" href={uri}
				integrity={hash} crossorigin="anonymous" />;
		/* eslint-enable indent */
	});
}

function renderScripts(items) {
	if(!items || !items.length) {
		return;
	}

	return items.map(script => {
		if(script.hash) {
			var { uri, hash } = stylesheet; // eslint-disable-line no-var
		} else { // string
			uri = script;
		}

		/* eslint-disable indent */
		return <script src={uri} />;
		/* eslint-enable indent */
	});
}
