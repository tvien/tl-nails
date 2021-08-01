import React from 'react'

import { Link } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

import useScrollTopChecker from '../hooks/useScrollTopChecker'

import { NAV_LINKS, SOCIAL_LINKS } from '../common/nav-items.js'
import { INFO } from '../common/info.js'

import { navLogoWrapper } from './nav.module.css'

import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Nav = () => {
	const scrolledFromTop = useScrollTopChecker(0)

	const navLinx = NAV_LINKS.map((nav, idx) => (
		<li key={idx}>
			<Link
				to={nav.url}
				className='py-4 px-4 uppercase text-xs md:text-sm'
				activeClassName='text-red-500'
			>
				{nav.title}
			</Link>
		</li>
	))

	const socialLinx = SOCIAL_LINKS.map((soc, idx) => (
		<li key={idx} className='py-4 px-4 '>
			<OutboundLink
				href={soc.url}
				target='_blank'
				title={soc.title}
				className='text-red-400 hover:text-red-500'
			>
				{<soc.Icon size='1.25rem' />}
			</OutboundLink>
		</li>
	))

	return (
		<>
			{/* Desktop nav */}
			<nav
				className={`lg:px-6 h-16 md:h-24 sticky top-0 z-40 hidden md:block backdrop-filter ${
					scrolledFromTop ? 'backdrop-blur-sm' : ''
				}`}
			>
				<div
					className={`mx-auto container px-3 lg:px-0 h-16 md:h-24 sticky top-0 z-40 hidden md:flex justify-between`}
				>
					<div className='flex'>
						<Link to='/' className='min-w-max py-4'>
							<StaticImage
								src='../images/tnl-logo.png'
								className={navLogoWrapper}
								quality={100}
								alt='T&L Nails logo'
							/>
						</Link>

						<ul className='flex items-center ml-4'>{navLinx}</ul>
					</div>

					<div className='flex'>
						<ul className='hidden lg:flex items-center ml-4'>
							{socialLinx}
						</ul>

						<div className='flex items-center'>
							<button
								className={`rounded-md px-3 py-2 ml-4 text-sm text-white uppercase
											bg-gradient-to-tr from-red-500 to-pink-400 
											hover:shadow-lg hover:from-red-600 hover:to-pink-500
											focus:ring-2 focus:outline-none`}
							>
								<a href={`tel:+1${INFO.primaryPhone}`}>
									Book Now
								</a>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Nav
