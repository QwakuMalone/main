'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Topbtn() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            scrollY > 1000 ? setShow(true) : setShow(false)
        })
    }
    )
    const btnVariants = {
        shw: {
            y: 0,opacity:1, transition: {
                duration: 1,
                type: 'spring',

            }
        },
        notshw: { y: 200 ,opacity:0}
    }

    return (<motion.div

    >
        <Link href='#home'>
            <motion.div
                variants={btnVariants}
                animate={show ? 'shw' : 'notshw'}

                className=" bottom-5 right-6 rounded-full  size-10 ring-2 fixed z-10">
                <svg className="size-7 ml-1.5 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6L12 19M12 6L16 10M12 6L8 10" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </motion.div>
        </Link>
    </motion.div>
    );
}