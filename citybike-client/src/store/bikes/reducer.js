const initialState = {
    historyList: []
}

const bikesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_HISTORY_LIST":
            return {
                ...state,
                historyList: action.payload
            }
        default:
            return state;
    }
}

export default bikesReducer;