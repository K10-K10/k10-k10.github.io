import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '@pages/Blog/posts';
import Talk from '@layouts/Talk/Talk';
import Button from '@parts/Button';
import NotFound from '@pages/404/404';

export default function BlogPost() {
	const { headName } = useParams();
	const navigate = useNavigate();
	const post = posts.find((p) => p.headName === headName);

	if (!post) return <NotFound />;

	const handleNext = () => {
		const nextPost = posts.find(item => item.id === post.id + 1);
		if (nextPost) {
			navigate(`/Blog/${nextPost.headName}`);
		} else {
			alert("This is the last post.");
		}
	};
	const handleForward = () => {
		const nextPost = posts.find(item => item.id === post.id - 1);
		if (nextPost) {
			navigate(`/Blog/${nextPost.headName}`);
		} else {
			alert("This is the first post.");
		}
	};

	return (
		<div className='blog-post'>
			<Talk title={post.title}>
				<small
					style={{ textAlign: 'center', display: 'block', marginBottom: '30px' }}
					className='data'
				>
					{post.date}
				</small>

				<pre style={{ lineHeight: '150%', whiteSpace: 'pre-wrap' }}>
					{post.content}
				</pre>

				<Button onClick={handleForward}>
					Forward
				</Button>
				<a href='#/Blog' className='list-button'>
					<Button style={{ margin: '40px 0px 20px' }}>
						Back to Blog List
					</Button>
				</a>

				<Button onClick={handleNext}>
					Next
				</Button>
			</Talk>
		</div >
	);
}

