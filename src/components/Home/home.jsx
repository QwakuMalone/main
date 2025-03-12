'use client'
import Link from "next/link";

import { useRouter } from "next/navigation";







export default function HomePage() {
    const router = useRouter()

    return (
        <div className={` h-[calc(100vh-6rem)] w-full flex flex-col items-center mt-30  gap-10 lg:gap-10 `} >

            <img src="/jujutsu.jpg" alt="" className="rounded-full size-60 object-fill" />

            <h2 className="md:text-3xl  text-xl">Hi! I'm A T O B R A </h2>
            <h1 className=" text-2xl lg:text-7xl md:text-5xl w-6/12 text-center ">frontend web develper based in Accra-Ghana</h1>
            <p className="lg:text-2xl text-xl px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quibusdam!</p>


            <div className="flex flex-col md:flex-row md:gap-10 gap-5">

                <button onClick={() => { router.push('#contact') }} className="flex gap-2 text-2xl ring-2 rounded-full py-3.5 px-6 bg-black text-white cursor-pointer"> contact me <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </button >

                <Link href='Resume.docx' download="Resume.docx">   <button className="flex gap-2 text-2xl ring-2 rounded-full py-3.5 px-6 cursor-pointer">
                    my resume <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </button></Link>
            </div>
        </div>
    );
}