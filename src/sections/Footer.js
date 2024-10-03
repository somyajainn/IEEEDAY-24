import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin ,faWordpress} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const FooterWrapper = styled.footer`
  background-color: #0b0b0b;
  background-color: #161616;
  
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Section = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 250px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: white;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: #fff;
    font-size: 1.8rem;
    transition: color 0.3s;

    &:hover {
      color: grey;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 8px 0;
    font-size: 1rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #fff;
    margin: 10px 0;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      color: #f5a623;
    }
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 0.9rem;
  color: #ccc;
`;

const Footer = () => {
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
    
    <FooterWrapper>
      <FooterContainer>
        {/* Social Links Section */}
        <Section>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialLinks>
            <a href="https://www.facebook.com/share/ftaN6BHzhmZUxC2N/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/IEEE_MUST" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/ieee_must/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/ieee-must-093a1a191/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </SocialLinks>
        </Section>

        {/* Contact Us Section */}
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:ieeemust2024@gmail.com]">ieeemust2024@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Lakshmangarh 332311,
            Dist. Sikar, Rajasthan, India</p>
            <p><FontAwesomeIcon icon={faWordpress} /><a href="https://edu.ieee.org/in-must/" target="_blank" rel="noopener noreferrer"> ieee must</a> </p>
          </ContactInfo>
        </Section>

        {/* Quick Links Section */}
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <QuickLinks>
          <a href="#about" onClick={() => handleScroll('.about')}>About Us</a>
          <a href="#events" onClick={() => handleScroll('#events')}>Events</a>
          <a href="#contact" onClick={() => handleScroll('#contacts')}>Contact</a>
          </QuickLinks>
        </Section>
      </FooterContainer>
      
      {/* Footer Copyright */}
      <FooterCopyright>
        &copy; {new Date().getFullYear()}   IEEE_MUST
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;
