import React from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
z-index: 9999;
justify-content: center;
align-items: center;
display: flex;

`;

const PopupContainer = styled.div`
  border-radius:10px;
  background-color: white;
  padding: 20px;
  width: 1217px;
  max-width: 1217px;
`;

const Img = styled.img`
  width: 832px;
  height: 555px;
`;
const Titlesec=styled.div`
background-color:#f5f5f5;
padding:20px;

margin-left: -14px;
margin-top: -19px;
display:flex;
padding: 20px;
width: 1197px; /* Set the width of the popup container */
max-width: 1217px;
`;
const Button=styled.div`
border:2px solid black;
border-radius:5px;
padding-left:5px;
padding-right:5px;
background-color:transparent;
justify-content :center;
margin-left: auto;
`;
const Tags=styled.div`
padding:20px 20px;
display:flex;
flex-wrap:wrap;
align-items:center;
color:#717579;
`;
const Tag=styled.div`
display:flex;`;

const Main=styled.div`
display:flex;`;

const Head=styled.div`
color:#717579;
font-size:12px;
font-weight:600;

`;
const Pictitle=styled.div`
text-align:left;
font-size:25px;
padding-left:40px;
`;
const Info=styled.div`

`;
const Details=styled.div`
display:flex;
flex-direction:column;
`;
const Table=styled.table`
text-align :left;
border-spacing:40px;
`;
const Tagbutton=styled.button`
height:24px;
justify-content:center;
display:flex;
margin-right: 10px;
border:0px none;
color:#767676;
font-size:15px;
font-weight:400;
text-align:center;
margin-bottom:10px;
padding:0 10px;

`;
const ImagePopup = ({ image, onClose }) => {

  const tagArray = image.tags.split(', ');
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = image.largeImageURL;
    downloadLink.download = `image_${image.id}.jpg`; // Provide a custom name for the downloaded image
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <PopupOverlay>



        <PopupContainer>
        <Titlesec>
         Preview ID:{image.user_id}
         <Button onClick={onClose}>X</Button>
        </Titlesec>
         <Main>
        <Img src={image.largeImageURL} alt={image.tags} />

        <Details>
         <Pictitle>Information</Pictitle>
         <Table>
         <tr>
         <td><Head>User</Head><Info>{image.user}</Info></td>
         <td><Head>User ID</Head><Info>{image.user_id}</Info></td>
         <td><Head>Type</Head><Info>{image.type}</Info></td>
         </tr>
         <tr>
         <td><Head>Views</Head><Info>{image.views}</Info></td>
         <td><Head>Downloads</Head><Info>{image.downloads}</Info></td>
         <td><Head>Likes</Head><Info>{image.likes}</Info></td>
         </tr>

         </Table>


        </Details>
        </Main>
        <Tag>
        <p style={{fontWeight:'700',color:'#3B4043'}}>Tags:</p>
        <Tags>
          {tagArray.map((tag, index) => (
            <Tagbutton key={index}>{tag}</Tagbutton>
          ))}
        </Tags>
        </Tag>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default ImagePopup;
