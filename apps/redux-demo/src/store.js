import { createStore } from 'redux'

const initialState = {
  todos: [],
}

function reducer(state = initialState, action) {
  console.log('made into reducer at least')
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      }
    case 'EMPTY_TODOS':
      return {
        todos: [],
      }
  }
}

const store = createStore(reducer, initialState)

export default store
