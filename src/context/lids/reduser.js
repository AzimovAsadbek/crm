export const initialState = [
    {name: "webbrain"}
]

export const reducer = (state = initialState, action) => {
    let type = action?.type?.toLowerCase();
    switch (type) {
        case "get":
            return action.payload || []
        default:
            return state
    }
}