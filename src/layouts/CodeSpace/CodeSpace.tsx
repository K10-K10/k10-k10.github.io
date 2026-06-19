import { ReactNode } from "react";
import "./CodeSpace.css";
import Fieldset from "@parts/Fieldset";

type CodeSpaceProps = {
  filename: string;
  children: ReactNode;
};

export function CodeSpace({ filename, children }: CodeSpaceProps) {
  return (
    <div className="codespace">
      <Fieldset legend={filename}>
        <pre className="source">
          <code>{children}</code>
        </pre>
      </Fieldset>
    </div>
  );
}

export function InlineCode(contents: string) {
  return (
    <div className="inlineCode">
      <code>{contents}</code>
    </div>
  );
}
