import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateHotels } from "../context/Allapi";
import Home from "./Home";
import Signin from "./Signin";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [after, setafter] = useState(false);
  // const [Hotel, setHotel] = useState([{}]);
  //   const { IsLogin, setIsLogin } = useStateHotels();

  const UserRegister = { username, email, password };
  const Resgister = () => {
    axios
      .post("http://localhost:3001/api/auth/register", UserRegister)
      .then((e) => {
        console.log(e + "register");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div>
      {!after ? (
        <div className="text-3xl justify-center sm:w-1/3 md:w-1/2 lg:w-[900px] bg-slate-200 p-4 items-center ml-56 lg:pl-[20%] md:pl-[4%] sm:pl-[1%] shadow-lg gap-y-4 m-12 grid grid-cols-1">
          <h1 className="text-3xl font-serif mr-72">Register</h1>
          <input
            type="text"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            className="border- p-4 sm:w-1/3 md:w-1/2 lg:w-80 rounded-lg shadow-xl border-slate-600 w  "
            placeholder="username"
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            value={password}
            className="border- p-4 rounded-lg shadow-xl border-slate-600 lg:w-80  "
            placeholder="password"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border- p-4 rounded-lg shadow-xl border-slate-600 lg:w-80  "
            placeholder="email"
          />
          <div className="flex sm:w-1/3 md:w-1/2 lg:w-full">
            <button
              className="sm:text-sm md:text-xl lg:text-3xl  sm:w-1/3 md:w-1/2 lg:w-full m-3 rounded-lg bg-cyan-800 p-4 text-white"
              onClick={Resgister}
            >
              Sign up
            </button>

            <Link
              className="lg:text-3xl lg:mt-6 md:mt-3 md:text-xl sm:text-sm text-blue-900"
              to="/Signin"
            >
              Login
            </Link>
          </div>
        </div>
      ) : (
        <Signin />
      )}

      <h1>a{Error}</h1>
    </div>
  );
};

export default Register;
