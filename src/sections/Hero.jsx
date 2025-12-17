import { FaDownload, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center">
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* HERO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT — IDENTITY */}
                    <div>
                        <h1 className="font-extrabold leading-tight">
                            <span className="block text-lg md:text-xl tracking-widest text-cyan-400 uppercase animate-pulse">
                                Hello, I’m
                            </span>

                            {/* Wrap parent in a group */}
                            <div className="group">
                                <span className="block mt-2 text-6xl md:text-9xl text-white 
                                        bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500
                                        bg-clip-text text-transparent
                                        transition-all duration-500
                                        group-hover:text-transparent">
                                    Vibath
                                </span>
                            </div>


                            <span className="block text-3xl md:text-5xl text-gray-400 font-medium">
                                Jayasundara
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-gray-300 leading-relaxed hover:text-cyan-400 transition-colors duration-500">
                            Undergraduate BSc(Hons) in Information Technology | Specializing in <span className="text-cyan-400 font-medium">Data Science</span> • Visual Storyteller
                        </p>

                        {/* ACTIONS */}
                        <div className="mt-8 flex gap-4">
                            <a
                                href="/Vibath Jayasundara CV.pdf"
                                download
                                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                           bg-gradient-to-r from-cyan-500 to-pink-500 text-black
                           hover:scale-105 hover:shadow-xl transition-transform duration-300"
                            >
                                <FaDownload /> Download CV
                            </a>

                            <a
                                href="https://github.com/Vibath"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                           border border-gray-400 text-gray-300
                           hover:bg-gray-100 hover:text-black hover:scale-105 hover:shadow-lg
                           transition-all duration-300"
                            >
                                <FaGithub /> Visit GitHub
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — ABOUT */}
                    <div className="md:pl-10">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 relative">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full animate-pulse"></span>
                        </h2>

                        <p className="text-gray-300 leading-relaxed hover:text-cyan-400 transition-colors duration-500">
                            I’m Vibath, an undergraduate student specializing in Data Science, with a passion for building intelligent systems and analyzing data. Beyond technology, I’m a visual storyteller — capturing moments through photography and creating compelling visuals. I also enjoy designing user-friendly interfaces and graphics, combining creativity with functionality to craft experiences that are both engaging and effective. My mission is to build applications and creative work that balance innovation, usability, and aesthetic appeal.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
