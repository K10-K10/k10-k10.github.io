import "./header.css";
function Header() {
	return (
		<header className="header">
				<a href="/#/" className="title">K10-K10</a>
				<div className="topic_scope">
					<a href="/#/Projects" className="topic_1">Projects</a>
					<a href="/#/Tools" className="topic_2">Tools</a>
					<a href="/#/Blog" className="topic_3">Blog</a>
					<a href="/#/About" className="topic_4">About</a>
			</div>
		</header>
	);
}

export default Header;
