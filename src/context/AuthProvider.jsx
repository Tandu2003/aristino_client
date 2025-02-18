import { createContext, useState } from "react";

// import { Auth } from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [loading, setLoading] = useState(true);
  const loading = false;

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await Auth.getLogin();
  //       if (response.data.success) {
  //         setUser(response.data);
  //         setLoggedIn(true);
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUser();
  // });

  return (
    <AuthContext.Provider value={{ user, loading, setUser, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
