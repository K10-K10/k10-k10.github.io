import './Head.css';
import { useEffect } from 'react';

function Head({ linkTitle, title, description }) {
	useEffect(() => {
		if (linkTitle) {
			linkTitle = `K10-K10 | ${linkTitle}`;
		} else {
			linkTitle = 'K10-K10';
		}
	}, [linkTitle]);
	return (
		<div>
			<meta charSet='UTF-8' />
			<title>{title}</title>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='description' content={description} />
			<link rel='icon' href='https://K10-K10.github.io/favicon.ico' />
			<link rel='apple-touch-icon' href='/favicon.ico' />
			<link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
			<meta property='og:type' content='website' />
			<meta name='twitter:domain' content='K10-K10.github.io' />
			<meta property='og:title' content={linkTitle} />
			<meta property='og:description' content={description} />
			<meta property='og:site_name' content={linkTitle} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:linkTitle' content={linkTitle} />
			<meta name='twitter:description' content={description} />
			<meta name='theme-color' content='#00323C' />
		</div>
	)
}

export default Head;
