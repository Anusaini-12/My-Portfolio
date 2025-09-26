import { motion } from "framer-motion"
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {

  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs
      .sendForm(
        "service_ksva7nl",     
        "template_f63hpim",   
        form.current,
        "EfbxTqGZn9kjae1y8"     
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Try again.");
        }
      );
  };

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
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-fuchsia-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="your@email.com"
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-fuchsia-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-fuchsia-500"
          ></textarea>
        </div>

        <button 
        type="submit"
        className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors py-3 rounded-lg font-semibold text-lg">
          Send Message
        </button>

        {success && (
          <p className="text-center mt-4 text-sm text-green-400">{success}</p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact
