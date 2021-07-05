import { Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config";

export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const [state, setState] = useState("");
  const [user, setUser] = useState("");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      console.log({ children });
      console.log("hello")
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false)
        history.replace("/chatroom");
      }else{
          setIsLoading(false)
          history.replace("/login")
      }
    });
    //clean function
    return () => {
      unsubcribed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
