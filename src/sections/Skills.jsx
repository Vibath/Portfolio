import { FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGithub, FaJs, FaChartBar } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiMysql, SiCplusplus, SiKotlin, SiFigma, SiJupyter, SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro, SiAdobeaftereffects, SiDavinciresolve } from "react-icons/si";

// Import SVG logos (make sure they are colored)
import PremiereProLogo from "../assets/logos/premierepro.svg";
import AfterEffectsLogo from "../assets/logos/aftereffects.svg";
import CapCutLogo from "../assets/logos/capcut.svg";

export default function Skills() {
  const devSkills = [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiCplusplus, name: "C++" },
    { icon: FaPython, name: "Python" },
    { icon: FaJava, name: "Java" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaPhp, name: "PHP" },
    { icon: SiKotlin, name: "Kotlin" },
    { icon: FaGithub, name: "GitHub" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiJupyter, name: "Jupyter" },
    { icon: FaChartBar, name: "Power BI" },
  ];

  const creativeSkills = [
    { icon: SiAdobephotoshop, name: "Photoshop" },
    { icon: SiAdobelightroom, name: "Lightroom" },
    { icon: SiAdobepremierepro, name: "Premiere Pro" },
    { icon: SiAdobeaftereffects, name: "After Effects" },
    { icon: SiDavinciresolve, name: "DaVinci Resolve" },
    { icon: CapCutLogo, name: "CapCut", isSvg: true },
  ];

  const renderSkillRow = (skills) => (
    <div className="w-full overflow-hidden mb-12">
      <div className="flex gap-10 animate-scroll">
        {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="skill-item flex-none flex flex-col items-center gap-2 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              {skill.isSvg ? (
                <img
                  src={Icon}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                />
              ) : (
                <Icon className="text-3xl sm:text-4xl md:text-6xl" />
              )}
              <span className="text-xs sm:text-sm md:text-base text-white">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="relative py-16 bg-gray-950">
      {/* Development Skills */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 text-center text-white">
        <span className="text-cyan-400">Development Skills</span>
      </h2>
      {renderSkillRow(devSkills)}

      {/* Creative Skills */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 text-center text-white">
        <span className="text-pink-400">Creative Skills</span>
      </h2>
      {renderSkillRow(creativeSkills)}

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 140s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
