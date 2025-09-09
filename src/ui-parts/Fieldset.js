function Fieldset({
	children,
	legend,
	style: { }
	= {} }) {
	const style = {
		fieldset: {
			margin: "20px 15%",
			width: "70%",
		},
		legend: {
			padding: "3px 6px",
			fontSize: "20px",
			backgroundColor: "var(--primary-color)",
			color: "var(--code-background-color)",
			borderRadius: "5px",
		}
	}
	return (
		<fieldset style={style.fieldset}>
			<legend style={style.legend}>
				{legend}
			</legend>
			{children}
		</fieldset>
	)
}

export default Fieldset;
