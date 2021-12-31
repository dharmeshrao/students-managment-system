import { setLocalstorage, getLocalstorage } from "../../utils/localStorage";
import { GETauthERROR, GETauthLOADING, GETauthSUCESS } from "./actiontype";
const initState = {
  loading: false,
  token: "",
  error: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETauthLOADING:
      return {
        ...state,
        loading: true,
      };
      case GETauthSUCESS:
      setLocalstorage("acess_sms", payload);
      return {
        ...state,
        loading: false,
        token: getLocalstorage("acess_sms"),
      };
    case GETauthERROR:
      return {
        ...state,
        token: "",
        loading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
