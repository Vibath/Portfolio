import { motion } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs, FaDatabase, FaPython, FaMobileAlt, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiStreamlit, SiKotlin } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "FutureWatt",
      subtitle: "Sustainable Energy Management System",
      desc: "A full-stack MERN application designed to monitor, analyze, and optimize energy consumption. The system delivers real-time insights, usage trends, and predictive analytics to support smarter and more sustainable energy decisions.",
      tech: [FaReact, FaNodeJs, SiExpress, SiMongodb],
      github: "https://github.com/TheekshR/FutureWatt",
      gradient: "from-cyan-400 to-green-400",
    },
    {
      title: "Global Health Indicator Prediction System",
      subtitle: "Data Science & Machine Learning Project",
      desc: "A data-driven health analytics system built using Python and Jupyter Notebook to predict global health indicators. Integrated with Streamlit for interactive visualizations and model exploration.",
      tech: [FaPython, FaDatabase, SiStreamlit],
      github: "https://github.com/TheekshR/Predictive_Analytic_System_in_Healthcare",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "FlowFunds",
      subtitle: "Personal Finance Tracking Mobile App",
      desc: "An Android application developed using Kotlin to help users track income, expenses, and financial habits. Focused on clean UX, performance, and everyday usability.",
      tech: [SiKotlin, FaMobileAlt],
      github: "https://github.com/Vibath/FlowFunds",
      gradient: "from-emerald-400 to-cyan-400",
    },
    {
      title: "FreshMart",
      subtitle: "Stock Management Web Application",
      desc: "A Java-based web application designed for efficient stock and inventory management. Includes product tracking, stock updates, and reporting features for small-scale retail systems.",
      tech: [FaJava, FaDatabase],
      github: "https://github.com/Vibath/FreshMart",
      gradient: "from-orange-400 to-red-400",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-white"
        >
          <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="
        relative group rounded-2xl p-6 sm:p-8
        bg-white/5 backdrop-blur-md
        border border-white/10
        hover:border-cyan-400/40
        transition-all duration-500
        hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]
      "
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30
          bg-gradient-to-br ${project.gradient}
          blur-2xl transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-xs sm:text-sm text-cyan-300 mt-1">{project.subtitle}</p>
                <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">{project.desc}</p>
                <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3 text-lg sm:text-xl text-gray-300">
                    {project.tech.map((Icon, idx) => (
                      <Icon key={idx} className="hover:text-cyan-400 transition-colors duration-300" />
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-gray-500 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
