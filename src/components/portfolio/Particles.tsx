import { useMemo } from "react";
import useParticles from "@hooks/useParticles";
import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  const { init } = useParticles();

  const particlesOptions = useMemo(() => ({
    fullScreen: {
      enable: false,
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
        resize: {
          enable: true,
        },
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#00c3b6",
      },
      links: {
        color: "#00c3b6",
        distance: 250,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 1100,
          height: 1100,
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
  }), []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          className="!z-10 absolute w-full h-full dark:bg-black bg-white"
          options={particlesOptions}
        />
      )}
    </>
  );
}
