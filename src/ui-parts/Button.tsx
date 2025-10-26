type ButtonProps = {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; style?: React.CSSProperties; disabled: boolean; children: React.ReactNode;
}

export default function Button({
	children,
	onClick,
	disabled = false,
	style = {}
}: ButtonProps) {
	const styles = {
		margin: '10px',
		height: '50px',
		width: '200px',
		color: 'var(--button-text-color)',
		backgroundColor: 'var(--button-color)',
		border: '1px solid var(--button-color)',
		borderRadius: '10px',
		fontFamily: 'inherit',
		fontSize: 'var(--Base-FontSize)',
		textAlign: 'center' as const,
		...style,
	};

	return (
		<button
			className='button'
			onClick={onClick}
			disabled={disabled}
			style={styles}
		>
			{children}
		</button>
	);
}
