export const UPDATE_HISTORY_LIST = "UPDATE_HISTORY_LIST";

export function updateHistoryList(list) {
    return {
        type: UPDATE_HISTORY_LIST,
        payload: list
    }
}