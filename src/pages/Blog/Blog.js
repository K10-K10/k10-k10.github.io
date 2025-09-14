import { posts } from "./posts";
import BlogPost from "./../../layouts/BlogPost/BlogPost";
import Talk from "./../../layouts/Talk/Talk";
import Head from "./../../layouts/Head/Head";

function Blog() {
	return (
		<div className="blogList">
			<Head title={"Blog"}></Head>
			<Talk title={"Blog"} style_scope={{background: "var(--cloudy_background-color)"}}>
				{posts.map(posts => (
					<li key={posts.id}>
						<p>{posts.date}:<a href="/#/BlogPost">{posts.title}</a></p>
					</li>
					//<BlogPost key={posts.id} {...posts} />
				))}
			</Talk>
		</div>
	);
}

export default Blog;
