import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
