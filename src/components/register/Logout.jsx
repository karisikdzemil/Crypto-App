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
    <button onClick={handleLogout} className='text-black text-lg font-semibold px-4 py-2 hover:bg-[#FCD535] rounded-md cursor-pointer bg-[#F0B90B]'>
      Logout
    </button>
  );
}
