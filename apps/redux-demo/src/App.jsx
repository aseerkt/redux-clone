import AddTodo from './components/AddTodo'
import ResetTodo from './components/ResetTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
      <h1>Redux Clone Demo</h1>
      <TodoList />
      <AddTodo />
      <br />
      <ResetTodo />
    </div>
  )
}

export default App
