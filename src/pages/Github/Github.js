import { useState } from "react";
import './Github.css';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Github() {
	const [name, setName] = useState("");
	const [repos, setRepos] = useState([]);

	const handleClick = async () => {
		if (!name) {
			alert("Please input user name");
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
			alert("API failed");
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
