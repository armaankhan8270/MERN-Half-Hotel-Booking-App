import axios from "axios";
import { createContext, useContext, useState } from "react";

export const HotelsContext = createContext();

export const StateHotels = ({ children }) => {
  const [Data, setData] = useState([]);
  const getUser = async () => {
    axios.get("/auth/register").then(async (result) => {
      // await setData(result.data);
      console.log(result.data);
    });
  };
  const getHotel = async () => {
    axios.get("/hotel").then(async (result) => {
      await setData(result.data);
      console.log(result.data);
    });
  };
  return (
    <HotelsContext.Provider value={{ Data, setData, getUser, getHotel }}>
      {children}
    </HotelsContext.Provider>
  );
};
export const useStateHotels = () => useContext(HotelsContext);
