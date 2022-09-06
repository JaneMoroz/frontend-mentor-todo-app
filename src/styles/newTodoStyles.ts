import styled from "styled-components";

export const NewTodoForm = styled.form`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px;
  padding: 1.4rem 2rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.125);

  span {
    display: block;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 0.5px solid ${(props) => props.theme.primary};
    background: ${(props) => props.theme.listBackground};
  }
`;

export const NewTodoInput = styled.input`
  margin: 0;
  background: ${(props) => props.theme.listBackground};
  border: none;
  outline: none;
  color: ${(props) => props.theme.primary};
`;
