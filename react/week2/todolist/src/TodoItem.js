import React, { useState } from "react";

function TodoItem({ id, description, onDelete }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <div>
      <li
        style={
          isDone
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {description}
        <span>
          <input type="checkbox" id={id} onClick={() => setIsDone(!isDone)} />
          <button onClick={onDelete}>Delete</button>
        </span>
      </li>
    </div>
  );
}

export default TodoItem;
