import React, { useState } from 'react';

type CopyButtonProps = { textToCopy: string }
function CopyButton({ textToCopy }: CopyButtonProps) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 1000);
		} catch (err) {
			console.error('Failed to copy: ', err);
			alert('Failed to copy text.'); // Provide user feedback on failure
		}
	};

	return (
		<div>
			<button onClick={handleCopy}>
				{isCopied ? 'Copied!' : 'Copy'}
			</button>
		</div>
	);
}

export default CopyButton;
