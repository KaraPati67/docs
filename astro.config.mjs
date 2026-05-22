// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'TrucklineMP',
				pl: 'TrucklineMP',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				pl: {
					label: 'Polski',
					lang: 'pl',
				},
			},
			logo: {
				src: './src/assets/truckline_large_no_shadow.svg',
				alt: 'TrucklineMP',
				replacesTitle: true,
			},
			favicon: '/truckline_no_shadow.svg',
			customCss: [
				'@fontsource-variable/geist',
				'@fontsource-variable/geist-mono',
				'./src/styles/marathon.css',
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/TrucklineMP/docs' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/trucklinemp' },
				{ icon: 'external', label: 'Website', href: 'https://trucklinemp.com' },
			],
			sidebar: [
				{
					slug: 'guides/getting-started',
					label: 'Introduction',
					translations: {
						pl: 'Wprowadzenie',
					},
				},
				{
					slug: 'guides/contributing',
					label: 'Contributing',
					translations: {
						pl: 'Współtworzenie',
					},
				},
			],
		}),
	],
});
