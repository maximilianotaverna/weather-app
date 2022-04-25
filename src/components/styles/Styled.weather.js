import styled from "styled-components";

const StyledWeather = styled.div`
  font-family: Poppins;
  line-height: 1.28;
  display: block;
  padding-top: 3rem;
  user-select: none;
  & .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  & .week {
    justify-self: end;
    text-align: center;
  }
  & [class^='forecast'] {
    font-size: 0.8rem;
  }
  & .city {
    font-size: 3.3rem;
    font-weight: 600;
    line-height: 1.2;
  }
  & .country {
    font-size: 2rem;
    font-weight: 600;
  }
  & .temp {
    font-size: 10rem;
    font-weight: 100;
  }
  & .description {
    font-size: 2rem;
  }
  & sup {
    font-size: 6rem;
  }
  & .icon {
    margin-bottom: -2rem;
  }
  & .forecast-group {
    border-bottom: 1px solid #FFFFFF0F;
  }
  & .forecast-day {
    margin-bottom: 1rem;
  }
  & .forecast-icon {
    margin-bottom: -1.2rem;
    animation: weather-icon-move 4s ease-in-out infinite;
    @keyframes weather-icon-move {
      50% { 
            transform: translateY(-4px); 
        }
    }
  }
`;

export default StyledWeather;
