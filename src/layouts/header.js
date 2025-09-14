import "./header.css"

function Header() {
	const topics = ["Projects", "Tools", "Blog", "About"];

	return (
		<header className="header">
			<a href="/#/" className="title">K10-K10</a>
			<div className="topic_scope">
				{topics.map((topic, i) => (
					<a
						key={i}
						href={`/#/${topic}`}
						className="topic"
					>
						{topic}
					</a>
				))}
			</div>
		</header>
	);
}

export default Header;
