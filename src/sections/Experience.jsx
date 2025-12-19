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
    <section className="relative py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-right text-white"
        >
          <span className="text-cyan-400">Experience</span>
        </motion.h2>

        {/* EXPERIENCES */}
        <div className="relative">
          {/* Vertical timeline only for md+ */}
          <div className="hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute right-4 top-0 w-px bg-gradient-to-b from-cyan-400/80 via-cyan-400/40 to-transparent"
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid md:grid-cols-[1fr_40px] gap-6 group"
              >
                {/* CONTENT COLUMN */}
                <div className="relative text-right md:text-right">
                  {/* Period badge only for md+ */}
                  <span className="hidden md:absolute -left-2 -top-6 text-s text-cyan-300 opacity-60 transition-transform duration-300 group-hover:scale-110">
                    {exp.period}
                  </span>

                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-gray-400 mt-2">{exp.company}</p>

                  <div className="mt-4 space-y-2 max-w-2xl ml-auto">
                    {exp.desc.map((line, idx) => (
                      <p key={idx} className="text-gray-300 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Period for mobile below card */}
                  <span className="md:hidden mt-2 block text-gray-400 text-sm">
                    {exp.period}
                  </span>
                </div>

                {/* DOT COLUMN only for md+ */}
                <div className="hidden md:flex relative justify-center">
                  <span className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)] transition-transform duration-300 group-hover:scale-125" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
