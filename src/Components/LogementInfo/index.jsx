import styled from 'styled-components'
import Tags from '../Tags'
import Rating from '../Rating'
import Collapse from '../Collapse'
import '../../utils/styles/GlobalStyle.scss'
import splitName from '../../utils/functions/splitname'
import ListelogementJSON from '../../data/logement.json'
import '../../utils/styles/logementinfo.scss'

    const Info = styled.div``
    const Firstinfo = styled.div``
    const Titleandtags = styled.div``
    const Title = styled.h1``
    const Localisation = styled.p``
    const Hostandrating = styled.div``
    const Host = styled.div``
    const Name = styled.div``
    const FirstName = styled.p``
    const FamilyName = styled.p``
    const Picture = styled.img``
    const Collapses = styled.div``


function LogementInfo({housingIndex}) {

    const [firstName, familyName] = splitName(ListelogementJSON[housingIndex].host.name)
     
    return (
        <Info className="info">
            <Firstinfo className="info__first-info">
                <Titleandtags className="info__first-info__title-and-tags">
                    <Title className="info__first-info__title-and-tags__title">
                        {ListelogementJSON[housingIndex].title}
                    </Title>
                    <Localisation className="info__first-info__title-and-tags__localisation">
                        {ListelogementJSON[housingIndex].location}
                    </Localisation>
                    <Tags housingIndex={housingIndex}/>
                </Titleandtags>
                <Hostandrating className="info__first-info__host-and-rating">
                    <Host className="info__first-info__host-and-rating__host">
                        <Name className="info__first-info__host-and-rating__host__name">
                            <FirstName className="info__first-info__host-and-rating__host__name__first-name">
                                {firstName}
                            </FirstName>
                            <FamilyName className="info__first-info__host-and-rating__host_name_family-name">
                                {familyName}
                            </FamilyName>
                        </Name >
                        <Picture src={ListelogementJSON[housingIndex].host.picture} className="info__first-info__host-and-rating__host__picture"/>
                    </Host>
                    <Rating className="info__first-info__host-and-rating__rating" housingIndex={housingIndex}/>
                </Hostandrating>
            </Firstinfo>
            <Collapses className="info__collapses">
                <Collapse title="Description" content={ListelogementJSON[housingIndex].description} />
                <Collapse title="Equipements" content={ListelogementJSON[housingIndex].equipments} />
            </Collapses>
        </Info>
    )
}

export default LogementInfo