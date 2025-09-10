import "./SE.css";
import Fieldset from "../../ui-parts/Fieldset";
import MV1 from "./movie/1.mp4";
import MV2 from "./movie/2.mp4";
import MV3 from "./movie/3.mp4";
import MV4 from "./movie/4.mp4";
import MV5 from "./movie/5.mp4";
import MV6 from "./movie/6.mp4";
import MV7 from "./movie/7.mp4";
import MV8 from "./movie/8.mp4";
import MV9 from "./movie/9.mp4";
import AU1 from "./movie/1.mp3";

function SE() {
	return (
		<div id="SE">
			<Fieldset legend="宮城道雄「春の海」 @ フリーBGM DOVA-SYNDROME OFFICIAL YouTube CHANNEL">
				<video src={MV1} controls loop="true" />
				<p>開演前後用</p>
			</Fieldset>
			<Fieldset legend="黒電話  着信音">
				<video src={MV2} controls />
				<p></p>
			</Fieldset>
			<Fieldset legend="ドンガラガッシャン">
				<video src={MV3} controls />
				<p></p>
			</Fieldset>
			<Fieldset legend="【フリー効果音】キラキラ効果音02- ウインドチャイム・シャラララ">
				<video src={MV4} controls />
				<p></p>
			</Fieldset>
			<Fieldset legend="キラキラ輝く">
				<audio src={AU1} controls />
				<p></p>
			</Fieldset>
			<Fieldset legend="ノック音">
				<video src={MV5} controls />
				<p></p>
			</Fieldset>
			<Fieldset legend="ノック音＋インターホン">
				<video src={MV6} controls />
				<p></p>
			</Fieldset>
			<Fieldset legend="コナン  音響">
				<video src={MV7} controls />
				<p>"ラピス"わ、なんか急に暗くなった</p>
			</Fieldset>
			<Fieldset legend="カウントダウン＋爆発オチ">
				<video src={MV8} controls />
				<p></p>
			</Fieldset>
			<Fieldset legend="～蛍の光～閉店の時間">
				<video src={MV9} controls />
				<p></p>
			</Fieldset>
		</div>
	);
}

export default SE;
