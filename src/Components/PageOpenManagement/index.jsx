import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Page404 from '../../Pages/Page404'
import Fichelogement from '../../Pages/Fichelogement'
import Apropos from '../../Pages/Apropos'
import { useState } from 'react'
import Listlogement from '../../data/logement.json'

function PageOpenManagement() {
    const [pageOpened, setPageOpened] = useState(0)

    return (
        <BrowserRouter setPageOpened={setPageOpened}>
            <Header pageOpened={pageOpened} />
            <Routes>
                <Route
                    path="/"
                    element={<Home setPageOpened={setPageOpened} />}
                />
                {Listlogement.map((logement) => (
                    <Route
                        path={`/Fichelogement/${logement.id}`}
                        element={
                            <Fichelogement
                                setPageOpened={setPageOpened}
                                housingID={logement.id}
                            />
                        }
                        key={`Fichelogement${logement.id}`}
                    />
                ))}
                <Route
                    path="/Apropos"
                    element={<Apropos setPageOpened={setPageOpened} />}
                />
                <Route
                    path="*"
                    element={<Page404 setPageOpened={setPageOpened} />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default PageOpenManagement
