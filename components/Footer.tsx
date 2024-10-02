import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import MagicButton from "./MagivButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (

    <BackgroundBeamsWithCollision id="contact" className="flex flex-col justify-betweens items-center justify-center py-10" >
      <div className="w-full absolute left-0 -bottom-65 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-70 "
        />
      </div>

      <div className="items-center">
        <h1 className="heading text-white">
          Contact <span className="text-violet-900">me</span>
        </h1>
        <a href="mailto:rajatgore2002@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.link}>
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
