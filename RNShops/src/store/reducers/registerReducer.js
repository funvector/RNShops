import { REGISTER_USER, LOGOUT_USER } from '../types'

const initialState = {
  user: {
    emailValue: '',
    passwordValue: '',
    nameValue: '',
    isRegister: false
  }
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {...state, user: {...state.user,...action.payload, isRegister: true}};
    case LOGOUT_USER:
      return {...state, user: { ...initialState.user, isRegister: false }};
    default:
    return state;
  }
}