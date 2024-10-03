import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import logo from '../assets/logobg.mp4'

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;
  color: ${(props) => props.theme.text};

  video {
    width: 40vw; // Adjust as needed for responsiveness
    height: auto;
    border-radius: 10px; // Optional: to give the video some rounded corners
  }
`;

const videoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.video
        variants={videoVariants}
        initial="hidden"
        animate="visible"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </Container>
  );
};

export default Loader;
