import SyntaxHighlighter from 'react-syntax-highlighter';

type CodeBlockProps = {
  language: string;
  value: React.ReactNode;
};

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default CodeBlock;
