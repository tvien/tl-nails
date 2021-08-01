import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { SiInstagram, SiYelp, SiFacebook } from 'react-icons/si'

import tnlLogo from '../images/tnl-logo.png'

import { NAV_LINKS } from '../common/nav-items'

import { INFO } from '../common/info.js'

const NavbarMobile = (props) => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

	return (
		<div className='sticky top-0 z-40 flex md:hidden'>
			{/* mobile nav button */}
			<button
				className='ml-auto p-6'
				onClick={() => setIsMobileNavOpen(true)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h16m-7 6h7'
					/>
				</svg>
			</button>

			{isMobileNavOpen && (
				<div className='absolute w-full h-screen flex flex-col items-start backdrop-filter backdrop-blur-md backdrop-brightness-125 transition-opacity'>
					<div className='w-full flex flex-grow-0 items-center justify-center'>
						<a href='/' className='w-full'>
							<img
								src={tnlLogo}
								className='h-auto w-10/12 p-6 mx-auto'
							/>

							{/* <StaticImage
								src='../images/tnl-logo.png'
								className={navLogoWrapper}
								imgClassName='h-auto w-10/12 p-6 mx-auto'
								quality={100}
							/> */}
						</a>

						<button
							className='absolute top-0 right-0 p-6'
							onClick={() => setIsMobileNavOpen(false)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>

					<div className='w-full text-center flex flex-col flex-1 justify-around'>
						<ul className='flex flex-col flex-1 justify-evenly'>
							{NAV_LINKS.map((nav, idx) => (
								<li key={idx}>
									<Link
										key={idx}
										to={nav.url}
										onClick={() =>
											setIsMobileNavOpen(false)
										}
										className='text-xl uppercase p-6'
									>
										{nav.title}
									</Link>
								</li>
							))}
						</ul>

						<div className='w-full pb-36'>
							<button
								className={`rounded-full px-4 py-2 text-xl text-white uppercase
											bg-gradient-to-tr from-red-500 to-pink-400 
											hover:shadow-lg hover:from-red-600 hover:to-pink-500
											focus:ring-2 focus:outline-none`}
							>
								<a href={`tel:+1${INFO.primaryPhone}`}>
									Book Now
								</a>
							</button>

							<div className='flex justify-evenly mt-12'>
								<a href={INFO.facebookURL} target='_blank'>
									<SiFacebook size='1.5rem' />
								</a>

								<a href={INFO.instagramURL} target='_blank'>
									<SiInstagram size='1.5rem' />
								</a>

								<a href={INFO.yelpURL} target='_blank'>
									<SiYelp size='1.5rem' />
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default NavbarMobile
