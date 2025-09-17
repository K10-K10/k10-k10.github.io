import "./header.css";
import Button from "./../ui-parts/Button";
import { useState, useEffect } from "react";

function Header() {
	const topics = ["Projects", "Tools", "Blog", "About"];
	const [mode, setMode] = useState("light");

	useEffect(() => {
		const savedMode = localStorage.getItem("mode") || "light";
		setMode(savedMode);
		document.body.setAttribute("data-theme", savedMode);
	}, []);

	const modeButton = () => {
		const newMode = mode === "dark" ? "light" : "dark";
		setMode(newMode);
		localStorage.setItem("mode", newMode);
		document.body.setAttribute("data-theme", newMode);
	};

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
			<Button onClick={modeButton} style={{margin: "0px", with:"10px"}}>
					{mode === "dark" ? "Light" : "Dark"}
			</Button>
		</header>
	);
}

export default Header;
