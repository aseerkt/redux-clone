export default function createStore(reducer, preloadedState) {
  let currentState = preloadedState
  let listenerIdCounter = 0
  const listeners = new Map()

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    const listenerId = listenerIdCounter++
    listeners.set(listenerId, listener)

    return function unsubscribe() {
      listeners.delete(listenerId)
    }
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    listeners.forEach((listener) => listener())
  }

  const store = {
    getState,
    subscribe,
    dispatch,
  }

  return store
}
