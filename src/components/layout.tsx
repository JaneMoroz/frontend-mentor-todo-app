// Styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

// Images
import imageDark from "../assets/images/bg-desktop-dark.jpg";
import imageLight from "../assets/images/bg-desktop-light.jpg";

// Styled Components
import { Background, Container } from "../styles/globalStyles";

type ThemeType = {
  background: string;
  listBackground: string;
  title: string;
  primary: string;
  secondary: string;
  blue: string;
  image: string;
};

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
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // - Very Dark Blue: #161722
  // - Very Dark Desaturated Blue: #25273c
  // - Light Grayish Blue: #cacde8
  // - Light Grayish Blue (hover): #e4e5f1
  // - Dark Grayish Blue: #777a92 ???
  // - Very Dark Grayish Blue: #4d5066
  // - Very Dark Grayish Blue: #393a4c ???

  const darkTheme: ThemeType = {
    background: "#161722",
    listBackground: "#25273c",
    title: "#e4e5f1",
    primary: "#cacde8",
    secondary: "#4d5066",
    blue: "#3a7bfd",
    image: imageDark,
  };

  // - Very Light Gray: #fafafa
  // - Very Light Grayish Blue: #e4e5f1
  // - Light Grayish Blue: #d2d3db ???
  // - Dark Grayish Blue: #9394a5
  // - Very Dark Grayish Blue: #484b6a
  const lightTheme: ThemeType = {
    background: "#e4e5f1",
    listBackground: "#fafafa",
    title: "#e4e5f1",
    primary: "#484b6a",
    secondary: "#9394a5",
    blue: "#3a7bfd",
    image: imageLight,
  };

  let currentTheme = "dark";

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <Background>
          <Container>{children}</Container>
        </Background>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
