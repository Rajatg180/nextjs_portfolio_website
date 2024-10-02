import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./MagivButton";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <div id="about" className="bg-black-100">
      <div className="relative h-[40rem] w-full antialiased overflow-hidden flex items-center justify-center">
        
        {/* Spotlight */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Background Beams */}
        <BackgroundBeamsWithCollision className="absolute inset-0 bg-black-100">
          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20 w-full pt-10 md:pt-0 text-center">
            <div className="flex justify-center relative  my-10 md:my-20 z-10">
              <div className="max-w-[95vw] sm:max-w-3xl md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
                {/* Heading */}
                <h1 className="font-sans text-violet-900 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                  Hey There! 👋
                </h1>

                {/* Text Generation Effect */}
                <TextGenerateEffect
                  words="I'm Rajat Gore, I'm a full-stack web and mobile developer who loves building apps and websites that work smoothly and looks great."
                  className="font-sans pt-5 text-wrap text-center font-medium text-sm sm:text-2xl md:text-3xl lg:text-4xl"
                />

                {/* Button  */}
                <a
                  href="https://drive.google.com/file/d/1lgLhRIOaq_kNwVbcT-xgvw6adYMrx3Fz/view?usp=drivesdk "
                  download="Rajat's Resume"
                  target="_blank"
                >
                  <MagicButton
                    title="Download Resume  "
                    icon={<FaDownload />}
                    position="right"
                  />
                </a>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
}

export default Hero;
