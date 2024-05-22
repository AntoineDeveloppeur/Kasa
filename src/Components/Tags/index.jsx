import logementJSON from'../../data/logement.json'
import styled from 'styled-components'

const TagsDiv = styled.div`
margin-top: 30px;
display: flex;
gap: 10px;
`

const Tag = styled.div`
height: 25px;
width: 115px;
text-align: center;
line-height: 25px;
background-color: #FF6060;
border-radius: 10px;
color: white;
font-size: 14px;
font-weight: bold;
`

function Tags({housingIndex}) {

    return (
        <TagsDiv>
            {logementJSON[housingIndex].tags.map((tag) => (
                <Tag key={tag+housingIndex}>
                    {tag}
                </Tag>
            ))
            }
        </TagsDiv>
    )
}

export default Tags