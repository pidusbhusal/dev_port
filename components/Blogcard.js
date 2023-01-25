import React from "react";
import Catagorypills from "./Catagorypills";

const catagories =["React", "Android" , "Web Development"]


function Blogcard() {
  return (
    <div className="flex gap-10">
      <img src="blogimg.jpg" alt="" className="max-h-40" />
      <div>
        <h3 className=" font-semibold text-2xl">Blog title name would be here</h3>
        <p className="mt-2 text-overflow-ellipsis line-clamp-3 max-w-[60ch] overflow-hidden text-gray-400">
          Everyone wants to know what UX is nowadays, but can a course help you
          become a designer? The following are my thoughts after taking the
          Google UX Design course a year ago. As we begin this experience, let
          Google UX Design course a year ago. As we begin this experience, let
        </p>

        <div className="flex items-center gap-4 mt-4">
            <div className="variation" >
            {catagories.map(catagory=>{return(<Catagorypills catagory={catagory} />)})}
            
            </div>
           
            <p className="text-gray-400">·
</p>
            
<p className="text-gray-400">
    8 min
</p>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
