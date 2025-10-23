import Talk from '@layouts/Talk/Talk';
import Head from '@layouts/Head/Head';

function Docs() {
	const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

	return (
		<div className='Docs-home'>
			<Head title='Docs' />
			<Talk title='Documents'>
			</Talk>
		</div>
	);
}

export default Docs;
