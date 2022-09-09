import styled, { css } from "styled-components";

type ListItemProps = {
  checked?: boolean;
  isDragging?: boolean;
};

export const ListItem = styled.div<ListItemProps>`
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  width: 100%;
  padding: 1.8rem 2.4rem;
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px 5px 0 0;
  border-bottom: 0.5px solid ${(props) => props.theme.secondary};

  p {
    color: ${(props) => props.theme.primary};
    overflow: hidden;
    flex: 1;
  }

  ${(props) =>
    props.checked === true &&
    css`
      p {
        color: ${(props) => props.theme.tertiary};
        text-decoration: line-through;
      }
    `}

  ${(props) =>
    props.isDragging === true &&
    css`
      background: ${(props) => props.theme.draggable};
    `}
`;
