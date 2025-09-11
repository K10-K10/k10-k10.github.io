function Fieldset({
	children,
	legend,
	f_style = { } = {},
	l_style = { } = {}
	}) {
	const styles = {
		fieldset: {
			f_style
		},
		legend: {
			backgroundColor: "var(--primary-color)",
			color: "var(--code-background-color)",
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
