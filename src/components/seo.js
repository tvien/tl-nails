import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

import defaultSEOImage from '../images/gallery/22.jpg'
import favicon from '../images/favicon.ico'

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl
				twitterUsername
			}
		}
	}
`

const SEO = ({ title, description, image, article }) => {
	const { pathname } = useLocation()
	const { site } = useStaticQuery(query)

	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
		twitterUsername,
	} = site.siteMetadata

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: image || defaultSEOImage,
		url: `${siteUrl}${pathname}`,
	}

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />

			{seo.url && <meta property='og:url' content={seo.url} />}

			{(article ? true : null) && (
				<meta property='og:type' content='article' />
			)}

			{seo.title && <meta property='og:title' content={seo.title} />}

			{seo.description && (
				<meta property='og:description' content={seo.description} />
			)}

			{seo.image && <meta property='og:image' content={seo.image} />}

			<meta name='twitter:card' content='summary_large_image' />

			{twitterUsername && (
				<meta name='twitter:creator' content={twitterUsername} />
			)}

			{seo.title && <meta name='twitter:title' content={seo.title} />}

			{seo.description && (
				<meta name='twitter:description' content={seo.description} />
			)}

			{seo.image && <meta name='twitter:image' content={seo.image} />}

			<link rel='icon' href={favicon} />
			{/* <!-- Hotjar Tracking Code --> */}
			<script>
				{`(function(h,o,t,j,a,r){
			        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
			        h._hjSettings={hjid:5276222,hjsv:6};
			        a=o.getElementsByTagName('head')[0];
			        r=o.createElement('script');r.async=1;
			        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
			        a.appendChild(r);
			    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
			`}
			       </script>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-2SDPKW8XWE'
			></script>

			<script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2SDPKW8XWE');
`}</script>
		</Helmet>
	)
}

export default SEO

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool,
}

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	article: false,
}
