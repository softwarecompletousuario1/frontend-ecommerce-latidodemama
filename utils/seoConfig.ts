// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://latidodemama.com", // Change this to your production URL.
	description:
		"¡Nuestra plataforma es un espacio creado con amor y dedicación para acompañar a padres en el hermoso viaje de criar a sus hijos! Ofrecemos servicios de terapia de pareja y orientación para padres, diseñados para fortalecer los lazos familiares. Además, encontrarás una variedad de cursos cuidadosamente elaborados para brindarte herramientas prácticas en el proceso de una crianza sana y enriquecedora. ", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://res.cloudinary.com/dk2abyon6/image/upload/v1699388431/latidoimgminiatura/paginalatidodemama_jjovwh.png", // Change this to your website's thumbnail.
		alt: "Latido de Mamá - Crianza consciente y terapia familiar", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "latidodemama.com", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "latidodemama.com", // Change this to your website's name.
	short_name: "latidodemama.com", // Change this to your website's short name.
	description:
		"¡Nuestra plataforma es un espacio creado con amor y dedicación para acompañar a padres en el hermoso viaje de criar a sus hijos! Ofrecemos servicios de terapia de pareja y orientación para padres, diseñados para fortalecer los lazos familiares. Además, encontrarás una variedad de cursos cuidadosamente elaborados para brindarte herramientas prácticas en el proceso de una crianza sana y enriquecedora.", // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
