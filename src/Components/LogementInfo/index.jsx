import styled from 'styled-components'
import Tags from '../Tags'
import logo_maincolor_desktop from '../../assets/logo_maincolor_desktop.png'
import Rating from '../Rating'
import Collapse from '../Collapse'
import '../../utils/styles/GlobalStyle.scss'
import splitName from '../../utils/functions/splitname'

const Info = styled.div`
    width: 100%;
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
    
    const Name = styled.p``

const Picture = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 16px;
    `

const Collapses = styled.div``


function LogementInfo() {

const [firstName, familyName] = splitName("Doe")
console.log(firstName, "firstName")
console.log(familyName, "familyName")

     
    return (
        <Info>
            <Firstinfo>
                <Titleandtags>
                    <Title>
                        Title du logement
                    </Title>
                    <Localisation>
                        Localisation
                    </Localisation>
                    <Tags />
                </Titleandtags>
                <Hostandrating>
                    <Host>
                        <Name>
                            Alexandre Dumas
                        </Name>
                        <Picture src={logo_maincolor_desktop}/>
                    </Host>
                    <Rating />
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