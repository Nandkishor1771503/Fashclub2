import React from "react";
import Bg from "../images/Bg.jpg";
import Display_img from "../images/Display_img.png";
import { motion } from "motion/react";

// gold : #b58b56
// light brown : #a67c52
// #e7d8c4
function Display() {
  const imgLeft = {
    initial: {
      rotate: 5,
      transition: { duration: 0.5, damping: 100, stiffness: 200, delay: 0.2 },
    },
    animate: {
      rotate: -5,
      transition: { duration: 0.5, damping: 100, stiffness: 200, delay: 0.2 },
    },
  };

  const imgRight = {
    animate: {
      rotate: 5,
      transition: { duration: 0.5, damping: 100, stiffness: 200, delay: 0.2 },
    },
  };

  return (
    <>
      {/* <div className="bg-[#a67c52] w-[90%] m-auto mt-6 rounded-lg flex items-center font-serif text-xl gap-4 md:hidden">
        <img src={Bg} alt="" className="w-[40%] p-2 rounded-full" />
        <h2 className="text-white">Hey this is Rahul Navare ...</h2>
      </div> */}

      <div className="flex m-4 p-2 my-8 lg:p-4 items-center lg:justify-between gap-16  md:gap-[20%] lg:gap-[15%] lg:w-[90%]  lg:mx-auto">
        <img
          src={Display_img}
          initial=" initial"
          alt=""
          className="w-[50%] md:w-[50%]  lg:w-[35%] m-auto mb-4 rounded-xl shadow-inner"
        />
        <motion.div className="text-3xl md:text-5xl lg:text-7xl text-center  flex flex-col gap-0 md:gap-2 lg:gap-5 w-full">
          <motion.h2
            className="font-londrina -ml-24 -rotate-6 md:mb-5 shadow-2xl rounded-xl"
            style={{ transformOrigin: "bottom" }}
            variants={imgRight}
            initial=" initial"
            animate="animate"
          >
            Fashion
          </motion.h2>
          <motion.h2
            className="font-londrina rotate-3 ml-3 lg:mt-5 shadow-2xl rounded-xl"
            style={{ transformOrigin: "top" }}
            variants={imgLeft}
            initial=" initial"
            animate="animate"
          >
            is
          </motion.h2>
          <motion.h2
            className="font-londrina -ml-20 lg:mt-5 -rotate-3 shadow-2xl rounded-xl md:text-start md:pl-12 lg:pl-[30%]"
            style={{ transformOrigin: "bottom" }}
            variants={imgRight}
            initial=" initial"
            animate="animate"
          >
            my
          </motion.h2>
          <motion.h2
            className="font-londrina -rotate-12 md:-ml-2 md:mt-4 mt-2 shadow-2xl rounded-xl"
            style={{ transformOrigin: "bottom" }}
            variants={imgLeft}
            initial=" initial"
            animate="animate"
          >
            Obsession
          </motion.h2>
        </motion.div>
      </div>
    </>
  );
}

export default Display;
