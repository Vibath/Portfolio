import { FaDownload, FaGithub } from "react-icons/fa";

export default function Hero() {
  const downloadCV = () => {
    fetch("/Vibath Jayasundara CV.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Vibath Jayasundara CV.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(err => console.error("CV download error:", err));
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* FLOATING ROLES */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Full Stack Developer */}
        <div className="absolute top-28 left-4 sm:top-12 sm:left-4 md:top-20 md:left-10 animate-float-slow">
          <span className="px-4 py-2 rounded-full text-xs md:text-sm font-medium
            text-cyan-300 border border-cyan-400/30
            bg-cyan-400/10 backdrop-blur-md
            shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            Full Stack Developer
          </span>
        </div>

        {/* Digital Creator */}
        <div className="absolute top-44 right-4 sm:top-1/4 sm:right-4 md:top-1/3 md:right-16 animate-float-medium">
          <span className="px-4 py-2 rounded-full text-xs md:text-sm font-medium
            text-pink-300 border border-pink-400/30
            bg-pink-400/10 backdrop-blur-md
            shadow-[0_0_30px_rgba(236,72,153,0.25)]">
            Digital Creator
          </span>
        </div>

        {/* Visual Storyteller */}
        <div className="absolute bottom-60 left-1/6 sm:bottom-28 sm:left-1/4 md:bottom-32 md:left-1/3 animate-float-fast">
          <span className="px-4 py-2 rounded-full text-xs md:text-sm font-medium
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
          <div className="text-center md:text-left mt-40 sm:mt-5"> {/* Adjust mt-32 for mobile first impression */}
            <h1 className="font-extrabold leading-tight">
              <span className="block text-lg md:text-xl tracking-widest text-cyan-400 uppercase animate-pulse">
                Hello, I’m
              </span>

              {/* NAME */}
              <div className="group relative inline-block">
                <span
                  className="
                    block mt-2 sm:mt-1 text-6xl sm:text-7xl md:text-9xl text-white
                    bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500
                    bg-clip-text text-transparent
                    transition-all duration-700
                    group-hover:animate-gradient-hover
                  "
                >
                  Vibath
                </span>
                <style>{`
                  @keyframes gradient-hover {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  .animate-gradient-hover {
                    background-size: 300% 300%;
                    animation: gradient-hover 3s ease infinite;
                  }
                `}</style>
              </div>

              <span className="block text-3xl sm:text-4xl md:text-5xl text-gray-400 font-medium mt-2">
                Jayasundara
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 max-w-md mx-auto md:mx-0 text-gray-300 leading-relaxed
              hover:text-cyan-400 transition-colors duration-500 text-sm sm:text-base md:text-lg">
              Undergraduate BSc(Hons) in Information Technology | Specializing in{" "}
              <span className="text-cyan-400 font-medium">Data Science</span> • Visual Storyteller
            </p>

            {/* BUTTONS */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
          onClick={downloadCV}
          className="
            flex justify-center items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
            bg-gradient-to-r from-cyan-500 to-pink-500 text-black
            hover:from-pink-500 hover:to-purple-500
            hover:scale-105 hover:shadow-xl
            transition-all duration-300
          "
        >
          <FaDownload /> Download CV
        </button>

              <a
                href="https://github.com/Vibath"
                target="_blank"
                rel="noreferrer"
                className="
                  flex justify-center items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
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
          <div className="md:pl-10 mt-50 md:mt-0 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 relative">
              About Me
              <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-24 h-1
                bg-gradient-to-r from-cyan-400 to-pink-500
                rounded-full animate-pulse">
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed
              sm:hover:text-cyan-400 transition-colors duration-500 text-sm sm:text-base md:text-lg">
              I’m Vibath, an undergraduate student passionate about Full Stack Development, building robust and scalable web applications with modern technologies. I also specialize in Data Science, analyzing data to uncover insights and drive intelligent solutions. Beyond technology, I’m a visual storyteller — capturing moments through photography and crafting compelling visuals. I enjoy designing intuitive interfaces and graphics, combining creativity with functionality to create engaging and impactful experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
