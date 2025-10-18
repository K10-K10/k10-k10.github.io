import './Projects.css';
import Head from '@layouts/Head/Head';
import ProjectDesc from '@layouts/ProjectDesc/ProjectDesc';

function Projects_home() {
	return (
		<div className='project-home'>
			<Head title={'Projects'} link_title={'K10-K10 site - Projects home  page'}></Head>
			<h1>Projects List</h1>
			<ProjectDesc title={'Profile'} url={'https://github.com/K10-K10/K10-K10'}>
				Manage my GitHub profile
			</ProjectDesc>
		</div>
	)
}

export default Projects_home;
