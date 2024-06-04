import styled from "styled-components";
import React from "react";
import Listlogement from '../../data/logement.json'
import arrow from '../../assets/arrown_right.png'
import { useState } from "react";
import '../../utils/styles/gallery.scss'

const GalleryDiv= styled.div``
const Carroussel = styled.div``
const Photo = styled.img``
const ArrowLeft = styled.img``
const ArrowRight = styled.img``
const Numbering = styled.p``

function Gallery({housingID}) {
  let housingIndex = 0
  Listlogement.map((logement, index) => (
    logement.id === housingID && (housingIndex = index)
  ))

    const [slideIndex, setSlideIndex] = useState(1)

    function handleRight() {
      slideIndex === Listlogement[housingIndex].pictures.length-1 ?
      setSlideIndex(1)
      : 
      setSlideIndex(slideIndex+1)
    }

    function handleLeft() {
      slideIndex === 1 ?
      setSlideIndex(Listlogement[housingIndex].pictures.length-1)
      :
      setSlideIndex(slideIndex-1)
    }
  

      return (
        <GalleryDiv className="gallery-div">
          	<Carroussel className="gallery-div__carroussel" >
              {Listlogement[housingIndex].pictures.map((pic,index) => (
                <Photo 
                className="gallery-div__carroussel__photo"
                key={Listlogement[housingIndex].id+"pic"+index} 
                src={pic} 
                style = {{transform : `translateX(${-slideIndex*100}%)`}}
                alt={`Logement ${Listlogement[housingIndex].title}, photo numéro ${index}`}/>
              ))}
            </Carroussel>

            {Listlogement[housingIndex].pictures.length > 1 &&
            <div>
              <div className="gallery-div__for-arrow for-arrow-left">
                <ArrowLeft 
                src={arrow} 
                onClick={handleLeft} 
                className="gallery-div__arrow arrow-left"/>
              </div>
              <div className="gallery-div__for-arrow for-arrow-right">
                <ArrowRight 
                src={arrow} 
                onClick={handleRight} 
                className="gallery-div__arrow arrow-right"/>
              </div>
            <Numbering className="gallery-div__numbering">
              {slideIndex}/{Listlogement[housingIndex].pictures.length}
            </Numbering>
            </div>
            }
        </GalleryDiv>
      )
}

export default Gallery