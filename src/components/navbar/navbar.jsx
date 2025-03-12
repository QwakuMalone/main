'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            scrollY > 50 ? setScroll(true) : setScroll(false)
        })
    })


    const topBtnVariants = {
        closed: { rotate: 0 },
        opened: { rotate: 45, backgroundColor: 'rgb( 255, 255, 255)' }
    }
    const midBtnVariants = {
        closed: { opacity: 1 },
        opened: { opacity: 0 }
    }
    const downBtnVariants = {
        closed: { rotate: 0 },
        opened: { rotate: -45, backgroundColor: 'rgb( 255, 255, 255)' }
    }

    const links = [
        { title: "Home", path: "#home" },
        { title: "About Me", path: "#about" },
        { title: "Services", path: "#services" },
        { title: "My Work", path: "#my-work" },
        { title: "Contact Me", path: "#contact" },

    ]
    const [open, setOpen] = useState(false)
    const isOpen = () => {
        setOpen(!open)
    }
    const btnVariants = {
        init: { x: 200 },
        anime: {
            x: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        },


    }
    const listVariants = {
        init: { opacity: 0, x: -10 },
        anime: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.5,
            }
        }
    }

    return (
        <div


            className={`h-24 w-screen fixed  z-40   ${scroll ? 'bg-white opacity-90 ' : 'bg-gradient-to-t from-white to-blue-100 '}`}>
            <div className="flex lg:gap-20 w-full  px-5 lg:w-full md:px-16  lg:px-24 justify-between py-3 items-center">
                {/* LOGO */}
                <div className="w-1/3 h-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-12 mt-2.5" viewBox="0 0 24 24"><path d="M16.5 2.75c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75-.785-1.75-1.75-1.75zm0-2.75c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5zm-5.5 17.01s2.539 3.087 4.022 4.944c1.163 1.454 2.025 2.046 3.462 2.046 1.411 0 2.516-1.065 2.516-2.309 0-.539-.183-1.111-.594-1.646-1.52-1.973-2.406-3.035-2.406-3.035h-7zm-3.136-.01h-2.864c-.551 0-1-.449-1-1s.449-1 1-1h13.279c.893 0 1.4.248 1.963.958.96 1.211 2.505 3.163 2.562 3.251.736-.87 1.196-1.98 1.196-3.209 0-2.761-2.239-5-5-5h-14c-2.761 0-5 2.239-5 5s2.239 5 5 5h6.141c-1.144-1.405-3.277-4-3.277-4zm.05-12.5l2.086 2.086-1.414 1.414-2.086-2.086-2.086 2.086-1.414-1.414 2.086-2.086-2.086-2.086 1.414-1.414 2.086 2.086 2.086-2.086 1.414 1.414-2.086 2.086z" /></svg>
                </div>

                <div className="w-1/2 ">
                    <div className="lg:flex gap-6 px-10 py-4 bg-white rounded-full text-lg w-fit md:hidden hidden" >
                        {
                            links.map(link => (
                                <Link href={link.path} key={link.title}> {link.title} </Link>
                            ))
                        }
                    </div>
                </div>


                <div className="w-1/3 gap-5 flex h-full justify-end md:w-1/12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V3M12 21V19M7.05 7.05L5.636 5.636M18.364 18.364L16.95 16.95M5 12H3M21 12H19M7.05 16.95L5.636 18.364M18.364 5.636L16.95 7.05M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>



                    <div

                        className=" w-1/2 lg:hidden h-full flex ">
                        <button onClick={isOpen} className="z-50 absolute  flex flex-col gap-2 cursor-pointer ">
                            <motion.div
                                variants={topBtnVariants}
                                animate={open ? 'opened' : 'closed'}
                                className="w-9 h-1 bg-black origin-left"></motion.div>
                            <motion.div
                                variants={midBtnVariants}
                                animate={open ? 'opened' : 'closed'}
                                className="w-9 h-1 bg-black"></motion.div>
                            <motion.div
                                variants={downBtnVariants}
                                animate={open ? 'opened' : 'closed'}
                                className="w-9 h-1 bg-black origin-left"></motion.div>
                        </button>


                        {
                            open && (<motion.div
                                variants={btnVariants}
                                initial='init'
                                animate='anime'

                                className="bg-black flex flex-col  justify-center items-center h-screen w-full absolute left-0 top-0 text-white gap-6 text-xl z-40 ">
                                {
                                    links.map((link) => (<motion.div
                                        variants={listVariants}
                                        key={link.title}

                                    >
                                        <Link href={link.path}  > {link.title} </Link>
                                    </motion.div>
                                    ))
                                }
                            </motion.div>
                            )





                        }
                    </div>
                </div>
            </div>
        </div>
    );
} 