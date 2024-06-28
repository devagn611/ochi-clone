import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 leading-none">
        {["We Create", " Eye-Opening", " Presentations"].map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[5.5vw] relative top-[1vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[5.5vw] leading-[5.8vw] tracking-tighter font-['Founders Grotesk X-Condensed'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <p className="text-md font-light tracking-light leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-sm uppercase">
            Start the project
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
          <span className="rotate-[45deg]">
            <FaLongArrowAltUp />
          </span>
        </div>
      </div>
    </div>
  );
}

export default landing;
