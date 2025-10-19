import { useParams } from 'react-router-dom';
import { posts } from '@pages/Blog/posts';
import Talk from '@layouts/Talk/Talk';
import Button from '@parts/Button';
import NotFound from '@pages/404/404';

function BlogPost() {
	const { headName } = useParams();
	const post = posts.find((p) => p.headName === headName);


	if (!post) return (<NotFound />);

	return (
		<div className='blog-post'>
			<Talk title={post.title}>
				<small style={{ textAlign: 'center', display: 'block', marginBottom: '30px' }} className='data'>{post.date}</small>
				<pre style={{ lineHeight: '150%', whiteSpace: 'pre-wrap' }}>{post.content}</pre>
				<a href='#/Blog' className='list-button'>
					<Button style={{ margin: '40px 0px 20px' }}>Back to Blog List</Button>
				</a>
			</Talk>
		</div>
	);
}

export default BlogPost;
