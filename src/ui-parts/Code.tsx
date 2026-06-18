import { css } from "@emotion/react";
import CopyButton from "./Copy";

type CodeProps = {
  lang?: string | null;
  children: React.ReactNode;
};

export default function Code({ lang, children }: CodeProps) {
  return (
    <div css={code}>
      <p css={codeLang}>{lang}</p>
      <div css={codeCopyButton}>
      <CopyButton textToCopy={String(children)} />
      </div>
      <pre css={codeTxt}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

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
});

const codeLang = css({
  color: "#aaa",
  fontSize: "0.9rem",
  marginBottom: "4px",
  textTransform: "uppercase",
});

const codeTxt = css({
  marginTop: "10px",
  color: "var(--white-color)",
  boxSizing: "border-box",
  whiteSpace: "pre-wrap",
  fontFamily: "monospace",
  tabSize: 4,
});

const codeCopyButton = css({
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 10,
});
