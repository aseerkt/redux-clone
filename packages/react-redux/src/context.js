import { createContext, useContext } from "react";

export const ReactReduxContext = createContext(null);

export function useReduxContext() {
  return useContext(ReactReduxContext);
}
