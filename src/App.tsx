import "./App.css";
import { Tools } from "./Tools.tsx";

import { useReducer } from "react";

import { initialState, reducer } from "./state/reducer.ts";
import { StateContext, StateDispatchContext } from "./state/StateContext.ts";

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        <div
          id="stage"
          style={{
            flexDirection: "row",
          }}
        >
          <Tools />
          <div
            style={{
              width: 800,
              height: 600,
              backgroundColor: "white",
              border: "1px solid black",
              marginLeft: "10px",
              borderRadius: 8,
              boxShadow: "1px 1px 10px rgba(0,0,0,0.1)",
            }}
          >
          </div>
        </div>
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
