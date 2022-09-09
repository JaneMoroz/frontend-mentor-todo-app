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

  span {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    border: 0.5px solid ${(props) => props.theme.secondary};
    background: ${(props) => props.theme.listBackground};
  }
`;

export const NewTodoLabel = styled.label`
  height: 0;
  width: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const NewTodoInput = styled.input`
  width: 100%;
  margin: 0;
  background: ${(props) => props.theme.listBackground};
  color: ${(props) => props.theme.primary};
  flex: 1;

  ::placeholder {
    color: ${(props) => props.theme.secondary};
  }
`;
