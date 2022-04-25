import styled from "styled-components";

const StyledSearchInput = styled.input`
  font-family: Poppins;
  display: block;
  width: 12rem;
  padding: 1rem;
  border-radius: 2rem;
  background: white;
  appearance: none;
  border: none;
  outline: none;
  transition: 0.4s ease-out;
  &:focus-visible {
    outline: none;
  }
  &:hover {
    transform: scale(1.03);
    transition: 0.4s ease-out;
  }
`;

export default StyledSearchInput;
