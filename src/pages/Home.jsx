import { motion } from "framer-motion";
import "../index.css"
import star_icon from "../assets/star.png"
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  
  let subtitle = "Frontend Developer with a passion for creating beautiful & responsive websites";
  return (
    <div className="min-h-screen rounded-t-2xl bg-gradient-to-r from-black to-fuchsia-900 text-white mt-3 mx-3 md:mx-7 px-10 md:px-30 py-10">
      <section className="flex mt-32">
      <p className="text-sm md:text-lg font-mono">WELCOME TO MY WORLD</p>
      <img src={star_icon} className="star w-7" />
      </section>

    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl font-bold mt-6">Hi, I'm <span className="text-xl md:text-3xl font-normal">Anuradha</span>
    </motion.h1>

    <motion.h1 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    className="text-5xl md:text-7xl font-bold mt-5"><span className="text-fuchsia-800">Frontend</span> Developer
    </motion.h1>
      
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="mt-6 text-md md:text-lg text-gray-400 max-w-xl"> 

      {subtitle.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.03 }}
          >
            {char}
          </motion.span>
      ))}
    </motion.p>
    
    <div className="btns">
    <a href="#projects"> 
     <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.75 }}
      className="mt-8 px-4 py-3 md:px-16 md:py-5 rounded-full bg-white text-black text-xs md:text-lg font-bold shadow-lg mr-10">
      My Projects
     </motion.button>
    </a>

    <a href="/anuradha_frontend_resume.pdf" target="_blank">
     <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.75 }}
      className="mt-8 px-6 py-3 md:px-16 md:py-5 rounded-full bg-transparent border text-xs md:text-lg text-white font-bold shadow-lg">
      Resume
     </motion.button>
    </a>
    </div>
    </div>
  );
}

export default Home
