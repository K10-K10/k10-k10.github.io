import "./ProjectDesc.css"
import Accordion from "../Accordion/Accordion"
import Spacer from "./../../ui-parts/Spacer";

function ProjectDesc({title, url, children}) {
	return (
		<div className="projectDesc">
			<Accordion title={title}>
				<div className="contents">
					<div className="url">
						Github Repository:<a href={url}>{url}</a>
					</div>
					<Spacer/>
					<div className="children">
						<pre>{children}</pre>
					</div>
				</div>
			</Accordion>
		</div>
	);
}

export default ProjectDesc;
