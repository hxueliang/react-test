import './App.css';

import Todo from './components/todo'

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
  /**
   *  =>
   * React.createElement(
   *  "div",
   *  null,
   *  React.createElement(Todo, null)
   * )
   * 
   * React.createElement(Todo, null)
   *  =>
   * var todo = new Todo()
   * return todo.render()
   */
}

export default App;
