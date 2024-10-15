import React from 'react'
import styled from 'styled-components'
import Mainvideo from '../assets/covervideo.mp4'
import { motion } from 'framer-motion'

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%; 
    }

    @media (max-width: 30em) {
      object-position: center 50%; 
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: 'Kaushan Script';
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 64em) {
      font-size: calc(4rem + 6vw); 
    }

    @media (max-width: 48em) {
      font-size: calc(3rem + 4vw); 
    }

    @media (max-width: 30em) {
      font-size: calc(2.5rem + 3vw); 
    }
  }

  h2 {
    font-family: 'Sirin Stencil';
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
    margin-top: 1rem;

    @media (max-width: 64em) {
      font-size: ${(props) => props.theme.fontmd}; /* Adjust for medium screens */
    }

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontsm}; /* Adjust for smaller screens */
    }

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontxs}; /* Adjust for very small screens */
      margin-top: -1.5rem;
    }
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  font-size: ${(props) => props.theme.fontmd};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 1rem;
  text-decoration: none;
  z-index: 5;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
  @media (max-width: 64em) { /* Screens smaller than 1024px */
    padding: 0.9rem 1.8rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 48em) { /* Screens smaller than 768px */
    padding: 0.8rem 1.5rem;
    font-size: ${(props) => props.theme.fontxs};
  }

  @media (max-width: 30em) { /* Screens smaller than 480px */
    padding: 0.7rem 1.2rem;
    font-size: calc(0.9rem + 1vw);
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            I
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            E
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.12" data-scroll-speed="4">
            E
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.12" data-scroll-speed="4">
            E
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.11" data-scroll-speed="4">
            D
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.10" data-scroll-speed="4">
            A
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.9" data-scroll-speed="4">
            Y
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.8" data-scroll-speed="4">
            '2
          </motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.7" data-scroll-speed="4">
            4
          </motion.h1>
        </div>
        <Button
          href="https://bit.ly/ieeeday2024" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={item}
          data-scroll
          data-scroll-delay="0.11"
          data-scroll-speed="2"
        >
          Register Now
        </Button>
      </Title>
      <video src={Mainvideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
