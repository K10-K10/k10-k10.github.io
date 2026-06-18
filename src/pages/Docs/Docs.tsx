import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";
import Grid from "@layouts/Grid/grid";
import Code from "@parts/Code";

export default function Docs() {
  return (
    <div className="Docs-home">
      <Head
        title={"K10-K10 - Documentation"}
        linkTitle="Docs"
        description={
          "K10-K10 Documentation - Technical documentation and guides for K10-K10 projects and tools."
        }
        pageUrl="https://K10-K10.github.io/#/Docs"
      />
      <Talk title="K10-K10 Documentation">
        <Grid
          title="test"
          description="This is a test grid item."
          imageUrl="/public/github_logo.png"
          link="https://example.com"
        />
      </Talk>
    </div>
  );
}
