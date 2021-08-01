import React from 'react'

import GoogleMapReact from 'google-map-react'

import {
	HiOutlineLocationMarker,
	HiLocationMarker,
	HiOutlinePhone,
	HiOutlineClock,
} from 'react-icons/hi'

import Layout from '../components/layout'
import Hero from '../components/hero'
import PageHeader from '../components/page-header'

import heroImage1 from '../images/tampa-1.jpg'

import { INFO, LOCATIONS } from '../common/info'

import Seo from '../components/seo'

const Locations = () => {
	const markerSize = 32

	return (
		<Layout>
			<Seo
				title='Locations'
				description="At T&L Nails, we understand that getting your nails done makes up only a fraction of your day. That's why we're located by some of the best restaurants, boutiques, cafes, shops, and other exciting points of interest for you to flaunt your nails!"
			/>

			<PageHeader title='Locations' />

			<div className='container mx-auto lg:px-6  max-w-6xl'>
				{LOCATIONS.map((loc, idx) => {
					let phoneStr = loc.phone.toString()
					let formattedPhone = `(${phoneStr.substr(
						0,
						3
					)}) ${phoneStr.substr(3, 3)}-${phoneStr.substr(6)}`
					return (
						<div className='w-full px-6 lg:px-0' key={idx}>
							<div className='flex flex-wrap shadow-lg my-6 md:my-9 rounded-lg overflow-hidden'>
								<div
									className=' w-full md:w-1/2 lg:w-2/3'
									style={{ height: '22rem' }}
								>
									<GoogleMapReact
										bootstrapURLKeys={{
											key: 'AIzaSyA5jeDgBuhkngy3WSb66WsqNI76s1CLrHM',
										}}
										defaultCenter={loc.center}
										defaultZoom={loc.zoom}
									>
										<div
											style={{ position: 'relative' }}
											lat={loc.center.lat}
											lng={loc.center.lng}
										>
											<HiLocationMarker
												className='text-red-500'
												style={{
													position: 'relative',
													height: markerSize,
													width: markerSize,
													top: -markerSize,
													left: -markerSize / 2,
												}}
											/>
										</div>
									</GoogleMapReact>
								</div>

								<div className='w-full md:w-1/2 lg:w-1/3 bg-white p-6 '>
									<div className='flex'>
										<div className='flex items-center'>
											<p className='text-2xl font-bold'>
												{loc.icon}
											</p>
										</div>

										<div className='ml-2'>
											<p className='text-2xl font-bold'>
												{loc.location}
											</p>
											<p className='text-xs font-light italic'>
												{loc.description}
											</p>
										</div>
									</div>

									<hr className='my-2 mx-3' />

									<ul className='space-y-3'>
										<li className='flex'>
											<HiOutlineLocationMarker
												className='text-red-500'
												size='1.5rem'
											/>

											<div className='ml-4'>
												<p>{`${loc.address}`}</p>
												<p>{`${loc.city}, ${loc.state} ${loc.zip}`}</p>
											</div>
										</li>

										<li className='flex'>
											<HiOutlinePhone
												className='text-red-500'
												size='1.5rem'
											/>

											<div className='ml-4'>
												<a href={`tel:+1${loc.phone}`}>
													{formattedPhone}
												</a>
											</div>
										</li>

										<li className='flex'>
											<HiOutlineClock
												className='text-red-500'
												size='1.5rem'
											/>

											<div className='ml-4'>
												{loc.schedule.map(
													(
														[dayOfWeek, hours],
														key
													) => (
														<div key={key}>
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

										<li className='flex justify-center'>
											<button
												className={`rounded-full px-4 py-1 text-xs  uppercase focus:ring-2 focus:outline-none 
											text-red-500 ring-red-400 hover:bg-red-100 hover:ring-0 mr-3`}
												onClick={() => {
													window.open(
														loc.googleMapsLink
													)
												}}
											>
												Get Directions
											</button>

											<button
												className={`rounded-full px-4 py-2 text-xs text-white uppercase
												bg-gradient-to-tr from-red-500 to-pink-400 
												hover:shadow-lg hover:from-red-600 hover:to-pink-500
												focus:ring-2 focus:outline-none`}
												onClick={() => {
													window.location.href = `tel:+1${loc.phone}`
												}}
											>
												Call Now
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)
				})}
			</div>

			<Hero
				heroImageUrl={heroImage1}
				displayHeroImageOnLeft={true}
				heroHeader="We're more than just nails"
				heroSubHeader={
					<>
						We're also a part of a community located by{' '}
						<span className='font-semibold'>AMAZING</span>{' '}
						restaurants, boutiques, cafes, and other small shops for
						you to explore. Come get your nails done and experience
						some of the best places that Tampa has to offer near us
					</>
				}
				heroButtonText='Book Now'
				onHeroButtonClicked={() => {
					window.location.href = `tel:+1${INFO.primaryPhone}`
				}}
				rootClass='bg-gradient-to-tr from-purple-700 to-pink-500'
				heroTextContainerClass='md:text-white'
				heroButtonClass='ring-white text-white hover:text-black md:hover:text-pink-500 hover:bg-white'
				className='fr'
			/>
		</Layout>
	)
}

export default Locations
