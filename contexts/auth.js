import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const tokenUrl = process.env.NEXT_PUBLIC_API_URL_Token
const registerUrl = process.env.NEXT_PUBLIC_API_URL_Register
const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);

  // if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider(props) {

  const [state, setState] = useState({
    tokens: null,
    user: null,
    signup,
    login,
    logout,
  });

  async function login(username, email, password) {
    const response = await axios.post(tokenUrl, { username, email, password });
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

  async function signup(username, email, password) {
    const regresponse= await axios.post(registerUrl, { username, email, password })
    return regresponse.data
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
