'use client'
import { motion } from "framer-motion";
import { useState } from "react";
export default function Contact() {
    const [hove, setHove] = useState(false)


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3aea362e-c2f4-4507-a6f2-97c2b5558f9f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (

        <div id="contact" className="h-screen w-full gap-10 lg:w-8/12 flex flex-col items-center lg:gap-10   ">
            <div className="w-10/12 lg:h-3/12 flex flex-col lg:gap-5 items-center">
                <h2 className="text-lg md:text-2xl">Connect with me</h2>
                <h1 className="text-xl md:text-6xl">Get in touch</h1>
                <p className="md:text-xl text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, tempora ducimus fugit dignissimos facilis assumenda magnam laboriosam corporis temporibus accusantium.</p>
            </div>
            <form  onSubmit={onSubmit} className="w-full h-9/12 flex flex-col gap-10 items-center" >
                <div className="w-full lg:h-1/12 flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
                    <input className="w-10/12 lg:w-1/2 h-11/12 ring-1 bg-slate-50 dark:bg-gray-700 rounded-md lg:text-lg p-5 " type="text" placeholder="Enter your name" required name="name" />

                    <input className="w-10/12 lg:w-1/2 h-11/12 ring-1 bg-slate-50 dark:bg-gray-700 rounded-md lg:text-lg p-5 " type="email" placeholder="Enter your email" required name="email" />

                </div>
                <textarea name="message" id="" cols="10" className="ring-1 bg-slate-50 w-10/12 lg:w-full h-4/12 rounded-lg resize-none p-5 lg:text-lg dark:bg-gray-700" placeholder="Message" required ></textarea>

                <motion.button
                    onMouseEnter={() => { setHove(true) }}
                    onMouseLeave={() => { setHove(false) }}
                    type="submit "

                    className="lg:px-5 px-6 py-5 bg-stone-800 text-white text-xl rounded-full flex gap-1 items-center lg:w-1/5 md:w-2/10 w-5/10 justify-center dark:bg-white dark:text-black">
                    Submit now <motion.svg
                        animate={hove ? { x: [5, 0, 5], transition: { repeat: Infinity } } : {}}
                        className=" size-6 stroke-white dark:stroke-black " viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M19 12L15 16M19 12L15 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>

                </motion.button>

                <p className="text-lg mt-10"> {result}</p>
            </form>
        </div>
    );
}