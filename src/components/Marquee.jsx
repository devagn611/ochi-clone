import React from "react";
import {animate, motion} from "framer-motion";

function Marquee() {
  return (
   <div data-scroll data-scroll-section  data-scroll-speed="-.05" className="w-full py-10 text-white rounded-tl-3xl  rounded-tr-3xl bg-[#004D43]">
    <div className="text border-t-2 border-b-2 border-zinc-300 flex pr-20 overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[10vw] leading-none font-["Founders Grostesk"] font-semibold uppercase pt-3.8 mb-4' >We are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[10vw] leading-none font-["Founders Grostesk"] font-semibold uppercase pt-3.8 mb-4' >We are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[10vw] leading-none font-["Founders Grostesk"] font-semibold uppercase pt-3.8 mb-4' >We are ochi</motion.h1>
    </div>
   </div>
  )
}

export default Marquee