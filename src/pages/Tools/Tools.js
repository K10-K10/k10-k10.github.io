import "./Tools.css"
import CodeSpace from "./../../layouts/CodeSpace/CodeSpace";
import Head from "./../../layouts/Head/Head";

function Tools_home() {
	return (
		<div className="tools">
			<Head title={"Tools"} link_title={"K10-K10 site - Tool home  page"}/>
		<CodeSpace filename={"test.cpp"}>
				{`#include <iostream>
using namespace std;

int main() {
	cout << "Hello World!" << endl;
	return 0;
}`}
			</CodeSpace>
			<p>Tools</p>
		</div>
	)
}

export default Tools_home;
