import styled from "styled-components"
import arrow_down from "../../assets/arrow_down.png"
import { useState } from "react"
import '../../utils/styles/GlobalStyle.scss'

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
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    overflow: clip;
    background-color: #F6F6F6;
    padding-left: 10px;
    padding-bottom: 20px;
    padding-top: 25px; 
    border-radius: 0 0 10px 10px;
    z-index:0;
    transition: height 500ms;
    height: ${(props) => (props.show ? '300px' : '20px')};
    transition: height 0.4s cubic-bezier(.68,.06,.08,.87);
    `

const Arrow = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    transform: ${(props) => (props.show ? 'rotate(0deg)' : 'rotate(180deg)')};
    transition: transform 0.4s cubic-bezier(.68,.06,.08,.87);
`

const Text = styled.p``



function Collapse() {

    const [ showCollapse, setShowCollapse] = useState(false)

    
    function handleClick() {
        setShowCollapse(!showCollapse)
    }

    return (
        <CollapseDiv>
            <Headband>
                <Title>
                    Description
                </Title>
            </Headband>
            <Arrow src={arrow_down} onClick={handleClick} alt="flèche vers le bas" show={showCollapse} />
            <HiddenContent show={showCollapse} >
                <Text>
                    description
                </Text>
            </HiddenContent>
        </CollapseDiv>
    )
}

export default Collapse