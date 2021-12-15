import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const tokenUrl = process.env.NEXT_PUBLIC_API_URL_Token
const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider(props) {

  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  });

  async function login(username,email, password) {
    const response = await axios.post(tokenUrl, { username,email, password });
    const decodedAccess = jwt.decode(response.data.access);
    const newState = {
      tokens: response.data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        password: decodedAccess.password,
      },
    };

    setState((prevState) => ({ ...prevState, ...newState }));
    localStorage.setItem("Auth", JSON.stringify(newState.user))
    localStorage.setItem("Tokens", JSON.stringify(newState["tokens"]))


  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
