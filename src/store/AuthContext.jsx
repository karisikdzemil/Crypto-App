import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext({
  user: null,
  userData: null,
  isUserData: false,
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isUserData, setIsUserData] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in user:", user.email, user.uid);
        setUser(user);

        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
            setIsUserData(true);
            console.log("Fetched user data from Firestore:", docSnap.data());
          } else {
            setUserData(null);
            setIsUserData(false);
            console.log("User data does not exist in Firestore.");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setIsUserData(false);
        }
      } else {
        console.log("User is logged out");
        setUser(null);
        setUserData(null);
        setIsUserData(false);
      }
    });

    return () => unsubscribe();
  }, []);

  function logout () {  
    signOut(auth)
    .then(() => {
      console.log("User signed out");
      setIsUserData(false);
    })
    .catch((error) => {
      console.error("Error signing out", error);
    });
  }

  const authContext = {
    user,
    userData,
    isUserData,
    logout
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
