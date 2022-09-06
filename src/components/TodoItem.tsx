import React from "react";

// Styled Components
import { ListItem } from "../styles/todoItemStyles";

// Icons
import checkedIcon from "../assets/icons/icon-check.svg";
import crossIcon from "../assets/icons/icon-cross.svg";

const TodoItem = () => {
  return (
    <ListItem checked>
      <button type="button" className="round-button" aria-label="check">
        <img src={checkedIcon} alt="check icon" />
      </button>
      <p>Jog around the park</p>
      <button type="button" className="delete-button" aria-label="delete">
        <img src={crossIcon} alt="cross icon" />
      </button>
    </ListItem>
  );
};

export default TodoItem;
