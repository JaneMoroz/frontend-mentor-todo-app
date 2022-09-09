import styled from "styled-components";

export const Heading = styled.header`
  z-index: 999;
  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    letter-spacing: 1rem;
  }
`;
