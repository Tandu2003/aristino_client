import { createContext, useEffect, useState } from "react";

import { Auth } from "../api/auth";
import { Wishlist } from "../api/wishlist";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const dataAuth = await Auth.getLogin();
        if (dataAuth.success) {
          setUser(dataAuth.user);
          setLoggedIn(dataAuth.loggedIn);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.log(error.response?.data.message || "Server không phản hồi");
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  // Tách riêng useEffect để đảm bảo chỉ chạy khi user._id có giá trị
  useEffect(() => {
    if (!user._id) return;

    const fetchWishlist = async () => {
      try {
        const dataWishlist = await Wishlist.getWishlist(user._id);
        setWishlist(dataWishlist);
      } catch (error) {
        console.log(error.response?.data.message || "Server không phản hồi");
      }
    };

    fetchWishlist();
  }, [user._id]); // Chỉ chạy khi user._id thay đổi

  return (
    <AuthContext.Provider
      value={{ user, loading, setUser, loggedIn, setLoggedIn, wishlist, setWishlist }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
