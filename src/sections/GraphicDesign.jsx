import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Posters
import Poster1 from "../assets/posters/poster1.jpg";
import Poster2 from "../assets/posters/poster2.jpg";
import Poster3 from "../assets/posters/poster3.png";
import Poster4 from "../assets/posters/poster4.jpg";
import Poster5 from "../assets/posters/poster5.jpg";
import Poster6 from "../assets/posters/poster6.jpg";
import Poster7 from "../assets/posters/poster7.jpg";
import Poster8 from "../assets/posters/poster8.jpg";
import Poster9 from "../assets/posters/poster9.jpg";
import Poster10 from "../assets/posters/poster10.jpg";
import Poster11 from "../assets/posters/poster11.jpg";

const posters = [
  Poster1, Poster2, Poster3, Poster4, Poster5,
  Poster6, Poster7, Poster8, Poster9, Poster10, Poster11
];

const variants = {
  left: { x: -150, scale: 0.8, opacity: 0.4, zIndex: 1 },
  center: { x: 0, scale: 1, opacity: 1, zIndex: 3 },
  right: { x: 150, scale: 0.8, opacity: 0.4, zIndex: 1 }
};

export default function GraphicDesign() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % posters.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev - 1 + posters.length) % posters.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % posters.length);

  const visible = [
    (index - 1 + posters.length) % posters.length,
    index,
    (index + 1) % posters.length
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gray-950/50 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

        {/* DESCRIPTION */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pink-400">Graphic Design & Visual Media</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-base">
            I create visually compelling posters and promotional creatives for events,
            brands, and digital platforms. My design approach focuses on strong visual
            hierarchy, clean typography, and impactful color palettes that instantly
            capture attention.
          </p>

          <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-base">
            Beyond static designs, I also specialize in video editing and motion
            graphics — crafting dynamic visuals that enhance storytelling and audience
            engagement. From social media promos to event highlights, my edits are
            designed to feel modern, energetic, and polished.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            My creative work is widely used for concerts, brand promotions, social media
            campaigns, advertisements, and digital content where visual impact matters
            most.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center w-full mt-10 md:mt-0">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 transition text-sm sm:text-base"
          >
            <FaChevronLeft />
          </button>

          {/* SLIDES */}
          <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden">
            {visible.map((posterIndex, i) => {
              const position = i === 0 ? "left" : i === 1 ? "center" : "right";
              const sizeClasses = position === "center"
                ? "w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 shadow-2xl"
                : "w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80";
              return (
                <motion.img
                  key={posterIndex}
                  src={posters[posterIndex]}
                  className={`absolute object-cover rounded-2xl ${sizeClasses}`}
                  variants={variants}
                  animate={position}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              );
            })}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 transition text-sm sm:text-base"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
