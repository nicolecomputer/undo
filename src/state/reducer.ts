export type ToolType = "paint" | "erase"

export type State = {
    selectedTool: ToolType
}

export type ChangeTool = {
    type: "ChangeTool",
    tool: ToolType
}

export type Action = ChangeTool

export function reducer(state: State, action: Action): State {
    if (action.type === "ChangeTool") {
        return {
            ...state,
            selectedTool: action.tool
        }
    }
    return state
}

export const initialState: State = {
    selectedTool: "paint"
}
