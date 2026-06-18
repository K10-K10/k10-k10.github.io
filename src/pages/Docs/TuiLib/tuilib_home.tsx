import './tuilib_post.css'
import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Code from '@parts/Code';
import { Link } from "react-router-dom";

import readme from '@contents/tuiLib/README.md?raw';

export default function TuiDocs() {
  return (
    <div className="TuiDocs-main">
      <Head
        title={"K10-K10 - TUI Docs"}
        linkTitle="tui"
        description={
          "K10-K10 Documentation - TUI library in C++ documentation."
        }
        pageUrl="https://K10-K10.github.io/Docs/TuiLib"
      />
      <Talk title="README">
      <Link to={`https://github.com/k10-k10/terminal-library`} >Github Repository</Link>
        <Markdown 
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : 'text';

          return !inline ? (
            <Code lang={language}>
              {children}
            </Code>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}
      >
      {readme}
      </Markdown>
      </Talk>
    </div>
  );
}
