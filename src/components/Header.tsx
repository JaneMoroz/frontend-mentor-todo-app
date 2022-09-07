import React from "react";

// Icons
import sunIcon from "../assets/icons/icon-sun.svg";
import moonIcon from "../assets/icons/icon-moon.svg";

// Styled Components
import { Heading } from "../styles/headerStyles";
import { Flex } from "../styles/globalStyles";

// Context
import { useGlobalContext } from "../context/context";

const Header = () => {
  const { currentTheme, dispatch } = useGlobalContext();

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  return (
    <Heading>
      <Flex>
        <h1>Todo</h1>
        <button
          onClick={() => toggleTheme()}
          type="button"
          aria-label="theme toggler"
        >
          <img src={currentTheme === "dark" ? sunIcon : moonIcon} alt="theme" />
        </button>
      </Flex>
    </Heading>
  );
};

export default Header;
