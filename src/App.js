import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';

import Header from './components/Header';
import TextInput from './components/TextInput';
import LineChart from './components/LineChart';
import Footer from './components/Footer';

import themes from './assets/styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Header />
      <TextInput />
      <LineChart />
      <Footer />
    </ThemeProvider>
  );
}
