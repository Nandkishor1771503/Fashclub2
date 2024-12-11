import React from "react";
import { motion } from "motion/react";

// import cImg from '../images/Customer_img.png'

const imgStyle =
  "w-[50%] md:w-[40%] lg:w-[30%] rounded-2xl border-black border-2 ";

const parentVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1 } },
};
const chikdVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Customers() {
  return (
    <>
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl mx-4 my-6 p-2 md:p-4 shadow-xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{once:true}}
      >
        Happy Customers
      </motion.h2>
      {/* <div className="w-full h- bg-black"></div> */}
      {/* <marquee behavior="scroll" direction="" > */}

      <motion.div
        className="flex overflow-x-scroll lg:h-[50%]  h-80 mt-6 mb-12 p-3 gap-4 shadow-xl "
        variants={parentVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
          variants={chikdVariant}
        />

        <motion.img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
          variants={chikdVariant}
        />

        <motion.img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
          variants={chikdVariant}
        />
        <motion.img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
          variants={chikdVariant}
        />
      </motion.div>
      {/* </marquee> */}
    </>
  );
}

export default Customers;
