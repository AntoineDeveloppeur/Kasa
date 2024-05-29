import styled from "styled-components";
import React from "react";
import ListlogementJSON from '../../data/logement.json'
import arrow from '../../assets/arrown_right.png'
import { useState } from "react";

const GalleryDiv= styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 800px;  
  height: auto;
  margin: auto;
  `

const Carroussel = styled.div`
  display: flex;
  transform: ${(props) => `translate(${props.translation*-800}px)`}
  `

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ArrowLeft = styled.img`
  position: absolute;
  top: 200px;
  left: 30px;
  transform: translate(0,-50%) rotate(180deg);
  z-index:1;
  background-color:red;
  `

const ArrowRight = styled.img`
  position: absolute;
  top: 200px;
  right: 30px;
  transform: translate(0,-50%);
  background-color:red;
  `

const Numbering = styled.p`

  `

function Gallery({housingIndex}) {

    const [translation, setTranslation] = useState(1)

    function handleRight() {
      translation === ListlogementJSON[housingIndex].pictures.length-1 ?
      setTranslation(1)
      : 
      setTranslation(translation+1)
    }

    function handleLeft() {
      translation === 1 ?
      setTranslation(ListlogementJSON[housingIndex].pictures.length-1)
      :
      setTranslation(translation-1)
    }
  

      return (
        <GalleryDiv>
          	<Carroussel translation={translation}>
              {ListlogementJSON[housingIndex].pictures.map((pic,index) => (
                <Photo key={ListlogementJSON[housingIndex].id+"pic"+index} 
                src={pic} 
                alt={`Logement ${ListlogementJSON[housingIndex].title}, photo numéro ${index}`}/>
              ))}
            </Carroussel>
            <ArrowLeft src={arrow} onClick={handleLeft} />
            <ArrowRight src={arrow} onClick={handleRight} />
            <Numbering>{translation}/{ListlogementJSON[housingIndex].pictures.length}</Numbering>
            
        </GalleryDiv>
      )
}

export default Gallery