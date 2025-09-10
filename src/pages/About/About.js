import "./About.css";

function About() {
	return (
		<div className="about">
			<div className="introduction">
				<div className="introduction_contents">
				<h1 className="title">About the site</h1>
				<p>This site is my React practice site.</p>
				<p>Content related to blogs, tools, games, and more will be added.</p>
				<p>This site is powered by GitHub Pages, React and Vite.</p>
				<a href="https://github.com/K10-K10/k10-k10.github.io">
					This site's source code
				</a>
			</div>
		</div>

			<div className="user">
				<h1 className="title">About the Author</h1>
				<div className="user-info">
					<img src="/my_icon.png" alt="author icon" />
					<div className="user-text">
						<p>Hello! I'm K10-K10. I'm junior high school student</p>
						<a href="https://github.com/K10-K10">My GitHub Account</a>
						<p>I primarily use C++, and belong to a robotics team.</p>
						<a href="https://techno-robocup.github.io/">Robot team's blogs</a>
					</div>
				</div>

				<div className="user-desc">
					<p>I started programming in first grade and attended robotics classes.</p>
					<p>At the same time, my father recommended Unity, and I started learning C#</p>
					<p>I entered junior high school and started competitive programming and C++.</p>
					<p>Recently, I haven't been able to join in competitions. Therefore, I want to join as much as possible.</p>
					<p>I want to update this site as much as possible.</p>
					<p>Thank you for Reading!</p>
				</div>
			</div>
		</div>
	)
}

export default About;
