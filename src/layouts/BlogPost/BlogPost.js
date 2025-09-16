import { useParams } from "react-router-dom";
import { posts } from "../../pages/Blog/posts";
import { Link } from "react-router-dom";
import Talk from "../Talk/Talk";
import Button from "./../../ui-parts/Button";

function BlogPost() {
	const { id } = useParams();
	const post = posts.find(p => p.id === Number(id));

	if (!post) return <h2>Not Found</h2>;

	return (
		<div className="blog-post">
			<Talk title={post.title}>
				<small  style={{ textAlign: "center", display: "block",marginBottom: "30px" }}className="data">{post.date}</small>
				<pre style={{lineHeight: "150%"}}>{post.content}</pre>
			</Talk>
		</div>
	);
}

export default BlogPost;
