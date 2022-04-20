import Editor from '@monaco-editor/react';

export default function TextInput() {
  function handleEditorChange(value) {
    console.log(value);
  }

  return (
    <div style={{ resize: 'vertical', overflow: 'auto' }}>
      <Editor height={400} defaultLanguage="javascript" defaultValue="" theme="vs-dark" onChange={handleEditorChange} />
    </div>
  );
}
