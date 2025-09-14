import "./Head.css"
import { useEffect } from "react"

function Head({ title , link_title}) {
	useEffect(() => {
		if (title) {
			document.title = `K10-K10 | ${title}`;
		} else {
			document.title = "K10-K10";
		}
	}, [title]);
	if (link_title) {
			document.title = `K10-K10 | ${title}`;
		} else {
			document.title = "K10-K10";
		}
	return (
		<div classname="head-lay">
			<head>
				<meta charset="UTF-8" />
				<link rel="icon" href="/my_icon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{document.title}</title>
				<meta property="og:title" content = {document.link_title}></meta>
		</head>
		</div>
	)
}

export default Head;
