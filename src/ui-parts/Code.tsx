import './Code.css';
type CodeProps = { lang: string; children: React.ReactNode; }
export default function Code({ lang, children }: CodeProps) {
	return (
		<div className="Code">
			<p className="Code-desc">{lang}</p>
			<pre className="Code-txt">
				<code>{children}</code>
			</pre>
		</div>
	);
}
