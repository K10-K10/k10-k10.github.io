import ReactMarkdown from "react-markdown";
import markdown from "../contents/10-2026.md?raw";
import styles from "./blog.module.css";

type Heading = {
  id: string;
  text: string;
};

function createId(text: string) {
  return encodeURIComponent(text.trim().toLowerCase().replace(/\s+/g, "-"));
}

function getHeadings(source: string): Heading[] {
  return [...source.matchAll(/^##\s+(.+)$/gm)].map((match) => {
    const text = match[1]!.trim();
    return { id: createId(text), text };
  });
}

const headings = getHeadings(markdown);

export default function Blog() {
  return (
    <main className={styles.blog}>
      <h1>Blog</h1>
      <nav aria-label="目次" className={styles.toc}>
        <h2>目次</h2>
        <ol>
          {headings.map((heading) => (
            <li key={heading.id}>
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ol>
      </nav>
      <article className={styles.article}>
        <ReactMarkdown
          components={{
            h2: ({ children }) => {
              const text = String(children);
              return <h2 id={createId(text)}>{children}</h2>;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </main>
  );
}