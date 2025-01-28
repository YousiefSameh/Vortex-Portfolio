import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

interface InitParticlesEngine {
	(engine: Engine): Promise<void>;
}

export default function ParticleBackground() {
	const [init, setInit] = useState(false);

	const initParticlesEngine: InitParticlesEngine = useCallback(
		async (engine: Engine) => {
			await loadFull(engine);
		},
		[]
	);

	useEffect(() => {
		const initEngine = async () => {
			try {
				await initParticlesEngine(
					await import("@tsparticles/engine").then(
						({ tsParticles }) => tsParticles
					)
				);
				setInit(true);
			} catch (error) {
				console.error("Error initializing particles engine:", error);
			}
		};

		initEngine();
	}, [initParticlesEngine]);

	return (
		<>
			{init && (
				<Particles
					id="tsparticles"
          className="!z-10 absolute w-full h-full"
					options={{
						background: {
              position: "",
							color: {
								value: "#000",
							},
						},
            fullScreen: {
              enable: false
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
									width: 1100,
                  height: 1100
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
		</>
	);
}
