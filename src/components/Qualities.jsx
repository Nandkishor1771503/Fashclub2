import React from "react";

function Qualities() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 m-auto my-14 ">
        <div className="flex bg-[#cc9965] gap-2 items-center justify-center rounded-xl lg:rounded-2xl shadow-lg z-30 h-14 md:h-16 lg:h-20">
            <span className="text-lg">1.</span>
            <h3 className="text-xl">best cloth and style</h3>
        </div>
        <div className="flex bg-[#e3b174] gap-2 items-center justify-center rounded-xl lg:rounded-2xl shadow-lg z-30 h-14 md:h-16 lg:h-20">
            <span className="text-lg">2.</span>
            <h3 className="text-xl">best cloth and style</h3>
        </div>
        <div className="flex bg-[#f5c283] gap-2 items-center justify-center rounded-xl lg:rounded-2xl shadow-lg z-30 h-14 md:h-16 lg:h-20">
            <span className="text-lg">3.</span>
            <h3 className="text-xl">best cloth and style</h3>
        </div>
      </div>
    </>
  );
}

export default Qualities;
