import './Home.css';
import { posts } from '@pages/Blog/posts';

export default function Home() {
	return (
		<div id='home'>
			<h1>Hello,World!</h1>
			<h2>See you 2026</h2>
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
