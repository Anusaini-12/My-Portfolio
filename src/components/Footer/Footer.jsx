import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { IoMail, IoHeart } from "react-icons/io5"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="px-2 md:px-20 py-10 shadow-md rounded-b-xl bg-white/16 backdrop-blur-xl text-white z-50 mx-3 md:mx-7">
       
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex gap-4 text-3xl flex justify-center py-6"
        >
          <a
            href="https://github.com/anusaini-12"
            target="_blank"
            className="hover:text-fuchsia-500 transition"
          >
            <FaGithub className="text-gray-200 hover:text-gray-400" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-fuchsia-500 transition"
          >
            <FaLinkedin className="text-blue-600 hover:text-blue-500"/>
          </a>
          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-fuchsia-500 transition"
          >
            <IoMail className="text-white hover:text-gray-400" />
          </a>
        </motion.div>
       
        <p className="text-xs md:text-base text-gray-300 text-center flex justify-center">
          © {new Date().getFullYear()} Anuradha — Built with  <IoHeart className="text-xl text-fuchsia-400 text-center mx-2"/> using React.
        </p>
    </div>
  )
}

export default Footer
