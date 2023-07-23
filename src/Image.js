import React, { useState, useEffect } from 'react';
import Search from'./Search';
import axios from 'axios';
import Navbar from './Navbar';
import ImageGallery from './ImageGallery';
import styled from 'styled-components';
import ImagePopup from './ImagePopup';

const API_KEY = 'e910d9ae2658d511863e8024e';
const BASE_API_URL = `https://pixabay.com/api/?key=38409425-e910d9ae2658d511863e8024e&q=pink+flowers&image_type=photo&pretty=true`;
const API_URL = `https://pixabay.com/api/?key=38409425-e910d9ae2658d511863e8024e&q&image_type=photo&per_page=30&q=`;
const HomeSec = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 120vh;
  width: 100%;
  color:#ffffff;
  top:0px;
  position:absolute;
`;

const Title = styled.div`
  font-family: 'Euclid Circular B', sans-serif;
  font-size: 71px;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 190px;
  color: white;
`;

const Trending=styled.div`
border:2px solid white;
background-color: rgba(255, 255, 255, 0.2);
box-shadow:inset 0 0 8px #fff;
width:20%;
border-radius: 5px;
padding-top:5px;
padding-bottom:5px;
font-size:13px;
text-align:center;
margin:auto auto;

`;
const Form =styled.form``;
function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch a random image related to nature from Pixabay
    axios
      .get(`${BASE_API_URL}`)
      .then((response) => {
        // Randomly select an image from the response
        const imagesData = response.data.hits;
        const randomIndex = Math.floor(Math.random() * imagesData.length);
        setBackgroundImage(imagesData[randomIndex].largeImageURL);
         // Set the fetched images to the images state
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      // Fetch images from the Pixabay API based on the search term
      axios
        .get( `${API_URL}${encodeURIComponent(searchTerm)}`)
        .then((response) => {
          setImages(response.data.hits);
        })
        .catch((error) => {
          console.error('Error fetching images:', error);
        });
    }
  }, [searchTerm]);
  const handleImageClick = (image) => {
      setSelectedImage(image);
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };
  return (
    <HomeSec backgroundImage={backgroundImage}>
      <Navbar />
      <Title>Discovering over 2,000,000<br /> free Stock Images</Title>
      {/* Pass setSearchTerm function to the Search component */}
      <Search/>
      <Trending>Trending:flowers, love, forest, river</Trending>

      {/* Pass the searchTerm state and images to the ImageGallery component */}

      <ImageGallery images={images} searchTerm={searchTerm} onImageClick={handleImageClick} />

          {selectedImage && showPopup && (
            <ImagePopup image={selectedImage} onClose={handleClosePopup} />
          )}
    </HomeSec>
  );
}

export default Home;
