import './Head.css';
import { useEffect } from 'react';

type HeadProps = {
	linkTitle: string;
	title: string;
	description: string;
	pageUrl?: string;
}

export default function Head({ linkTitle, title, description, pageUrl }: HeadProps) {
	useEffect(() => {
		// Set page title
		let pageTitle = 'K10-K10';
		if (linkTitle) {
			pageTitle = `K10-K10 | ${linkTitle}`;
		}
		document.title = pageTitle;

		// Update or create meta description
		let metaDescription = document.querySelector('meta[name="description"]');
		if (!metaDescription) {
			metaDescription = document.createElement('meta');
			metaDescription.setAttribute('name', 'description');
			document.head.appendChild(metaDescription);
		}
		metaDescription.setAttribute('content', description);

		// Update OG title
		let ogTitle = document.querySelector('meta[property="og:title"]');
		if (!ogTitle) {
			ogTitle = document.createElement('meta');
			ogTitle.setAttribute('property', 'og:title');
			document.head.appendChild(ogTitle);
		}
		ogTitle.setAttribute('content', pageTitle);

		// Update OG description
		let ogDescription = document.querySelector('meta[property="og:description"]');
		if (!ogDescription) {
			ogDescription = document.createElement('meta');
			ogDescription.setAttribute('property', 'og:description');
			document.head.appendChild(ogDescription);
		}
		ogDescription.setAttribute('content', description);

		// Update OG URL (if provided)
		if (pageUrl) {
			let ogUrl = document.querySelector('meta[property="og:url"]');
			if (!ogUrl) {
				ogUrl = document.createElement('meta');
				ogUrl.setAttribute('property', 'og:url');
				document.head.appendChild(ogUrl);
			}
			ogUrl.setAttribute('content', pageUrl);

			// Update canonical URL
			let canonical = document.querySelector('link[rel="canonical"]');
			if (!canonical) {
				canonical = document.createElement('link');
				canonical.setAttribute('rel', 'canonical');
				document.head.appendChild(canonical);
			}
			canonical.setAttribute('href', pageUrl);
		}

		// Update Twitter card
		let twitterTitle = document.querySelector('meta[name="twitter:title"]');
		if (!twitterTitle) {
			twitterTitle = document.createElement('meta');
			twitterTitle.setAttribute('name', 'twitter:title');
			document.head.appendChild(twitterTitle);
		}
		twitterTitle.setAttribute('content', pageTitle);

		let twitterDescription = document.querySelector('meta[name="twitter:description"]');
		if (!twitterDescription) {
			twitterDescription = document.createElement('meta');
			twitterDescription.setAttribute('name', 'twitter:description');
			document.head.appendChild(twitterDescription);
		}
		twitterDescription.setAttribute('content', description);
	}, [linkTitle, title, description, pageUrl]);

	// This component doesn't render anything visible
	return null;
}
