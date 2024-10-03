import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your images
import slide_image_1 from '../assets/Images/event.png';
import slide_image_2 from '../assets/Images/event2.png';
import slide_image_3 from '../assets/Images/event3.png';
import slide_image_4 from '../assets/Images/event4.png';
import slide_image_5 from '../assets/Images/event5.png';
import slide_image_6 from '../assets/Images/event6.png';
import slide_image_7 from '../assets/Images/event7.png';

// Styled components for the event gallery and swiper
const Container = styled.div`
  max-width: 110rem;
  padding: 4rem 1rem;
  margin: 0 auto;
  background-color: #161616;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23f7f2ff' fill-opacity='0.03'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  

`;

const Heading = styled.h1`
  padding: 0.5rem 0; /* Adjust this value to move it upward */
  font-size: 4rem;
  text-align: center;
  margin-top: -3rem; /* Move the heading slightly upward */
  font-family: 'Kaushan Script';
  font-weight: 300;
  color: #ffffff;
  z-index: 2;
  padding: 10px;
  border-radius: 10px;
  left:4%;
  ${'' /* transform: translateX(-50%);  */}

  @media (max-width: 768px) {
    font-size: 4rem; /* Slightly smaller for tablets */
  }

  @media (max-width: 500px) {
    font-size: 3rem; /* Smaller font for mobile */
  }
`;

const SwiperContainer = styled.div`
  height: 40rem; /* Adjust the overall height */
  padding: 2rem 0;
  position: relative;

  @media (max-width: 500px) {
    height: 30rem; /* Adjust for smaller screens */
  }
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 25rem;
  height: 30rem;
  position: relative;

  @media (max-width: 768px) {
    width: 20rem; /* Slightly smaller for tablets */
    height: 25rem;
  }

  @media (max-width: 500px) {
    width: 90%; /* Full width for mobile */
    height: 20rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: contain;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition for hover effect */

    &:hover {
      transform: scale(1.05); /* Zoom in on hover */
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* Add shadow on hover */
    }
  }
`;

const SliderControler = styled.div`
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    bottom: 1rem; /* Adjust positioning for smaller screens */
  }
`;

const SliderArrow = styled.div`
  background: var(--white);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;

  ion-icon {
    font-size: 1.5rem;
    color: #222224;
  }
`;

const SwiperPaginationStyled = styled.div`
  position: relative;
  width: 12rem !important;
  bottom: 1rem;

  .swiper-pagination-bullet {
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .swiper-pagination-bullet-active {
    background: var(--primary);
  }
`;

const Event = () => {
  return (
    <Container id='events'>
      <Heading data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">Events</Heading>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlideStyled>
          {/* Link for the first image */}
          <a href="https://www.instagram.com/p/CyUtIjxPfed/" target="_blank" rel="noopener noreferrer">
            <img src={slide_image_1} alt="Event 1" />
          </a>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <img src={slide_image_2} alt="Event 2" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <img src={slide_image_3} alt="Event 3" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <img src={slide_image_4} alt="Event 4" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <img src={slide_image_5} alt="Event 5" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <img src={slide_image_6} alt="Event 6" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <img src={slide_image_7} alt="Event 7" />
        </SwiperSlideStyled>

        <SliderControler>
          <SliderArrow className="swiper-button-prev">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </SliderArrow>
          <SliderArrow className="swiper-button-next">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </SliderArrow>
          <SwiperPaginationStyled className="swiper-pagination" />
        </SliderControler>
      </Swiper>
    </Container>
  );
};

export default Event;
