function Button({
	children,
	onClick,
	disabled = false,
	style = {}
} = {}) {
	const styles = {
		margin: "10px",
		height: "50px",
		width: "200px",
		color: "var(--button-text-color)",
		backgroundColor: "var(--button-color)",
		border: "1px solid var(--button-color)",
		borderRadius: "10px",
		fontFamily: "inherit",
		fontSize: "var(--Base-FontSize)",
		...style,
	};

	return (
		<button
			className="button"
			onClick={onClick}
			disabled={disabled}
			style={styles}
		>
			{children}
		</button>
	);
}

export default Button;
