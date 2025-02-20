import { createContext, useEffect, useState } from "react";

import { Auth } from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await Auth.getLogin();
        if (response.data.success) {
          setUser(response.data.user);
          setLoggedIn(response.data.loggedIn);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
