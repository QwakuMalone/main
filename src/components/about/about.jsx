'use client'
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef()
  const inVeiwAbout = useInView(aboutRef, { margin: '-100px' })

  return (
    <motion.div

      id="about" className=" w-full h-screen  items-center md:w-10/12  lg:flex-row flex-col flex justify-center gap-10 md:px-10 " >
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 100 }}
        animate={inVeiwAbout ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className=" lg:h-5/6 h-2/12 w-6/12 flex justify-center items-center z-10 ">
        <img src="/jujutsu.jpg " alt="" className="object-contain  rounded-2xl " />
      </motion.div>

      {/* text */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 100 }}
        animate={inVeiwAbout ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="lg:w-10/12 w-full  flex h-10/12 flex-col lg:pt-8 gap-10">

        <div className="flex flex-col w-full h-1/3 items-center gap-3 lg:gap-7 mb-5">
          <h2 className="text-xl lg:text-2xl "> Introduction</h2>
          <h1 className="text-2xl lg:text-4xl "> About me</h1>
          <p className="w-full px-8    lg:text-xl lg:tracking-wide ">I am Atobra, a passionate Frontend Developer & UI/UX Designer with expertise in React, JavaScript, Nextjs, Framer-motion and Tailwind CSS, dedicated to building responsive and user-friendly applications. With a Degree in Information Technology from University of Education, Winneba. I have experience in web development, UI/UX design, and IT support,  Currently, I am expanding my knowledge in Back-end and working on projects that merge creativity with functionality to solve real-world problems.</p>

        </div>


        <div className="h-2/3  flex flex-col gap-5 px-5 w-full md:px-10 lg:flex-row lg:justify-center lg:items-center lg:h-6/12  mt-20 md:mt-10">
          {/* LANGUAGES */}
          <div className="w-full lg:w-2/5 lg:h-10/12   ring-2 h-2/9 rounded-lg flex items-center lg:flex-col p-8 gap-5 md:gap-10 text-xl hover:shadow-black dark:hover:shadow-white mt-20 lg:mt-14 lg:gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 md:size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>

            <h3 className=" text-lg font-semibold md:text-xl">Languages</h3>
            <p className="lg:text-lg text-sm">HTML, CSS, Javascript, React</p>
          </div>

          {/* EDUCATION */}
          <div className=" w-full lg:w-2/5 lg:h-10/12 lg:mt-14 ring-2 h-3/12 md:gap-10   rounded-lg flex flex-wrap lg:flex-col px-6  lg:pt-7 lg:gap-5 hover:shadow-black items-center dark:hover:shadow-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 md:size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>


            <h3 className=" text-lg font-semibold md:text-xl">Education</h3>
            <p className="text-sm lg:text-lg">BSc Information Communication Technology (Education) </p>
          </div>

          {/* PROJECTS */}
          <div className="lg:w-2/5 w-full ring-2 h-3/12 lg:h-10/12 lg:mt-14 rounded-lg flex md:gap-10 lg:flex-col items-center lg:p-8 lg:gap-5 px-6 py-4 gap-5 text-xl hover:shadow-black dark:hover:shadow-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 md:size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>

            <h3 className=" text-lg font-semibold md:text-xl">Projects</h3>
            <p className="text-sm lg:text-xl ">Builts some few projects</p>
          </div>

        </div>
        <div className="h-1/12 w-11/12  lg:h-1/12 flex  md:gap-10 justify-end gap-2 dark:fill-white">
          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.135 6H15V3H13.135C12.0369 3.00132 10.9841 3.43814 10.2076 4.21463C9.43114 4.99111 8.99432 6.04388 8.993 7.142V9H7V12H9V21.938H12V12H14.021L14.613 9H12V6.591C12.0023 6.43481 12.0655 6.28569 12.176 6.17532C12.2866 6.06496 12.4358 6.00207 12.592 6H13.135Z" />
          </motion.svg>

          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 13.4838 4.40305 14.8706 5.10511 16.06L5.67393 16.7778L4.97722 19.1366L7.29785 18.4886L7.67554 18.7318C8.92191 19.5343 10.405 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5228 17.5229 22 12 22C10.1736 22 8.45912 21.5095 6.98403 20.6527L2.03585 22.0346L3.46188 17.2065L3.45614 17.1993L3.42288 17.1439C2.51933 15.6403 2 13.8793 2 12Z"   />
            <path d="M16.7354 13.4923C16.6965 13.4736 15.2384 12.7556 14.9793 12.6623C14.8735 12.6243 14.7602 12.5873 14.6397 12.5873C14.4428 12.5873 14.2774 12.6854 14.1486 12.8781C14.003 13.0946 13.562 13.61 13.4258 13.7639C13.408 13.7843 13.3837 13.8086 13.3692 13.8086C13.3561 13.8086 13.1305 13.7156 13.0622 13.686C11.4981 13.0065 10.3109 11.3727 10.1481 11.0972C10.1248 11.0576 10.1239 11.0396 10.1237 11.0396C10.1294 11.0186 10.182 10.9659 10.2091 10.9387C10.2885 10.8601 10.3746 10.7565 10.4578 10.6564C10.4972 10.6089 10.5367 10.5614 10.5755 10.5165C10.6963 10.376 10.75 10.2669 10.8124 10.1406L10.845 10.0749C10.9972 9.77252 10.8672 9.51733 10.8252 9.43492C10.7907 9.36596 10.1751 7.88012 10.1096 7.72401C9.95224 7.34733 9.74425 7.17194 9.45523 7.17194C9.42841 7.17194 9.45523 7.17194 9.34276 7.17668C9.20581 7.18246 8.46003 7.28064 8.13029 7.48849C7.78062 7.70895 7.18906 8.41168 7.18906 9.64752C7.18906 10.7598 7.8949 11.81 8.19795 12.2094C8.20549 12.2195 8.21932 12.2399 8.23938 12.2693C9.39997 13.9642 10.8468 15.2203 12.3135 15.8062C13.7255 16.3702 14.3941 16.4354 14.7743 16.4354C14.934 16.4354 15.0619 16.4229 15.1747 16.4118L15.2463 16.405C15.7341 16.3617 16.806 15.8063 17.0498 15.1287C17.2419 14.595 17.2926 14.0119 17.1648 13.8002C17.0772 13.6564 16.9264 13.5839 16.7354 13.4923Z"  />
          </motion.svg>

          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7953 10.5331L20.6801 2H17.6068L12.3516 8.51718L7.68955 2H1L8.8057 12.9091L1.4704 22H4.54375L10.2495 14.9305L15.3105 22H22L13.7953 10.5331ZM11.4149 13.4835L9.9712 11.4643L4.36 3.62709H6.67L11.1976 9.94433L12.6414 11.9635L18.6589 20.3729H16.3489L11.4149 13.4835Z"  />
          </motion.svg>

          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0061 2.00001C9.63078 1.99737 7.3322 2.86251 5.52229 4.44037C3.71237 6.01823 2.50942 8.20566 2.12903 10.6107C1.74863 13.0157 2.21566 15.481 3.4464 17.5649C4.67715 19.6488 6.59116 21.215 8.84543 21.9828C9.34968 22.0779 9.52919 21.7604 9.52919 21.4893C9.52919 21.2442 9.51911 20.4373 9.51507 19.5807C6.73463 20.2014 6.1487 18.3714 6.1487 18.3714C5.96519 17.7515 5.57175 17.2191 5.03935 16.8704C4.13169 16.2342 5.10893 16.2498 5.10893 16.2498C5.42582 16.2945 5.72855 16.413 5.99404 16.596C6.25952 16.7791 6.48075 17.0219 6.64084 17.3059C6.77627 17.5588 6.95922 17.7816 7.17911 17.9615C7.39901 18.1414 7.6515 18.2748 7.92197 18.354C8.19244 18.4331 8.47552 18.4565 8.75486 18.4228C9.03419 18.389 9.30423 18.2988 9.54936 18.1573C9.59395 17.6372 9.81905 17.1509 10.1837 16.7866C7.96501 16.528 5.63033 15.6487 5.63033 11.7178C5.61654 10.6991 5.98563 9.71409 6.66101 8.96713C6.35487 8.08315 6.38913 7.11266 6.75682 6.25373C6.75682 6.25373 7.59589 5.97856 9.506 7.30474C11.144 6.84545 12.8722 6.84545 14.5102 7.30474C16.4162 5.97856 17.2503 6.25373 17.2503 6.25373C17.6195 7.11202 17.6556 8.08248 17.3511 8.96713C18.0262 9.71412 18.3946 10.6993 18.3798 11.7178C18.3798 15.656 16.0411 16.5218 13.8163 16.7753C14.0545 17.0238 14.2383 17.3216 14.3553 17.6487C14.4724 17.9759 14.52 18.3249 14.495 18.6725C14.495 20.0442 14.4829 21.149 14.4829 21.4862C14.4829 21.7583 14.6635 22.0779 15.1697 21.9776C17.4205 21.2069 19.3306 19.6399 20.5582 17.557C21.7859 15.4742 22.2511 13.0112 21.8707 10.6087C21.4902 8.20625 20.2889 6.02097 18.4816 4.44377C16.6743 2.86657 14.3789 2.00033 12.0061 2.00001Z"  />
          </motion.svg>

          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5109 8.79565V10.4934C12.8664 9.95068 13.3563 9.51003 13.9326 9.21466C14.509 8.91928 15.1519 8.77932 15.7984 8.8085C19.2533 8.8085 20 10.9686 20 13.7785V19.5H16.8V14.4283C16.8 13.2187 16.5557 11.6623 14.672 11.6623C12.8448 11.6623 12.5333 12.9789 12.5333 14.3384V19.5H9.34293V8.79565H12.5109Z"   />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.2 6.10565C7.2 6.42322 7.10616 6.73366 6.93035 6.9977C6.75454 7.26175 6.50466 7.46755 6.21229 7.58908C5.91993 7.71061 5.59823 7.74241 5.28786 7.68045C4.97749 7.6185 4.69239 7.46557 4.46863 7.24102C4.24487 7.01646 4.09248 6.73037 4.03074 6.4189C3.96901 6.10743 4.00069 5.78459 4.12179 5.4912C4.24289 5.1978 4.44797 4.94703 4.71109 4.7706C4.97421 4.59417 5.28355 4.5 5.6 4.5C6.02435 4.5 6.43131 4.66917 6.73137 4.97028C7.03143 5.2714 7.2 5.67981 7.2 6.10565Z"   />
            <path d="M7.2 8.8085H4V19.5H7.2V8.8085Z"  />
          </motion.svg>

          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0367 21.9977C9.3292 21.9526 6.7509 20.8561 4.86895 18.9494C2.98699 17.0428 1.95554 14.4821 2.00147 11.8307C2.05863 9.21192 3.15805 6.71857 5.06539 4.88217C6.97273 3.04576 9.53711 2.01155 12.2119 2H12.3882C14.8425 2.01549 17.202 2.93038 19.0018 4.56448L16.4573 6.88013C15.3284 5.87079 13.8543 5.31218 12.3256 5.3144C10.5331 5.31064 8.81112 5.9976 7.53158 7.22687C6.25205 8.45613 5.51772 10.129 5.48724 11.8841C5.45677 13.6391 6.13259 15.3355 7.3687 16.6067C8.60482 17.8778 10.302 18.6217 12.0935 18.6777H12.2374C13.6476 18.7487 15.0371 18.3227 16.1542 17.4768C17.2712 16.631 18.0419 15.4212 18.3265 14.0668L18.3695 13.9498H12.22V10.5411H21.8979C21.9733 11.1578 22.007 11.7788 21.9988 12.4C21.899 18.1413 17.9808 22 12.2525 22L12.0367 21.9977Z"  />
          </motion.svg>

          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8ZM8 5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V8C19 6.34315 17.6569 5 16 5H8ZM15.5968 7.21448C15.5968 6.66219 16.0445 6.21448 16.5968 6.21448H16.6068C17.1591 6.21448 17.6068 6.66219 17.6068 7.21448C17.6068 7.76676 17.1591 8.21448 16.6068 8.21448H16.5968C16.0445 8.21448 15.5968 7.76676 15.5968 7.21448ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"  />
          </motion.svg>

          <motion.svg
            whileHover={{ y: -10, transition: { duration: 0.8, type: 'spring' } }}
            className="size-8 md:size-10 dark:fill-white fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0075 16.5215C12.8973 16.5588 13.7673 16.2854 14.4783 15.751V15.7907C14.5876 15.6838 14.5901 15.5049 14.4832 15.3955C14.3763 15.2861 14.1974 15.2836 14.088 15.3905C13.479 15.8255 12.7432 16.0393 11.9975 15.9995C11.2518 16.0343 10.5185 15.8106 9.91698 15.3706C9.81507 15.2886 9.67338 15.2886 9.57395 15.3706C9.45961 15.4651 9.44221 15.6366 9.53667 15.751C10.2476 16.2854 11.1176 16.5588 12.0075 16.5215Z"  />
            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.1554 10.5931C17.9632 10.5658 18.6393 11.1947 18.6692 12C18.6791 12.5618 18.3634 13.0788 17.8613 13.3299C17.8712 13.4765 17.8712 13.6232 17.8613 13.7699C17.8613 16.012 15.2513 17.8315 12.0323 17.8315C8.81333 17.8315 6.20333 16.0095 6.20333 13.7699C6.19339 13.6232 6.19339 13.4765 6.20333 13.3299C6.05668 13.2653 5.92494 13.1733 5.81059 13.0664C5.22148 12.5146 5.19414 11.5899 5.74596 11.0033C6.29779 10.4141 7.22247 10.3868 7.8091 10.9386C8.96247 10.1581 10.3172 9.73058 11.7092 9.70821L12.4474 6.23816V6.23319C12.4847 6.06416 12.6513 5.95976 12.8178 5.99705L15.2687 6.48673C15.4253 6.2133 15.7087 6.02936 16.0244 5.99705C16.5737 5.93739 17.0659 6.3351 17.1255 6.88444C17.1852 7.43379 16.7875 7.92596 16.2381 7.98561C15.6888 8.04527 15.1966 7.64756 15.137 7.09821L12.9968 6.6483L12.348 9.76786C13.7226 9.79769 15.0599 10.2227 16.1984 10.9983C16.4569 10.7522 16.7974 10.6055 17.1554 10.5931Z"  />
            <path d="M15.305 13C15.305 13.5523 14.8573 14 14.305 14C13.7527 14 13.305 13.5523 13.305 13C13.305 12.4477 13.7527 12 14.305 12C14.8573 12 15.305 12.4477 15.305 13Z" />
            <path d="M10.6807 13C10.6807 13.5523 10.233 14 9.68073 14C9.12844 14 8.68073 13.5523 8.68073 13C8.68073 12.4477 9.12844 12 9.68073 12C10.233 12 10.6807 12.4477 10.6807 13Z"  />
          </motion.svg>


        </div>
      </motion.div>


    </motion.div>
  );
}