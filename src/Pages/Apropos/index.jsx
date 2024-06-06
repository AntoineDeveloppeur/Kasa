import Banner from '../../Components/Banner'
import Collapse from '../../Components/Collapse'
import banner_Apropos from '../../assets/banner_Apropos.png'
import styled from 'styled-components'
import { useEffect } from 'react'
import '../../utils/styles/apropos.scss'

const Container = styled.div``

function Apropos({ setPageOpened }) {
    useEffect(() => {
        setPageOpened('Apropos')
    }, [])

    return (
        <div className="apropos">
            <Banner pic={banner_Apropos} alt="paysage de montage" />
            <Container className="container">
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont rgéulièrement vérifiées par nos équipes."
                />
                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse
                    title="Service"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageur, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien ) l'hôte qu'au locataires, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </Container>
        </div>
    )
}

export default Apropos
