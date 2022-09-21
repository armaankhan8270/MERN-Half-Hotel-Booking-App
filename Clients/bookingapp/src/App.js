import "./App.css";
import axios from "axios";
import { useStateHotels } from "./context/Allapi";
import { useState } from "react";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import SearchHotel from "./components/SearchHotel";
function App() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Hotel, setHotel] = useState([{}]);
  const { getHotel } = useStateHotels();

  const UserRegister = { username, email, password };
  const Resgisters = () => {
    axios
      .get("http://localhost:3001/api/hotel/countByCity?cities=london")
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {/* <Register /> */}
      {/* <SearchHotel />
       */}
      <Navbar />
      <Register />
      {/* <button onClick={Resgisters}>GEt</button> */}
    </div>
  );
}

export default App;
