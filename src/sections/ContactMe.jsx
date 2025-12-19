import { useRef, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com"; // npm install emailjs-com
import { motion, AnimatePresence } from "framer-motion";

export default function ContactMe() {
  const formRef = useRef();
  const [toast, setToast] = useState({ show: false, message: "", success: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_4nk32vb",      // replace
      "template_olu3sgr",     // replace
      formRef.current,
      "6WP6xEIchuX7uFuci"       // replace
    ).then(
      () => {
        setToast({ show: true, message: "Message sent successfully!", success: true });
        formRef.current.reset();
      },
      (err) => {
        console.error(err);
        setToast({ show: true, message: "Failed to send message. Try again.", success: false });
      }
    );
  };

  return (
    <section className="relative bg-gray-950/90 text-white pt-28 pb-12">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-cyan-400">Contact Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 text-lg">
          Send me a message directly, or reach out via social platforms below.
        </p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(14,203,255,0.5)" }}
            className="p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(14,203,255,0.5)" }}
            className="p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(14,203,255,0.5)" }}
            className="p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(14,203,255,0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-xl text-lg font-semibold transition shadow-lg"
          >
            <FaEnvelope className="inline mr-2" /> Send Message
          </motion.button>
        </form>

        {/* Toast Notification */}
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl font-medium shadow-xl text-white ${
                toast.success ? "bg-green-500" : "bg-red-500"
              }`}
              onAnimationComplete={() => setTimeout(() => setToast({ ...toast, show: false }), 2000)}
            >
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Buttons */}
        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-md mx-auto">
          <motion.a href="https://wa.me/+94768811309" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-xl transition font-medium shadow-md text-sm"
          >
            <FaWhatsapp /> WhatsApp
          </motion.a>
          <motion.a href="https://www.facebook.com/share/1CC63daQrx/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition font-medium shadow-md text-sm"
          >
            <FaFacebookF /> Facebook
          </motion.a>
          <motion.a href="https://www.instagram.com/_vibath.mkj_?igsh=MXI4c29kcHNiYmxwMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 rounded-xl transition font-medium shadow-md text-sm"
          >
            <FaInstagram /> Instagram
          </motion.a>
          <motion.a href="https://linkedin.com/in/vibath-jayasundara-aa0806350" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl transition font-medium shadow-md text-sm"
          >
            <FaLinkedin /> LinkedIn
          </motion.a>
          <motion.a href="https://github.com/Vibath" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-xl transition font-medium shadow-md text-sm"
          >
            <FaGithub /> GitHub
          </motion.a>
        </div>


      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Vibath Jayasundara. All Rights Reserved.
      </footer>
    </section>
  );
}
