import { combineReducers, createStore } from 'redux';

export const INITIAL_STATE = {
  name: 'Jane Doe'
}

// actions
export const setName = name => ({
  type: 'ADD_NAME',
  name: name,
});

export const deleteName = () => ({
  type: 'DELETE_NAME',
  name: ''
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {...state, name: action.name}
    case 'DELETE_NAME':
      return {...state, name: ''}
    default:
      return state;
  }
}

export const reducers = combineReducers({
  user: reducer
})

// store
export const store = createStore(reducers)
