import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledCard from "./styles/Styled.card";
import StyledSearchInput from "./styles/Styled.searchInput";
import StyledBackground from "./styles/Styled.background";
import Weather from "./Weather";

const Card = ({ placeholder }) => {
  const [query, setQuery] = useState("");
  const handleChange = (eHandleChange) => setQuery(eHandleChange.target.value);
  const clear = (eClear) => (eClear.target.value = "");
  return (
    <StyledBackground>
      <StyledCard>
        <StyledSearchInput
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          onClick={clear}
          onBlur={clear}
          value={query}
        ></StyledSearchInput>
        <Weather city={query} />
      </StyledCard>
    </StyledBackground>
  );
};

Card.propTypes = {
  placeholder: PropTypes.string,
};

Card.defaultProps = {
  placeholder: "search . . .",
};

export default Card;
