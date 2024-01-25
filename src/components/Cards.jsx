import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full px-4 py-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100 ">
          <img
            className="w-20 mx-auto -mt-12 bg-white"
            src={Single}
            alt="single"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-48 rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-100 ">
          <img
            className="w-20 mx-auto -mt-12 bg-transparent"
            src={Double}
            alt="double"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Partnership</h2>
          <p className="text-center font-bold text-4xl">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-48 rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100 ">
          <img
            className="w-20 mx-auto -mt-12 bg-white"
            src={Triple}
            alt="triple"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Group Account</h2>
          <p className="text-center font-bold text-4xl">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-48 rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
