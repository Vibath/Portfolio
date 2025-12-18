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

// Animation variants
const variants = {
  left: {
    x: -200,
    scale: 0.85,
    opacity: 0.4,
    zIndex: 1
  },
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3
  },
  right: {
    x: 200,
    scale: 0.85,
    opacity: 0.4,
    zIndex: 1
  }
};

export default function GraphicDesign() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % posters.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + posters.length) % posters.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % posters.length);
  };

  // Get visible indices
  const visible = [
    (index - 1 + posters.length) % posters.length,
    index,
    (index + 1) % posters.length
  ];

  return (
    <section className="relative py-24 bg-gray-950/50 text-white">
        
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* DESCRIPTION */}
              <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-pink-400">Graphic Design & Visual Media</span>
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-5">
                      I create visually compelling posters and promotional creatives for events,
                      brands, and digital platforms. My design approach focuses on strong visual
                      hierarchy, clean typography, and impactful color palettes that instantly
                      capture attention.
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-5">
                      Beyond static designs, I also specialize in video editing and motion
                      graphics — crafting dynamic visuals that enhance storytelling and audience
                      engagement. From social media promos to event highlights, my edits are
                      designed to feel modern, energetic, and polished.
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                      My creative work is widely used for concerts, brand promotions, social media
                      campaigns, advertisements, and digital content where visual impact matters
                      most.
                  </p>
              </div>


        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 transition"
          >
            <FaChevronLeft />
          </button>

          {/* SLIDES */}
          <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
            {visible.map((posterIndex, i) => {
              const position = i === 0 ? "left" : i === 1 ? "center" : "right";

              return (
                <motion.img
                  key={posterIndex}
                  src={posters[posterIndex]}
                  className={`absolute object-cover rounded-2xl ${
                    position === "center"
                      ? "w-72 h-96 shadow-2xl"
                      : "w-64 h-80"
                  }`}
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
            className="absolute right-0 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 transition"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
