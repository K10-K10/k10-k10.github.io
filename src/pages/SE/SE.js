import "./SE.css";

function SE() {
	return (
		<div id="SE">
			<div>
				<fieldset>
					<legend>BGM</legend>
					<audio controls src="/sounds/sound1.mp3"></audio> <p>開演前後用</p>
				</fieldset>
				<fieldset>
					<legend>滑ったとき</legend>
					<audio controls src="/sounds/sound2.mp3"></audio> <p>?</p>
				</fieldset>
				<fieldset>
					<legend>深刻な場面用</legend>
					<audio controls src="/sounds/sound3.mp3"></audio> <p>?</p>
				</fieldset>
				<fieldset>
					<legend>コナンBGM</legend>
					<audio controls src="/sounds/sound4.mp3"></audio> <p>"ラピス"わ、なんか急に暗くなった</p>
				</fieldset>
			</div>
			<div>
				<p className="story">test</p>
			</div>
		</div>
	);
}

export default SE;
