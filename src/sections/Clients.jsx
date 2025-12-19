import { motion } from "framer-motion";

// Client Logos
import MemorySL from "../assets/clients/memory-sl.png";
import Daraz from "../assets/clients/daraz.png";
import FabCeylon from "../assets/clients/fab-ceylon.png";
import FabGrand from "../assets/clients/fab-grand.png";
import CafeNuwara from "../assets/clients/cafe-nuwara.png";
import ActionValley from "../assets/clients/action-valley.png";
import PortView from "../assets/clients/port-view.png";
import SathKorale from "../assets/clients/sath-korale.png";
import TinyClub from "../assets/clients/tiny-club.png";

const clients = [
  { name: "Memory SL", logo: MemorySL },
  { name: "Daraz", logo: Daraz },
  { name: "Fab Ceylon", logo: FabCeylon },
  { name: "Fab Grand", logo: FabGrand },
  { name: "Cafe Nuwara", logo: CafeNuwara },
  { name: "Action Valley Campus", logo: ActionValley },
  { name: "Port View Restaurant", logo: PortView },
  { name: "Sath Korale Academy & School", logo: SathKorale },
  { name: "Tiny Club Pre School", logo: TinyClub },
];

export default function Clients() {
  return (
    <section className="py-28 bg-gray-950/70 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold tracking-widest text-center mb-14"
        >
          <span className="text-gray-300">Trusted By</span>
        </motion.h3>

        {/* Clients */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 md:h-16 w-auto object-contain transition-all duration-300
                   group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              />
              <span
                className="text-sm md:text-base text-gray-400 transition-colors duration-300
                   group-hover:text-white text-center"
              >
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
