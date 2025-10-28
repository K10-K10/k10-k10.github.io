import './ProjectDesc.css';
import Accordion from '@layouts/Accordion/Accordion';
import Spacer from '@parts/Spacer';

type ProjectDescProps = {
	title: string;
	url: string;
	children: React.ReactNode;
}
export default function ProjectDesc({
	title,
	url,
	children
}: ProjectDescProps) {
	return (
		<div className='projectDesc'>
			<Accordion title={title}>
				<div className='contents'>
					<div className='url'>
						Github Repository:<a href={url}>{url}</a>
					</div>
					<Spacer />
					<div className='children'>
						<pre>{children}</pre>
					</div>
				</div>
			</Accordion>
		</div>
	);
}
