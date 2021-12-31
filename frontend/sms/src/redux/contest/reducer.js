import {
  ADD_CONTEST_ERROR,
  ADD_CONTEST_LOADING,
  ADD_CONTEST_SUCCESS,
  DELETE_CONTEST,
  GET_CONTEST_ERROR,
  GET_CONTEST_LOADING,
  GET_CONTEST_SUCCESS,
} from "./actionType";
const initState = {
  loading: false,
  contest: [],
  error: false,
};

export const CONTESTReducer = (state = initState, { type, payload }) => {
  // getLocalstorage("acess_sms")
  switch (type) {
    case ADD_CONTEST_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ADD_CONTEST_SUCCESS:
      return {
        ...state,
        loading: false,
        contest: [...state.contest, payload],
        error: false,
      };

    case ADD_CONTEST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_CONTEST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_CONTEST_SUCCESS:
      return {
        ...state,
        loading: false,
        contest: payload,
      };

    case GET_CONTEST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case DELETE_CONTEST:
      let newData = state.contest.filter((e) => {
        return e._id !== payload;
      });
      return {
        ...state,
        contest: newData,
      };
    default:
      return { ...state };
  }
};
