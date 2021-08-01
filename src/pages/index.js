import * as React from 'react'

import LandingHero from '../components/landing-hero'
import About from '../components/about'
import Hero from '../components/hero'

import SlidingGallery from '../components/sliding-gallery'

import Testimonials from '../components/testimonials'
import Layout from '../components/layout'

import heroImage2 from '../images/landing-mobile2.jpg'
import servicesMenu from '../images/services-menu.jpg'
import locations from '../images/loc/1c.jpeg'
import tampa from '../images/explore-tpa.jpg'

import useIsMobileChecker from '../hooks/useIsMobileChecker'

import { galleryHighQuality } from '../common/gallery-static-images'
import Gallery from '../components/gallery'

import { INFO } from '../common/info.js'

import Seo from '../components/seo'

const IndexPage = () => {
	const isMobile = useIsMobileChecker()

	const shuffledGallery = galleryHighQuality

	return (
		<Layout>
			<Seo title='Home' />

			<LandingHero />

			<div className='pt-6'>
				<About />
			</div>

			<div className='py-6'>
				<Testimonials />
			</div>

			<div className='relative'>
				<div className='pt-2 pb-0.5 px-0.5 md:py-2 relative'>
					{isMobile ? (
						<Gallery imagesLimit={15} />
					) : (
						<>
							<SlidingGallery
								direction='ltr'
								images={shuffledGallery.slice(0, 9)}
							/>
							<SlidingGallery
								direction='rtl'
								images={shuffledGallery.slice(9, 18)}
							/>
						</>
					)}
				</div>
				<div className='absolute bottom-0 w-full p-6 bg-gradient-to-t from-white to-transparent flex items-end h-64'>
					<button
						className={`block mx-auto rounded-sm px-4 py-2 mt-6 text-md uppercase
                               ring-2 ring-black focus:ring-2 focus:outline-none hover:text-white hover:bg-gray-900`}
						onClick={() => {
							window.location.href = '/gallery'
						}}
					>
						View Gallery
					</button>
				</div>
			</div>

			<Hero
				heroImageUrl={servicesMenu}
				displayHeroImageOnLeft={true}
				heroHeader='First-Rate Services'
				heroSubHeader='We offer exceptional manicures, pedicures, gels, dips, lash extensions & waxing. Check out our menu to see our full list of services!'
				heroButtonText='View Menu'
				onHeroButtonClicked={() => {
					window.location.href = '/menu'
				}}
				rootClass='bg-gradient-to-tr from-gray-800 to-gray-900'
				heroTextContainerClass='md:text-white'
				heroButtonClass='ring-white text-white hover:text-gray-800 hover:bg-white'
			/>

			<Hero
				heroImageUrl={locations}
				heroHeader='Luxorious Locations'
				heroSubHeader={
					<>
						After being the premier nail & beauty salon on Davis
						Islands for 22 years, we are{' '}
						<span className='font-semibold'>EXCITED</span> to accept
						new clients at our Kennedy Location! 😊
					</>
				}
				heroButtonText='View Locations'
				onHeroButtonClicked={() => {
					window.location.href = '/locations'
				}}
				heroImageContainerClass='filter brightness-110'
				heroButtonClass='ring-white md:ring-black hover:text-gray-800 hover:bg-white md:hover:text-white md:hover:bg-gray-900'
			/>

			<Hero
				heroImageUrl={heroImage2}
				displayHeroImageOnLeft={true}
				heroHeader='Eventful Experiences'
				heroSubHeader="Whether it's a bridal shower, a private corporate event, or just a girls night out, we'll set you up with a team of talented technicians to accomodate you and your party"
				heroButtonText='Book Now'
				onHeroButtonClicked={() => {
					window.location.href = `tel:+1${INFO.primaryPhone}`
				}}
				rootClass='bg-gradient-to-tr from-gray-800 to-gray-900'
				heroImageContainerClass='filter brightness-110'
				heroTextContainerClass='md:text-white'
				heroButtonClass='ring-white text-white hover:text-gray-800 hover:bg-white'
			/>

			<Hero
				heroImageUrl={tampa}
				heroHeader='Endless Exploration'
				heroSubHeader="We understand that getting your nails done makes up only a fraction of your day. That's why we're located by some of the best restaurants, boutiques, cafes, shops, and other exciting points of interest for you to flaunt your nails!"
				heroButtonText='Explore Tampa'
				onHeroButtonClicked={() => {
					window
						.open(
							'https://www.google.com/maps/d/u/0/edit?mid=1Xa2VZbgX_jD4OqdY_rzM18G7p4UWCnfS&usp=sharing',
							'_blank'
						)
						.focus()
				}}
				heroImageContainerClass='filter brightness-100'
				heroButtonClass='ring-white md:ring-black hover:text-gray-800 hover:bg-white md:hover:text-white md:hover:bg-gray-900'
			/>
		</Layout>
	)
}

export default IndexPage
