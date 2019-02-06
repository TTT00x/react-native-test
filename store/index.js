import { combineReducers, createStore } from 'redux'
import { nameReducer } from './reducers/user'
import { modeReducer } from './reducers/mode'

export const reducers = combineReducers({
  user: nameReducer,
  mode: modeReducer
})

export const store = createStore(reducers)
