import "./header.css";
function Header() {
	return (
		<header className="header">
				<a href="/#/" className="title">K10-K10</a>
				<div className="topic_scope">
					<a href="/#/Projects" className="topic">Projects</a>
				<a href="/#/Tools" className="topic">Tools</a>
				<a href="/#/Blog" className="topic">Blog</a>
					<a href="/#/About" className="topic">About</a>
			</div>
		</header>
	);
}

export default Header;
