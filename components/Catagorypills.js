import React from "react";

function Catagorypills({ catagory }) {
  return (
    <button className=" mr-3 mb-3 w-fit whitespace-nowrap rounded-full  bg-[#484848] px-[12px] py-[8px] leading-5 text-white hover:bg-[#4f4f4f] md:ml-0">
      {catagory}
    </button>
  );
}

export default Catagorypills;
