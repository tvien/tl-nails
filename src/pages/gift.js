import React from 'react'
import Layout from '../components/layout'

import MenuComponent from '../components/menu'

import Hero from '../components/hero'
import heroImage1 from '../images/landing-mobile.jpg'
import hardWork from '../images/hard-work.png'

import PageHeader from '../components/page-header'

const Gift = () => {
	return (
		<Layout>
			<PageHeader title='Gift' />

			<div className='container mx-auto'>
				<div className='my-12 mx-auto  max-w-2xl text-center '>
					<h2 className='text-5xl'>Coming Soon!</h2>

					<img src={hardWork} alt='' className='mx-auto w-28 my-6' />

					<p className='my-6 px-6'>
						Our developers are working hard to allow you to
						conveniently purchase and print giftcards for your
						friends and family! For now, you can still obtain
						giftcards by visiting any of our salon locations! Stay
						tuned!
					</p>

					<button
						className={`rounded-md px-3 py-2 text-md text-red-500 uppercase
                                    ring-2 ring-red-500 focus:ring-2 focus:outline-none`}
					>
						View Locations
					</button>
				</div>
			</div>

			<Hero
				heroImageUrl={heroImage1}
				displayHeroImageOnLeft={true}
				heroHeader='Dolorem, aspernatur error'
				heroSubHeader='Repellendus eum mollitia, magni at sint molestias!  Cum ex vitae, reiciendis nobis earum nihil porro possimus nam aliquam.'
				heroButtonText='Book Now'
				onHeroButtonClicked={() => {
					console.log('BOOKED NOW!')
				}}
				rootClass='bg-gradient-to-tr from-red-700 to-pink-500'
				heroTextContainerClass='md:text-white'
				heroButtonClass='ring-white text-white'
			/>
		</Layout>
	)
}

export default Gift
