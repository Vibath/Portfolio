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
    <section className="relative py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-white"
        >
          <span className="text-cyan-400">Education</span>
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-cyan-400/80 via-cyan-400/40 to-transparent"
          />

          <div className="space-y-20">
            {educations.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid grid-cols-[40px_1fr] gap-6 group"
              >
                {/* DOT COLUMN */}
                <div className="relative flex justify-center">
                  <span
                    className="
                      w-4 h-4 rounded-full
                      bg-cyan-400
                      shadow-[0_0_20px_rgba(34,211,238,0.9)]
                      transition-transform duration-300
                      group-hover:scale-125
                    "
                  />
                </div>

                {/* CONTENT COLUMN */}
                <div className="relative">
                  {/* YEAR BADGE */}
                  <span className="absolute -right-2 -top-6 text-s text-cyan-300 opacity-60 transition-transform duration-300 group-hover:scale-110">
                    {edu.period}
                  </span>

                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                    {edu.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {edu.school}
                  </p>

                  <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
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
