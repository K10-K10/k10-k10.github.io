import { posts } from "./posts";
import { Link } from "react-router-dom";
import Talk from "./../../layouts/Talk/Talk";

function Blog() {
	const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

	return (
		<div className="blog-home">
			<Talk title="Blog">
				{sortedPosts.map(post => (
					<div key={post.id}>
						<p className="blog-list">
							{post.date} :{" "}
							<Link className="blog-link" to={`/blog/${post.id}`}>
								{post.title}
							</Link>
						</p>
					</div>
				))}
			</Talk>
		</div>
	);
}

export default Blog;
