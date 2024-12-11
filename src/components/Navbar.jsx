import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

//
// https://cdn.vectorstock.com/i/1000v/06/85/fashion-silhouette-hipster-style-vector-1610685.avif
function Navbar() {
  const [ham, setHam] = useState(false);
  const handleHam = () => {
    if (!ham) {
      setHam(true);
    } else {
      setHam(false);
    }
  };

  const parentVariant = {
    hidden : {opacity : 0},
    show : {opacity : 1 ,transition :{staggerChildren  : 0.5 ,duration : 2}}
  }
  const chikdVariant ={
    hidden: { opacity : 0},
    show : { opacity : 1 }
  }

  return (
    <>
      <div className="flex items-center justify-between md:justify-start md:gap-6 md:mb-3 md:ml-2">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.ZAd6Ku7eZAhadikSg0y8gwHaHa&pid=Api&P=0&h=180"
          alt=""
          className="w-14 rounded-full m-2"
        />
        <h1>Fash Club</h1>

        <div className="md:hidden">
          {!ham ? (
            <RxHamburgerMenu
              className={`text-4xl text-black m-4 cursor-pointer`}
              onClick={handleHam}
            />
          ) : (
            <GiCrossMark
              onClick={handleHam}
              className="text-4xl text-black m-4 cursor-pointer"
            />
          )}
        </div>
      </div>
      <motion.div className="hidden md:flex md:gap-5 lg:mx-auto lg:w-8/12 w-full items-center justify-center   p-4 lg:mb-5" 
        variants={parentVariant}
        initial="hidden"
        animate="show"

      >
        <Link className="w-full" to="/">
          <motion.div className="shadow-2xl md:shadow-xl rounded-2xl w-full text-center p-4 md:text-lg lg:text-xl" variants={chikdVariant}>
            Home
          </motion.div>
        </Link>
        <Link to="/about" className="w-full">
          <motion.div className="shadow-2xl md:shadow-xl rounded-2xl w-full text-center p-4 md:text-lg lg:text-xl" variants={chikdVariant}>
            About{" "}
          </motion.div>
        </Link>
        <Link to="/contact" className="w-full">
          <motion.div className="shadow-2xl md:shadow-xl rounded-2xl  text-center p-4 md:text-lg lg:text-xl" variants={chikdVariant}>
            Contact us
          </motion.div>
        </Link>
      </motion.div>
      <div
        className={` ${
          !ham ? "hidden" : "flex"
        }  flex-col gap-2 text-xl items-center justify-around  p-2 h-52`}
      >
        <div className="shadow-2xl rounded-2xl w-full text-center p-4">
          Home
        </div>
        <Link to="/about" className="w-full">
          <div className="shadow-2xl rounded-2xl w-full text-center p-4">
            About{" "}
          </div>
        </Link>
        <Link to="/contact" className="w-full">
          <div className="shadow-2xl rounded-2xl  text-center p-4">
            Contact us
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
