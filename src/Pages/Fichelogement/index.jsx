import Gallery from"../../Components/Gallery"
import Logementinfo from "../../Components/LogementInfo"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import '../../utils/styles/fichelogement.scss'
import Listlogement from '../../data/logement.json'

function Fichelogement({setPageOpened}) {
    const { housingID } = useParams()
    
    useEffect(() => {
        setPageOpened("")
    },[])
    
    let logement= Listlogement.find((item) => item.id === housingID)
    if (logement === undefined) {
       window.location.href="/404"
    }

    console.log(logement)

    return (
        <div className="fichelogement">
            <Gallery housingID={housingID} />
            <Logementinfo housingID={housingID} />
        </div>
    )
}

export default Fichelogement