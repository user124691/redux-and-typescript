import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <UserList/>
      <hr></hr>
      <TodoList/>
    </div>
  );
}

export default App;
