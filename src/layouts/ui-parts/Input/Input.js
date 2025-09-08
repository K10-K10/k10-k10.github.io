import "./Input.css"

function Input({ type, label, value, onChange , tmp}) {
	return (
		<div>
			{label && <label>{label}: </label>}
			<input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={tmp}/>
		</div>
	);
}

export default Input;
