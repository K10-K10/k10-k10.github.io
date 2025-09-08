import { useState } from "react";
import './Github.css';
import Input from './../../ui-parts/Input/Input';
import Button from './../../ui-parts/Button/Button'
import dialog from "https://hatuna-827.github.io/dialog.js";

function Github() {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [repos, setRepos] = useState([]);

	const handleClick = async () => {
		if (!name) {
			await dialog({content:"Please input user name",main_color:"#1E3E75",bg_color:"#fefefe",font:"ubuntu mono"});
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
			await dialog({content:"API failed",main_color:"#1E3E75",bg_color:"#fefefe",font:"ubuntu mono"});
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
