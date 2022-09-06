import styled from "styled-components";

export const Heading = styled.div`
  h1 {
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    letter-spacing: 1rem;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1.2rem 0;
  }
`;
