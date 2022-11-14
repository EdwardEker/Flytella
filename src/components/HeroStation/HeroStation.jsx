import React from "react";
import HeroVid from "../../assets/auto.mp4";

const HeroStation = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={HeroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-red-500">Lugn!</h1>
        <h1 className="py-2">
          Vi hjälper dig att <span className="text-blue-500">FLYTTA!</span>
        </h1>
        <p className="text-xl py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est.
        </p>
        <div>
          <button className="m-2">Begär kostnadsfri offert</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
    </div>
  );
};

export default HeroStation;
