import "./App.css";
import axios from "axios";
import { useStateHotels } from "./context/Allapi";
import { useState } from "react";
import Signin from "./components/Signin";
function App() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Hotel, setHotel] = useState([{}]);
  const [Error, setError] = useState("");
  const { Data, setData, getUser, getHotel } = useStateHotels();
  const getdata = () => {
    axios.get("/hotel").then((res) => {
      setHotel(res.data);
      console.log(res);
    });
  };
  const UserRegister = { username, email, password };
  // console.log(UserRegister);
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
    <div className="App">
      <div className="text-3xl justify-center items-center pl-[30%] shadow-lg gap-y-4 m-12 grid grid-cols-1">
        <input
          type="text"
          onChange={(e) => setusername(e.target.value)}
          value={username}
          className="border- shadow-xl border-slate-600 w-80  "
          placeholder="username"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          value={password}
          className="border- shadow-xl  border-slate-600 w-80"
          placeholder="password"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="border- shadow-xl  border-slate-600 w-80"
          placeholder="email"
        />
      </div>

      <h1>a{Error}</h1>
      <button onClick={Resgister}>Send</button>
      {/* <button onClick={getdata}>{Data}sss</button> */}
      {Hotel
        ? Hotel.map((item, id) => {
            return (
              <div key={id}>
                <img src={item.photos} alt={item.name} />
              </div>
            );
          })
        : "ee"}
      <Signin />
    </div>
  );
}

export default App;
