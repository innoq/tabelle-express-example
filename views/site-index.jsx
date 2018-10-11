import DefaultLayout from "./components/layout";
import { createElement } from "complate-stream";

export function SiteIndex({ title, _layout }) {
	let content = <p>
		lorem ipsum dolor sit amet
	</p>;

	const styles = ['/tabelle.css']
	const scripts = ['/polyfills.js', '/tabelle.js']

	return _layout === false ? content : 
	<DefaultLayout title={title} stylesheets={styles} scripts={scripts}>
		<h1>{title}</h1>

		{content}
	</DefaultLayout>;
}
