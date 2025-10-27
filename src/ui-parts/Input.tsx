import React from 'react';

type InputProps = {
	type?: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	tmp?: string;
	label_style?: React.CSSProperties;
	input_style?: React.CSSProperties;
};

export default function Input({
	type = 'text',
	label,
	value,
	onChange,
	tmp = '',
	label_style = {},
	input_style = {}
}: InputProps) {
	const styles = {
		label: {
			...label_style
		},
		input: {
			fontSize: 'var(--Base-FontSize)',
			fontFamily: 'inherit',
			backgroundColor: 'var(--background-color)',
			padding: '10px',
			...input_style,
		},
	};

	return (
		<div>
			<label style={styles.label} htmlFor={label}>{label}: </label>
			<input
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={tmp}
				style={styles.input}
				id={label}
			/>
		</div>
	);
}
