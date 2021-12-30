import { createContext, useEffect } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const handleToken = () => {
    localStorage.removeItem("acess_token_sms");
  };
  const handleSignin = (d) => {
    localStorage.setItem("acess_token_sms", JSON.stringify(d));
  };
  return (
    <AuthContext.Provider value={{ handleToken, handleSignin }}>
      {children}
    </AuthContext.Provider>
  );
};
