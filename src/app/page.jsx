'use client'
import HomePage from "../components/Home/home";
import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import MyService from "../components/myservice/myservices";
import Topbtn from "../components/topbtn/topbtn";
import MyWork from "../components/my-work/mywork";
import Contact from "../components/contact/contact";

import Footer from "../components/footer/footer";



export default function Page() {


    return (
        <div className={` w-full md:h-[590vh] flex flex-col gap-52 lg:gap-16 items-center relative overflow-hidden`}>
            < Navbar />
            <HomePage />
            <About />
            <MyService />
            <Topbtn />
            <MyWork />
            <Contact/>
            <Footer/>

        </div>
    );
}