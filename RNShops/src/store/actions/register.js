import { REGISTER_USER, LOGOUT_USER } from "../types";

export const register = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER
  }
};