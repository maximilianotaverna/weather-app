import styled from "styled-components";
import { tempData } from "../Weather";

const imageRandom = "https://source.unsplash.com/random/?cities";
const colorTint = "linear-gradient(to bottom, #00000072, transparent)";
const colorHot = "linear-gradient(to top, #f7b733, #fc4a1a, transparent)";
// const colorWarm = "linear-gradient(to top, #FFC371, #FF5F6D, transparent)";
const colorCold = "linear-gradient(to top, #A8CABA, #5d4157a6, transparent)";
// const colorOvercast = "linear-gradient(to top, #3b8d99, #6b6b83, #aa4b6b, transparent)";
// const colorAvarage = "linear-gradient(to top, #636FA4, #E8CBC0, transparent)";

const colorTemp = (tempData < 16 && colorCold) || colorHot;

const background = `${colorTint}, ${colorTemp}, url('${imageRandom}')`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${background};
  background-size: cover;
  background-position: bottom;
  transition: 0.8s ease-out;
  z-index: -10;
`;

export default StyledBackground;
