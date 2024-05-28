import Gallery from"../../Components/Gallery"
import Logementinfo from "../../Components/LogementInfo"
import { useParams } from "react-router-dom"

function Fichelogement() {
    const { housingIndex } = useParams()

    return (
        <div className="fichelogement">
            <Gallery housingIndex={housingIndex} />
            <Logementinfo housingIndex={housingIndex} />
        </div>
    )
}

export default Fichelogement