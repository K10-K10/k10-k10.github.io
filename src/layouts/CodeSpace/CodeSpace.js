import './CodeSpace.css';
import Fieldset from '@parts/Fieldset';

function CodeSpace({ children, filename }) {
	return (
		<div className='codespace'>
			<Fieldset legend={filename}>
				<pre className='source'>
					<code>{children}</code>
				</pre>
			</Fieldset>
		</div>
	);
}

export default CodeSpace;
