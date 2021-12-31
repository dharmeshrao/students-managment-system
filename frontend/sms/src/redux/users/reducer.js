import { getLocalstorage } from "../../utils/localStorage";
import { ADD_USER_ERROR, ADD_USER_LOADING, ADD_USER_SUCCESS, DELETEUSER, GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./actionType";
const initState = {
  loading: false,
  user: [],
  error: false,
};

export const userReducer = (state = initState, { type, payload }) => {
  // getLocalstorage("acess_sms")
  switch (type) {
    case ADD_USER_LOADING:
      return {
        ...state,
        loading:true,
        error:false
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading:false,
        user:[...state.user,payload],
        error:false
      };

    case ADD_USER_ERROR:
      return {
        ...state,
        loading:false,
        error:true
      };

    case GET_USER_LOADING:
      return {
        ...state,
        loading:true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading:false,
        user:payload
      };

    case GET_USER_ERROR:
      return {
        ...state,
        loading:false,
        error:true
      };
    case DELETEUSER:
      let newData = state.user.filter((e) => {
        return e._id !== payload;
      });
      return{
        ...state,
        user: newData
      }
    default:
      return { ...state };
  }
};
