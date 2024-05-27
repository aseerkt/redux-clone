import { useCallback, useDebugValue, useSyncExternalStore } from "react";

export function useSyncExternalStoreWithSelector(
  subscribe,
  getState,
  selector
) {
  const getSnapshot = useCallback(
    () => selector(getState()),
    [getState, selector]
  );

  const value = useSyncExternalStore(subscribe, getSnapshot);

  useDebugValue(value);

  return value;
}
