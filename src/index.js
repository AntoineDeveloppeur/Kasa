import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header"
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Page404 from './Pages/Page404';
import Fichelogement from './Pages/Fichelogement';
import Apropos from './Pages/Apropos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="*" element={ <Page404 /> } />
      <Route path="/Fichelogement" element={ <Fichelogement />} />
      <Route path="/Apropos" element={ <Apropos /> } />
    </Routes>
    <Footer />
  </BrowserRouter>
);

