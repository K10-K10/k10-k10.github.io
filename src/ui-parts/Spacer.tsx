type SpacerProps = { style?: React.CSSProperties }
export default function Spacer({ style = {} } = {}) {
	const styles = {
		spacer: {
			padding: '15px',
			...style
		},
	};
	return (
		<div style={(styles.spacer)} />
	);
}
