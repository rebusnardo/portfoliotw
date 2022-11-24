import React from "react";
import GySgt from "../assets/gunny.png";
import LogChief from "../assets/logistics.png";
import AFG from "../assets/afg.png";
import Ammo from "../assets/ammo.png";
import PltSgt from "../assets/platoon.png";
import ICM from "../assets/icm1.png";

const Military = () => {
  return (
    <div
      name="military"
      className=" w-full h-screen bg-[#0a192f]  text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600 ">
            Military Expierance
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GySgt} alt="HTML Icon" />
              <p className="my-4">GUNNERY SERGEANT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto mt-6"
                src={LogChief}
                alt="HTML Icon"
              />
              <p className="my-4">BATTALION LOGISTICS CHIEF</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto mt-12" src={AFG} alt="HTML Icon" />
              <p className="my-4">AFGHANISTAN VETERAN</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Ammo} alt="HTML Icon" />
              <p className="my-4">BATTERY AMMUNITION CHIEF</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={PltSgt} alt="HTML Icon" />
              <p className="my-4">PLATOON SERGEANT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto mt-12" src={ICM} alt="HTML Icon" />
              <p className="my-4">IRAQ CAMPAIGN VETERAN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Military;
