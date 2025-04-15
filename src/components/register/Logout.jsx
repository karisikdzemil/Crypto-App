import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Toast from "../UI/Toast";
import { useState } from "react";

export default function Logout() {
  const [showToast, setShowToast] = useState(false);
  const handleLogout = () => {
    setShowToast(true)
    setTimeout(() => {
      signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out", error);
      });
    }, 2000)
    };
    
    return (
      <>
      {showToast && <Toast message='You logged out!' duration={2000} onClose={() => setShowToast(false)}/>}
      <button onClick={handleLogout} className='text-black text-lg font-semibold px-4 py-2 hover:bg-[#FCD535] rounded-md cursor-pointer bg-[#F0B90B]'>
      Logout
    </button>
    </>
  );
}
