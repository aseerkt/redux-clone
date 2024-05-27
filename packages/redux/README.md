# `redux`


### Usage

```typescript
import { createStore } from 'redux'

const initialState = {
  todos: []
}

function reducer(state = initialState, action) {
  switch(action.type){
    case 'ADD_TODO':
      return { todos: [...state.todos, action.todo] }
    case 'EMPTY_TODOS':
      return { todos: [] }
  }
}

const store = createStore(reducer, initialState)
```