import './Projects.css';
import Head from '@layouts/Head/Head';
import ProjectDesc from '@layouts/ProjectDesc/ProjectDesc';

export default function Projects_home() {
	return (
		<div className='project-home'>
			<Head 
				title={'K10-K10 - Projects'} 
				linkTitle={'Projects'} 
				description={'K10-K10 projects - Explore portfolio including GitHub profile management and SVG icon library. Software development and creative work.'} 
				pageUrl="https://K10-K10.github.io/#/Projects"
			></Head>
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
