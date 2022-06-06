import { useEffect, createContext, useState, useContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");

  useEffect(() => {
    localStorage.setItem("token", token);
    if(token){
      setIsLoggedIn(true)
    }
  },[token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, setToken, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
