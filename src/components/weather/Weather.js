import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

function Weather(data) {
  console.log(data);
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div class="flex h-screen">
        <div class="m-auto">
          {/* input element */}
          <h2 className="font-customFont">
            <span className="underline decoration-solid font-medium">
              City Search
            </span>
            <span className="opacity-70"> Coming Soon</span>{" "}
            <CiClock2 className="inline" size={20} />
          </h2>
          {/* <form>
            <div class="gap-3 border-b border-gray-900/10 pb-6 mt-2 flex">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Type a city ..."
                className="flex-auto p-2 w-64 placeholder-slate-700 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="w-fit flex items-center px-3 py-2 rounded-md bg-blue-500 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <CiSearch className="mr-2" />
                <span>Search</span>
              </button>
            </div>
          </form> */}

          {/* Card element */}
          <div class="flex justify-center mt-6">
            <div class="card  min-w-sm max-w-sm border border-gray-100 bg-blue-500   transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full  text-purple-50 rounded-md">
              <h2 class="text-md mb-2 px-3 pt-4">
                <div class="flex justify-between">
                  <div class="badge relative top-0">
                    <span class="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-3">
                      {data?.data?.name}
                    </span>
                  </div>
                  <span class="text-lg font-bold ">{currentTime}</span>
                </div>
              </h2>

              <div class="flex items-center p-3">
                <div class="flex justify-center items-center w-96">
                  <IoPartlySunnyOutline size={120} color="yellow" />
                </div>
              </div>
              <div class="text-md pt-4 pb-4 px-3">
                <div class="flex justify-between items-center">
                  <div class="space-y-2">
                    <span class="flex space-x-2 items-center">
                      <LuWind size={20} />{" "}
                      <span>
                        {Math.trunc(data?.data?.wind.speed * 3.6)} km/h
                      </span>
                    </span>
                    <span class="flex space-x-2 items-center">
                      <IoWaterOutline size={20} />{" "}
                      <span>{Math.trunc(data?.data?.main.humidity)} %</span>
                    </span>
                  </div>
                  <div>
                    <h1 class="text-6xl">
                      {Math.trunc(data?.data?.main?.temp)}°
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
