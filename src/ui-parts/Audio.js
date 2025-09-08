function Audio({
	src,
	style: { }
	= {} }) {
	const style = {}
	return (
		<audio controls src={src} style={style}>
		</audio>
	)
}

export default Audio;
