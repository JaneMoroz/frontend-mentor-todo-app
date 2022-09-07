import styled, { css } from "styled-components";

type ListItemProps = {
  checked?: boolean;
};

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  padding: 1.8rem 2.4rem;
  background: ${(props) => props.theme.listBackground};
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid ${(props) => props.theme.secondary};

  .round-button {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    border: 0.5px solid ${(props) => props.theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: none;
    }
  }

  .round-button:hover {
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
