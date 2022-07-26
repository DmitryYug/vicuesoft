import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "../reducers/app-reducer";
import thunkMiddleware from 'redux-thunk'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    appReducer
})

let store = createStore(rootReducer);
export default store
// export type  AppRootStateType = ReturnType<typeof rootReducer>

