import React from "react";
import Catagorypills from "./Catagorypills";

const generatedTopics = [
  "React",
  "Andrioud",
  "Web Development",
  "Nepal",
  "Europe",
  "Messi",
  "React",
  "Andrioud",
  "Web Development",
  "Nepal",
  "Europe",
  "Messi",
  "React",
  "Andrioud",
  "Web Development",
  "Nepal",
  "Europe",
  "Messi",
];

export default function ScrollableTitles() {
  return (
    <div className="z-0 flex w-full translate-x-0 cursor-grab overflow-x-scroll scrollbar-hide  ">
      {generatedTopics.map((generatedTopic) => {
        return <Catagorypills catagory={generatedTopic} />;
      })}
    </div>
  );
}
