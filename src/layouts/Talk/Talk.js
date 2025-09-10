import './Talk.css'

function Talk({
	title,
	children,
	style_scope = {},
	style_contents = {}
}) {
	return (
		<div className="talk-scope" style={style_scope}>
			<div className="title">{title}</div>
			<div className="talk-contents" style={style_contents}>
				{children}
			</div>
		</div>
	);
}

export default Talk;
