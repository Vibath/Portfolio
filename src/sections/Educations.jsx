import { motion } from "framer-motion";

export default function Education() {
  const educations = [
    {
      title: "BSc (Hons) in Information Technology | Specializing in Data Science",
      school: "SLIIT · Year 3 Undergraduate",
      period: "2023 July - Present",
      desc: "Currently pursuing my BSc (Hons) in Information Technology with a specialization in Data Science at SLIIT. Engaged in advanced coursework and projects focused on data analysis, machine learning, and big data technologies."
    },
    {
      title: "GCE A/L",
      school: "Ranabima Royal College",
      period: "2021(22)",
      desc: "Successfully Completed GCE A/Ls in the Physical Science stream with 2Cs and 1S."
    },
    {
      title: "GCE O/L",
      school: "Ranabima Royal College",
      period: "2018",
      desc: "Successfully Completed GCE O/Ls with 8As and 1B."
    }
  ];

  return (
    <section className="relative py-10 px-6 md:px-20"> {/* Reduced top padding */}
    {/* Optional curved divider */}
    <div className="absolute -top-10 left-0 w-full overflow-hidden leading-none pointer-events-none">
      <svg
        className="relative block w-full h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        {/* Make it transparent so particles show through */}
        <path
          d="M0,32L1440,96L1440,0L0,0Z"
          className="fill-transparent"
        />
      </svg>
    </div>
  
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-10 text-white"
      >
        <span className="text-cyan-400">Education</span>
      </motion.h2>
  
      <div className="relative border-l border-gray-700 pl-10 space-y-14"> {/* Increased pl for dot */}
        {educations.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative"
          >
            <span className="absolute -left-[14px]  top-1 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
            <p className="text-gray-400 mt-1">{edu.school} · {edu.period}</p>
            <p className="text-gray-300 mt-4 max-w-2xl">{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  );
}
