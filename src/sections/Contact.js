import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import riya from '../assets/Images/riya.jpeg';
import vedika from '../assets/Images/vedika.jpeg';
import vania from '../assets/Images/vania.jpeg';
import somya from '../assets/Images/Somya.jpeg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const Title = styled.h1`
  font-size: 5rem; 
  font-family: 'Kaushan Script', cursive;
  font-weight: 100;
  text-align: center; 
  margin: 1rem 0; // Increase margin for better spacing
  z-index: 2;
  padding: 10px;
  border-radius: 10px;
  left:4%;
  transform: translateX(-50%); 

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 992px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 576px) {
    font-size: 5rem;
  }

  @media (max-width: 400px) {
    font-size: 3.5rem;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  position: relative;
  padding: 2rem 0rem;
  ${'' /* background: linear-gradient(150deg, #ffffff 0%, #000000 100%) */}
  background-color:rgba(255, 255, 255, 0.4);
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 15px;
  overflow-x: auto;
  padding: 20px;
  position: relative;
  z-index: 0;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  ${'' /* @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  } */}

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0077b5;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 240px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;

  @media (max-width: 1200px) {
    width: 220px;
    height: 380px;
  }

  @media (max-width: 992px) {
    width: 200px;
    height: 360px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px; // Limiting the width for larger phone screens
    height: auto;
  }

  @media (max-width: 576px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 400px) {
    width: 80%;
    height: auto;
  }
`;


const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #0077b5;

  @media (max-width: 576px) {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.h2`
  font-size: 1.7rem;
  color: #333;
  font-weight: 700;
  text-align: center;
`;

const Position = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: 300;
  text-align: center;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;

  & > a {
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.8rem;
    color: #333;
    transition: color 0.3s;
    position: relative;

    &:hover {
      color: #0077b5;
    }
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 1rem;
  color: #333;

  & > a {
    color: inherit; // Use the same color as text
    text-decoration: none; // Remove underline
    display: flex;
    align-items: center; // Center align icon and text
  }

  & > svg {
    margin-right: 5px;
    color: #0077b5; // Color for the phone icon
  }
`;

const members = [
  {
    name: 'Riya Choudhary',
    position: 'Chairperson',
    image: riya,
    phone: '+91 8510885636',
    social: {
      linkedin: 'https://www.linkedin.com/in/riya-choudhary-50869826b/',
      gmail: 'mailto:choudharyriya2308@gmail.com',
    },
  },
  {
    name: 'Vedika Singh',
    position: 'Vice-Chairperson',
    image: vedika,
    phone: '+91 8239503101',
    social: {
      linkedin: 'https://www.linkedin.com/in/vedikasingh1974',
      gmail: 'mailto:vedikasingh1974@gmail.com',
    },
  },
  {
    name: 'Somya Jain',
    position: 'Webmaster',
    image: somya,
    phone: '+91 9259053566',
    social: {
      linkedin: 'https://www.linkedin.com/in/somya-jain-088792249/',
      gmail: 'mailto:jainsomya482@gmail.com',
    },
  },
  {
    name: 'Vania Singh',
    position: 'Secretary',
    image: vania,
    phone: '+91 8949799760',
    social: {
      linkedin: 'https://www.linkedin.com/in/vania-singh/',
      gmail: 'mailto:vaniasingh2004@gmail.com',
    },
  },
];

const About = () => {
  return (
    <>
      <GlobalStyle />
      <Section id='contacts'>
        <Title data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">Contact Us</Title>
        <CardContainer>
          {members.map((member, index) => (
            <Card key={index}>
              <Image src={member.image} alt={member.name} />
              <Name>{member.name}</Name>
              <Position>{member.position}</Position>
              <PhoneNumber>
                <a href={`tel:${member.phone}`}>
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                  {member.phone}
                </a>
              </PhoneNumber>
              <SocialMedia>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} /> 
                </a>
                <a href={member.social.gmail}>
                  <FontAwesomeIcon icon={faEnvelope} /> 
                </a>
              </SocialMedia>
            </Card>
          ))}
        </CardContainer>
      </Section>
    </>
  );
};

export default About;
