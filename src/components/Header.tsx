import React from "react";

// Icons
import sunIcon from "../assets/icons/icon-sun.svg";
import moonIcon from "../assets/icons/icon-moon.svg";

// Styled Components
import { Heading } from "../styles/headerStyles";
import { Flex } from "../styles/globalStyles";

const Header = () => {
  return (
    <Heading>
      <Flex>
        <h1>Todo</h1>
        <button type="button" atia-label="theme toggler">
          <img src={sunIcon} alt="sun" />
        </button>
      </Flex>
    </Heading>
  );
};

export default Header;
