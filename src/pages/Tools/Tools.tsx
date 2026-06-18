import "./Tools.css";
import Head from "@layouts/Head/Head";

function Tools_home() {
  return (
    <div className="tools">
      <Head
        title={"K10-K10 - Tools"}
        linkTitle={"Tools"}
        description={
          "K10-K10 Tools - Interactive tools including GitHub API viewer, RGB color checker, and Langton's Ant simulator."
        }
        pageUrl="https://K10-K10.github.io/#/Tools"
      />
      <h1>Tools</h1>
      <a href="#/Tools/Github">Github API</a>
      <a href="#/Tools/RGB">RGB checker</a>
      <a href="#/Tools/Ants">Langton's Ant</a>
    </div>
  );
}

export default Tools_home;
