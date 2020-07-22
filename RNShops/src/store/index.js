import { createStore, combineReducers } from "redux";
import { registerReducer } from './reducers/registerReducer'

const rootReducer = combineReducers({
  registerReducer
})

export default store = createStore(rootReducer)