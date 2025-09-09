function Fieldset({
	children,
	legend,
	f_style = { } = {},
	l_style = { } = {}
	}) {
	const styles = {
		fieldset: {
			margin: "20px 15%",
			width: "70%",
			f_style
		},
		legend: {
			padding: "3px 6px",
			fontSize: "20px",
			backgroundColor: "var(--primary-color)",
			color: "var(--code-background-color)",
			borderRadius: "5px",
			l_style,
		}
	};
	return (
		<fieldset style={styles.fieldset}>
			<legend style={styles.legend}>
				{legend}
			</legend>
			{children}
		</fieldset>
	)
}

export default Fieldset;
