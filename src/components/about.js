import React, { useState } from 'react'

import { useSpring, animated, config } from 'react-spring'

import useInViewChecker from '../hooks/useInViewChecker'
import useIsMobileChecker from '../hooks/useIsMobileChecker'

import lotus from '../images/lotus.png'
import esthetician from '../images/esthetician.png'
import attention from '../images/attention.png'
import nailPolish3 from '../images/nail-polish3.png'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import vid1 from '../videos/1.mp4'
import vid2 from '../videos/2.mp4'
import vid3 from '../videos/3.mp4'
import vid4 from '../videos/4.mp4'
import vid5 from '../videos/5.mp4'
import vid6 from '../videos/6.mp4'
import vid7 from '../videos/7.mp4'
import vid8 from '../videos/8.mp4'
import vid9 from '../videos/9.mp4'
import vid10 from '../videos/10.mp4'

const videos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10]

const About = () => {
	const navBarOffset = 96 + 100

	const isMobile = useIsMobileChecker()

	const [quickInfoAnimated1, setQuickInfoAnimated1] = useState(false)
	const [quickInfoAnimated2, setQuickInfoAnimated2] = useState(false)
	const [quickInfoAnimated3, setQuickInfoAnimated3] = useState(false)
	const [quickInfoAnimated4, setQuickInfoAnimated4] = useState(false)

	const { ref: quickInfoRef1, isInView: quickInfoInView1 } =
		useInViewChecker(navBarOffset)
	const quickInfoSP1 = useSpring({
		from: { width: '0%' },
		width: quickInfoInView1 || quickInfoAnimated1 ? '100%' : '0%',
		config: config.molasses,
		onStart: () => setQuickInfoAnimated1(true),
	})

	const { ref: quickInfoRef2, isInView: quickInfoInView2 } =
		useInViewChecker(navBarOffset)
	const quickInfoSP2 = useSpring({
		from: { width: '0%' },
		width: quickInfoInView2 || quickInfoAnimated2 ? '100%' : '0%',
		config: config.molasses,
		onStart: () => setQuickInfoAnimated2(true),
	})

	const { ref: quickInfoRef3, isInView: quickInfoInView3 } =
		useInViewChecker(navBarOffset)
	const quickInfoSP3 = useSpring({
		from: { width: '0%' },
		width: quickInfoInView3 || quickInfoAnimated3 ? '100%' : '0%',
		config: config.molasses,
		onStart: () => setQuickInfoAnimated3(true),
	})

	const { ref: quickInfoRef4, isInView: quickInfoInView4 } =
		useInViewChecker(navBarOffset)
	const quickInfoSP4 = useSpring({
		from: { width: '0%' },
		width: quickInfoInView4 || quickInfoAnimated4 ? '100%' : '0%',
		config: config.molasses,
		onStart: () => setQuickInfoAnimated4(true),
	})

	const randomVidIdx = Math.floor(Math.random() * videos.length)

	return (
		<div className='container mx-auto'>
			<div className='w-full flex flex-wrap'>
				<div className='w-full md:w-2/5 p-6 pb-0 md:pb-6'>
					<div className='md:hidden mb-6 text-center'>
						<h2 className='text-4xl'>What we're about</h2>

						<div
							className='bg-gradient-to-tr from-red-500 to-pink-400'
							style={{
								height: 7,
								margin: '8px 0',
								backgroundImage:
									'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
							}}
						/>
					</div>

					<div className='relative'>
						<div
							className={`relative overflow-hidden rounded-md mx-auto shadow-lg`}
							style={{
								width: 'fit-content',
								zIndex: 10,
							}}
						>
							<video autoPlay loop muted style={{ height: 450 }}>
								<source
									src={videos[randomVidIdx]}
									type='video/mp4'
								/>
							</video>
						</div>
					</div>
				</div>

				<div className='w-full md:w-3/5 p-6 flex flex-wrap content-center'>
					<div>
						<div className='hidden md:block'>
							<h2 className='text-4xl md:text-6xl'>
								What we're about
							</h2>

							<div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 7,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
								}}
							/>
						</div>
					</div>

					<p className='text-xl font-light'>
						Just down the street from Downtown Tampa and UT, T&L
						Nails is one of the leading nail salons in the Tampa
						area, specializing in everything we can to help you find
						your glow! So whether you’re looking to get gorgeous
						nail art done or you just want to "
						<OutboundLink
							href='https://www.youtube.com/watch?v=AU0h7TlZGO4'
							target='_blank'
							className='underline italic'
						>
							treat yo' self
						</OutboundLink>{' '}
						", we’re here and ready to help you step up your nail
						game!
					</p>
				</div>
			</div>

			<div className='w-full flex flex-wrap justify-evenly'>
				<div
					ref={quickInfoRef1}
					className='w-full sm:w-1/2 md:w-1/4 p-6 text-center'
				>
					<img
						className='w-28 md:w-24 mx-auto mb-3 relative left-4'
						src={attention}
						alt='Detailed-Oriented Nail Polish Happy Icon'
					/>

					<div className='inline-block'>
						<p className='text-2xl md:text-lg font-medium'>
							Detailed-Oriented
						</p>

						{!isMobile ? (
							<div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
								}}
							/>
						) : (
							<animated.div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
									...quickInfoSP1,
								}}
							/>
						)}
					</div>

					<p className='text-base font-light'>
						Attentive, meticulous, fastidious - whatever you want to
						call us. Our techs will make sure everything comes out
						just right for you
					</p>
				</div>

				<div
					ref={quickInfoRef2}
					className='w-full sm:w-1/2 md:w-1/4 p-6 text-center'
				>
					<img
						className='w-28 md:w-24 mx-auto mb-3'
						src={esthetician}
						alt='Talented & Friendly Esthetician Nail Techician Icon'
					/>

					<div className='inline-block'>
						<p className='text-2xl md:text-lg font-medium'>
							Talented & Friendly
						</p>

						{!isMobile ? (
							<div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
								}}
							/>
						) : (
							<animated.div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
									...quickInfoSP2,
								}}
							/>
						)}
					</div>

					<p className='text-base font-light'>
						Our talented techs have years of experience, warm
						personalities, and plenty of funny stories to share.
						Come meet the team!
					</p>
				</div>

				<div
					ref={quickInfoRef3}
					className='w-full sm:w-1/2 md:w-1/4 p-6 text-center'
				>
					<img
						className='w-28 md:w-24 mx-auto mb-3'
						src={nailPolish3}
						alt='All the Colors You Need polishes icon'
					/>

					<div className='inline-block'>
						<p className='text-2xl md:text-lg font-medium'>
							All the Colors You Need
						</p>

						{!isMobile ? (
							<div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
								}}
							/>
						) : (
							<animated.div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
									...quickInfoSP3,
								}}
							/>
						)}
					</div>

					<p className='text-base font-light'>
						We're constantly updating our inventory to ensure that
						the newest polishes are stocked and ready for today's
						latest trends
					</p>
				</div>

				<div
					ref={quickInfoRef4}
					className='w-full sm:w-1/2 md:w-1/4 p-6 text-center'
				>
					<img
						className='w-28 md:w-24 mx-auto mb-3'
						src={lotus}
						alt='Immaculate & Relaxing Lotus Icon'
					/>

					<div className='inline-block'>
						<p className='text-2xl md:text-lg font-medium'>
							Immaculate & Relaxing
						</p>

						{!isMobile ? (
							<div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
								}}
							/>
						) : (
							<animated.div
								className='bg-gradient-to-tr from-red-500 to-pink-400'
								style={{
									height: 4,
									margin: '8px 0',
									backgroundImage:
										'linear-gradient(to right, #ef4444, #f74a63, #fa5481, #f9629c, #f472b6)',
									...quickInfoSP4,
								}}
							/>
						)}
					</div>
					<p className='text-base font-light'>
						Cleanliness and relaxation are our top priorities. Need
						to decompress from the stress? Step into one of our
						salons and let go of all your worries
					</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(About)
