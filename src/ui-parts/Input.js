function Input({
	type,
	label,
	value,
	onChange,
	tmp,
	style= {}
	= {} }) {
	const styles = {
		input: {
			width: "200px",
			padding: "10px",
			fontSize: "25px",
			...style,
		},
		label: {
			fontSize: "25px",
		}
	};

	return (
		<div>
			<label style={styles.label}>{label}: </label>
			<input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={tmp} style={styles.input} />
		</div>
	);
}

export default Input;
