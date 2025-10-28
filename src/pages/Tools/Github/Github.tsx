import { useState } from 'react';
import './Github.css';
import Input from '@parts/Input';
import Dialog from '@parts/Dialog';
import Head from '@layouts/Head/Head';
import Button from '@parts/Button';

function Github() {
	const [name, setName] = useState('');
	const [repos, setRepos] = useState<{ id: number, html_url: string, name: string }[]>([]);
	const [errors, setErrors] = useState<string[]>([]);

	const handleClick = async () => {
		if (!name) {
			setErrors((prev) => [...prev, 'Error: name is required']);
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
			setErrors((prev) => [...prev, 'API failed']);
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
			<Button onClick={handleClick} disabled={false}>API</Button>

			{errors.map((msg, index) => (
				<Dialog key={index} button_style={{ color: 'var(--error-color)', }}>
					<p>{msg}</p>
				</Dialog>
			))}

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
