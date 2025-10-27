import { useState } from 'react';
import './Github.css';
import Input from '@parts/Input';
import Snackbar from 'https://hatuna-827.github.io/module/snackbar.js';
import Head from '@layouts/Head/Head';
import Button from '@parts/Button';

function Github() {
	const [name, setName] = useState('');
	const [repos, setRepos] = useState([]);
	const [errors, setErrors] = useState([]);

	const handleClick = async () => {
		if (!name) {
			Snackbar({ context: 'Error: name is required', type: 'Err' });
			return;
		}

		try {
			const response = await fetch(`https://api.github.com/users/${name}/repos`);
			if (!response.ok) {
				throw new Error('User is not found');
			}
			const data = await response.json();
			setRepos(data);
		} catch (error) {
			console.error('Request error:', error);
			Snackbar({ context: 'API failed', type: "Err" });
		}
	};

	return (
		<div className='github'>
			<Head title={'Github API'} linkTitle={'Github'} description={'K10-K10 site - Use Github-API'} />
			<Input
				type='text'
				label='Github User Name'
				value={name}
				onChange={setName}
				tmp='Input'
			/>
			<Button onClick={handleClick}>API</Button>

			<ul>
				{repos.map((repo) => (
					<li key={repo.id}>
						<a href={repo.html_url} target='_blank' rel='noreferrer'>
							{repo.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Github;
