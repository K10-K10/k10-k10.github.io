type FieldsetProps = {
	legend: React.ReactNode;
	children: React.ReactNode;
	f_style?: React.CSSProperties;
	l_style?: React.CSSProperties;
}
export default function Fieldset({
	children,
	legend,
	f_style = {},
	l_style = {}
}: FieldsetProps) {
	const styles = {
		fieldset: {
			...f_style
		},
		legend: {
			backgroundColor: 'var(--primary-color)',
			color: 'var(--cloudy_background-color)',
			...l_style,
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
