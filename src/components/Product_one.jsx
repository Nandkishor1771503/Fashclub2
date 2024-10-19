import React from "react";
import { useParams } from "react-router-dom";
import First_data from "../Data/data1.js";
import { FaWhatsapp } from "react-icons/fa";

function Product_one() {
  const { id } = useParams();
  // console.log(param)
  const details = First_data.find((e) => e.id == id);
  return (
    <>
      <div className="overflow-hidden h-auto lg:overflow-y-visible w-full lg:w-[80%] lg:mx-auto lg:shadow-2xl lg:my-5">
        <div className="block lg:flex lg:items-center lg:justify-center lg:mx-auto lg:ml-[20%] w-full lg:w-[90%]  ">
          <img
            src={details.src}
            alt=""
            className="h-screen lg:h-[55%] w-full lg:w-[35%] border-[2px]"
          />
          <div className="hidden lg:block lg:w-[50%]  ">
            <img
              src={details.src}
              alt=""
              className="hidden lg:block lg:w-[25%] border-[2px]"
            />
            <img
              src={details.src}
              alt=""
              className="hidden lg:block lg:w-[45%] border-[2px]"
            />
          </div>
        </div>
        <div className="w-11/12 lg:mx-auto lg:h-96 lg:relative absolute bottom-10 bg-[#eacda4] bg-opacity-75 backdrop-blur-sm shadow-2xl z-50 rounded-xl p-5 m-4  ">
          <div className=" lg:flex items-center justify-center gap-24">
            <div className="">
              <h1 className="text-5xl lg:my-4">{details.name}</h1>

              <div className="flex my-3 gap-2 lg:gap-4 ">
                <span className="font-medium lg:text-3xl">size:</span>
                <h2 className="text-lg lg:text-3xl ">{details.size}</h2>
              </div>

              <strong className="text-xl">{details.price}</strong>
            </div>
            <div className="hidden lg:block space-y-4 ">
              <p className="text-3xl">{details.discription}</p>
              <div className="flex gap-2 text-xl">
                <strong>Category:</strong>
                <h3>{details.category}</h3>
              </div>
            </div>
          </div>
          <div className="hidden lg:block m-auto my-14 w-[50%] ">
            <a
              href={`https://wa.me/918143366416?text=${encodeURIComponent(
                `name: ${details.name}\ndiscription : ${details.discription}\ncategory : ${details.category}\nitem id : ${details.id}\nprice : ${details.price}\nI want to buy this product let me know the avalibility ...`
              )}`}
              className="flex items-center justify-center "
            >
              <button className="w-full flex items-center justify-center bg-[#a67c52]  h-12 rounded-3xl text-2xl text-center gap-2">
                <FaWhatsapp /> Buy now
              </button>
            </a>{" "}
          </div>
        </div>
        <div className="absolute lg:hidden bottom-0 w-full">
          <a
            href={`https://wa.me/918143366416?text=${encodeURIComponent(
              `name: ${details.name}\ndiscription : ${details.discription}\ncategory : ${details.category}\nitem id : ${details.id}\nprice : ${details.price}\nI want to buy this product let me know the avalibility ...`
            )}`}
            className="flex items-center justify-center"
          >
            <button className="w-full flex items-center justify-center bg-[#a67c52]  h-12 rounded-sm text-2xl text-center gap-2">
              <FaWhatsapp /> Buy now
            </button>
          </a>{" "}
        </div>
      </div>
    </>
  );
}

export default Product_one;
