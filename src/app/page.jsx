'use client'
import HomePage from "../components/Home/home";
import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import MyService from "../components/myservice/myservices";
import Topbtn from "../components/topbtn/topbtn";
import MyWork from "../components/my-work/mywork";
import Contact from "../components/contact/contact";

import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";



export default function Page() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage)&& window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
        }else{
            setIsDarkMode(false)
        }
    },[])

    useEffect(()=>{
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark';
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.theme = '';
        }
    }) 



    return (
        <div className={` w-full md:h-[590vh] flex flex-col gap-52 lg:gap-16 items-center relative overflow-hidden`}>
            < Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            <HomePage isDarkMode={isDarkMode} />
            <About  isDarkMode={isDarkMode}/>
            <MyService  isDarkMode={isDarkMode}/>
            <Topbtn  isDarkMode={isDarkMode}/>
            <MyWork  isDarkMode={isDarkMode}/>
            <Contact isDarkMode={isDarkMode} /> 
            <Footer  isDarkMode={isDarkMode}/>

        </div>
    );
}