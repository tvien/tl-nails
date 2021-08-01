import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import heroImage1 from '../images/landing-mobile.jpg'

import GalleryComponent from '../components/gallery'

import PageHeader from '../components/page-header'
import { INFO } from '../common/info.js'

const Gallery = () => {
	return (
		<Layout>
			<PageHeader title='Gallery' />

			<div className='m-0.5 md:my-3'>
				<GalleryComponent animateInImmediately={true} />
			</div>

			<Hero
				heroImageUrl={heroImage1}
				displayHeroImageOnLeft={true}
				heroHeader={
					<>
						<span className='italic font-light'>
							"Choosing my nail color & design will be easy!"
						</span>{' '}
						<span className=''>– Said no one ever.</span>
					</>
				}
				heroSubHeader="We strongly believe in fulling expressing yourself in
				any shape, way, or form. Do you have any ideas? Show us
				any nail art or design that inspires you and we'll do
				our best to make it happen"
				heroButtonText='Book Now'
				onHeroButtonClicked={() => {
					window.location.href = `tel:+1${INFO.primaryPhone}`
				}}
				rootClass='bg-gradient-to-tr from-green-400 to-purple-500'
				heroTextContainerClass='md:text-white'
				heroImageContainerClass=''
				heroButtonClass='ring-white text-white hover:text-black md:hover:text-blue-400 hover:bg-white'
			/>
		</Layout>
	)
}

export default Gallery
