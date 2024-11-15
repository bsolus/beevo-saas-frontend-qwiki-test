import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async (config) => {
	return {
		// Enable to analyze via source-map-explorer
		ssr: { target: 'webworker' },
		server: {
			port: 3000,
		},
		build: {
			sourcemap: config.mode === 'development',
		},
		plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
		preview: {
			headers: {
				'Cache-Control': 'public, max-age=600',
			},
		},
	};
});
