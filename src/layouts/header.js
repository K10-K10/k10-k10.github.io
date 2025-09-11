import "./header.css"
import { useState } from "react";

function Header() {
	const [hoverIndex, setHoverIndex] = useState(null);
	const topics = ["About", "Tools", "Projects", "Blog"];
	const topicStyle = i => ({
	color:
		hoverIndex === i
			? "var(--link-color)"
			: hoverIndex !== null
				? "var(--border-color)"
				: "var(--white-color)",
	boxShadow:
		hoverIndex !== null && hoverIndex !== i
			? "0 4px 8px rgba(0,0,0,0.2)"
			: "none",
	transition: "color 0.3s ease, box-shadow 0.3s ease",
});

	return (
		<header className="header">
			<a href="/#/" className="title">K10-K10</a>
			<div className="topic_scope">
				{topics.map((topic, i) => (
<a
	key={i}
	href={`/#/${topic}`}
	className="topic"
	onMouseEnter={() => setHoverIndex(i)}
	onMouseLeave={() => setHoverIndex(null)}
	style={topicStyle(i)}
>
	{topic}
</a>
				))}
			</div>
		</header>
	);
}

export default Header;
