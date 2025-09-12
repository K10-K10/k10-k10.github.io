function Code ({
	children,
	style = {},
}
){
	const styles = {
		background: "var(--border-color)",
		display: "inline-block",
	  padding: "5px",
		borderRadius: "15%",
		...style,
	};
	return (
		<div style={styles}>{children}</div>
	);
}

export default Code;
