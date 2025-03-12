'use client'
import { motion } from "framer-motion";
import { useState } from "react";

export default function MyWork() {
    const [hove1, setHove1] = useState(false)
    const [hove2, setHove2] = useState(false)

    return (
        <div id="my-work" className="h-screen w-full flex flex-col gap-10 lg:justify-center   items-center ">
            <div className="h-1/3 w-full lg:h-2/6 lg:w-6/12 flex flex-col items-center lg:justify-center gap-7  text-center px-3 md:px-16">
                <h2 className="text-xl md:text-2xl">My Portfolio</h2>
                <h1 className="text-2xl md:text-4xl lg:text-6xl">My latest work</h1>
                <p className="text-lg md:text-xl"> welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development. </p>
            </div>

            <div className="h-2/3 lg:h-2/6 flex flex-col lg:flex-row gap-10 w-10/12 lg:justify-around md:px-16 ">

                <motion.div
                    onMouseEnter={()=>{setHove1(true)}}
                    onMouseLeave={()=>{setHove1(false)}}
                    className="h-full lg:w-5/12   relative overflow-hidden rounded-md">
                    <motion.img
                        whileHover={{ scale: 1.2, transition: { ease: 'easeInOut', duration: 0.5 } }}

                        src="/project.jpg" alt="" className="object-fill  size-full rounded-md" />
                    <motion.div 
                    animate={hove1?{y:-20}:{}}
                    className="absolute w-8/12 h-2/6 lg:bottom-6 md:left-26  bottom-4 right-14 rounded-md bg-slate-100  flex ">

                        <div className="w-4/6 h-full flex flex-col md:py-4 pl-10">
                            <h1 className=" font-semibold md:text-xl tracking-wide">Frontend project</h1>
                            <h2 className="text-sm md:text-lg">Web Design</h2>
                        </div>

                        <div className="w-2/6 h-full pt-3">
                            <svg className=" size-10/12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.div 
                onMouseEnter={()=>{setHove2(true)}}
                onMouseLeave={()=>{setHove2(false)}}
                className="h-full lg:w-5/12   relative overflow-hidden rounded-md">
                    <motion.img
                        whileHover={{ scale: 1.2, transition: { ease: 'easeInOut', duration: 0.5 } }}

                        src="/ux.jpg" alt="" className="object-fill  size-full rounded-md" />
                    <motion.div 
                    animate={hove2?{y:-20}:{}}
                    className="absolute w-8/12 h-2/6 lg:bottom-6 md:left-26 bottom-4 right-14 rounded-md bg-slate-100 hover:opacity-80 flex ">
                        <div className="w-4/6 h-full flex flex-col md:py-6 pl-10">
                            <h1 className="  md:text-xl font-semibold tracking-wide">UX/UI designing </h1>
                            <h2 className="text-sm md:text-lg">UX/UI designs</h2>
                        </div>
                        <div className="w-2/6 h-full pt-3 "> <svg className=" size-10/12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                        </svg>
                        </div>
                    </motion.div>
                </motion.div>


            </div>
        </div>
    );
}