import './header.css';
import Button from '@parts/Button';
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
			<div className="theme" onClick={modeButton}>
				{mode === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="24" height="24" viewBox="0 0 100 100" stroke="#000"
					stroke-width="1" fill="none">
					<defs>
						<mask id="moonMask">
							<circle cx="45" cy="48" r="30" fill="white" />
							<circle cx="35" cy="38" r="30" fill="black" />
						</mask>
					</defs>
					<circle cx="50" cy="43" r="30" fill="white" mask="url(#moonMask)" />
				</svg>
					:
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#FFF" stroke-width="1.5"
						fill="none">
						<circle cx="12" cy="12" r="4.3" />
						<line x1="12" y1="2.4" x2="12" y2="6" />
						<line x1="12" y1="18" x2="12" y2="21.6" />
						<line x1="2.4" y1="12" x2="6" y2="12" />
						<line x1="18" y1="12" x2="21.6" y2="12" />
						<line x1="4.8" y1="4.8" x2="7.7" y2="7.7" />
						<line x1="19.2" y1="19.2" x2="16.3" y2="16.3" />
						<line x1="19.2" y1="4.8" x2="16.3" y2="7.7" />
						<line x1="4.8" y1="19.2" x2="7.7" y2="16.3" />
					</svg>

				}
			</div >
		</header >
	);
}

export default Header;
