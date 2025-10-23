import './Tools.css';
import Head from '@layouts/Head/Head';

function Tools_home() {
	return (
		<div className='tools'>
			<Head title={'Tools Top Page'} linkTitle={'Tools'} link_title={'K10-K10 site - Tool home  page'} />
			<h1>Tools</h1>
			<a href='#/Tools/Github'>Github API</a>
			<a href='#/Tools/RGB'>RGB checker</a>
			<a href='#/Tools/Ants'>Langton's Ant</a>
		</div>
	)
}

export default Tools_home;
