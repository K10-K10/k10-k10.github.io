import { css } from '@emotion/react';
import CopyButton from './Copy';

type CodeProps = {
	lang?: string | null;
	children: React.ReactNode;
};

export default function Code({ lang, children }: CodeProps) {
	return (
		<div css={code}>
			<p css={codeLang}>{lang}</p>
			<CopyButton css={codeCopyButton} textToCopy={children} />
			<pre css={codeTxt}>
				<code>{children}</code>
			</pre>
		</div>
	);
}

const code = css({
	marginTop: '10px',
	marginBottom: '10px',
	display: 'block',
	width: '100%',
	textAlign: 'left',
	padding: '10px',
	background: '#181818',
	borderRadius: '10px',
});

const codeLang = css({
	color: '#aaa',
	fontSize: '0.9rem',
	marginBottom: '4px',
});

const codeTxt = css({
	paddingLeft: '24px',
	color: 'var(--white-color)',
	boxSizing: 'border-box',
	//overflowX: 'auto',
	whiteSpace: 'pre-wrap',
	fontFamily: 'monospace',
	tabSize: 4,
});

const codeCopyButton = css({
	marginRight: '80%',
	color: ''
});
