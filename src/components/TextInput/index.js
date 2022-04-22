import { useMemo } from 'react';
import Editor from '@monaco-editor/react';
import { useEditor } from '../../hooks/EditorContext';

import { Container } from './styles';

export default function TextInput() {
  const { changeEditorText, editorText } = useEditor();

  const exampleData = useMemo(() => `[
    { "name": "Glorious Model O", "data": { "00:00": 1, "00:01": 10 } },
    { "name": "G Pro Wireless", "data": { "00:00": 2, "00:01": 5 } }
]`);

  return (
    <Container>
      <Editor defaultLanguage="javascript" defaultValue={exampleData} value={editorText} theme="vs-dark" onChange={(value) => changeEditorText(value)} height={400} />
    </Container>
  );
}
