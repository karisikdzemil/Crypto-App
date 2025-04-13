import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Logout() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out", error);
      });
  };

  return (
    <button onClick={handleLogout} className="text-red-500">
      Logout
    </button>
  );
}
