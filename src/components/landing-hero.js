import React, { useState, memo } from 'react'
import { SiInstagram, SiYelp, SiFacebook } from 'react-icons/si'

import { useSpring, animated, config } from 'react-spring'

import { StaticImage } from 'gatsby-plugin-image'

import useIsMobileChecker from '../hooks/useIsMobileChecker'

import {
	landingBgMobile,
	landingHeroContainer,
} from './landing-hero.module.css'
import tnlLogo from '../images/tnl-logo.png'

import { INFO } from '../common/info.js'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

const heroImgs = [
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-1.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-2.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-3.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-4.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-5.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-6.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-7.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-8.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-9.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
	<StaticImage
		placeholder='none'
		src='../images/hero-landing/hero-landing-10.svg'
		imgClassName='w-full h-auto max-h-full'
		quality={100}
		alt='Landing T&L Nails Nail Art'
	/>,
]

const LandingHero = () => {
	const isMobile = useIsMobileChecker()

	const randIdx = Math.floor(Math.random() * heroImgs.length)

	let colorSpectrum = [
		'linear-gradient(45deg, rgba(250,139,255), rgba(43,210,255),  rgba(43,255,136))',
		'linear-gradient(125deg, rgba(81,220,255), rgba(206,94,255),  rgba(255,222,79))',
		'linear-gradient(135deg, rgba(255,154,139), rgba(255,106,136),  rgba(255,153,172))',
		'linear-gradient(165deg, rgba(255,119,43), rgba(250,217,97),  rgba(255,119,43))',
		'linear-gradient(225deg, rgba(65,88,208), rgba(200,80,192),  rgba(255,204,112))',
		'linear-gradient(45deg, rgba(255,60,172), rgba(120,75,160), rgba(43,134,197)',
		'linear-gradient(25deg, rgba(81,220,255), rgba(206,94,255),  rgba(255,222,79))',
	]

	// Leave the ending color to be the starting color for smoother looping effect
	colorSpectrum = colorSpectrum.concat([colorSpectrum[0]])

	const animationDuration = 5000

	const [reset, setReset] = useState(false)

	const animatedProps = useSpring({
		reset: reset,
		from: { backgroundImage: colorSpectrum[0] },
		to: colorSpectrum.map((grad) => ({ backgroundImage: grad })),
		config: {
			duration: animationDuration,
		},
		onRest: () => {
			setReset((res) => !res) // UNCOMMENT THIS TO ALLOW LOOPING
		},
		cancel: isMobile,
	})

	const headerSpringProps = useSpring({
		from: {
			opacity: 0,
			transform: 'translateX(-10px)',
		},
		to: {
			opacity: 1,
			transform: 'translateX(0px)',
		},
		config: config.molasses,
	})

	const heroTextContent = (
		<>
			<p className='text-sm font-light italic py-2 text-red-500 md:text-red-300'>
				follow us{' '}
				<a className='font-normal' href={INFO.instagramURL}>
					@tl_nails813
				</a>{' '}
				<span className='not-italic'>📸</span>
			</p>

			<animated.h3
				style={headerSpringProps}
				className='text-xl md:text-lg font-light md:text-red-300'
			>
				Tampa's favorite nail lounge
			</animated.h3>

			<animated.h2
				style={animatedProps}
				className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-6xl font-black pb-2'
			>
				Let's add some color to your life
			</animated.h2>

			{!isMobile && (
				<h2 className='text-4xl md:text-2xl font-light'>
					Get pampered by us and spark joy to your life with a fresh
					coat of polish <span>💆‍♀️💅🥰</span>
				</h2>
			)}

			<button
				className={`rounded-full px-4 py-2 mt-4 text-lg md:text-sm text-white uppercase
				bg-gradient-to-tr from-red-500 to-pink-400 
				hover:shadow-lg hover:from-red-600 hover:to-pink-500
				focus:ring-2 focus:outline-none`}
			>
				<a href={`tel:+1${INFO.primaryPhone}`}>Book an appointment</a>
			</button>

			<div className='flex mt-6 space-x-9'>
				<OutboundLink
					href={INFO.facebookURL}
					className='text-red-400 hover:text-red-600'
					target='_blank'
				>
					<SiFacebook size='1.35rem' />
				</OutboundLink>
				<OutboundLink
					href={INFO.instagramURL}
					className='text-red-400 hover:text-red-600'
					target='_blank'
				>
					<SiInstagram size='1.35rem' />
				</OutboundLink>
				<OutboundLink
					href={INFO.yelpURL}
					className='text-red-400 hover:text-red-600'
					target='_blank'
				>
					<SiYelp size='1.35rem' />
				</OutboundLink>
			</div>
		</>
	)

	return (
		<div
			className={`bg-gradient-to-tr from-white to-red-100 h-screen relative ${landingHeroContainer}`}
		>
			{/* Desktop layout */}
			<div className='h-full hidden md:flex pb-6'>
				<div className='w-5/12 flex items-center justify-end'>
					<div className='w-11/12 lg:w-10/12'>{heroTextContent}</div>
				</div>

				<div className='w-7/12 flex items-center p-0 md:p-12 lg:p-24'>
					{heroImgs[1]}
				</div>
			</div>

			{/* Mobile layout */}
			<div className={`h-full md:hidden ${landingBgMobile}`}>
				<div className='h-full flex items-center flex-wrap backdrop-filter backdrop-brightness-75'>
					<div className='w-full absolute top-0'>
						<img
							src={tnlLogo}
							className='h-auto w-10/12 p-6 mx-auto'
							alt='T&L Nails Logo'
						/>
					</div>

					<div className='container mx-auto px-6'>
						{heroTextContent}
					</div>
				</div>
			</div>

			{/* Bouncing scroll down indicator chevron */}
			<div className='w-full absolute bottom-24 md:bottom-0 py-6'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6 opacity-50 mx-auto animate-bounce'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
					/>
				</svg>
			</div>
		</div>
	)
}

export default memo(LandingHero)
