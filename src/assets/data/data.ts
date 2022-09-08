import uuid from "react-uuid";

export const todos = [
  {
    id: uuid(),
    text: "Complete online Javascript course",
    status: "completed",
  },
  { id: uuid(), text: "Jog around the park 3x", status: "active" },
  { id: uuid(), text: "10 minutes meditation", status: "active" },
  { id: uuid(), text: "Pick up groceries", status: "active" },
  {
    id: uuid(),
    text: "Complete Todo App on Frontend Mentor",
    status: "active",
  },
];
