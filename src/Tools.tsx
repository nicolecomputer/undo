import { useContext } from "react";

import { StateContext, StateDispatchContext } from "./state/StateContext.ts";
import type { State } from "./state/reducer.ts";

export function Tools() {
    const dispatch = useContext(StateDispatchContext);
    const state: State = useContext(StateContext);

    return (
        <div
            style={{
                width: "80px",
                border: "1px solid red",
                padding: "4px",
            }}
        >
            <ol
                style={{
                    listStyle: "none",
                }}
            >
                <li>
                    <button
                        style={{
                            fontWeight: state.selectedTool === "paint"
                                ? "bold"
                                : "normal",
                            marginBottom: "4px",
                        }}
                        onClick={() => {
                            dispatch({
                                type: "ChangeTool",
                                tool: "paint",
                            });
                        }}
                    >
                        Paint
                    </button>
                </li>
                <li>
                    <button
                        style={{
                            fontWeight: state.selectedTool === "erase"
                                ? "bold"
                                : "normal",
                        }}
                        onClick={() => {
                            dispatch({
                                type: "ChangeTool",
                                tool: "erase",
                            });
                        }}
                    >
                        Erase
                    </button>
                </li>
            </ol>
        </div>
    );
}
