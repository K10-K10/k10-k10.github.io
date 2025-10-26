import { useState, ReactNode } from 'react';
import './Accordion.css';

type AccordionProps = { title: string; children: ReactNode; }
export default function Accordion({ title, children }: AccordionProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
