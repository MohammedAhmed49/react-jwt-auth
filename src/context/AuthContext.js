import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isPersist, setIsPersist] = useState(
    JSON.parse(localStorage.getItem("persist") || false)
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, isPersist, setIsPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
