import { useState } from "react";
import "../index.css"
import { motion } from "framer-motion"
import { VscVscode } from "react-icons/vsc";
import { SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {

  const tabs = ['Frontend', 'Backend', 'Tools', 'Others'];
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="skills-section min-h-screen bg-gradient-to-l from-fuchsia-900 to-black text-white mx-3 md:mx-7 px-6 md:px-10 py-16">
      <h1 className="text-3xl font-bold mt-8 text-center">Skills</h1>

          {/* TABS */}
          <div className="flex justify-center mt-16 gap-1 md:gap-5 ">
            {tabs.map((tab) => (
              <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-3 md:py-2 md:px-6 rounded-full text-xs md:text-base font-medium transition-all duration-300 
                ${ activeTab == tab ? "bg-fuchsia-700" : "bg-white/10 text-gray-300 hover:bg-white/20"}`} 
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="skills mt-24">
            {activeTab == 'Frontend' && (
             <>
              <motion.i
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="fa-brands fa-html5 text-orange-500 drop-shadow-[0_0_4px_#f97316]"
              >
              </motion.i>

              <motion.i
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="fa-brands fa-css3-alt text-blue-500 drop-shadow-[0_0_4px_#3b82f6]"
              >
              </motion.i>

              <motion.i
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="fa-brands fa-square-js text-yellow-400 drop-shadow-[0_0_4px_#facc15]"
              >
              </motion.i>

              <motion.i
              animate={{ rotate: 360, y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="fa-brands fa-react text-cyan-400 drop-shadow-[0_0_4px_#22d3ee]"
              >  
              </motion.i>
          </>
        )}

        {activeTab === "Backend" && (
          <>
            <motion.i
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="fa-brands fa-node text-green-500 drop-shadow-[0_0_8px_green]"
            ></motion.i>

            <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            >
            <SiMongodb className="text-green-500 drop-shadow-[0_0_8px_green]"  />
            </motion.div>
          </>
        )}

        {activeTab === "Tools" && (
          <>
            <motion.i
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="fa-brands fa-git-alt text-red-500 drop-shadow-[0_0_4px_#ef4444]"
            ></motion.i>

            <motion.i
              animate={{ rotate: [0, 18, -18, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="fa-brands fa-github text-gray-300 drop-shadow-[0_0_4px_#d1d5db]"
            ></motion.i>

            <motion.div
            animate={{ y: [0, -8, 0] }}
            ransition={{ duration: 3, repeat: Infinity }}
            >
            <VscVscode className="text-sky-400 drop-shadow-[0_0_8px_#0ea5e9]" />
            </motion.div>

          </>
        )}

        {activeTab === "Others" && (
          <>
            <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            >
            <SiTailwindcss className="text-blue-500 drop-shadow-[0_0_8px_#3b82f6]" />
            </motion.div>
            <motion.i
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="fa-brands fa-bootstrap text-purple-500 drop-shadow-[0_0_8px_#a855f7]"
            ></motion.i>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
            <TbBrandFramerMotion className="text-blue-500 drop-shadow-[0_0_8px_#2563eb]"/>
            </motion.div>
          </>             
        )}
        </div>
    </div>
  )
}

export default Skills
