import styled from "styled-components";

const imageRandom = "https://source.unsplash.com/random/?cities"
// const colorHot = "linear-gradient(to bottom, #f7b733, #fc4a1a, transparent)";
// const colorWarm = "linear-gradient(to bottom, #FFC371, #FF5F6D, transparent)";
// const colorCold = "linear-gradient(to bottom, #A8CABA, #5D4157, transparent)";
// const colorOvercast = "linear-gradient(to top, #3b8d99, #6b6b83, #aa4b6b, transparent)";
const colorAvarage = "linear-gradient(to top, #636FA4, #E8CBC0, transparent)";
const colorDarkTint = "linear-gradient(to top, #000000c2, transparent)";
const imageBackground = `${colorDarkTint}, ${colorAvarage}, url('${imageRandom}')`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${imageBackground};
  background-size: cover;
  background-position: bottom;
  transition: 0.8s ease-out;
  z-index: -10;
`;

export default StyledBackground;
