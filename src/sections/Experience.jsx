import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Digital Media Coordinator",
      company: "Memory SL Music Band",
      period: "May 2022 – Present",
      desc: [
        "Manage the band’s digital presence through strategic social media planning, content creation, and audience engagement.",
        "Serve as the lead photographer and videographer for band events, promotions, and live performances."
      ]
    },
    {
      title: "Freelance Photographer",
      company: "Event & Wedding Photography",
      period: "December 2023 – Present",
      desc: [
        "Provide professional photography services for weddings, concerts, and private events.",
        "Built a strong client base through high-quality work and consistent client referrals."
      ]
    },
    {
      title: "Freelance Graphic Designer",
      company: "Creative & Promotional Design",
      period: "2021 – Present",
      desc: [
        "Designed visual content and promotional videos for educational institutes, events, and brand promotions.",
        "Worked on posters, social media creatives, motion graphics, and short promotional videos tailored to client needs."
      ]
    }
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-right text-white"
        >
          <span className="text-cyan-400">Experience</span>
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative">

          {/* Animated vertical line (desktop only) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden sm:block absolute right-4 top-0 w-px bg-gradient-to-b from-cyan-400/80 via-cyan-400/40 to-transparent"
          />

          <div className="space-y-10 sm:space-y-20"> {/* smaller gap on mobile */}

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-[1fr_40px] gap-4 sm:gap-6 group"
              >

                {/* CONTENT COLUMN */}
                <div className="relative text-right">

                  {/* YEAR BADGE */}
                  <span
                    className="
                      block sm:absolute sm:-left-2 sm:-top-6
                      mt-2 sm:mt-0
                      text-xs sm:text-sm text-cyan-300 opacity-60
                      transition-transform duration-300 sm:group-hover:scale-110
                    "
                  >
                    {exp.period}
                  </span>

                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug mt-2 sm:mt-0">
                    {exp.title}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {exp.company}
                  </p>

                  <div className="mt-2 sm:mt-4 space-y-2 max-w-full sm:max-w-2xl ml-auto">
                    {exp.desc.map((line, idx) => (
                      <p
                        key={idx}
                        className="text-gray-300 leading-relaxed text-sm sm:text-base"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* DOT COLUMN */}
                <div className="hidden sm:flex relative justify-center">
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

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
