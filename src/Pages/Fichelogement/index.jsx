import Gallery from"../../Components/Gallery"
import Logementinfo from "../../Components/LogementInfo"
import { useParams } from "react-router-dom"

function Fichelogement() {
    const { housingIndex } = useParams()
    console.log("housingIndex",housingIndex)

    return (
        <div className="fichelogement">
            <Gallery />
            <Logementinfo housingIndex={housingIndex} />
        </div>
    )
}

export default Fichelogement