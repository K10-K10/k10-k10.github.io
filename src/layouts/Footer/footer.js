import './footer.css';
function Footer() {
	return (
		<footer>
			<div className='footer_icon'>
				<a href='https://react.dev/'><img src='/react_logo.png' alt='React icon' /></a>
				<a href='https://github.com/K10-K10/K10-K10.github.io'><img src='/github_logo.png' alt='Github icon' /></a>
			</div>
			<div className='footer_info'>
				<p>2025</p>
				<p>React & Github Pages</p>
			</div>
		</footer>
	);
}

export default Footer;
