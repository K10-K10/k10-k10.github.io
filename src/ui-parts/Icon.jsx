import { useState, useEffect } from "react";

export default function Icon({ name, theme } = {}) {
	const [tMode, setTMode] = useState("light");

	useEffect(() => {
		const browser_setting = "light";
		let mode;

		if (theme === "none" || !theme) {
			mode = localStorage.getItem("mode") || browser_setting;
		} else if (theme === "re") {
			const dMode = localStorage.getItem("mode") || browser_setting;
			mode = dMode === "light" ? "dark" : "light";
		} else {
			mode = theme === "light" ? "light" : "dark";
		}
		setTMode(mode);
	}, [theme, localStorage.getItem("mode")]);
	const fileName = `/SVG-icons/svg/${name}${tMode === "light" ? "-w.svg" : ".svg"}`;

	return (
		<div>
			<img src={fileName} alt={name} />
		</div>
	);
}
