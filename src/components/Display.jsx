import React from "react";
import Bg from "../images/Bg.jpg";
import Display_img from "../images/Display_img.png";

// gold : #b58b56
// light brown : #a67c52
// #e7d8c4
function Display() {
  return (
    <>
      {/* <div className="bg-[#a67c52] w-[90%] m-auto mt-6 rounded-lg flex items-center font-serif text-xl gap-4 md:hidden">
        <img src={Bg} alt="" className="w-[40%] p-2 rounded-full" />
        <h2 className="text-white">Hey this is Rahul Navare ...</h2>
      </div> */}

      <div
        className="flex m-4 p-2 lg:p-4 items-center lg:justify-between gap-10 md:gap-[20%] lg:gap-[15%] lg:w-[90%]  lg:mx-auto 
      "
      >
        <img
          src={Display_img}
          alt=""
          className="w-[50%] md:w-[50%] lg:w-[35%] m-auto mb-4 rounded-xl shadow-inner "
        />
        <div className="text-2xl md:text-5xl text-center lg:text-7xl flex flex-col gap-0 md:gap-2 w-full ">
          <h2 className="font-londrina -ml-24 -rotate-6 md:mb-5 shadow-2xl rounded-xl">Fashion</h2>
          <h2 className="font-londrina rotate-3 ml-3 lg:mt-5 shadow-2xl rounded-xl">is</h2>
          <h2 className="font-londrina -ml-20 lg:mt-5 -rotate-3 shadow-2xl rounded-xl md:text-start md:pl-12 lg:pl-[30%]">my</h2>
          <h2 className="font-londrina -rotate-12 md:-ml-2 md:mt-4 mt-2 shadow-2xl rounded-xl">Obsession</h2>
        </div>
      </div>
    </>
  );
}

export default Display;
