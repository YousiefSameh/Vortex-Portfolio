import { useCallback, useEffect, useState } from "react";
import type { Engine } from "@tsparticles/engine";

interface InitParticlesEngine {
	(engine: Engine): Promise<void>;
}

const useParticles = () => {
	const [init, setInit] = useState(false);

	const initParticlesEngine: InitParticlesEngine = useCallback(
		async (engine: Engine) => {
			const { loadFull } = await import("tsparticles");
			await loadFull(engine);
		},
		[]
	);

	useEffect(() => {
		const initEngine = async () => {
			try {
				const { tsParticles } = await import("@tsparticles/engine");
				await initParticlesEngine(tsParticles);
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
