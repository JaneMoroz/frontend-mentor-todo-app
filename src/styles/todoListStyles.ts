import styled from "styled-components";

export const TodoListSection = styled.div`
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.125);
`;

export const ListFooter = styled.footer`
  padding: 1.4rem 2rem;
  color: ${(props) => props.theme.secondary};
  font-weight: 700;

  span {
    font-size: 1.4rem;
  }

  button {
    font-size: 1.6rem;
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
    column-gap: 1.4rem;
  }
`;
