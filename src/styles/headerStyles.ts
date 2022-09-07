import styled from "styled-components";

export const Heading = styled.div`
  z-index: 999;
  h1 {
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    letter-spacing: 1rem;
  }

  button {
    padding: 1.2rem 0;
  }
`;
