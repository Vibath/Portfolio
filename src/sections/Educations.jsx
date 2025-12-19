import { motion } from "framer-motion";

export default function Education() {
  const educations = [
    {
      title: "BSc (Hons) in Information Technology | Specializing in Data Science",
      school: "SLIIT · Year 3 Undergraduate",
      period: "2023 July – Present",
      desc: "Currently pursuing my BSc (Hons) in Information Technology with a specialization in Data Science at SLIIT. Engaged in advanced coursework and projects focused on data analysis, machine learning, and big data technologies."
    },
    {
      title: "GCE A/L",
      school: "Ranabima Royal College",
      period: "2021 (2022)",
      desc: "Successfully completed GCE A/Ls in the Physical Science stream with 2Cs and 1S."
    },
    {
      title: "GCE O/L",
      school: "Ranabima Royal College",
      period: "2018",
      desc: "Successfully completed GCE O/Ls with 8As and 1B."
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-white"
        >
          <span className="text-cyan-400">Education</span>
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical line (hidden on very small screens) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 w-px
              bg-gradient-to-b from-cyan-400/70 via-cyan-400/30 to-transparent
              hidden sm:block"
          />

          <div className="space-y-12 sm:space-y-20">
            {educations.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-[40px_1fr] gap-6"
              >

                {/* DOT */}
                <div className="relative hidden sm:flex justify-center">
                  <span
                    className="
                      w-3.5 h-3.5 rounded-full
                      bg-cyan-400
                      shadow-[0_0_16px_rgba(34,211,238,0.8)]
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="relative">

                  {/* PERIOD (inline on mobile, floating on desktop) */}
                  <div className="mb-2 sm:mb-0 sm:absolute sm:-right-2 sm:-top-6">
                    <span className="
                      text-xs sm:text-sm
                      text-cyan-300/70
                    ">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug">
                    {edu.title}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    {edu.school}
                  </p>

                  <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed text-sm sm:text-base">
                    {edu.desc}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
