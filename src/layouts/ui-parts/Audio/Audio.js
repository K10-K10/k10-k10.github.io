import "./Audio.css";

function Audio({src}) {
	return (
		<audio controls src={src}>
		</audio>
	)
}

export default Audio;
