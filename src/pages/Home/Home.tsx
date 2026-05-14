import './Home.css';
import { posts } from '@pages/Blog/posts';
import Head from '@layouts/Head/Head';

export default function Home() {
	return (
		<div id='home'>
			<Head
				title={'K10-K10 - Personal Portfolio & Projects'}
				linkTitle={'Home'}
				description={'K10-K10 - Personal portfolio featuring software development projects, interactive tools, and blog posts. Explore my work in programming and creative projects.'}
				pageUrl="https://K10-K10.github.io/"
			/>
			<h1>Hello,World!</h1>
			<div className='information'>
				<h2>Projects</h2>
				<h2>Tools</h2>
				<p>
					New `langton's ant`
				</p>
				<h2>Latest Blog Posts</h2>
				<ul>
					{posts.slice(-3).reverse().map(p => (
						<li key={p.headName}>
							<a href={`/#/Blog/${p.headName}`}>{p.title}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
