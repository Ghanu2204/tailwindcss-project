import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        <img className="w-4/5 mx-auto my-4" alt="image" src={Laptop} />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrality</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            iure error itaque mollitia saepe, repellat earum unde aperiam alias
            nulla eligendi neque quos suscipit cumque recusandae rem modi in
            quam.
          </p>
          <button className="text-[#00df9a] bg-black w-48 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
