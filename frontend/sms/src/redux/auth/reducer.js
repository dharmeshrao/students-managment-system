import { GETauthERROR, GETauthLOADING, GETauthSUCESS } from "./actiontype";
const initState = {
  loading: false,
  token: "",
  error: false,
};

const Token = (data) => {
  localStorage.setItem("acess_token_sms", JSON.stringify(data));
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETauthLOADING:
      return {
        ...state,
        loading: true,
      };
    case GETauthSUCESS:
      Token(payload);
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case GETauthERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
