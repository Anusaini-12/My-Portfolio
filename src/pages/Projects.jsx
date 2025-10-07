import brewHub from "../assets/projects/brewHub.png"
import portfolio from "../assets/projects/portfolio.png"
import stopwatch from "../assets/projects/stopwatch.png"
import { motion } from "framer-motion"

const Projects = () => {

    const projectList = [
    {
      title: "Portfolio",
      img: portfolio,
      desc: "A personal portfolio built with React, Tailwind CSS and Framer Motion.",
      code: "https://github.com/Anusaini-12/My-Portfolio.git",
      live: "https://anu-portfolio.vercel.app/"
    },
    {
      title: "BrewHub",
      img: brewHub,
      desc: "A modern, interactive coffee e-commerce platform built with React and Tailwind CSS",
      code: "https://github.com/Anusaini-12/BrewHub.git",
      live: "https://brew-hub-azure.vercel.app/"
    },
    {
      title: "Stopwatch",
      img: stopwatch,
      desc: "A clean, minimal, and responsive digital stopwatch built with HTML, CSS, and JavaScript",
      code: "https://github.com/Anusaini-12/STOPWATCH.git",
      live: "https://anusaini-12.github.io/STOPWATCH/"
    },
  ];
  
  return (
    <div className="project-section min-h-screen bg-gradient-to-r from-fuchsia-900 to-black text-white mx-3 md:mx-7 px-6 md:px-10 py-10">
      <h1 className="text-3xl font-bold mt-8 text-center">My Projects</h1>
      <p className="text-sm md:text-base text-gray-300 leading-7 text-center my-8"> Discover projects that showcase my passion for frontend development, modern UI, and interactive web experiences.</p>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-20">
      {projectList.map((project, idx) => (
        <motion.div key={idx}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 5, repeat: Infinity}}
        className="card mb-16 shadow-2xl rounded-lg p-3 bg-white/16 backdrop-blur-8xl ">

          <img src={project.img} alt="portfolio"/>
          <div className="project-info py-6 px-4">
            <h1 className="text-2xl font-semibold text-white mb-5">{project.title}</h1>
            <p className="text-sm md:text-base text-gray-300">{project.desc}</p>
          </div>

          <div className="flex gap-4 px-4 py-3">
              <a href={project.code} target="_blank" className="px-3 py-2 md:px-4 md:py-2 bg-gradient-to-l from-fuchsia-900 to-fuchsia-950 text-white font-bold rounded-lg text-xs md:text-sm">
                Github Repo
              </a>
              <a href={project.live} target="_blank"  className="px-3 py-2 md:px-4 md:py-2 border border-2 border-fuchsia-900 text-white font-bold rounded-lg text-xs md:text-sm hover:bg-fuchsia-500 ">
                Live Demo
              </a>
           </div>

        </motion.div>
      ))}     
      </div>
    </div>
  )
}

export default Projects
