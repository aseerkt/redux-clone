import { useDispatch } from 'react-redux'

export default function ResetTodo() {
  const dispatch = useDispatch()

  const handleClear = () => dispatch({ type: 'EMPTY_TODOS' })

  return (
    <div>
      <button onClick={handleClear}>Empty todos</button>
    </div>
  )
}
