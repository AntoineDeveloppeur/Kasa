import Gallery from '../../Components/Gallery'
import Logementinfo from '../../Components/LogementInfo'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import '../../utils/styles/fichelogement.scss'

function Fichelogement({ setPageOpened, housingID }) {
    useEffect(() => {
        setPageOpened('')
    }, [])

    return (
        <div className="fichelogement">
            <Gallery housingID={housingID} />
            <Logementinfo housingID={housingID} />
        </div>
    )
}

export default Fichelogement
