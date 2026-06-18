import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import Code from '@parts/Code'; // 💡 ビルド解決のため相対パスに変更

// 💡 読み込みフォルダを /src/contents/tuiLib/ に統一
const mdFiles = import.meta.glob('/src/contents/tuiLib/**/*.md', { query: '?raw', eager: true });

export default function TuiPost() {
  const { "*" : docPath } = useParams(); 

  // 💡 検索用のキー（ターゲットパス）を /src/contents/tuiLib/ に修正して一致させます
  const targetKey = `/src/contents/tuiLib/${docPath}.md`;
  const file = mdFiles[targetKey];

  if (!file) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Document not found.</h2>
        <p style={{ color: 'gray', fontSize: '14px' }}>パス: {docPath}</p>
      </div>
    );
  }

  const contentObj = file as any;
  const rawText = typeof contentObj.default === 'string' ? contentObj.default : "";

  let bodyContent = rawText;
  let titleFromMeta = "";

  if (rawText && rawText.startsWith('---')) {
    const parts = rawText.split('---');
    if (parts.length >= 3) {
      bodyContent = parts.slice(2).join('---').trim();
      
      const frontMatterLines = parts[1]?.split('\n') || [];
      frontMatterLines.forEach((line: string) => {
        const [key, ...valueParts] = line.split(':');
        if (key && key.trim() === 'title' && valueParts.length > 0) {
          titleFromMeta = valueParts.join(':').trim().replace(/['"]/g, '');
        }
      });
    }
  }

  return (
    <article className="tui-post-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {titleFromMeta && <h1 className="post-title">{titleFromMeta}</h1>}
      
      {/* 💡 Markdownにカスタムコンポーネントのレンダラーを渡します */}
      <Markdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';

            return !inline ? (
              // 💡 複数行のコードブロックをカスタムの Code コンポーネントで囲う
              <Code language={language} {...props}>
                {String(children).replace(/\n$/, '')}
              </Code>
            ) : (
              // インラインコードは通常のタグを使用
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {bodyContent}
      </Markdown>
    </article>
  );
}
