import {
  createContext, useCallback, useContext, useState,
} from 'react';

const EditorContext = createContext();

export function EditorProvider({ children }) {
  const [editorText, setEditorText] = useState('');
  const [updateGraph, setUpdateGraph] = useState('');
  const [jsonError, setJsonError] = useState('');

  const changeEditorText = useCallback((value) => {
    setEditorText(value);
  }, []);

  const changeUpdateGraph = useCallback((value) => {
    setUpdateGraph(value);
  }, []);

  const changeJsonError = useCallback((value) => {
    setJsonError(value);
  }, []);

  return (
    <EditorContext.Provider value={{
      changeEditorText, editorText, updateGraph, changeUpdateGraph, jsonError, changeJsonError,
    }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  return context;
}
