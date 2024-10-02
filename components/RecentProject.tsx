"use client"

import { projects } from "@/data";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/moving-border-project";

const RecentProjects = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =

    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (

    <div className="py-20" id="projects">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-violet-900">recent projects</span>
      </h1>

      {/* Switch for Categories */}
      <div className="flex flex-wrap justify-center mt-14">
        {["All", "Android", "Web"].map((category) => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "bg-violet-900 text-white"
                : "bg-black-100 text-white"
            } hover:bg-slate-900 transition-colors`}
          >
            {category}
          </Button>
        ))}
      </div>

        
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 md:px-36">

        {filteredProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="text-white lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={link} href={link}>

              <div className="relative flex items-center justify-center sm:w-96 w-[90vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <img src={img} alt="cover" className="z-10 object-cover absolute " />
              </div>

              {/* title of the project */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              {/* description of the project */}
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4">
                {des}
              </p>

              {/* bottom  */}
              <div className="flex items-center justify-between mt-7 mb-3 ">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl mf:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow
                    className="ms-2 size-3 items-center flex justify-center"
                    color="#CBACF9"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;