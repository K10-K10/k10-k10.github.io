export default function Icon({ iconName, theme } = {}) {
	let tMode;

	if (theme === "none" || !theme) {
		const browser_setting = "light";
		tMode = localStorage.getItem("mode") || browser_setting;
	} else {
		tMode = theme === "light" ? "light" : "dark";
	}

	const fileName = `/SVG-icons/svg/${iconName}${tMode === "light" ? "-w.svg" : ".svg"}`;

	return (
		<div>
			<img src={fileName} alt={iconName} />
		</div>
	);
}
