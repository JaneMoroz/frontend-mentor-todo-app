import styled from "styled-components";

export const NewTodoForm = styled.form`
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px;
  padding: 1.8rem 2.4rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.125);
  z-index: 999;

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
