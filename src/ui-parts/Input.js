function Input({
	type,
	label,
	value,
	onChange,
	tmp,
	label_style = {},
	input_style = {}
} = {}) {
	const styles = {
		label: {
			...label_style
		},
		input: {
			backgroundColor: 'var(--background-color)',
			padding: '10px',
			...input_style,
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
