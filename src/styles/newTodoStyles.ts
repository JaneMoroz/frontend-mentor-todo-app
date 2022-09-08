import styled from "styled-components";

export const NewTodoSection = styled.div`
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.125);
  z-index: 999;
`;

export const NewTodoForm = styled.form`
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  padding: 1.8rem 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme.secondary};

  span {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    border: 0.5px solid ${(props) => props.theme.secondary};
    background: ${(props) => props.theme.listBackground};
  }
`;

export const NewTodoInput = styled.input`
  width: 100%;
  margin: 0;
  background: ${(props) => props.theme.listBackground};
  color: ${(props) => props.theme.primary};
  flex: 1;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.secondary};
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 300;
  border-radius: 0 0 5px 5px;
  padding: 1.8rem 2.4rem;
  transition: all 0.3s;

  :hover {
    color: ${(props) => props.theme.primary};
  }

  :disabled:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
