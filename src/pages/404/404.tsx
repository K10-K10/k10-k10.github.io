import './404.css';
import Head from '@layouts/Head/Head';

export default function NotFound() {
	return (
		<div id='NotFound'>
			<Head
				title={'K10-K10 - Page Not Found'}
				linkTitle='404'
				description={'Page not found. The requested page does not exist on K10-K10 website.'}
			/>
			<h1>Error:404</h1>
			<h2>Page NotFound</h2>
		</div>
	)
}
