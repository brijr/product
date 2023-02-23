'use client';

import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const App = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.log(container);
	}, []);
	return (
		<Particles
			className="fixed inset-0 z-[-1]"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: '#fff'
					}
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'push'
						},
						onHover: {
							enable: true,
							mode: 'repulse'
						},
						resize: true
					},
					modes: {
						push: {
							quantity: 4
						},
						repulse: {
							distance: 25,
							duration: 0.4
						}
					}
				},
				particles: {
					color: {
						value: '#94a3b8'
					},
					collisions: {
						enable: true
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce'
						},
						random: false,
						speed: 1,
						straight: false
					},
					number: {
						density: {
							enable: true,
							area: 1000
						},
						value: 100
					},
					opacity: {
						value: 0.5
					},
					shape: {
						type: 'circle'
					},
					size: {
						value: 1
					}
				},
				detectRetina: true
			}}
		/>
	);
};

export default App;
