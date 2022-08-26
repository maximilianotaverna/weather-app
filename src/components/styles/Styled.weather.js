import styled from "styled-components";

const StyledWeather = styled.div`
  font-family: Poppins;
  line-height: 1.28;
  display: block;
  padding-top: 2rem;
  user-select: none;
  & .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  & .today {
    @media (max-width: 1024px) and (orientation: landscape) {
      transform: scale(0.6);
      transform-origin: top left;
    }
  }
  & .week {
    justify-self: end;
    text-align: center;
    list-style: none;
    background: #ffffff4d;
    padding: 1rem;
    border-radius: 10px;
    @media (orientation: landscape) {
      display: flex;
      height: max-content;
      padding: 0.6rem;
    }
    @media (max-width: 1024px) and (orientation: landscape) {
      transform: scale(0.74);
      transform-origin: top right;
    }
  }
  & [class^="forecast"] {
    font-size: 1rem;
    font-weight: 300;
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
    @media (max-width: 1024px) and (orientation: landscape) {
      display: none;
    }
  }
  & .forecast-item {
    @media (orientation: landscape) {
      margin: 1rem;
    }
  }
  & .forecast-day {
    margin-bottom: 1rem;
    font-weight: 700;
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
