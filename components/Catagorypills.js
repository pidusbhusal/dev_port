import React from "react";

function Catagorypills({ catagory }) {
  return (
    <button className="mr-3 mb-3 inline-block rounded-full  bg-[#484848] px-[12px] py-[6px] leading-5 text-white md:ml-0">
      {catagory}
    </button>
  );
}

export default Catagorypills;
