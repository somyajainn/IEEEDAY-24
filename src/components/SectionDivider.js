// components/DividerWave.js
import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

const Svg = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px; /* Adjust the height for your transition */
  z-index: 1000;
`;

const DividerWave = ({ color = "#fff" }) => (
  <Divider>
   <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill={color}
        fillOpacity="1"
        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,213.3C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224V320H0Z"
      ></path>
    </Svg>
  </Divider>
);

export default DividerWave;
