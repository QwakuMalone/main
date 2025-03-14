'use client'
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MyService() {
    const btnRef = useRef()
    const btnInView = useInView(btnRef, { margin: '200px' })

    const [scale, setScale] = useState(false)
    const [scaleT, setScaleT] = useState(false)
    const [scaleB, setScaleB] = useState(false)



    return (


        <div id="services" className="flex flex-col  h-screen w-full lg:mt-10  lg:pt-52 pt-24 items-center gap-10">

            <div className="h-2/6 w-full flex flex-col gap-8 items-center">
                <h2 className=" text-xl">What I offer</h2>
                <h1 className="text-2xl md:text-6xl">My services</h1>
            </div>


            <div className="flex flex-col gap-10 justify-between lg:h-3/6 lg:w-9/12 lg:flex-row w-full items-center md:px-16">

                <motion.div
                    onMouseEnter={() => setScaleT(true)}
                    onMouseLeave={() => setScaleT(false)}
                    ref={btnRef}
                    initial={{ opacity: 0, x: -200 }}
                    animate={btnInView ? { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } } : {}}
                    className="flex flex-col  h-full lg:w-3/12 w-10/12 p-5 gap-10 hover:ring-1 ring-rose-200  dark:ring-gray-700 hover:shadow-black rounded-lg relative overflow-hidden dark:hover:shadow-white ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={scaleT ? {
                            scale: 50, opacity: 1, transition: {
                                duration: 0.8,

                                ease: 'easeOut',
                            }
                        } : {}}
                        className="absolute size-6 bg-rose-200 dark:bg-gray-700 lg:size-3 rounded-full bottom-1/2 left-1/2 z-0"></motion.div>
                    <img src="/website-ui-ux-icon.svg" alt="" className="size-8 z-20 " />

                    <h2 className="text-xl font-semibold z-20">Web design</h2>

                    <div className="flex gap-2 items-center text-md text-gray-600 dark:text-white cursor-pointer z-20">
                        Read More
                        <motion.svg
                            animate={scaleT ? { x: [10, 0, 10], transition: { repeat: Infinity, duration: 1 } } : {}}
                            className="size-7 stroke-gray-600 dark:stroke-white" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M19 12L15 16M19 12L15 8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                    </div>
                </motion.div>


                <motion.div
                    onMouseEnter={() => setScale(true)}
                    onMouseLeave={() => setScale(false)}
                    ref={btnRef}
                    initial={{ opacity: 0, y: 200 }}
                    animate={btnInView ? { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } } : {}}
                    className="flex flex-col h-full lg:w-3/12  w-10/12 p-5 gap-10 hover:ring-1 ring-rose-200 dark:ring-gray-700 hover:shadow-black rounded-lg dark:hover:shadow-white relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={scale ? {
                            scale: 50, opacity: 1, transition: {
                                duration: 0.8,

                                ease: 'easeOut',
                            }
                        } : {}}
                        className="absolute bg-rose-200 dark:bg-gray-700  size-6 lg:size-3 rounded-full bottom-1/2 left-1/2 z-0"></motion.div>
                    <img src="/website-ui-ux-icon.svg" alt="" className="size-8 z-10" />

                    <h2 className="text-xl font-semibold z-10">Web design</h2>

                   
                    <div className="flex gap-2 items-center text-md text-gray-600 dark:text-white cursor-pointer z-20">
                        Read More
                        <motion.svg
                            animate={scale ? { x: [10, 0, 10], transition: { repeat: Infinity, duration: 1 } } : {}}
                            className="size-7 stroke-gray-600 dark:stroke-white" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M19 12L15 16M19 12L15 8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                    </div>
                </motion.div>


                <motion.div
                    onMouseEnter={() => setScaleB(true)}
                    onMouseLeave={() => setScaleB(false)}
                    ref={btnRef}
                    initial={{ opacity: 0, x: 200 }}
                    animate={btnInView ? { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } } : {}}
                    className="flex flex-col h-full lg:w-3/12  w-10/12 p-5 gap-10 hover:ring-1 ring-rose-200 dark:ring-gray-700 hover:shadow-black dark:hover:shadow-white rounded-lg relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={scaleB ? {
                            scale: 50, opacity: 1, transition: {
                                duration: 0.8,

                                ease: 'easeOut',
                            }
                        } : {}}
                        className="absolute bg-rose-200 dark:bg-gray-700 size-6 lg:size-3 rounded-full bottom-1/2 left-1/2 z-0"></motion.div>

                    <img src="/website-ui-ux-icon.svg" alt="" className="size-8 z-20" />

                    <h2 className="text-xl font-semibold z-20">Web design</h2>

                    
                    <div className="flex gap-2 items-center text-md text-gray-600 dark:text-white cursor-pointer z-20">
                        Read More
                        <motion.svg
                            animate={scaleB ? { x: [10, 0, 10], transition: { repeat: Infinity, duration: 1 } } : {}}
                            className="size-7 stroke-gray-600 dark:stroke-white" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M19 12L15 16M19 12L15 8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}