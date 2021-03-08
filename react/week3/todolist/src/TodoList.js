import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { toDate } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import TodoItem from "./TodoItem";
const api_url =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function TodoList() {
  const [itemsArray, setItemsArray] = useState([]);
  const [newDescription, setNewDescription] = useState("");
  const [newDeadline, setNewDeadline] = useState(new Date());

  const fetchFromApi = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        setItemsArray(data);
      });
  };

  useEffect(() => {
    fetchFromApi();
  }, []);

  const addNewDescription = (event) => {
    setNewDescription(event.target.value);
  };

  const addNewDeadline = (input) => {
    setNewDeadline(toDate(input));
  };

  const addNewItem = () => {
    const newDeadlineMonth =
      newDeadline.getMonth() + 1 < 10
        ? `0${newDeadline.getMonth() + 1}`
        : newDeadline.getMonth() + 1;
    const newDeadlineDate =
      newDeadline.getDate() < 10
        ? `0${newDeadline.getDate()}`
        : newDeadline.getDate();
    const newDate = `${newDeadline.getFullYear()}-${newDeadlineMonth}-${newDeadlineDate}`;
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      description: newDescription,
      deadline: newDate,
    };
    setItemsArray((prev) => [...prev, newTodo]);
    setNewDescription("");
    setNewDeadline(new Date());
  };

  const deleteItem = (e) => {
    const idDeleted = e.target.parentElement.previousSibling.id;
    setItemsArray(
      itemsArray.filter(
        (item) => item.id + item.description.slice(0, 2) !== idDeleted
      )
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="description">Todo description</label>
        <input
          type="text"
          id="description"
          placeholder="description"
          value={newDescription}
          onChange={addNewDescription}
          required
        />
      </div>
      <div>
        <DatePicker
          required
          selected={newDeadline}
          onChange={addNewDeadline}
          minDate={new Date()}
        />
      </div>
      <button onClick={addNewItem}>Add todo</button>
      {itemsArray.length > 0 ? (
        <ul>
          {itemsArray.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id + todo.description.slice(0, 2)}
              description={todo.description}
              deadline={todo.deadline}
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
