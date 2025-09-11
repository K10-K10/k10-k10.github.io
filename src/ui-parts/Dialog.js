import Button from "./Button";

function Dialog({ children, dialog_style = {}, button_style = {}}) {
	const styles = {
		dialog: {
			borderRadius: "16px",
			padding: "16px",
			border: "none",
			boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
			position: "absolute",
			top: "20px",
			left: "50%",
			transform: "translateX(-50%)",
			background: "white",
			...dialog_style,
		},
		closeButton: {
			background: "var(--primary-color)",
			height: "32px",
			padding: "4px 12px",
			borderRadius: "8px",
			border: "none",
			cursor: "pointer",
			...button_style,
		},
	};

	return (
		<dialog open style={styles.dialog}>
			{children}
			<form method="dialog">
				<Button style={styles.closeButton}>OK</Button>
			</form>
		</dialog>
	);
}

export default Dialog;
