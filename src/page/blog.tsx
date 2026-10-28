import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import styles from "./blog.module.css";

type Post = {
  id: string;
  title: string;
  date: string;
  section: string;
  content: string;
};

function createId(text: string) {
  return encodeURIComponent(text.trim().toLowerCase().replace(/\s+/g, "-"));
}

function getPosts() {
  const files = import.meta.glob("../contents/posts/*", {
    eager: true,
    query: "?raw",
    import: "default",
  }) as Record<string, string>;

  return Object.entries(files)
    .sort(([left], [right]) => left.localeCompare(right))
    .flatMap(([file, source]) => {
      const parts = source.split(/^---\s*$/gm);
      const documents = [];
      for (let index = 1; index < parts.length; index += 2) {
        const metadata = parts[index];
        if (metadata === undefined || !metadata.includes("title:")) {
          continue;
        }
        documents.push({
          index,
          source: `---\n${metadata}\n---\n${parts[index + 1] ?? ""}`,
        });
      }

      return documents.map(({ index, source: document }): Post => {
        const parsed = matter(document);
        const title = String(parsed.data.title ?? "");
        const date = String(parsed.data.date ?? "");
        const section = String(parsed.data.section ?? "");
        return {
          id: createId(`${file}-${index}-${title}`),
          title,
          date,
          section,
          content: parsed.content.trim(),
        };
      });
    });
}

const posts = getPosts();

export default function Blog() {
  return (
    <main className={styles.blog}>
      <h1>Blog</h1>
      <article className={styles.article}>
        {posts.map((post) => (
          <div
            key={post.id}
            id={post.id}
            className={post.section}
            data-section={post.section}
          >
            <h2>{post.title}</h2>
            <small className={styles.meta}>{post.date}</small>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        ))}
      </article>
    </main>
  );
}
