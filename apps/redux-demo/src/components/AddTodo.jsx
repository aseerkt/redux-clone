import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'

export default function AddTodo() {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    dispatch({
      type: 'ADD_TODO',
      payload: { id: nanoid(), title: formData.get('title') },
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='Title' required />
      <button type='submit'>Add todo</button>
    </form>
  )
}
