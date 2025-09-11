import { useState } from "react";
import "./Github.css";
import Input from "./../../ui-parts/Input";
import Button from "./../../ui-parts/Button";
import Dialog from "./../../ui-parts/Dialog";

function Github() {
	const [name, setName] = useState("");
	const [repos, setRepos] = useState([]);
	const [errors, setErrors] = useState([]);

	const handleClick = async () => {
		if (!name) {
			setErrors((prev) => [...prev, "Error: name is required"]);
			return;
		}

		try {
			const response = await fetch(`https://api.github.com/users/${name}/repos`);
			if (!response.ok) {
				throw new Error("User is not found");
			}
			const data = await response.json();
			setRepos(data);
		} catch (error) {
			console.error("Request error:", error);
			setErrors((prev) => [...prev, "API failed"]);
		}
	};

	return (
		<div className="github">
			<Input
				type="text"
				label="Github User Name"
				value={name}
				onChange={setName}
				tmp="Input"
			/>
			<Button onClick={handleClick}>API</Button>

			{errors.map((msg, index) => (
				<Dialog key={index} button_style={{color: "var(--error-calor)" }}>
					<p>{msg}</p>
				</Dialog>
			))}

			<ul>
				{repos.map((repo) => (
					<li key={repo.id}>
						<a href={repo.html_url} target="_blank" rel="noreferrer">
							{repo.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Github;
