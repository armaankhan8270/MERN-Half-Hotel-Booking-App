import React from "react";
import { useStateHotels } from "../context/Allapi";

const Home = () => {
  const { HotelData, setHotelData, getAllHotel } = useStateHotels();

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {HotelData[0].name}
              <br class="hidden lg:inline-block" />
              {HotelData[0].address}
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button
                onClick={getAllHotel}
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded h-56 "
              alt="hero"
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>
      </section>
      {HotelData
        ? HotelData.map((item, id) => {
            return (
              <div key={id}>
                <img src={item.photos} alt={item.name} />
              </div>
            );
          })
        : "ee"}
    </>
  );
};

export default Home;
