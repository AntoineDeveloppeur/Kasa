import logementJSON from '../../data/logement.json'
import styled from 'styled-components'
import '../../utils/styles/tags.scss'

const TagsDiv = styled.div``
const Tag = styled.div``

function Tags({ housingIndex }) {
    return (
        <TagsDiv className="tags-div">
            {logementJSON[housingIndex].tags.map((tag) => (
                <Tag className="tag" key={tag + housingIndex}>
                    {tag}
                </Tag>
            ))}
        </TagsDiv>
    )
}

export default Tags
