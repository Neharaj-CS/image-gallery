import React from 'react'
import styled from 'styled-components';
const Nav = styled.nav`
width: 96%;
    height: 76px;
    top: 10px;
    position:absolute;
    margin-left: 30px;
    margin-right: 10px
left: 219.984375px;
font-family: 'Euclid Circular B', sans-serif;
font-size: 17px;
font-weight: 700;
display:flex;
border-radius:9px;
background-color: rgba(255, 255, 255, 0.2);
 box-shadow:inset 0 0 8px #fff;
border:2px solid white;
`;
const Link = styled.a`
  text-decoration: none;
  margin-left: 20px;
  margin-top:auto;
  margin-bottom:auto;
  color:#ffffff;
`;

const LoginLink = styled.a`
  text-decoration: none;
  margin-left: auto;
margin-top:auto;
margin-bottom:auto;
gap:5px;
color:#ffffff;

`;
const Button=styled.button`
width: 162.984375px;
height: 34.734375px;
margin-top:auto;
margin-bottom:auto;
margin-left:10px;
margin-right:10px;
border-radius: 8.90625px;

color:#ffffff;
background-color: rgba(255, 255, 255, 0.2);
box-shadow:inset 0 0 8px #fff;
border:2px solid white;

`;

function Navbar() {
  return (
    <Nav>
    <Link href="#">Homepage</Link>
    <LoginLink href="#">Login</LoginLink>
    <Button>Create Account</Button>
    </Nav>
  )
}

export default Navbar
