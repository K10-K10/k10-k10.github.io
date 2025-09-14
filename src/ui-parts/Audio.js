function Audio({
	src,
	style = {}
	= {} }) {
	const styles = {
		...style
	}
	return (
		<audio controls src={src} style={styles}>
		</audio>
	)
}

export default Audio;
