import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateHotels } from "../context/Allapi";

const Signin = () => {
  // const [IsLogin, setIsLogin] = useState(false);
  // const { Loginpassword, Login, Loginusername, setpassword, setusername } =
  //   useStateHotels();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const LoginInfo = { username, password };
  const { IsLogin, setIsLogin } = useStateHotels();
  const Login = async () => {
    axios
      .post("http://localhost:3001/api/auth/login", LoginInfo)
      .then((e) => {
        alert(e.data);
        setIsLogin(true);
      })

      .catch((e) => {
        alert(e.data);
      });
  };

  return (
    <>
      {!IsLogin ? (
        <div className="home grid text-black justify-center text-wite">
          <div className="bg-black w-[450px] rounded h-[700px] mt-[91px] ">
            <div className=" w-[314px]  border-[#333333] rounded-lg h-[378px] m-[64px]">
              <h1 className="text-3xl pt-1 h-9"> Sign In</h1>
              <input
                type="text"
                className="mt-[28px] text-sm pl-4  h-12 rounded bg-white w-[310px] outline-none shadow-lg"
                placeholder="username"
                onChange={(e) => setusername(e.target.value)}
                value={username}
              />
              <input
                type="password"
                className="mt-[28px] text-sm pl-4 h-12 rounded bg-white w-[310px] outline-none shadow-lg"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
              <button
                onClick={Login}
                className="bg-[#e50914] w-full h-12 mt-10 rounded"
              >
                Login
              </button>
              <div className="text-sm mt-3">
                <p className="text-gray-600 ">
                  {" "}
                  <input type="checkbox" name="" id="" /> Remember me
                </p>
                <p className="ml-[220px] -mt-5 text-gray-600">Needhelp</p>
              </div>
            </div>
            <div className=" w-[314px] border- -mt-[64px] h-[182px] m-[64px]">
              <p className="pt-[100px] text-gray-700 text-[17px]">
                New To Ntflix?{" "}
                <Link to="/register">
                  <span className="text-white font-bold pl-3 ">
                    Sign up Now
                  </span>
                </Link>
              </p>
              <p className="text-[13px] text-gray-500 pt-3">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>
            "Welcome f"
            {username}
          </p>
        </>
      )}
    </>
  );
};

export default Signin;
