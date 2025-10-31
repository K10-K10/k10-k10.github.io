import Talk from '@layouts/Talk/Talk';
import Head from '@layouts/Head/Head';
import Code from '@parts/Code';

export default function Docs() {
	return (
		<div className='Docs-home'>
			<Head title={'Docs Top Page'} linkTitle='Docs' description={'K10-K10 site - Documents top page'} />
			<Talk title='Documents'>
				<Code>{
					`test`}</Code>
			</Talk>
		</div>
	);
}
