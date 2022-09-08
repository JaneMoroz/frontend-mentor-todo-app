import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30rem;
  background-image: url(${(props) => props.theme.image});
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 50rem;
  min-height: 100vh;
  padding: 5rem 1.8rem;
  margin: 0 auto;

  @media only screen and (max-width: 37.5em) {
    max-width: 50rem;
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
