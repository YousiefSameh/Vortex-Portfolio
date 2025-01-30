import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

interface InitParticlesEngine {
	(engine: Engine): Promise<void>;
}

const useParticles = () => {
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
	return { init };
};

export default useParticles;
