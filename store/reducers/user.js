const INITIAL_STATE = {
  name: 'Jane Doe'
}

export const nameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {...state, name: action.name}
    case 'DELETE_NAME':
      return {...state, name: ''}
    default:
      return state;
  }
}
