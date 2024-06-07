import styled from 'styled-components'
import arrow_down from '../../assets/arrow_down.png'
import { useEffect, useState } from 'react'
import '../../utils/styles/GlobalStyle.scss'
import '../../utils/styles/collapse.scss'

const CollapseDiv = styled.div``
const Headband = styled.div``
const Title = styled.h2``
const HiddenContent = styled.div``
const Arrow = styled.img``

function Collapse({ title, content }) {
    const checkArray = Array.isArray(content)
    const [showCollapse, setShowCollapse] = useState('')

    function handleClick() {
        setShowCollapse === ''
            ? (setShowCollapse = true)
            : setShowCollapse(!showCollapse)
    }

    return (
        <CollapseDiv className="collapse">
            <Headband className="collapse__headband">
                <Title className="collapse__headband__title">{title}</Title>
            </Headband>
            <Arrow
                src={arrow_down}
                onClick={handleClick}
                alt="flèche vers le bas"
                className={
                    showCollapse ? ' arrow arrow-down' : 'arrow arrow-up'
                }
            />
            <HiddenContent
                className={
                    showCollapse === ''
                        ? 'collapse__hidden-content'
                        : showCollapse === true
                        ? 'collapse__hidden-content show'
                        : ' collapse__hidden-content dont-show'
                }
            >
                {checkArray ? (
                    <ul>
                        {content.map((list, index) => (
                            <li key={index + list}>{list}</li>
                        ))}
                    </ul>
                ) : (
                    content
                )}
            </HiddenContent>
        </CollapseDiv>
    )
}

export default Collapse
