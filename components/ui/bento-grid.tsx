import { cn } from "@/lib/utils";
import GridGlobe from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  titleClassName,
  spareImg,
  img,
  imgClassName,
  className,
  title,
  description,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  titleClassName: string;
  spareImg: string;
  img: string;
  imgClassName: string;
}) => {
  const leftLists = ["React.js", "Express.js", "Next.js"];
  const rightLists = ["Node.js", "Redux", "Flutter"];

  const last1 = ["C/C++", "Core Java"];
  const last2 = ["Javascript", "Typescript"];
  const last3 = ["Sql", "Dart"];
  const last4 = ["HTML", "CSS"];

  const slast1 = ["Tailwind", "MongoDB"];
  const slast2 = ["Firebase", "Postman"];
  const slast3 = ["DSA", "OOP"];
  const slast4 = ["Git", "GitHub"];
  const slast5 = ["CN", "OS"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 mx-2",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              className={cn(imgClassName, "object-cover object-center")}
              alt={img}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className=" font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`text-[#C1C2D3] font-sans text-lg lg:text-xl max-w-36 md:max-w-52 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="text-white lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="text-white lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-20  md:gap-8 lg:gap-5 w-fit absolute">
              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {last1.map((item, i) => (
                  <span
                    key={i}
                    className="text-white p-3 md:p-3 lg:p-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {last2.map((item, i) => (
                  <span
                    key={i}
                    className="text-white p-3 md:p-3 lg:p-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {last3.map((item, i) => (
                  <span
                    key={i}
                    className="text-white p-3 md:p-3 lg:p-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {last4.map((item, i) => (
                  <span
                    key={i}
                    className="text-white p-3 md:p-3 lg:p-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>
            </div>
          )}

          {id === 4 && (
            <div className="flex flex-wrap  gap-5 sm:gap-16  md:gap-4  lg:gap-10 w-fit absolute">
              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {slast1.map((item, i) => (
                  <span
                    key={i}
                    className="text-white px-2 py-3 sm:p-4 md:p-3 lg:px-4 lg:py-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {slast2.map((item, i) => (
                  <span
                    key={i}
                    className="text-white  px-2 py-3 sm:p-4 md:p-3 lg:px-4 lg:py-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {slast3.map((item, i) => (
                  <span
                    key={i}
                    className="text-white  px-2 py-3 sm:p-4 md:p-3 lg:px-4 lg:py-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {slast4.map((item, i) => (
                  <span
                    key={i}
                    className="text-white  px-2 py-3 sm:p-4 md:p-3 lg:px-4 lg:py-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 lg:gap-3">
                {slast5.map((item, i) => (
                  <span
                    key={i}
                    className="text-white  px-2 py-3 sm:p-4 md:p-3 lg:px-4 lg:py-2 text-xs lg:text-base 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="text-white p-4 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                ></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
