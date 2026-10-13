import { css } from "@emotion/react";
import CopyButton from "./Copy";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeProps = {
  lang?: string | null;
  inline?: boolean;
  children: React.ReactNode;
};

export default function Code({ lang, inline, children }: CodeProps) {
  const language = lang ? lang.replace("language-", "") : "text";

  if (inline) {
    return <code css={inlineCode}>{children}</code>;
  }

  return (
    <div css={code}>
      <p css={codeLang}>{language}</p>
      <div css={codeCopyButton}>
        <CopyButton textToCopy={String(children)} />
      </div>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          background: "transparent",
          padding: 0,
          margin: 0,
          fontSize: "1rem",
        }}
        codeTagProps={{
          style: {
            fontFamily: "monospace",
            tabSize: 4,
          },
        }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}

const inlineCode = css({
  background: "var(--code-color)",
  color: "var(--white-color)",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "0.95em",
  fontFamily: "monospace",
  wordBreak: "break-word",
  display: "inline-block",
});

const code = css({
  position: "relative",
  marginTop: "10px",
  marginBottom: "10px",
  display: "block",
  width: "100%",
  textAlign: "left",
  padding: "15px",
  background: "var(--code-color)",
  borderRadius: "10px",
  overflowX: "auto",
});

const codeLang = css({
  color: "#aaa",
  fontSize: "0.9rem",
  marginBottom: "8px",
  textTransform: "uppercase",
});

const codeCopyButton = css({
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 10,
});
