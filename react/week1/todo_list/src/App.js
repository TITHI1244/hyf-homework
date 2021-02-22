import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ListItem from './ListItem';

const todos = [
  {
    title: 'Get out of bed',
    deadline: 'Wed Sep 13 2017'
  },
  {
    title: 'Brush teeth',
    deadline: 'Thu Sep 14 2017'
  },
  {
    title: 'Eat breakfast',
    deadline: 'Fri Sep 15 2017'
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <ul>
          {todos.map(todo => <ListItem title={todo.title} deadline={todo.deadline} />)}
      </ul>
    </div>
  );
}

export default App;
