// #region importazioni
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pagine

// layout
import DefaultLayout from './pages/DefaultLayout';

// stile
import './App.css';

// componenti
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
// #endregion importazioni

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
