import DefaultLayout from "./components/layout";
import Tabelle from "./components/tabelle";
import { createElement } from "complate-stream";

export function SiteIndex({ title, _layout, data }) {
	let table = <Tabelle searchSrc="/">
		<table class="tabelle">
			<thead>
				<th name="username">
					Kürzel
				</th>
				<th name="fullname">
					Fullname
				</th>
				<th name="site">
					Ort
					<select name="site" class="tabelle-input">
						<option>DE</option>
						<option>CE</option>
					</select>
				</th>
			</thead>
			<tbody>
				{
					data.map(d => {
						return <tr><td>{d.username}</td><td>{d.fullname}</td><td>{d.site}</td></tr>
					})
				}
			</tbody>
		</table>
	</Tabelle>

	const styles = ['/tabelle.css']
	const scripts = ['/polyfills.js', '/tabelle.js']

	return _layout === false ? table :
	<DefaultLayout title={title} stylesheets={styles} scripts={scripts}>
		<h1>{title}</h1>

		{table}
	</DefaultLayout>;
}
