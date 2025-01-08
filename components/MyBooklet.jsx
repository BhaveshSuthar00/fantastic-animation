import React from "react";

const MyBooklet = () => {
  return (
    <>
        <div className="bookPage h-full w-full bg-blue-950 flex justify-evenly">
        <div className="sec1 h-full w-2/4 bg-blue-600">

        </div>
        <div className="sec2 h-full w-2/4 bg-blue-800">

        <div className="snap-y h-2/4 w-2/4 bg-gray-600 overflow-y-scroll overflow-y-hidden overflow-x-hidden ">
  <div className="snap-center flex overflow-hidden bg-blue-950 h-full w-full justify-evenly items-center overflow-scroll border-2 border-green">
    <div className="bg-blue-800 h-2/4 w-2/5">side 1</div>
    <div className="bg-blue-900 h-2/4 w-2/5">side 2</div>
  </div>
  <div className="snap-center flex overflow-hidden bg-blue-950 h-full w-full justify-evenly items-center overflow-scroll border-2 border-green">
    <div className="bg-blue-800 h-2/4 w-2/5">side 3</div>
    <div className="bg-blue-900 h-2/4 w-2/5">side 4</div>
  </div>
  <div className="snap-center flex overflow-hidden bg-blue-950 h-full w-full justify-evenly items-center overflow-scroll border-2 border-green">
    <div className="bg-blue-800 h-2/4 w-2/5">side 5</div>
    <div className="bg-blue-900 h-2/4 w-2/5">side 6</div>
  </div>
  <div className="snap-center flex overflow-hidden bg-blue-950 h-full w-full justify-evenly items-center overflow-scroll border-2 border-green">
    <div className="bg-blue-800 h-2/4 w-2/5">side 7</div>
    <div className="bg-blue-900 h-2/4 w-2/5">side 8</div>
  </div>
</div>
        </div>
    </div>

    </>
  );
};

export default MyBooklet;
