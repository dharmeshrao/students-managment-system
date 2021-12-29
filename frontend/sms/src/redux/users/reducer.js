import { ADD_USER_ERROR, ADD_USER_LOADING, ADD_USER_SUCCESS, GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./actionType";
const initState = {
  loading: false,
  user: [],
  error: false,
};

const userReducer = (state = initState, { type, payload }) => {
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

    default:
      return { ...state };
  }
};
