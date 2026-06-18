import './tuilib_post.css'
import Talk from "@layouts/Talk/Talk";
import Head from "@layouts/Head/Head";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Code from '@parts/Code';

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
      <Talk title="">
        <div></div>
        <Markdown 
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              // const language = match ? match[1] : '';

              return (
                <Code>
                  {String(children).replace(/\n$/, '')}
                </Code>
              )
            }
          }}
        >
          {readme}
        </Markdown>
      </Talk>
    </div>
  );
}
