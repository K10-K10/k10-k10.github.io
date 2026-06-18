import { posts } from "./posts";
import { Link } from "react-router-dom";
import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";

export default function Blog() {
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div className="blog-home">
      <Head
        title={"K10-K10 - Blog"}
        linkTitle={"Blog"}
        description={
          "K10-K10 Blog - Read articles about programming, robotics, competitive programming, and software development projects."
        }
        pageUrl="https://K10-K10.github.io/Blog"
      />
      <Talk title="Blog">
        {sortedPosts.map((post) => (
          <div key={post.id}>
            <p className="blog-list">
              {post.date} :{" "}
              <Link className="blog-link" to={`/blog/${post.headName}`}>
                {post.title}
              </Link>
            </p>
          </div>
        ))}
      </Talk>
    </div>
  );
}
