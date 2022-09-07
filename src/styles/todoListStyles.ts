import styled from "styled-components";

export const TodoListSection = styled.div`
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.125);
  z-index: 999;
  margin-bottom: 10rem;
`;

export const ListFooter = styled.footer`
  position: relative;
  padding: 1.8rem 2.4rem;
  color: ${(props) => props.theme.secondary};
  font-size: 1.4rem;

  button {
    font-weight: inherit;
    color: inherit;
    text-transform: capitalize;
  }

  button.active {
    color: ${(props) => props.theme.blue};
  }

  button:hover {
    color: ${(props) => props.theme.primary};
    transition: all 0.3s;
  }

  nav {
    display: flex;
    justify-content: center;
    column-gap: 1.4rem;

    @media only screen and (max-width: 37.5em) {
      position: absolute;
      background: ${(props) => props.theme.listBackground};
      border-radius: 5px;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.125);
      width: 100%;
      height: 100%;
      left: 0;
      bottom: -150%;
    }

    button {
      font-weight: 700;
    }
  }
`;
