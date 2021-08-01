import React, { cloneElement } from 'react'

import { Link } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

import useScrollTopChecker from '../hooks/useScrollTopChecker'

import tnlLogo from '../images/tnl-logo.png'

import { NAV_LINKS, SOCIAL_LINKS } from '../common/nav-items.js'
import { INFO } from '../common/info.js'

import { navLogoWrapper } from './nav.module.css'

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
			<Link
				to={soc.url}
				target='_blank'
				title={soc.title}
				className='text-red-400 hover:text-red-500'
			>
				{<soc.Icon size='1.25rem' />}
			</Link>
		</li>
	))

	const midIdx = Math.floor(navLinx.length / 2)
	const navLeft = navLinx.slice(0, midIdx)
	const navRight = navLinx.slice(midIdx)

	return (
		<>
			{/* Desktop nav */}
			{/* <nav
				className={`mx-auto h-16 md:h-24 sticky top-0 z-50 hidden md:flex justify-center backdrop-filter ${
					scrolledFromTop ? 'backdrop-blur-sm' : ''
				}`}
			>
				<ul className='flex items-center mr-4'>{navLeft}</ul>

				<Link to='/' className='min-w-max'>
					<img src={tnlLogo} className='h-full' />
				</Link>

				<ul className='flex items-center ml-4'>{navRight}</ul>
			</nav> */}

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
							{/* <img src={tnlLogo} className='h-full' /> */}

							<StaticImage
								src='../images/tnl-logo.png'
								className={navLogoWrapper}
								// imgClassName='h-full'
								quality={100}
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
