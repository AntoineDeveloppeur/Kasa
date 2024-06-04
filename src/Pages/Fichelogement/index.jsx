import Gallery from"../../Components/Gallery"
import Logementinfo from "../../Components/LogementInfo"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import '../../utils/styles/fichelogement.scss'
import logementjson from '../../data/logement.json'
import Page404 from "../Page404"

function Fichelogement({setPageOpened}) {
    const { housingIndex } = useParams()

    useEffect(() => {
        setPageOpened("")
    },[])
    
    let logement= logementjson.find((item) => item.id === housingIndex)
    // if (logement === undefined) {
    //     return <Page404 />}
    console.log(logement)



    

    return (
        <div className="fichelogement">
            <Gallery housingIndex={housingIndex} />
            <Logementinfo housingIndex={housingIndex} />
        </div>
    )
}

export default Fichelogement