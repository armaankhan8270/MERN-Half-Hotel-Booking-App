import axios from "axios";
import { createContext, useContext, useState } from "react";

export const HotelsContext = createContext();

export const StateHotels = ({ children }) => {
  const [HotelData, setHotelData] = useState([{}]);
  const [Loginusername, setusername] = useState("");
  const [Loginpassword, setpassword] = useState("");
  const LoginInfo = { Loginusername, Loginpassword };
  const [IsLogin, setIsLogin] = useState(false);
  const Login = async () => {
    axios
      .post("http://localhost:3001/api/auth/login", LoginInfo)
      .then((e) => alert(e.data))
      .catch((e) => {
        alert(e.data);
      });
  };

  const getAllHotel = async () => {
    axios.get("http://localhost:3001/api/hotel").then(async (result) => {
      await setHotelData(result.data);
      console.log(result.data);
    });
  };
  return (
    <HotelsContext.Provider
      value={{
        HotelData,
        setHotelData,
        getAllHotel,
        Login,
        Loginusername,
        Loginpassword,
        setpassword,
        setusername,
        IsLogin,
        setIsLogin,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
export const useStateHotels = () => useContext(HotelsContext);
