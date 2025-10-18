import { useState } from 'react';
import './Accordion.css';

function Accordion({ title, children }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='accordion'>
			<div
				className={`accordion-title ${isOpen ? 'active' : ''}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{title}</span>
				<span className='accordion-arrow'>
					{/*{isOpen ? 'v' : '<'}*/}
					&lt;
				</span>
			</div>
			<div className={`panel ${isOpen ? 'open' : ''}`}>
				{children}
			</div>
		</div>
	);
}

export default Accordion;
