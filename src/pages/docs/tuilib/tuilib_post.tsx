import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "@parts/Code";
import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";

const mdFiles = import.meta.glob("/src/contents/tuiLib/**/*.md", { query: "?raw", eager: true });

const createId = (children: React.ReactNode): string => {
  if (typeof children === "string") {
    return children
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/\./g, "-")
      .replace(/\(\)/g, "");
  }
  if (Array.isArray(children)) {
    return children.map((child) => createId(child)).join("");
  }
  if (children && typeof children === "object" && "props" in children) {
    return createId((children as any).props.children);
  }
  return "";
};

export default function TuiPost() {
  const { "*": docPath } = useParams();

  let cleanPath = docPath?.replace(/^\/?(tuiLib|tuilib)\//i, "") || "";

  const targetKey = `/src/contents/tuiLib/docs/${cleanPath}.md`;

  const file = mdFiles[targetKey];

  if (!file) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Document not found.</h2>
      </div>
    );
  }

  const contentObj = file as any;
  const rawText = typeof contentObj.default === "string" ? contentObj.default : "";

  let bodyContent = rawText;
  let titleFromMeta = "";

  if (rawText && rawText.startsWith("---")) {
    const parts = rawText.split("---");
    if (parts.length >= 3) {
      bodyContent = parts.slice(2).join("---").trim();

      const frontMatterLines = parts[1]?.split("\n") || [];
      frontMatterLines.forEach((line: string) => {
        const [key, ...valueParts] = line.split(":");
        if (key && key.trim() === "title" && valueParts.length > 0) {
          titleFromMeta = valueParts.join(":").trim().replace(/['"]/g, "");
        }
      });
    }
  }

  return (
    <div className="TuiDocs-main">
      <Head
        title={titleFromMeta ? `K10-K10 - ${titleFromMeta}` : "K10-K10 - TUI Docs"}
        linkTitle="tui"
        description="K10-K10 Documentation - TUI library in C++ documentation."
        pageUrl={`https://K10-K10.github.io/docs/tuilib/${docPath}`}
      />

      <Talk title={titleFromMeta || "Documentation"}>
        <article className="tui-post-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "text";
                const isInline = !className && !String(children).includes("\n");

                return (
                  <Code lang={language} inline={isInline}>
                    {children}
                  </Code>
                );
              },

              a({ href, children, ...props }) {
                if (!href) return null;

                if (href.startsWith("http") || href.startsWith("#")) {
                  return (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      {...props}
                    >
                      {children}
                    </a>
                  );
                }

                const handleScrollToTop = () => {
                  setTimeout(() => {
                    window.scrollTo(0, 0);

                    const scrollContainer = document.querySelector(".TuiDocs-main");
                    if (scrollContainer) {
                      scrollContainer.scrollTop = 0;
                    }
                  }, 50);
                };
                const cleanHref = href
                  .replace(/^\.\.\//, "")
                  .replace(/^\.\//, "")
                  .replace(/\.md$/, "");
                const currentSegments = location.pathname.split("/");
                currentSegments.pop();
                const basePath = currentSegments.join("/");
                const targetUrl = `${basePath}/${cleanHref}`.replace(/\/+/g, "/");

                return (
                  <Link to={targetUrl} onClick={handleScrollToTop} {...props}>
                    {children}
                  </Link>
                );
              },

              h2({ children, ...props }) {
                const headingId = createId(children);
                return (
                  <h2 id={headingId} {...props}>
                    {children}
                  </h2>
                );
              },
              h3({ children, ...props }) {
                const headingId = createId(children);
                return (
                  <h3 id={headingId} {...props}>
                    {children}
                  </h3>
                ); // tagをh2からh3に修正
              },
              h4({ children, ...props }) {
                const headingId = createId(children);
                return (
                  <h4 id={headingId} {...props}>
                    {children}
                  </h4>
                ); // tagをh2からh4に修正
              },

              img({ src, alt, ...props }) {
                if (!src || src.startsWith("http") || src.startsWith("data:")) {
                  return (
                    <img
                      src={src}
                      alt={alt}
                      style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                      {...props}
                    />
                  );
                }

                const cleanSrc = src.replace(/^\.\.\//, "").replace(/^\.\//, "");
                const currentSegments = location.pathname.split("/");
                currentSegments.pop();
                const basePath = currentSegments.join("/");

                const targetSrc =
                  `/src/contents/tuiLib/${basePath.replace("/docs/tuilib", "")}/${cleanSrc}`.replace(
                    /\/+/g,
                    "/",
                  );

                return (
                  <span style={{ display: "block", textAlign: "center", margin: "20px 0" }}>
                    <img
                      src={targetSrc}
                      alt={alt}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                      {...props}
                    />
                    {alt && (
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          color: "#888",
                          marginTop: "8px",
                        }}
                      >
                        {alt}
                      </span>
                    )}
                  </span>
                );
              },
            }}
          >
            {bodyContent}
          </Markdown>
        </article>
      </Talk>
    </div>
  );
}
