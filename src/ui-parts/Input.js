function Input({
	type,
	label,
	value,
	onChange,
	tmp,
	style = {}
	= {} }) {
	const styles = {
		input: {
			padding: "10px",
			...style,
		},
	};

	return (
		<div>
			<label style={styles.label}>{label}: </label>
			<input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={tmp} style={styles.input} />
		</div>
	);
}

export default Input;
