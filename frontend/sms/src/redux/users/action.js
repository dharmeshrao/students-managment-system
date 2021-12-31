import {
  ADD_USER_ERROR,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  DELETEUSER,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "./actionType";

export const addUserLoading = () => ({ type: ADD_USER_LOADING });
export const addUserSuccess = (payload) => ({
  type: ADD_USER_SUCCESS,
  payload,
});
export const addUserError = (payload) => ({ type: ADD_USER_ERROR, payload });

export const getUserLoading = () => ({ type: GET_USER_LOADING });
export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});
export const getUserError = (payload) => ({ type: GET_USER_ERROR, payload });
export const deleteUser = (payload)=> ({type: DELETEUSER,payload})