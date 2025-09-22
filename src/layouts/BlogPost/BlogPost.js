import { useParams } from 'react-router-dom';
import { posts } from '@pages/Blog/posts';
import Talk from '@layouts/Talk/Talk';

function BlogPost() {
	const { id } = useParams();
	const post = posts.find(p => p.id === Number(id));

	if (!post) return (<h2>Not Found</h2>);

	return (
		<div className='blog-post'>
			<Talk title={post.title}>
				<small style={{ textAlign: 'center', display: 'block', marginBottom: '30px' }} className='data'>{post.date}</small>
				<pre style={{ lineHeight: '150%' }}>{post.content}</pre>
			</Talk>
		</div>
	);
}

export default BlogPost;
