import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// ... (your import statements)

const Img = styled.img`
  width: 364px;
  height: 278px;
  padding: 56px;
`;

const White = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

function ImageGallery({ images, searchTerm,onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div>
      <White>
      {images.slice(currentIndex, currentIndex + 40).map((image, index) => (
       <Img key={index} src={image.largeImageURL} alt={image.tags} onClick={()=>onImageClick(image)}/>
     ))}
      </White>

    </div>
  );
}

export default ImageGallery;
