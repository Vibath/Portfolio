import { motion } from "framer-motion";

export default function CreativeDivider() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950/90 via-black to-gray-950/80 overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-pink-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4"
        >
          Beyond Code
        </motion.p>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          <span className="text-white">The </span>
          <span className="text-pink-400">Creative</span>
          <span className="text-white"> Side</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          While I build systems with logic and precision, I also craft visuals
          with emotion, rhythm, and storytelling.  
          This is where design meets creativity.
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "160px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-[2px] bg-pink-400 mx-auto mt-12 rounded-full"
        />
      </div>
    </section>
  );
}
