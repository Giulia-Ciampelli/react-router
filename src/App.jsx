// #region importazioni
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pagine

// stile
import './App.css';

// componenti
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// #endregion importazioni

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
