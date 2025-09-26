import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="skills-section min-h-screen bg-gradient-to-l from-fuchsia-900 to-black text-white mx-3 md:mx-7 px-6 md:px-10 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Get in <span className="text-fuchsia-500">Touch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 mt-4 text-center max-w-2xl mx-auto"
      >
        Have a question or want to work together? Feel free to drop me a message.
      </motion.p>
      
      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-fuchsia-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-fuchsia-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-fuchsia-500"
          ></textarea>
        </div>

        <button className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors py-3 rounded-lg font-semibold text-lg">
          Send Message
        </button>
      </motion.form>
    </div>
  )
}

export default Contact
