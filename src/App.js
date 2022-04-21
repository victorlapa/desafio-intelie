import GlobalStyles from './assets/styles/global';

import Header from './components/Header';
import TextInput from './components/TextInput';
import Graph from './components/Graph';
import Footer from './components/Footer';

import { EditorProvider } from './hooks/EditorContext';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <EditorProvider>
        <TextInput />
        <Graph />
        <Footer />
      </EditorProvider>
    </>
  );
}
