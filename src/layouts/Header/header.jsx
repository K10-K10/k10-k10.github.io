import './header.css';
import Icon from '@parts/Icon';
import { useState, useEffect } from 'react';

function Header() {
	const topics = ['Projects', 'Tools', 'Blog', 'About'];
	const [mode, setMode] = useState('light');

	useEffect(() => {
		const browser_setting = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		const savedMode = localStorage.getItem('mode') || browser_setting;
		setMode(savedMode);
		document.body.setAttribute('data-theme', savedMode);
	}, []);

	const modeButton = () => {
		const newMode = mode === 'dark' ? 'light' : 'dark';
		setMode(newMode);
		localStorage.setItem('mode', newMode);
		document.body.setAttribute('data-theme', newMode);
	};


	return (
		<header className='header'>
			<a href='/#/' className='title'>K10-K10</a>
			<label id='hamburger-menu'>
				<input id='menu' type='checkbox' />
				<div id='topic_scope_bg'>
					<div id='topic_scope'>
						{topics.map((topic, i) => (
							<a
								key={i}
								href={`/#/${topic}`}
								className='topic'
							>
								{topic}
							</a>
						))}
					</div>
				</div>
				<div id='box'><span id='bar'></span></div>
			</label>
			<div className='theme' onClick={modeButton}>
				{mode === 'dark' ? <Icon name="moon" theme="light" /> : <Icon name="sun" theme="light" />

				}
			</div >
		</header >
	);
}

export default Header;
