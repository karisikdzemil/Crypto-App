import Login from "../register/Login";
import Singup from "../register/Singup";
import { Link, useSearchParams } from "react-router-dom";
export default function Register() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <section className="w-full min-h-[100vh] bg-[#1A1C22ff] p-10 flex items-center flex-col-reverse gap-3 md:flex-row">
      <div className="md:w-1/2 w-full h-full p-5">
        <img
          className="w-20 h-20 m-auto mb-5 rounded-md"
          src="image.png"
          alt=""
        />
        <div className="w-full h-full p-5">
          <h1 className=" text-[#F0B90B] text-md md:text-2xl">
            Welcome to CryptoApp — your gateway to the digital asset world.
          </h1>
          <p className="text-white text-left my-2">
            With a sleek and intuitive interface, CryptoApp allows you to
            explore, trade, and track your favorite cryptocurrencies in
            real-time. Whether you're new to crypto or an experienced trader,
            our platform gives you the tools you need to manage your portfolio
            and stay on top of market trends.
          </p>
        </div>
        <div className="w-full h-full p-5">
          <h1 className=" text-[#F0B90B] text-md md:text-2xl">
            Start with $100,000 in demo funds and experience risk-free trading.
          </h1>
          <p className="text-white text-left my-2">
            Create your profile, simulate buying and selling top
            cryptocurrencies, and watch your investments grow. No real money
            involved — just learn, experiment, and sharpen your trading skills
            in a safe environment. Join us and take your first step into the
            crypto universe today!
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full h-full flex items-center justify-center flex-col ">
        {isLogin ? <Login /> : <Singup />}

        <p className="text-white p-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            className="text-amber-400"
            to={`?mode=${isLogin ? "singup" : "login"}`}
          >
            {isLogin ? "Sing up!" : "Login!"}
          </Link>
        </p>
      </div>
    </section>
  );
}
