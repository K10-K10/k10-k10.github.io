import "./About.css";
import Fieldset from "./../../ui-parts/Fieldset";

function About() {
	return (
		<div className="about">
			<div className="user">
				<img alt="icon" src="https://avatars.githubusercontent.com/u/157354212?v=4" />
				<h1 className="title">K10-K10</h1>
			</div>
			<div className="introduction">
				<Fieldset legend={"About page"}><p>test</p></Fieldset>
			</div>
		</div>
	)
}

export default About;
