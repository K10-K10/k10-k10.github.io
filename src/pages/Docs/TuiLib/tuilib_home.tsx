import "./tuilib_post.css";
import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "@parts/Code";
import { Link } from "react-router-dom";

import readme from "@contents/tuiLib/README.md?raw";

const createId = (children: React.ReactNode): string => {
  if (typeof children === "string") {
    return children
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(".", "-")
      .replace("(", "")
      .replace(")", "");
  }
  if (Array.isArray(children)) {
    return children.map((child) => createId(child)).join("");
  }
  if (children && typeof children === "object" && "props" in children) {
    return createId((children as any).props.children);
  }
  return "";
};

export default function TuiDocs() {
  return (
    <div className="TuiDocs-main">
      <Head
        title={"K10-K10 - TUI Docs"}
        linkTitle="tui"
        description={"K10-K10 Documentation - TUI library in C++ documentation."}
        pageUrl="https://K10-K10.github.io/Docs/TuiLib"
      />
      <Talk title="README">
        <div
          style={{ marginBottom: "20px", display: "flex", gap: "15px", flexDirection: "column" }}
        >
          <a
            href="https://github.com/k10-k10/KrowTUI"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Github Repository
          </a>
        </div>

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

            h2({ children, ...props }) {
              const headingId = createId(children);

              return (
                <h2 id={headingId} {...props}>
                  {children}
                </h2>
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
                const targetUrl = `${basePath}/TUILib/${cleanHref}`.replace(/\/+/g, "/");

                return (
                  <Link to={targetUrl} onClick={handleScrollToTop} {...props}>
                    {children}
                  </Link>
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

              const cleanSrc = src.replace(/^\.\.\//, "").replace(/^\.\//, "");
              const currentPath = location.pathname.toLowerCase();

              let targetSrc = "";

              if (currentPath === "/docs/tuilib" || currentPath === "/docs/tuilib/") {
                targetSrc = `/src/contents/tuiLib/${cleanSrc}`;
              } else {
                const currentSegments = location.pathname.split("/");
                currentSegments.pop();
                const basePath = currentSegments.join("/");

                const subFolder = basePath.replace(/^\/Docs\/TuiLib/i, "");
                targetSrc = `/src/contents/tuiLib/${subFolder}/${cleanSrc}`;
              }

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
          {readme}
        </Markdown>
      </Talk>
    </div>
  );
}
