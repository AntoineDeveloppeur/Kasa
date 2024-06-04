import React from 'react';
import Header from "../Header"
import Footer from '../Footer'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import Home from '../../Pages/Home'
import Page404 from '../../Pages/Page404';
import Fichelogement from '../../Pages/Fichelogement';
import Apropos from '../../Pages/Apropos';
import { useState } from 'react';

function PageOpenManagement () {

        const [ pageOpened, setPageOpened ] = useState(0)
    
    return (
        <BrowserRouter setPageOpened={setPageOpened} >
        <Header pageOpened={pageOpened}/>
        <Routes>
          <Route path="/" element={ <Home setPageOpened={setPageOpened} /> } />
          <Route path="*" element={ <Page404 setPageOpened={setPageOpened}/> } />
          <Route path="/Fichelogement/:housingID" element={ <Fichelogement setPageOpened={setPageOpened}/>} />
          <Route path="/Apropos" element={ <Apropos setPageOpened={setPageOpened}/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

  export default PageOpenManagement