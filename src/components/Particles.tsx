import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  const initParticlesEngine = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const initEngine = async () => {
      try {
        await initParticlesEngine(new Engine());
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles engine:", error);
      }
    };

    initEngine();
  }, [initParticlesEngine]);

  const particlesLoaded = useCallback(async (container: Engine) => {
    console.log("Particles container loaded:", container);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#fff",
              },
              links: {
                color: "#fff",
                distance: 250,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
