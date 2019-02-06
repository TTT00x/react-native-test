const INITIAL_STATE = {
  mode: 0
}

export const modeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SWITCH_MODE':
      return {
        ...state,
        mode: action.mode
      }
    default:
      return state;
  }
}
