import React from "react";

function Catagorypills({ catagory }) {
  return (
    <button className="m-3 ml-0 mt-0 inline-block rounded-full bg-[#484848] px-[12px] py-[6px] leading-5 text-white">
      {catagory}
    </button>
  );
}

export default Catagorypills;
