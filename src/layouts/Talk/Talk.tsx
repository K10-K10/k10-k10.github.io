import './Talk.css';

type TalkProps = { title: string; children: React.ReactNode; style_scope: React.CSSProperties; style_contents: React.CSSProperties; }
export default function Talk({
	title,
	children,
	style_scope = {},
	style_contents = {}
}: TalkProps) {
	return (
		<div className='talk-scope' style={style_scope}>
			<div className='title'>{title}</div>
			<div className='talk-contents' style={style_contents}>
				{children}
			</div>
		</div>
	);
}
