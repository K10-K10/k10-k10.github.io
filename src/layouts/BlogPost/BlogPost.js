import Talk from "../Talk/Talk";

function BlogPost({ title, date, content }) {
	return (
		<div className="blog-post">
			<Talk title={title}>
			<small className="data">{date}</small>
			<pre>{content}</pre>
		</Talk>
		</div>
	);
}

export default BlogPost;
