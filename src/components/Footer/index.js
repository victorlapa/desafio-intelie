import { useCallback } from 'react';
import { Container, Button, JsonError } from './styles';
import { useEditor } from '../../hooks/EditorContext';

export default function Footer() {
  const { changeUpdateGraph, editorText, jsonError } = useEditor();

  const handleClick = useCallback(() => {
    changeUpdateGraph(editorText);
  }, [editorText]);

  return (
    <Container>
      <Button onClick={handleClick}>Generate Chart</Button>
      {jsonError && <JsonError>{jsonError}</JsonError>}
    </Container>
  );
}
