import React from "react";
import Fourth_data from "../Data/data4.js";
import { Link } from "react-router-dom";

function Four() {
  return (
    <>
      <h1>This is four page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Fourth_data &&
          Fourth_data.map(({ name, id, src, price, size }) => {
            return (
              <>
                <Link to={`/one/${id}`} key={id}>
                  <div className="w-11/12 m-auto flex lg:block items-center justify-center gap-[2rem] space-y-4 my-4 lg:p-2 bg-orange-300 rounded-xl shadow-xl">
                    <img
                      src={src}
                      alt=""
                      className="w-[30%] lg:w-full rounded-3xl p-2"
                    />
                    <div className="w-[40%] lg:w-full lg:text-center  ">
                      <h2 className="text-xl">{name}</h2>
                      <h3>{size}</h3>
                    </div>
                    <span className="w-[20%] lg:w-full lg:hidden">{price}</span>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
        </>
  );
}

export default Four;
