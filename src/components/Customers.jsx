import React from "react";
// import cImg from '../images/Customer_img.png'

const imgStyle = "w-[50%] md:w-[40%] lg:w-[30%] rounded-2xl border-black border-2 "

function Customers() {
  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl mx-4 my-6 p-2 md:p-4 shadow-xl">Happy Customers</h2>
      {/* <div className="w-full h- bg-black"></div> */}
      {/* <marquee behavior="scroll" direction="" > */}

      <div className="flex overflow-x-scroll lg:h-[50%]  h-80 mt-6 mb-12 p-3 gap-4 shadow-xl ">
        <img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
        />

        <img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
        />

        <img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
        />

        <img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
        />

        <img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
        />

        <img
          src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
          alt=""
          className={imgStyle}
        />
      </div>
      {/* </marquee> */}
    </>
  );
}

export default Customers;
