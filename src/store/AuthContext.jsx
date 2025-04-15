import { createContext, useEffect, useState, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

export const AuthContext = createContext({
  user: null,
  userData: null,
  isUserData: false,
  logout: () => {},
  recordTransaction: () => {}
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isUserData, setIsUserData] = useState(false);
  const logoutTimerRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {

        if (logoutTimerRef.current) {
          clearTimeout(logoutTimerRef.current);
        }
        
        logoutTimerRef.current = setTimeout(() => {
          logout(); 
          console.log("Auto-logout after 60 minutes of session");
        }, 60 * 60 * 1000); 
        setUser(user);

        try {
          const docRef = doc(db, "users", user.uid);
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
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
    
    signOut(auth)
    .then(() => {
      console.log("User signed out");
      setIsUserData(false);
    })
    .catch((error) => {
      console.error("Error signing out", error);
    });
  }

  async function recordTransaction({ uid, isBuy, coin, amountUSD, amountCoin }) {
    const userRef = doc(db, "users", uid);
    try {
      const userSnap = await getDoc(userRef);
  
      if (!userSnap.exists()) {
        throw new Error("User not found!");
      }
  
      const userData = userSnap.data();
      let newBalance = userData.balance;
  
      if (isBuy) {
        if (amountUSD > newBalance) throw new Error("Not enough balance.");
        newBalance -= amountUSD;
      } else {
        newBalance += amountUSD;
      }
  
      const newCurrency = {
        type: isBuy ? "BUY" : "SELL",
        coinId: coin.id,
        symbol: coin.symbol,
        pricePerCoin: coin.quote.USD.price,
        amountUSD: +amountUSD.toFixed(2),
        amountCoin: +amountCoin.toFixed(5),
        timestamp: new Date().toISOString()
      };
  
      await updateDoc(userRef, {
        balance: newBalance,
        currencies: arrayUnion(newCurrency)
      });
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data())
      console.log("Transaction successfully recorded!");
    } catch (err) {
      console.error("Transaction error:", err.message);
    }
  }
  

  const authContext = {
    user,
    userData,
    isUserData,
    logout,
    recordTransaction
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
