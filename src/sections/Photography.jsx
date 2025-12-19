import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import PhotographyMockup from "../assets/social.png";
import PhotographyLogo from "../assets/vj bold white.png";

export default function Photography() {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 bg-gray-950/60 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT – MOCKUP + LOGO BADGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center w-full"
        >
          {/* Glow */}
          <div className="absolute -inset-6 sm:-inset-10 bg-cyan-500/10 blur-3xl rounded-full" />

          {/* Mockup */}
          <motion.img
            src={PhotographyMockup}
            alt="Photography Social Preview"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-md sm:max-w-xl drop-shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
          />
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Photography</span>
          </h2>

          <h3 className="text-md sm:text-lg text-gray-400 mb-6">
            Vibath Jayasundara Photography
          </h3>

          <p className="text-gray-400 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
            I capture moments that tell a story — focusing on emotion,
            atmosphere, and authentic expressions. My photography blends
            creative composition with natural lighting to produce timeless
            visuals.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            I specialize in <span className="text-white">weddings</span>,{" "}
            <span className="text-white">concerts</span>,{" "}
            <span className="text-white">events</span>, and{" "}
            <span className="text-white">portrait sessions</span>, delivering
            images that feel cinematic, vibrant, and meaningful.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:justify-start gap-4 items-center">
            <a
              href="https://web.facebook.com/profile.php?id=100070740467470"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 sm:px- sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-sm sm:text-base font-medium max-w-[200px]"
            >
              <FaFacebookF />
              Facebook
            </a>

            <a
              href="https://www.instagram.com/vibath.jayasundara.photography?igsh=MXJubzR1enYzcGtzaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition text-sm sm:text-base font-medium max-w-[200px]"
            >
              <FaInstagram />
              Instagram
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
