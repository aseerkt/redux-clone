import { ReactReduxContext } from "./context";

export default function Provider({ store, children }) {
  return (
    <ReactReduxContext.Provider value={store}>
      {children}
    </ReactReduxContext.Provider>
  );
}
