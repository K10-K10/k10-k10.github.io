import "./Tools.css"
import CodeSpace from "@layout/CodeSpace/CodeSpace";
import Head from "@layout/Head/Head";

function Tools_home() {
	return (
		<div className="tools">
			<Head title={"Tools"} link_title={"K10-K10 site - Tool home  page"} />
			<h1>Tools</h1>
			<a href="#/Tools/Github">Github API</a>
			<a href="#/Tools/RGB">RGB checker</a>
		</div>
	)
}

export default Tools_home;
