import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css'
import { Post, posts } from '@pages/Blog/posts';
import Talk from '@layouts/Talk/Talk';
import Button from '@parts/Button';
import NotFound from '@pages/404/404';
import Icon from '@parts/Icon';

export default function BlogPost() {
	const { headName } = useParams();
	const navigate = useNavigate();
	const post: Post | undefined = posts.find((p: Post) => p.headName === headName);

	if (!post) return <NotFound />;

	const handleNext = () => {
		const nextPost = posts.find((item: Post) => item.id === post.id + 1);
		if (nextPost) {
			navigate(`/Blog/${nextPost.headName}`);
		} else {
			alert("This is the last post.");
		}
	};
	const handleForward = () => {
		const nextPost = posts.find((item: Post) => item.id === post.id - 1);
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

				<div className="blog-buttons">
					<Button className="forwardBlog" onClick={handleForward}>
						<Icon name="left" theme="re" />
					</Button>
					<Button className="nextBlog" onClick={handleNext}>
						<Icon name="right" theme="re" />
					</Button>
				</div>
			</Talk>
		</div >
	);
}

