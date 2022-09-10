import styled, { css } from "styled-components";

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
  width: 55rem;
  min-height: 100vh;
  padding: 5rem 1.8rem;
  margin: 0 auto;

  @media only screen and (max-width: 37.5em) {
    max-width: 55rem;
    width: 100%;
  }
`;

type FlexProps = {
  borderBottom?: boolean;
  fullWidth?: boolean;
  padding?: boolean;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.borderBottom === true &&
    css`
      border-bottom: 0.5px solid ${(props) => props.theme.secondary};
    `}
  ${(props) =>
    props.fullWidth === true &&
    css`
      width: 100%;
      column-gap: 2.4rem;
    `}
  ${(props) =>
    props.padding === true &&
    css`
      padding: 1.8rem 2.4rem;
    `}
`;

type ButtonProps = {
  text?: boolean;
  big?: boolean;
  medium?: boolean;
  active?: boolean;
  icon?: boolean;
  circle?: boolean;
  circleChecked?: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-weight: inherit;
  color: inherit;
  text-transform: capitalize;
  transition: all 0.3s;

  ${(props) =>
    props.text === true &&
    css`
      color: ${(props) => props.theme.secondary};

      :hover {
        color: ${(props) => props.theme.primary};
      }
    `}

  ${(props) =>
    props.big === true &&
    css`
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 300;
      padding: 1.8rem 2.4rem;

      :disabled:hover {
        color: ${(props) => props.theme.secondary};
      }
    `}
  ${(props) =>
    props.medium === true &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.active === true &&
    css`
      color: ${(props) => props.theme.blue};
    `}
  ${(props) =>
    props.icon === true &&
    css`
      min-height: 1.8rem;
      min-width: 1.8rem;
      img {
        width: 100%;
        height: 100%;
      }
    `}
  ${(props) =>
    props.circle === true &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 50%;
      border: 0.5px solid ${(props) => props.theme.secondary};

      img {
        display: none;
      }

      :hover {
        background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        transition: all 0.3s;

        ::after {
          content: "";
          display: inline-block;
          height: 90%;
          width: 90%;
          background: ${(props) => props.theme.listBackground};
          border-radius: 50%;
        }
      }
    `}
    ${(props) =>
    props.circleChecked === true &&
    css`
      background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
      img {
        width: 55%;
        height: 55%;
        display: block;
      }
      :hover {
        ::after {
          height: 0;
          width: 0;
        }
      }
    `}
`;
