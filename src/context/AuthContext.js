import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({
  auth: {},
  setAuth: (auth) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
