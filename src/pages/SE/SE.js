import "./SE.css";
import Audio from "./../../ui-parts/Audio";
import Fieldset from "../../ui-parts/Fieldset";

function SE() {
	return (
		<div id="SE">
			<div>
				<Fieldset legend="BGM">
					<audio controls src="/sounds/sound1.mp3" />
					<p>開演前後用</p>
				</Fieldset>
				<Fieldset legend={"滑ったとき"}>
					<Audio src={"/sounds/sound1.mp3"} />
					<p>?</p>
				</Fieldset>
				<Fieldset legend={"深刻な場面用"}>
					<Audio src={"/sounds/sound1.mp3"} />
					<p>?</p>
				</Fieldset>
				<Fieldset legend={"コナンBGM"}>
					<Audio src={"/sounds/sound1.mp3"} />
					<p>"ラピス"わ、なんか急に暗くなった</p>
				</Fieldset>
			</div>
		</div>
	);
}

export default SE;
