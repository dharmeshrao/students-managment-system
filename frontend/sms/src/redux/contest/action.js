import {
  ADD_CONTEST_ERROR,
  ADD_CONTEST_LOADING,
  ADD_CONTEST_SUCCESS,
  DELETE_CONTEST,
  GET_CONTEST_ERROR,
  GET_CONTEST_LOADING,
  GET_CONTEST_SUCCESS,
  SORTCODING,
  SORTDATE,
  SORTDSA,
} from "./actionType";

export const addCONTESTLoading = () => ({ type: ADD_CONTEST_LOADING });
export const addCONTESTSuccess = (payload) => ({
  type: ADD_CONTEST_SUCCESS,
  payload,
});
export const addCONTESTError = (payload) => ({
  type: ADD_CONTEST_ERROR,
  payload,
});

export const getCONTESTLoading = () => ({ type: GET_CONTEST_LOADING });
export const getCONTESTSuccess = (payload) => ({
  type: GET_CONTEST_SUCCESS,
  payload,
});
export const getCONTESTError = (payload) => ({
  type: GET_CONTEST_ERROR,
  payload,
});
export const deleteContest = (payload) => ({ type: DELETE_CONTEST, payload });
export const  sortDate = ()=>({type:SORTDATE})
export const  sortDSA = (payload)=>({type:SORTDSA,payload})