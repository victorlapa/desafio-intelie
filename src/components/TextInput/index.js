import { useState, useMemo } from 'react';
import Editor from '@monaco-editor/react';

export default function TextInput() {
  const [, setTextInput] = useState('');

  const exampleData = useMemo(() => "[{ name: 'a', start: 1, end: 2 }, { name: 'b', start: 1.2, end: 1.5 }]");

  function handleEditorChange(value) {
    setTextInput(value);
  }

  return (
    <div style={{ resize: 'vertical', overflow: 'auto' }}>
      <Editor height={400} defaultLanguage="javascript" defaultValue={exampleData} theme="vs-dark" onChange={handleEditorChange} />
    </div>
  );
}
