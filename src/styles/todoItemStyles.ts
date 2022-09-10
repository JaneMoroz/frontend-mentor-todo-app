import styled, { css } from "styled-components";

type ListItemProps = {
  checked?: boolean;
  isDragging?: boolean;
};

export const ListItem = styled.li<ListItemProps>`
  background: ${(props) => props.theme.listBackground};

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
