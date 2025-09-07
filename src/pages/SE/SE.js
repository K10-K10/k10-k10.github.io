import "./SE.css";
import Audio from "./../../components/Audio/Audio"

function SE() {
	return (
		<div id="SE">
			<div>
				<fieldset>
					<legend>BGM</legend>
					<Audio src={"/sounds/sound1.mp3"}/>
					<p>開演前後用</p>
				</fieldset>
				<fieldset>
					<legend>滑ったとき</legend>
					<Audio src={"/sounds/sound1.mp3"}/>
					<p>?</p>
				</fieldset>
				<fieldset>
					<legend>深刻な場面用</legend>
					<Audio src={"/sounds/sound1.mp3"}/>
					<p>?</p>
				</fieldset>
				<fieldset>
					<legend>コナンBGM</legend>
					<Audio src={"/sounds/sound1.mp3"}/>
					<p>"ラピス"わ、なんか急に暗くなった</p>
				</fieldset>
			</div>
			<div>
				<p className="story">test</p>
			</div>
		</div>
	);
}

export default SE;
