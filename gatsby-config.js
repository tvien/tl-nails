module.exports = {
	siteMetadata: {
		title: "Tampa's Favorite Nail Shoppe",
		titleTemplate: "%s | T&L Nails - Tampa's Nail Shoppe",
		description:
			'Just down the street from Downtown Tampa and UT, T&L Nails is one of the leading nail salons in the Tampa area, specializing in everything we can to help you find your glow! So whether you’re looking to get gorgeous nail art done or you just want to "treat yo\' self", we’re here and ready to help you step up your nail game!',
		siteUrl: 'https://www.tlnailstampa.com',
		twitterUsername: '',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',

		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
				// // Defines where to place the tracking script - `true` in the head and `false` in the body
				// head: false,
				// // Setting this parameter is optional
				// anonymize: true,
				// // Setting this parameter is also optional
				// respectDNT: true,
				// // Avoids sending pageview hits from custom paths
				// exclude: ['/preview/**', '/do-not-track/me/too/'],
				// // Delays sending pageview hits on route update (in milliseconds)
				// pageTransitionDelay: 0,
				// // Enables Google Optimize using your container Id
				// optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
				// // Enables Google Optimize Experiment ID
				// experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
				// // Set Variation ID. 0 for original 1,2,3....
				// variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
				// // Defers execution of google analytics script after page load
				// defer: false,
				// // Any additional optional fields
				// sampleRate: 5,
				// siteSpeedSampleRate: 10,
				// cookieDomain: 'example.com',
				// // defaults to false
				// enableWebVitalsTracking: true,
			},
		},
	],
}
