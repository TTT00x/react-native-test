import { combineReducers, createStore } from 'redux'
import { nameReducer } from './reducers/user'

export const reducers = combineReducers({
  user: nameReducer
})

export const store = createStore(reducers)
