import avatar from "../assets/avatar.png"
import "../index.css"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="about-section min-h-screen bg-gradient-to-r from-fuchsia-900 to-black text-white mx-3 md:mx-7 px-6 md:px-10 py-10"> 
    
      <motion.img 
       animate={{
        scale: [0.2, 1.1, 1],
        rotate: [0, 180, 0, -180, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: 1,
      }}
      src={avatar} 
      alt="avatar" 
      className="avatar" 
      />

      <div className="about-me md:px-18 py-8 mt-6">
         <h1 className="text-3xl font-bold mb-8">About Me</h1>
         <p className="text-sm md:text-base text-gray-300 leading-7">
          Hi! I am a B.Tech CSE graduate with a strong interest in web development. Over the past 1 year, I have been actively practicing React.js and building web projects that focus on responsive design, interactivity, and user experience. 
          <br></br><br></br>
          My skills include HTML, CSS, JavaScript, and frameworks and libraries such as React.js, Tailwind CSS, Bootstrap, and Framer Motion for smooth animations.
          As a fresher, I am highly motivated to learn, explore, and experiment with new technologies to create web applications that are both functional and delightful to users.
          <br></br><br></br>
          My goal is to become a skilled web developer, creating innovative web experiences that combine performance, aesthetics, and usability.
          </p>
          <br></br><br></br><br></br><br></br>
          <hr></hr>
      </div>
    </div>
  )
}

export default About
