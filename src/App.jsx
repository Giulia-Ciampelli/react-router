// #region importazioni
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pagine
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

// layout
import DefaultLayout from './pages/DefaultLayout';

// stile
import './App.css';

// componenti
import Main from './components/Main';
// #endregion importazioni

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Main />} />
            <Route path='/about' element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
