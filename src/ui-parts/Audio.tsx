type AudioProps = {
	src: string;
	style?: React.CSSProperties
}
export default function Audio({
	src,
	style = {}
}: AudioProps) {
	const styles = {
		...style
	}
	return (
		<audio controls src={src} style={styles}>
		</audio>
	)
}
