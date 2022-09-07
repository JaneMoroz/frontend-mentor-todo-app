// Styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { Background, Container } from "../styles/globalStyles";

// Themes
import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

// Context
import { useGlobalContext } from "../context/context";

// Types
type ThemeType = {
  background: string;
  listBackground: string;
  title: string;
  primary: string;
  secondary: string;
  tertiary: string;
  blue: string;
  image: string;
};

type LayoutProps = {
  children: React.ReactNode;
};

// Global style
const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 1rem = 10px

    @media only screen and (max-width: 56.25em) {
      font-size: 56.25%; //1 rem = 9px
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 50%; //1 rem = 8px,
    }
  }
  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
  main {
    position: relative;
    min-height: 100vh;
    background: ${(props) => props.theme.background};
  }

  ul {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useGlobalContext();

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <Background />
        <Container>{children}</Container>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
