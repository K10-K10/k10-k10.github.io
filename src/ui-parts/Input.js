function Input({
	type,
	label,
	value,
	onChange,
	tmp,
	style: {
			input_width = "200px",
			input_padding = "10px",
			input_fontSize = "20px",
			label_fontSize = "25px",
	}	= {} }) {
	const style = {
		input: {
			width: input_width,
			padding: input_padding,
			fontSize: input_fontSize,
		},
		label: {
			fontSize: label_fontSize,
		}
	}
	return (
		<div>
			<label style={style.label}>{label}: </label>
			<input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={tmp} style={style.input} />
		</div>
	);
}

export default Input;
