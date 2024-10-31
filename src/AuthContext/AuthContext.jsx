import { Password } from "@mui/icons-material";
import { createContext, useReducer,useContext } from "react";

const AuthContext = createContext();

const validUser = {
  email: "kapilbhattarai@gmail.com",
  password: "4321",
};

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { user } = state;

  const value = {
    user,
    login,
    logout,
  };

  function login(data) {
    if (
      data.email === validUser.email &&
      data.password === validUser.password
    ) {
      dispatch({ type: "LOGIN",payload:validUser });
    }
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const {user, login, logout} = useContext(AuthContext);

    function authenticated() {
        return user ? true : false;
    }

    return {
        user, 
        login,
        logout,
        get isAuthenticated() {
            return authenticated();
        }
    };
}