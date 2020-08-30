import { createStore, combineReducers } from "redux";
import bikesReducer from "../store/bikes/reducer";


const rootReducer = combineReducers({
    bike: bikesReducer
});

const store = createStore(rootReducer);

export default store; 