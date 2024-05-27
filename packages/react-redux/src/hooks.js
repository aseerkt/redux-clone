import { useCallback, useDebugValue } from 'react'
import { useReduxContext } from './context'
import { useSyncExternalStoreWithSelector } from './utils'

export function useStore() {
  const store = useReduxContext()

  return store
}

export function useDispatch() {
  const store = useStore()
  return store.dispatch
}

export function useSelector(selector) {
  const store = useStore()

  const wrappedSelector = useCallback(selector, [selector])

  const selectedState = useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getState,
    wrappedSelector
  )

  useDebugValue(selectedState)

  return selectedState
}
