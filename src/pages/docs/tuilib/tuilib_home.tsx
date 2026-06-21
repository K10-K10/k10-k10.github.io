import "./tuilib_post.css";
import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "@parts/Code";
import { Link, useLocation } from "react-router-dom";
import TuiSidebar from "@layouts/Index";

import readme from "@contents/tuilib/README.md?raw";

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
          meta[key.trim()] = valueParts.join(":").trim().replace(/['"]/g, "");
        }
      });
    }
  }
  return { data: meta, bodyContent };
};

export default function TuiDocs() {
  const location = useLocation();
  const { data, bodyContent } = parseFrontMatter(readme);
  const titleFromMeta = data.title || "README";

  return (
    <div className="TuiDocs-main">
      <Head
        title={`K10-K10 - ${titleFromMeta}`}
        linkTitle="tui"
        description={"K10-K10 Documentation - TUI library in C++ documentation."}
        pageUrl="https://K10-K10.github.io/docs/tuilib"
      />
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", width: "100%" }}>
        <TuiSidebar />
        <Talk title={titleFromMeta} style={{ flex: 1 }}>
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
                const targetUrl = `${basePath}/tuilib/${cleanHref}`.replace(/\/+/g, "/");

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
        </Talk>
      </div>
    </div>
  );
}
