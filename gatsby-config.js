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
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					'G-PZ9JPE5ME1', // Google Analytics / GA
					// 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
					// 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					// optimize_id: 'OPT_CONTAINER_ID',
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					exclude: ['/preview/**', '/do-not-track/me/too/'],
				},
			},
		},
	],
}
