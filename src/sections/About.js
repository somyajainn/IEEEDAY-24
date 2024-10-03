import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/Images/img1.jpg';
// import img2 from '../assets/Images/img2.jpg';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 90vw; 
  display: flex;
  margin: 0 auto;
  background: linear-gradient(180deg, #ffffff 0%, #000000 100%)
  display: flex; /* Flexbox for layout */
  gap: 2rem;
  
  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Kaushan Script';
  font-weight: 300;
  position: absolute;
  top: 0.1rem;
  left: 4%;
  z-index: 4;

  ${'' /* @media (max-width: 64rem) {
    font-size: ${(props) => `calc(${props.theme.fontBig}-5vw)`};
    top: 0.5rem;
    left:0;
  }
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  } */}
  @media (max-width: 1200px) {
    font-size: 4rem;
  }

  @media (max-width: 992px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

const Left = styled.div`
  width: 70%;
  font-size: ${(props) => props.theme.fontlg};
  ${'' /* color: ${(props) => props.theme.text}; */}
  font-weight: 300;
  position: relative;
  position: sticky;
  z-index: 5;
  margin-top: 18%;
  text-align: justify;

  @media (max-width: 64em) {
    width: 80%;
    position:absolute;
    top:58%;
    left:50%;
    transform: translate(-50%, -50%) !important;
    margin:0 auto;

    padding: 1.5rem;
    font-weight:600;

    backdrop-filter:blur(5px);
    background-color: ${props => `rgba(${props.theme.textRgba},0.4)`};
    border-radius:10px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width:75%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .main-img {
    height: 100vh;
    object-fit: cover;
    
    ${'' /* position: relative; // Ensure relative positioning */}
    ${'' /* top: 3%;  */}
  }

  ${'' /* .small-img-1 {
    width: 80%;
    position: absolute;
    right: 60%;
    bottom: 9%;
  } */}

  @media (max-width: 64rem) {
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    img{
        object-fit:cover;
    }
    .small-img-1{
        width:30%;
        height:auto;
        left:5%;
        bottom:10%;
    }
  }
`;

const About = () => {
    return (
        <Section id="fixed-target" className='about'>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                About Us
            </Title>
            <Left data-scroll data-scroll-target="#fixed-target">
                Mody University of Science and Technology,is a leading Women’s University located in
                 Lakshmangarh in the state of Rajasthan, India. It is aimed at helping the women avail quality 
                 education with world-class techniques in an IT-savvy environment. 
                 A platform for the Women where they transform knowledge to practice and also develop their technical skills and leadership skills.
                <br />
                <br />
                IEEE Student Branch, Mody University of Science and Technology was formed in the college in the year of 2015. 
                Our student Branch provides opportunities to connect, meet and learn from fellow IEEE students and engage with professional IEEE members locally.
                Our Student Branch has been constantly growing and exploring uncharted territories at the Sub – Sectional, Regional and National Level.
                <br />
                <br />
                The Student Branch of IEEE MUST represents synergy and promotes innovation and versatility in each of its endeavors. 
                The Student Branch believes in the betterment of the future of the world and in helping build a sustainable society.
            </Left>
            <Right>
                <img src={img1} className="main-img" alt="About Us" />
                {/* <img
                    data-scroll
                    data-scroll-speed="4"
                    src={img2}
                    className="small-img-1"
                    alt="About Us"
                /> */}
            </Right>
            
        </Section>
        
        
    );
};

export default About;
