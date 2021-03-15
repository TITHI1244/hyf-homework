import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const contextValue = {
    input: input,
    setInput: setInput,
    loading: loading,
    setLoading: setLoading,
    users: users,
    setUsers: setUsers,
    message: message,
    setMessage: setMessage,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
