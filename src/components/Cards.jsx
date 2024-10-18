import React from "react";
import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";

// color :  #eacda4
const cardsstyle =
  "w-10/12 bg-[#eacda4] mx-auto  rounded-br-[3rem] text-start shadow-lg";
function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mb-20 ">
        <Link to="/one" className={cardsstyle}>
          <div>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.QNSt7JUzqQhOBNX7-IaVXAHaJ3&pid=Api&P=0&h=180"
              alt="shirts"
              className="w-10/12 h-52 m-auto mt-4 rounded-lg shadow-lg"
            />
            <div className="m-4 ml-8">
              <h2 className="text-xl mb-2 ">Shirts</h2>
              <p>
                We brought our best collection of varites in shirts for you ...
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 m-2">
              <strong>Cheack out</strong>
              <img src={arrow} alt="" className="w-8" />
            </div>
          </div>
        </Link>

        <Link to="/two" className={cardsstyle}>
          <div>
            <img
              src="https://i.pinimg.com/originals/92/1e/93/921e93d7a9cf44af2c94cf79e263f91c.jpg"
              alt=""
              className="w-10/12 h-52 m-auto mt-4 rounded-lg shadow-lg"
            />
            <div className="m-4 ml-8">
              <h2 className="text-xl mb-2">Pants</h2>
              <p>
                We just got our new collection of pants cargos to formals ...
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 m-2 ">
              <strong>Cheack out</strong>
              <img src={arrow} alt="" className="w-8" />
            </div>
          </div>
        </Link>
        <Link to="/three" className={cardsstyle}>
          <div>
            <img
              src="https://i.pinimg.com/originals/88/ee/55/88ee5547a9323fd73644e77219dc2ce3.png"
              alt=""
              className="w-10/12 h-52 m-auto mt-4 rounded-lg shadow-lg"
            />
            <div className="m-4 ml-8">
              <h2 className="text-xl mb-2">T-Shirts</h2>
              <p>
                Crazy collection of t-shirts designed , oversized , printed &
                trending t-shirt and short combo ...
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 m-2 bottom-0">
              <strong>Cheack out</strong>
              <img src={arrow} alt="" className="w-8" />
            </div>
          </div>
        </Link>
        <Link to="/four" className={cardsstyle}>
          <div>
            <img
              src="https://wallpaperaccess.com/full/318854.jpg"
              alt=""
              className="w-10/12 h-52 m-auto mt-4 rounded-lg shadow-lg"
            />
            <div className="m-4 ml-8">
              <h2 className="text-xl mb-2 ">Shirts</h2>
              <p>
                We brought our best collection of varites in shirts for you ...
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 m-2">
              <strong>Cheack out</strong>
              <img src={arrow} alt="" className="w-8" />
            </div>
          </div>
        </Link>

        <Link to="/two" className={cardsstyle}>
          <div>
            <img
              src="https://i.pinimg.com/originals/92/1e/93/921e93d7a9cf44af2c94cf79e263f91c.jpg"
              alt=""
              className="w-10/12 h-52 m-auto mt-4 rounded-lg shadow-lg"
            />
            <div className="m-4 ml-8">
              <h2 className="text-xl mb-2">Pants</h2>
              <p>
                We just got our new collection of pants cargos to formals ...
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 m-2 ">
              <strong>Cheack out</strong>
              <img src={arrow} alt="" className="w-8" />
            </div>
          </div>
        </Link>

        <Link to="/three" className={cardsstyle}>
          <div>
            <img
              src="https://i.pinimg.com/originals/88/ee/55/88ee5547a9323fd73644e77219dc2ce3.png"
              alt=""
              className="w-10/12 h-52 m-auto mt-4 rounded-lg shadow-lg"
            />
            <div className="m-4 ml-8">
              <h2 className="text-xl mb-2">T-Shirts</h2>
              <p>
                Crazy collection of t-shirts designed , oversized , printed &
                trending t-shirt and short combo ...
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 m-2 bottom-0">
              <strong>Cheack out</strong>
              <img src={arrow} alt="" className="w-8" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
