import axios from "axios";
import React, { useState } from "react";
import { useStateHotels } from "../context/Allapi";
import Home from "./Home";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Hotel, setHotel] = useState([{}]);
  const [after, setafter] = useState(false);
  //   const { IsLogin, setIsLogin } = useStateHotels();

  const UserRegister = { username, email, password };
  const Resgister = () => {
    axios
      .post("http://localhost:3001/api/auth/register", UserRegister)
      .then((e) => {
        console.log(e + "register");
        setafter(true);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div>
      {!after ? (
        <div className="text-3xl justify-center bg-slate-200 p-4 items-center pl-[30%] shadow-lg gap-y-4 m-12 grid grid-cols-1">
          <h1 className="text-3xl font-serif mr-72">Register</h1>
          <input
            type="text"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            className="border- p-4 rounded-lg shadow-xl border-slate-600 w-80  "
            placeholder="username"
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            value={password}
            className="border- p-4 rounded-lg shadow-xl border-slate-600 w-80  "
            placeholder="password"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border- p-4 rounded-lg shadow-xl border-slate-600 w-80  "
            placeholder="email"
          />
          <button
            className="text-3xl w-44 rounded-lg bg-cyan-800 p-4 text-white"
            onClick={Resgister}
          >
            Sign up
          </button>
        </div>
      ) : (
        <Home />
      )}

      <h1>a{Error}</h1>
    </div>
  );
};

export default Register;
