import { createContext } from "react";
import { useState } from "react";
export const TokenContext = createContext();
export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const handleToken = (e) => {
    setToken(e);
  };
  return (
    <TokenContext.Provider value={{ handleToken, token }}>
      {children}
    </TokenContext.Provider>
  );
};
