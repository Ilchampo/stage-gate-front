import flowbitePlugin from 'flowbite/plugin';

import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#FFF4F0',
					100: '#FFE6DB',
					200: '#FFCDB8',
					300: '#FFB899',
					400: '#FF9F75',
					500: '#FF8552',
					600: '#FF570F',
					700: '#CC3D00',
					800: '#852800',
					900: '#421400',
					950: '#240B00'
				},
				secondary: {
					50: '#DDFAFE',
					100: '#BAF6FC',
					200: '#7AEDFA',
					300: '#36E4F7',
					400: '#09CCE2',
					500: '#068D9D',
					600: '#057380',
					700: '#04545D',
					800: '#023A40',
					900: '#011B1D',
					950: '#010D0F'
				},
				tertiary: {
					50: '#DEE9F7',
					100: '#B9CFEE',
					200: '#739FDD',
					300: '#3273CD',
					400: '#214C87',
					500: '#102542',
					600: '#0D1E35',
					700: '#0A1729',
					800: '#060E19',
					900: '#03070C',
					950: '#020508'
				},
				success: {
					50: '#F1F9EB',
					100: '#E5F5DB',
					200: '#C9EAB3',
					300: '#AFE08F',
					400: '#93D567',
					500: '#78CB42',
					600: '#5FA82E',
					700: '#488023',
					800: '#2F5417',
					900: '#192C0C',
					950: '#0B1406'
				},
				warning: {
					50: '#FEFCEC',
					100: '#FCFADE',
					200: '#F9F5B8',
					300: '#F7F097',
					400: '#F4EB71',
					500: '#F1E74E',
					600: '#ECDE13',
					700: '#B4A90E',
					800: '#766F09',
					900: '#3D3A05',
					950: '#1C1B02'
				},
				error: {
					50: '#FCE9E9',
					100: '#F9D7D7',
					200: '#F3AAAC',
					300: '#ED8284',
					400: '#E75A5D',
					500: '#E13134',
					600: '#BF1C1F',
					700: '#8E1517',
					800: '#5D0E0F',
					900: '#310708',
					950: '#160304'
				},
				surface: {
					50: '#F9FAFA',
					100: '#F4F6F6',
					200: '#EBEFEF',
					300: '#E0E6E5',
					400: '#D7DFDE',
					500: '#CDD7D6',
					600: '#9FB2B0',
					700: '#6F8B88',
					800: '#4B5D5C',
					900: '#242D2C',
					950: '#121716'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
