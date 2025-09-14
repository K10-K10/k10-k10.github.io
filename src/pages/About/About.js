import "./About.css";
import Spacer from "./../../ui-parts/Spacer";
import Talk from "./../../layouts/Talk/Talk";
import Head from "./../../layouts/Head/Head";

function About() {
	return (
		<div className="about">
			<Head title={"About"} link_title={"K10-K10 site - About page"}/>
			<Talk title="About the site" style_scope={{ background: "#f4f4f4" }}>
				<p>This site is my React practice site.</p>
				<p>Content related to blogs, tools, games, and more will be added.</p>
				<Spacer />
				<p>This site is powered by GitHub Pages, React and Vite.</p>
				<a href="https://github.com/K10-K10/k10-k10.github.io">
					This site's source code
				</a>
			</Talk>
			<Talk title="About the Author">
				<div className="user-wrapper">
					<img src="/my_icon.png" alt="author icon" />
					<div className="user-info">
						<p>Hello! I'm K10-K10. I'm junior high school student</p>
						<a href="https://github.com/K10-K10">My GitHub Account</a>
						<p>I primarily use C++, and belong to a robotics team.</p>
						<a href="https://techno-robocup.github.io/">Robot team's blogs</a>
					</div>
				</div>

				<p>I started programming in first grade and attended robotics classes.</p>
				<p>At the same time, my father recommended Unity, and I started learning C#</p>
				<p>I entered junior high school and started competitive programming and C++.</p>
				<p>Recently, I haven't been able to join in competitions. Therefore, I want to join as much as possible.</p>
				<Spacer />
				<p>I want to update this site as much as possible.</p>
				<p>Thank you for Reading!</p>
			</Talk>
		</div>
	)
}

export default About;
