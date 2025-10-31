import './Projects.css';
import Head from '@layouts/Head/Head';
import ProjectDesc from '@layouts/ProjectDesc/ProjectDesc';

export default function Projects_home() {
	return (
		<div className='project-home'>
			<Head title={'Project'} linkTitle={'Projects'} description={'K10-K10 site - Projects home  page'}></Head>
			<h1>Projects List</h1>
			<ProjectDesc title={'Profile'} url={'https://github.com/K10-K10/K10-K10'}>
				Manage my GitHub profile
			</ProjectDesc>
			<ProjectDesc title={'SVG'} url={'https://github.com/K10-K10/SVG-icons'}>
				The SVG icon library used on this website.
			</ProjectDesc>
		</div>
	)
}
