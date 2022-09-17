/**
 * Created By : Adireddi Charan Teja
 */
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: "",
  logout: () => {},
  login: (email, password) => {},
});

export default AuthContext;
/**
 * Created By : Adireddi Charan Teja
 */
