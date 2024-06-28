import React from "react";

function About() {
  return (
    <div className="w-full p-20 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-6xl leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 mt-20 border-t-[1px] pt-6 border-[#a1b562]">
        <div className="w-1/2"> 
        <h1 className="text-4xl font-semibold">Our Approach:</h1>
        <button className="flex uppercase gap-10 items-center px-10 py-6 rounded-full mt-8 bg-zinc-900 text-white"> Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl bg-[#aacc2e]"></div>
      </div>
    </div>
  );
}

export default About;
