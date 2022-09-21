import axios from "axios";
import { createContext, useContext, useState } from "react";

export const HotelsContext = createContext();

export const StateHotels = ({ children }) => {
  const [HotelData, setHotelData] = useState([{}]);
  const [Loginusername, setLoginusername] = useState("");
  const [Loginpassword, setpassword] = useState("");
  const LoginInfo = { Loginusername, Loginpassword };
  const [IsLogin, setIsLogin] = useState(false);
  const [rooms, setrooms] = useState({
    roomName: "",
    roomImage: "",
    address: "",
    desc: `Resort The Lohias, a division of The Lohia Hospitality Group, is a leading hospitality chain in
    India. Established in 1995, we have come a long way
    emerging as the frontrunners in hospitality.
    Throughout the journey, the focus of our team has
    been to gratify our guests by moving consistently
    with the trends establishing new benchmarks. With
    the aim of increasing our satisfied customer base
    symbiotically, we are now at more than eight major
    locations in India. Know More"`,
  });
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
        setLoginusername,
        IsLogin,
        setIsLogin,
        rooms,
        setrooms,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
export const useStateHotels = () => useContext(HotelsContext);
