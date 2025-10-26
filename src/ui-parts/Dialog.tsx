import React from 'react';
import Button from './Button';

type DialogProps = {
	dialog_style?: React.CSSProperties;
	button_style?: React.CSSProperties;
	children: React.ReactNode;
};

function Dialog({ children, dialog_style = {}, button_style = {} }: DialogProps) {
	const styles: { dialog: React.CSSProperties; closeButton: React.CSSProperties } = {
		dialog: {
			position: 'absolute',
			margin: 0,
			padding: '16px',
			borderRadius: '16px',
			border: 'none',
			boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
			top: '20px',
			left: '50%',
			transform: 'translateX(-50%)',
			background: 'white',
			...dialog_style,
		},
		closeButton: {
			background: 'var(--primary-color)',
			height: '32px',
			padding: '4px 12px',
			borderRadius: '8px',
			border: 'none',
			cursor: 'pointer',
			...button_style,
		},
	};

	return (
		<dialog open style={styles.dialog}>
			{children}
			<form method='dialog'>
				<Button style={styles.closeButton} disabled={false}>OK</Button>
			</form>
		</dialog >
	);
}

export default Dialog;
