import React from 'react'

import PropTypes from 'prop-types'

import { heroTextBg, heroImg } from './hero.module.css'

import landingStockImg from '../images/landing-mobile.jpg'

const Hero = (props) => {
	const {
		rootClass,
		heroTextContainerClass,
		heroImageContainerClass,
		heroImageClass,
		heroButtonClass,

		heroTextBgUrl,
		heroImageUrl,
		displayHeroImageOnLeft,

		heroHeader,
		heroSubHeader,
		heroButtonText,

		onHeroButtonClicked,
	} = props
	//bg-gradient-to-tr from-red-600 to-pink-400 text-white
	return (
		<div className={`flex flex-wrap overflow-hidden ${rootClass}`}>
			<div
				style={{
					minHeight: 250,
					backgroundImage: `linear-gradient(
						180deg,
						rgba(0, 0, 0, 0.45) 100%,
						rgba(0, 0, 0, 0.45) 100%
					),
					url(${heroTextBgUrl || heroImageUrl})`,
				}}
				className={`w-full md:w-1/2 p-9 md:p-12 flex items-center text-white md:text-black ${
					displayHeroImageOnLeft ? 'order-2' : ''
				} ${heroTextBg} ${heroTextContainerClass}`}
			>
				<div className=''>
					{heroHeader && (
						<h2 className='text-3xl pb-3'>{heroHeader}</h2>
					)}

					{heroSubHeader && (
						<p className='font-light'>{heroSubHeader}</p>
					)}

					{heroButtonText && (
						<button
							className={`block mx-auto md:ml-0 rounded-sm px-4 py-2 mt-6 text-md uppercase
                               ring-2 ring-black focus:ring-2 focus:outline-none ${heroButtonClass}`}
							onClick={onHeroButtonClicked}
						>
							{heroButtonText}
						</button>
					)}
				</div>
			</div>

			<div
				className={`w-full hidden md:block md:w-1/2 relative ${
					displayHeroImageOnLeft ? 'order-1' : ''
				} ${heroImageContainerClass}`}
			>
				<img
					className={`${heroImg} ${heroImageClass}`}
					src={heroImageUrl}
					alt=''
				/>
			</div>
		</div>
	)
}

Hero.defaultProps = {
	displayHeroImageOnLeft: false,
}

Hero.propTypes = {
	rootClass: PropTypes.string,
	heroTextContainerClass: PropTypes.string,
	heroImageContainerClass: PropTypes.string,
	heroImageClass: PropTypes.string,
	heroButtonClass: PropTypes.string,

	heroTextBgUrl: PropTypes.string,
	heroImageUrl: PropTypes.string,

	displayHeroImageOnLeft: PropTypes.bool,

	heroHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	heroSubHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	heroButtonText: PropTypes.string,

	onHeroButtonClicked: PropTypes.func,
}

export default Hero
