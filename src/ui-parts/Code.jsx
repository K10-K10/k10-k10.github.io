import './Code.css'

export default function Code({ lang, children }) {
	return (
		<div className="Code">
			<p className="Code-desc">{lang}</p>
			<pre className="Code-txt">
				<code>{children}</code>
			</pre>
		</div>
	);
}
