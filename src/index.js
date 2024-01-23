import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import Realisations from './pages/Realisations'
import Prestations from './pages/Prestations'
import Error from './pages/Error'

import GlobalStyle from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='realisations' element={<Realisations />}></Route>
        <Route path='prestations' element={<Prestations />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);  