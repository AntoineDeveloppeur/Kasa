import styled from "styled-components"
import arrow_down from "../../assets/arrow_down.png"
import { useState } from "react"
import '../../utils/styles/GlobalStyle.scss'
import '../../utils/styles/collapse.scss'

const CollapseDiv = styled.div`
    margin-top: 30px;
    flex:1;   
    position: relative;
    `

const Headband = styled.div`
    height: 52px;
    background-color: #FF6060;
    border-radius: 5px;
    `

const Title = styled.h2`
    line-height: 52px;
    padding-left: 10px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    `

const HiddenContent = styled.div`
    position: relative;
    left: 0;
    width: 100%;
    overflow: clip;
    background-color: #F6F6F6;
    padding-left: 10px;
    padding-bottom: 20px;
    padding-top: 25px; 
    border-radius: 0 0 10px 10px;
    z-index:0;
    `

const Arrow = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    transition: transform 0.4s cubic-bezier(.68,.06,.08,.87);
`

const Text = styled.p``


function Collapse() {

    const [showCollapse, setShowCollapse] = useState(false)

    
    function handleClick() {
        setShowCollapse(!showCollapse)
    }

    return (
        <CollapseDiv className='collapse'>
            <Headband>
                <Title>
                    Description
                </Title>
            </Headband>
            <Arrow src={arrow_down} onClick={handleClick} alt="flèche vers le bas" className={showCollapse?'arrow-down':'arrow-up' } />
            <HiddenContent className={(showCollapse?'show-content':' collapse-content')} >
                <Text>
                    description<br/>
                    description<br/>
                    description<br/>
                    description<br/>
                    
                </Text>
            </HiddenContent>
        </CollapseDiv>
    )
}

export default Collapse

{/* <HiddenContent className={'collapse-content'+ (showCollapse?'':' hidden ')} > */}
