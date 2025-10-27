import './Header.css';
import Icon from '@parts/Icon';
import { useState, useEffect } from 'react';

export default function Header() {
	const topics = ['Projects', 'Tools', 'Blog', 'About'];
	const [mode, setMode] = useState<'light' | 'dark'>(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	//localStorage.removeItem('mode');

	useEffect(() => {
		document.body.setAttribute('data-theme', mode);
	}, [mode]);

	const modeButton = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
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
				<Icon name={mode === 'dark' ? 'moon' : 'sun'} theme='light' style={{ height: '24px', width: '24px' }} />
			</div >
		</header >
	);
}
