import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Rooms = () => {
  return (
    <>
      

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-10 mx-5">
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4 flex flex-col">
              <h2 className="font-bold text-xl">Zuir Hotel </h2>
              <p className="text-sm text-gray-500"><LocationOnIcon/>   Kottayam</p>
              <p className="text-base text-gray-500">Dulex Room </p>
              <p className="text-base text-gray-500">Best hospitality</p>
              <p className="text-lg font-medium text-lime-500"><CurrencyRupeeIcon/>2000</p>
            </div>
            <div className="grid grid-flow-col gap-5 pd-2 px-6">
              <button className="bg-blue-600 text-white rounded-full px-3 py-1 font-base mb-2 hover:bg-blue-700">
                View Detail
              </button>
              <button className="bg-blue-600 text-white rounded-full px-3 py-1 font-base mb-2 hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Room </div>
              <p className="text-gray-400">Best hospitality</p>
            </div>
            <div className="grid grid-flow-col gap-5 pd-2 px-6">
              <button className="bg-blue-600 text-white rounded-full px-3 py-1 font-base mb-2">
                View Detail
              </button>
              <button className="bg-blue-600 text-white rounded-full px-3 py-1 font-base mb-2">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Room </div>
              <p className="text-gray-400">Best hospitality</p>
            </div>
            <div className="grid grid-flow-col gap-5 pd-2 px-6">
              <button className="bg-blue-600 text-white rounded-full px-3 py-1 font-base mb-2">
                View Detail
              </button>
              <button className="bg-blue-600 text-white rounded-full px-3 py-1 font-base mb-2">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
