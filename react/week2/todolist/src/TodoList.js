import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  const [itemsArray, setItemsArray] = useState(todos);

  function addNewItem() {
    const newItem = {
      id: Math.floor(Math.random() * 100),
      description: "Random Text",
    };
    setItemsArray(itemsArray.concat(newItem));
  }

  function deleteItem(e) {
    const idDeleted = e.target.previousSibling.id;
    setItemsArray(
      itemsArray.filter(
        (item) => item.id + item.description.slice(0, 2) !== idDeleted
      )
    );
  }

  return (
    <div>
      <button onClick={addNewItem}>Add todo</button>
      {itemsArray.length > 0 ? (
        <ul>
          {itemsArray.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id + todo.description.slice(0, 2)}
              description={todo.description}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      ) : (
        "No items..."
      )}
    </div>
  );
}

export default TodoList;
