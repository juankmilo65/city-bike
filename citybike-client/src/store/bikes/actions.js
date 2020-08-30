export const UPDATE_HISTORY_LIST = "UPDATE_HISTORY_LIST";
export const SET_MAP_HISTORY = "SET_MAP_HISTORY";

export function updateHistoryList(list) {
    return {
        type: UPDATE_HISTORY_LIST,
        payload: list
    }
}

export function setMapHistory(history) {
    return {
        type: SET_MAP_HISTORY,
        payload: history
    }
}