import DefaultLayout from "./components/layout";
import Tabelle from "./components/tabelle";
import { createElement } from "complate-stream";

export function SiteIndex({ title, _layout, data, query }) {
	const sites = ['DE', 'CH', 'US', 'UK']

	let table = <Tabelle searchSrc="/">
		<table class="tabelle tabelle--sticky">
			<thead>
				<th name="username" value={query.username}>
					Kürzel
				</th>
				<th name="fullname" value={query.fullname}>
					Fullname
				</th>
				<th name="site">
					Ort
					<select name="site" class="tabelle-input">
						<option></option>
						{
							sites.map(s => <option selected={query.site === s}>{s}</option>)
						}
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

	const styles = ['https://unpkg.com/tabelle@0.0.8/dist/tabelle.css']
	const scripts = ['https://unpkg.com/tabelle@0.0.8/dist/polyfills.js', 'https://unpkg.com/tabelle@0.0.8/dist/tabelle.js']

	return _layout === false ? table :
	<DefaultLayout title={title} stylesheets={styles} scripts={scripts}>
		<h1>{title}</h1>

		{table}
	</DefaultLayout>;
}
