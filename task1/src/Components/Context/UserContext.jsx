import { createContext, useState, useContext } from "react";

export const UserContex = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const USER = { name: "Guest", isLoggedIn: false };
export const UserContextProvider = ({ children }) => {
  //user data
  const [user, setUser] = useState(USER);

  //user loggedin

  const logIn = (username) => {
    setUser({ name: username, isLoggedIn: true });
  };

  const logOut = () => {
    setUser({ name: "Guest", isLoggedIn: false });
    console.log(user);
  };

  return (
    <UserContex.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContex.Provider>
  );
};

export const useUserContext = () => {
  const { user, logIn, logOut } = useContext(UserContex);
  return { user, logIn, logOut };
};
