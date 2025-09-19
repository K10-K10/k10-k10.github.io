import "./Head.css"
import { useEffect } from "react"

function Head({ title, link_title }) {
	useEffect(() => {
		if (title) {
			title = `K10-K10 | ${title}`;
		} else {
			title = "K10-K10";
		}
	}, [title]);
	if (link_title) {
		title = `K10-K10 | ${title}`;
	} else {
		title = "K10-K10";
	}
	return (
		<div classname="head-lay">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content={link_title}/>
				<link rel="icon" href="https://K10-K10.github.io/favicon.ico" />
				<title>{title}</title>
				<meta property="og:title" content={link_title}></meta>
			</head>
		</div>
	)
}

export default Head;
