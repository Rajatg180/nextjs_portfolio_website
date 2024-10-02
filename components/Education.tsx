import { education } from "@/data";
import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { FaCalendar } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="py-20 w-full px-20 lg:px-64">
      <h1 className="heading text-white">
        My <span className="text-violet-900">education</span>
      </h1>

      <div className=" w-full mt-12  flex flex-wrap gap-10 justify-center">
        {education.map((card) => (
          <CardSpotlight key={card.id} className=" h-50 w-96 bg-black-100">
            <p className=" text-xl md:text-2xl font-bold relative z-20 mt-2 text-white">
              {card.title}
            </p>
            <div className="text-xl text-neutral-200 mt-4 relative z-20">
              {card.desc}
            </div>
            <div className="flex gap-4 flex-wrap text-white-200 justify-start items-center mt-4">
              <FaCalendar size={15} />

              <p className="text-neutral-300  relative z-20 text-sm">
                {card.duration}
              </p>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default Education;
