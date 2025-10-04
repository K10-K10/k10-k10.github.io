import { useParams } from 'react-router-dom';
import { posts } from '@pages/Blog/posts';
import Talk from '@layouts/Talk/Talk';
import Button from '@parts/Button';

function BlogPost() {
	const { id } = useParams();
	const post = posts.find(p => p.id === Number(id));

	if (!post) return (<h2>Not Found</h2>);

	return (
		<div className='blog-post'>
			<Talk title={post.title}>
				<small style={{ textAlign: 'center', display: 'block', marginBottom: '30px' }} className='data'>{post.date}</small>
				<pre style={{ lineHeight: '150%' }}>{post.content}</pre>
			<a href='#/Blog' className="list-button" style={{position: 'absolute',bottom: '20%'}}>
			<Button>Back to Blog List</Button>
			</a>
			</Talk>
		</div>
	);
}

export default BlogPost;
