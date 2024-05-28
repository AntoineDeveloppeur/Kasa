import styled from 'styled-components'
import Tags from '../Tags'
import Rating from '../Rating'
import Collapse from '../Collapse'
import '../../utils/styles/GlobalStyle.scss'
import splitName from '../../utils/functions/splitname'
import ListelogementJSON from '../../data/logement.json'

    const Info = styled.div`
    width: 100%;
    max-width: 1240px;
    margin: auto;
    margin-bottom: 50px;   
    `
    const Firstinfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

    const Titleandtags = styled.div``

    const Title = styled.h1`
    font-size: 36px;
    color: #FF6060;
    `

    const Localisation = styled.p`
    font-size: 18px;   
    `

    const Hostandrating = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    `
    const Host = styled.div`
    display: flex;
    align-items: center;
    `
    
    const Name = styled.div``

    const FirstName = styled.p``

    const FamilyName = styled.p``

    const Picture = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 32px;
    `

    const Collapses = styled.div`
        display: flex;
        justify-content: space-between;
        width: auto;
        max-width: 1240px;
        gap: 40px;
    `


function LogementInfo({housingIndex}) {

    const [firstName, familyName] = splitName(ListelogementJSON[housingIndex].host.name)
     
    return (
        <Info>
            <Firstinfo>
                <Titleandtags>
                    <Title>
                        {ListelogementJSON[housingIndex].title}
                    </Title>
                    <Localisation>
                        {ListelogementJSON[housingIndex].location}
                    </Localisation>
                    <Tags housingIndex={housingIndex}/>
                </Titleandtags>
                <Hostandrating>
                    <Host>
                        <Name>
                            <FirstName>
                                {firstName}
                            </FirstName>
                            <FamilyName>
                                {familyName}
                            </FamilyName>
                        </Name>
                        <Picture src={ListelogementJSON[housingIndex].host.picture}/>
                    </Host>
                    <Rating housingIndex={housingIndex}/>
                </Hostandrating>
            </Firstinfo>
            <Collapses>
                <Collapse />
                <Collapse />
            </Collapses>
        </Info>
    )
}

export default LogementInfo