import { useState, useEffect } from "react";

type IconProps = {
	name: string;
	theme?: "light" | "dark" | "re" | "auto";
	style?: React.CSSProperties;
};

export default function Icon({ name, theme = "auto", style = {} }: IconProps) {
	const [color, setColor] = useState<string>('var(--white-color)');
	const [svgContent, setSvgContent] = useState<string>('');
	const src = `/SVG-icons/svg/${name}.svg`;

	useEffect(() => {
		let c: string;
		switch (theme) {
			case 'light':
				c = 'var(--white-color)';
				break;
			case 'dark':
				c = 'var(--black-color)';
				break;
			case 're':
				c = 'var(--reverse-color)';
				break;
			default:
				c = document.body.dataset.theme === 'dark' ? 'var(--black-color)' : 'var(--white-color)';
		}
		setColor(c);

		fetch(src)
			.then((res) => res.text())
			.then((text) => setSvgContent(text))
			.catch(console.error);
	}, [src, theme]);

	return (
		<div
			style={{ color, margin: 'auto', height: '24px', width: '24px', ...style }}
			dangerouslySetInnerHTML={{ __html: svgContent }}
		/>
	);
}
