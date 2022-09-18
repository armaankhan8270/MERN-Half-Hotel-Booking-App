import "./App.css";
import axios from "axios";
import { useStateHotels } from "./context/Allapi";
import { useState } from "react";
import Signin from "./components/Signin";
import Register from "./components/Register";
function App() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Hotel, setHotel] = useState([{}]);
  const { getHotel } = useStateHotels();

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
    <div className="App">
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
      <Register />
    </div>
  );
}

export default App;
