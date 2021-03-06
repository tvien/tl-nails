import React from 'react'

import Layout from '../components/layout'

import MenuComponent from '../components/menu'

import Hero from '../components/hero'
import heroImage1 from '../images/gallery/1.jpg'

import PageHeader from '../components/page-header'

import { INFO } from '../common/info'

import Seo from '../components/seo'

const Menu = () => {
	return (
		<Layout>
			<Seo
				title='Menu'
				description='We offer exceptional manicures, pedicures, gels, dips, lash extensions & waxing. Check out our menu to see our full list of services!'
			/>

			<PageHeader title='Menu' />

			<div className='mx-auto mt-6 mb-12 px-3 lg:px-6 max-w-4xl'>
				<MenuComponent />
			</div>

			<Hero
				heroImageUrl={heroImage1}
				displayHeroImageOnLeft={true}
				heroHeader='Have any questions about our menu?'
				heroSubHeader="Call or email us and we'll be happy to answer any questions you might have!"
				heroButtonText='Call now'
				onHeroButtonClicked={() => {
					window.location.href = `tel:+1${INFO.primaryPhone}`
				}}
				rootClass='bg-gradient-to-tr from-pink-600 to-yellow-300'
				heroImageContainerClass='filter brightness-125'
				heroTextContainerClass='md:text-white'
				heroButtonClass='ring-white text-white hover:text-gray-800 md:hover:text-yellow-500 hover:bg-white'
			/>
		</Layout>
	)
}

export default Menu
