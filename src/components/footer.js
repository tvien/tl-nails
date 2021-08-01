import React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

import { SOCIAL_LINKS } from '../common/nav-items.js'
import { INFO, LOCATIONS } from '../common/info.js'

import { OutboundLink } from 'gatsby-plugin-google-analytics'

import {
	HiOutlineLocationMarker,
	HiOutlinePhone,
	HiOutlineClock,
} from 'react-icons/hi'
import { Link } from 'gatsby'

export const FooterLocationDetails = ({ location }) => {
	let phoneStr = location.phone.toString()
	let formattedPhone = `(${phoneStr.substr(0, 3)}) ${phoneStr.substr(
		3,
		3
	)}-${phoneStr.substr(6)}`

	return (
		<>
			<p className='text-xl font-bold uppercase text-center'>
				{location.location}
			</p>

			<hr className='mx-12 mt-2  mb-3 border-red-200' />

			<div className='flex justify-center'>
				<ul className='space-y-3 inline-block text-sm'>
					<li className='flex'>
						<HiOutlineLocationMarker
							className='text-red-200'
							size='1.25rem'
						/>

						<div className='ml-4 font-light'>
							<p>{`${location.address}`}</p>
							<p>{`${location.city}, ${location.state} ${location.zip}`}</p>
						</div>
					</li>

					<li className='flex'>
						<HiOutlinePhone
							className='text-red-200'
							size='1.25rem'
						/>

						<div className='ml-4 font-light'>
							<a href={`tel:+1${location.phone}`}>
								{formattedPhone}
							</a>
						</div>
					</li>

					<li className='flex'>
						<HiOutlineClock
							className='text-red-200'
							size='1.25rem'
						/>

						<div className='ml-4'>
							{location.schedule.map(
								([dayOfWeek, hours], idx) => (
									<div key={idx}>
										<p>
											{dayOfWeek}:{' '}
											<span className='font-light'>
												{hours}
											</span>
										</p>
									</div>
								)
							)}
						</div>
					</li>
				</ul>
			</div>
		</>
	)
}

FooterLocationDetails.propTypes = {
	location: PropTypes.object,
}

const Footer = () => {
	const socialLinx = SOCIAL_LINKS.map((soc, idx) => (
		<li key={idx} className='py-4 px-4 '>
			<OutboundLink href={soc.url} title={soc.title} target='_blank'>
				{<soc.Icon size='1.5rem' />}
			</OutboundLink>
		</li>
	))
	return (
		<div className='bg-gradient-to-tr from-gray-800 to-gray-900'>
			<div className='container mx-auto'>
				<div className='w-full'>
					<div className='grid w-full grid-cols-1 md:grid-cols-3 gap-4 py-12 text-red-200'>
						<div className='text-center'>
							<p className='text-xl font-bold uppercase'>
								Stay Social
							</p>

							<hr className='mx-20 mt-2 mb-3 border-red-200' />

							<Link to='/'>
								<StaticImage
									className='w-56'
									src='../images/tnl-logo-pink.png'
									alt='T&L Nails Logo'
								/>
							</Link>

							<ul className='flex items-center justify-center mb-2'>
								{socialLinx}
							</ul>

							<a
								className='font-light'
								href={`mailto:${INFO.email}`}
							>
								{INFO.email}
							</a>
						</div>

						<div className='my-6 md:my-0'>
							<FooterLocationDetails location={LOCATIONS[0]} />
						</div>
						<div>
							<FooterLocationDetails location={LOCATIONS[1]} />
						</div>
					</div>
				</div>
			</div>

			<div className='text-center text-xs text-gray-500 pb-6 px-6 font-light'>
				© {new Date().getFullYear()} All Rights Reserved by T&L Nails |
				Designed & developed by{' '}
				<OutboundLink
					className='font-normal'
					href='https://www.tonyvien.com/'
					target='_blank'
					rel='noreferrer'
				>
					tv
				</OutboundLink>{' '}
				<span className='text-xl'>🐱‍💻</span>
			</div>
		</div>
	)
}

export default Footer
