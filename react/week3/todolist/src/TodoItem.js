import React, { useState } from "react";
import StyleComponent from "./StyleComponent";
import PropTypes from "prop-types";

function TodoItem({ id, description, deadline, onDelete }) {
  const [isDone, setIsDone] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(description);
  const updateItem = () => {
    setEditing(!editing);
  };
  const changeDescription = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <StyleComponent>
        <li
          style={
            isDone
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {editing ? (
            <input type="text" value={title} onChange={changeDescription} />
          ) : (
            title
          )}

          <span className="item-span">{deadline}</span>
          <span className="item-span">
            <input type="checkbox" id={id} onClick={() => setIsDone(!isDone)} />
            <span className="item-span">
              <button onClick={onDelete}>Delete</button>
              <button onClick={updateItem}>
                {editing ? "Update" : "Edit"}
              </button>
            </span>
          </span>
        </li>
      </StyleComponent>
    </div>
  );
}

TodoItem.propTypes = {
  description: PropTypes.string,
  deadline: PropTypes.string,
  onDelete: PropTypes.func,
};

export default TodoItem;
