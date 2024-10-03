import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? '0' : `calc(-50vh - 4rem)`)};
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10rem;

  @media (max-width: 64em) {
    padding: 0 5rem; /* Adjust padding for medium screens */
  }

  @media (max-width: 48em) {
    padding: 0 3rem; /* Further reduce padding for smaller screens */
  }

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const MenuBtn = styled(motion.li)`
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  list-style-type: none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem; /* Reduce size for smaller screens */
    height: 2.2rem;
    font-size: ${(props) => props.theme.fontsm}; /* Adjust font size */
  }

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontmd}; /* Default font size */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontsm}; /* Smaller font size on medium screens */
  }

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
    font-size: ${(props) => props.theme.fontxs}; /* Adjust font size for small screens */
  }
`;

const NavBar = () => {
  const [click, setClick] = useState(false);

  const {scroll}=useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem=document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem,
      {
        offset:'-100',
        duration: '2000',
        easing:[0.25,0.0,0.35,1.0]
      }
    );
  }

  return (
    <NavContainer
      click={click}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
        onClick={() => handleScroll('#home')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
        onClick={() => handleScroll('.about')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
        onClick={() => handleScroll('#events')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Events
        </MenuItem>
        <MenuItem
        onClick={() => handleScroll('#contacts')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Contact
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
