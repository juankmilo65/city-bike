import { createStore, combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import bikesReducer from "../store/bikes/reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['bike']
}

const rootReducer = combineReducers({
    bike: bikesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);

export default store; 