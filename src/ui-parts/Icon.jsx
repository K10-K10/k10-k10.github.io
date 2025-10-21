import { useState, useEffect } from "react";

export default function Icon({ name, theme, style } = {}) {
	let [color, setColor] = useState();
	const [svgContent, setSvgContent] = useState();
	const src = `/SVG-icons/svg/${name}.svg`;

	useEffect(() => {
		if (theme == 'light') {
			color = 'var(--white-color)';
		} else if (theme == 'dark') {
			color = 'var(--black-color)';
		} else if (theme == 're') {
			color = 'var(--reverse-color)';
		} else {
			color = document.body.dataset.theme == 'dark' ? 'var(--black-color)' : 'var(--white-color)';
		}
		setColor(color)

		fetch(src)
			.then((res) => res.text())
			.then((text) => setSvgContent(text))
			.catch(console.error);
	}, [src, theme]);

	return (
		<div
			style={{ color: color, margin: 'auto', height: '24px', width: '24px', ...style }}
			dangerouslySetInnerHTML={{ __html: svgContent }}
		/>
	)
}
