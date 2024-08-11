import type { IConfig } from '$lib/interfaces/config.interface';

const config: IConfig = {
	environment: import.meta.env.VITE_ENVIRONMENT ?? 'development',
	api: import.meta.env.VITE_API ?? 'http://localhost:8080'
};

export default config;
