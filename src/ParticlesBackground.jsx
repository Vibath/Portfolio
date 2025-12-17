import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1, // 👈 keeps it behind everything
      },

      background: {
        color: "#171717",
      },

      fpsLimit: 60,

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },

      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 800,
          },
        },

        color: {
          value: "#06b6d4", // cyan-400
        },

        links: {
          enable: true,
          color: "#06b6d4", // ✅ LINE COLOR (cyan)
          distance: 150,
          opacity: 0.4,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1.2, // smooth (not jittery)
          outModes: {
            default: "out",
          },
        },

        opacity: {
          value: 0.6,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: { min: 1, max: 3 },
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Particles
        id="tsparticles"
        options={options}
      />
    </div>
  );
}
