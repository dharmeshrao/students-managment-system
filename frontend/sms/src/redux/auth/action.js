import { GETauthERROR, GETauthLOADING, GETauthSUCESS } from "./actiontype";

export const getAuthloading = () => ({ type: GETauthLOADING });
export const getAuthSucess = (data) => ({ type: GETauthSUCESS, payload: data });
export const getAuthError = (data) => ({ type: GETauthERROR, payload: data });