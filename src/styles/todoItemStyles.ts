import styled, { css } from "styled-components";

type ListItemProps = {
  checked?: boolean;
};

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;
  padding: 1.4rem 2rem;
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid ${(props) => props.theme.primary};

  .round-button {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 0.5px solid ${(props) => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: none;
    }
  }

  .delete-button {
    margin-left: auto;
    height: 1.8rem;
    width: 1.8rem;
  }

  p {
    color: ${(props) => props.theme.primary};
  }

  ${(props) =>
    props.checked === true &&
    css`
      .round-button {
        background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

        img {
          display: block;
        }
      }
      p {
        color: ${(props) => props.theme.secondary};
        text-decoration: line-through;
      }
    `}
`;
