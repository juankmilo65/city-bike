const initialState = {
    historyList: [],
    history: null
}

const bikesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_HISTORY_LIST":
            return {
                ...state,
                historyList: action.payload
            }
        case "SET_MAP_HISTORY":
            return {
                ...state,
                history: action.payload
            }
        default:
            return state;
    }
}

export default bikesReducer;