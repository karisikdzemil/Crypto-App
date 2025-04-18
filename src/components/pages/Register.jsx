import Login from "../register/Login";
import Singup from "../register/Singup";
import { Link, useSearchParams, redirect } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function Register() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <section className="w-full min-h-screen bg-[#1A1C22ff] p-10 flex items-center flex-col-reverse gap-3 md:flex-row">
      <div className="md:w-1/2 w-full h-full p-5">
        <img
          className="w-20 h-20 m-auto mb-5 rounded-md"
          src="image.png"
          alt=""
        />
        <div className="p-5">
          <h1 className="text-[#F0B90B] text-md md:text-2xl">
            Welcome to CryptoApp — your gateway to the digital asset world.
          </h1>
          <p className="text-white text-left my-2">
            Explore, trade, and track your favorite cryptocurrencies in real-time.
            Create your profile and start with $100,000 demo funds.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full h-full flex items-center justify-center flex-col">
        {isLogin ? <Login /> : <Singup />}
        <p className="text-white p-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            className="text-amber-400"
            to={`?mode=${isLogin ? "signup" : "login"}`}
          >
            {isLogin ? "Sign up!" : "Login!"}
          </Link>
        </p>
      </div>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const formType = formData.get("formType");


    if(formType === 'signup'){
        try {
        console.log(formType)
        if(password === confirmPassword){
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    balance: 100000,
                    currencies: []
                })
            }
            console.log('User registered successfuly')
            
            return redirect('/')
        }else{
          if(password.length < 6){
            return {error: 'Password must have at least 6 character!'}
          }
            console.log('Passwords do not match.');
            return {error: "Passwords don't match!"}
        }
        } catch (error) {
            return error
        }
    }  

    if(formType === 'login'){
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successfuly!!!')
            return redirect('/')
        } catch (error) {
            console.log(error);
            return {error: "Wrong email or password!"}

        }
    }
}
