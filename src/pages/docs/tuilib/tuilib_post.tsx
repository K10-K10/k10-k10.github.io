import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "@parts/Code";
import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";
import Index from "@layouts/Index/index";

const mdFiles = import.meta.glob("/src/contents/tuilib/**/*.md", { query: "?raw", eager: true });

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

const parseFrontMatter = (rawText: string) => {
  const meta: Record<string, string> = { title: "", version: "", date: "", namespace: "" };
  let bodyContent = rawText;

  if (rawText && rawText.startsWith("---")) {
    const parts = rawText.split("---");
    if (parts.length >= 3) {
      bodyContent = parts.slice(2).join("---").trim();

      const lines = parts[1].split("\n");
      lines.forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length > 0) {
          const cleanKey = key.trim();
          const cleanValue = valueParts.join(":").trim().replace(/['"]/g, "");
          meta[cleanKey] = cleanValue;
        }
      });
    }
  }

  return { data: meta, bodyContent };
};

export default function TuiPost() {
  const { "*": docPath } = useParams();

  const targetKey = `/src/contents/tuilib/${docPath}.md`.replace(/\/+/g, "/");

  const file = mdFiles[targetKey];

  if (!file) {
    return (
      <div style={{ padding: "20px", color: "#ff4d4f" }}>
        <h2>Document not found.</h2>
      </div>
    );
  }

  const contentObj = file as any;
  const rawText = typeof contentObj.default === "string" ? contentObj.default : "";

  const { data, bodyContent } = parseFrontMatter(rawText);

  const titleFromMeta = data.title;
  const version = data.version;
  const date = data.date;
  const namespace = data.namespace;

  return (
    <div className="TuiDocs-main">
      <Head
        title={titleFromMeta ? `K10-K10 - ${titleFromMeta}` : "K10-K10 - TUI Docs"}
        linkTitle="tui"
        description="K10-K10 Documentation - TUI library in C++ documentation."
        pageUrl={`https://K10-K10.github.io/docs/tuilib/${docPath}`}
      />
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", width: "100%" }}>
        <Index />
        <Talk title={titleFromMeta || "Documentation"} style={{ flex: 1 }}>
          <article className="tui-post-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
            {(version || date || namespace) && (
              <div
                style={{
                  marginBottom: "20px",
                  padding: "10px 15px",
                  background: "rgba(0,0,0,0.03)",
                  borderRadius: "6px",
                  fontSize: "0.9rem",
                  color: "#555",
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                {version && (
                  <span>
                    <strong>Version:</strong> {version}
                  </span>
                )}
                {date && (
                  <span>
                    <strong>Date:</strong> {date}
                  </span>
                )}
                {namespace && (
                  <span>
                    <strong>Namespace:</strong> <code>{namespace}</code>
                  </span>
                )}
              </div>
            )}

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
                  );
                },
                h4({ children, ...props }) {
                  const headingId = createId(children);
                  return (
                    <h4 id={headingId} {...props}>
                      {children}
                    </h4>
                  );
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

                  const cleanSrc = src
                    .replace(/^\.\.\//, "")
                    .replace(/^\.\//, "")
                    .replace(/^docs\//i, "");

                  let targetSrc = `/tuilib/docs/${cleanSrc}`;
                  targetSrc = targetSrc.replace(/\/+/g, "/");

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
    </div>
  );
}
