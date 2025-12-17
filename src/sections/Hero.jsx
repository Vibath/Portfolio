import { FaDownload, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* FLOATING ROLES */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 animate-float-slow">
          <span className="px-5 py-2 rounded-full text-sm font-medium
            text-cyan-300 border border-cyan-400/30
            bg-cyan-400/10 backdrop-blur-md
            shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            Full Stack Developer
          </span>
        </div>

        <div className="absolute top-1/3 right-16 animate-float-medium">
          <span className="px-5 py-2 rounded-full text-sm font-medium
            text-pink-300 border border-pink-400/30
            bg-pink-400/10 backdrop-blur-md
            shadow-[0_0_30px_rgba(236,72,153,0.25)]">
            Digital Creator
          </span>
        </div>

        <div className="absolute bottom-32 left-1/3 animate-float-fast">
          <span className="px-5 py-2 rounded-full text-sm font-medium
            text-purple-300 border border-purple-400/30
            bg-purple-400/10 backdrop-blur-md
            shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            Visual Storyteller
          </span>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="font-extrabold leading-tight">
              <span className="block text-lg md:text-xl tracking-widest text-cyan-400 uppercase animate-pulse">
                Hello, I’m
              </span>

              {/* NAME */}
              <div className="group">
                <span
                  className="
                    block mt-2 text-6xl md:text-9xl text-white
                    bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500
                    bg-clip-text text-transparent
                    opacity-100
                    group-hover:opacity-100
                    transition-all duration-500
                  "
                >
                  Vibath
                </span>
              </div>

              <span className="block text-3xl md:text-5xl text-gray-400 font-medium">
                Jayasundara
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 leading-relaxed
              hover:text-cyan-400 transition-colors duration-500">
              Undergraduate BSc(Hons) in Information Technology | Specializing in{" "}
              <span className="text-cyan-400 font-medium">Data Science</span> • Visual Storyteller
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
              <a
                href="/Vibath Jayasundara CV.pdf"
                download
                className="
                  flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                  bg-gradient-to-r from-cyan-500 to-pink-500 text-black
                  hover:scale-105 hover:shadow-xl
                  transition-all duration-300
                "
              >
                <FaDownload /> Download CV
              </a>

              <a
                href="https://github.com/Vibath"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                  border border-gray-400 text-gray-300
                  hover:bg-gray-100 hover:text-black
                  hover:scale-105 hover:shadow-lg
                  transition-all duration-300
                "
              >
                <FaGithub /> Visit GitHub
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:pl-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-24 h-1
                bg-gradient-to-r from-cyan-400 to-pink-500
                rounded-full animate-pulse">
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed
              hover:text-cyan-400 transition-colors duration-500">
              I’m Vibath, an undergraduate student specializing in Data Science, with a passion for
              building intelligent systems and analyzing data. Beyond technology, I’m a visual
              storyteller — capturing moments through photography and creating compelling visuals.
              I also enjoy designing user-friendly interfaces and graphics, combining creativity
              with functionality to craft experiences that are both engaging and effective.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
