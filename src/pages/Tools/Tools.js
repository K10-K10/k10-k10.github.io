import "./Tools.css"
import CodeSpace from "./../../layouts/CodeSpace/CodeSpace";

function Tools_home() {
	return (
		<div className="tools">
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
