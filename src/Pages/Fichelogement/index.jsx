import Gallery from '../../Components/Gallery'
import Logementinfo from '../../Components/LogementInfo'
import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import '../../utils/styles/fichelogement.scss'
import Listlogement from '../../data/logement.json'

function Fichelogement({ setPageOpened }) {
    const { housingID } = useParams()

    useEffect(() => {
        setPageOpened('')
    }, [])

    let logement = Listlogement.find((item) => item.id === housingID)
    if (logement === undefined) {
        /* Ici pour rédiriger vers la page 404, deux façons sont possibles.
         * La première est d'utiliser window.location comme dans du javascript normal:
         * window.location.href="/404"
         * Sinon, on peut utiliser le composant navigate comme si dessous
         */
        return <Navigate to="/404" replace={true} />
    }

    return (
        <div className="fichelogement">
            <Gallery housingID={housingID} />
            <Logementinfo housingID={housingID} />
        </div>
    )
}

export default Fichelogement
