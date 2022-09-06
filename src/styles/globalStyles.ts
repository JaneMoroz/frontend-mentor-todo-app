import styled from "styled-components";

export const Background = styled.div`
  height: 30rem;
  background-image: url(${(props) => props.theme.image});
  background-size: cover;
`;

export const Container = styled.div`
  min-height: 80%;
  width: 50rem;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
