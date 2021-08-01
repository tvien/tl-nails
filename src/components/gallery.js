import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useTrail, animated, config } from 'react-spring'
import { StaticImage } from 'gatsby-plugin-image'

import PropTypes from 'prop-types'

import useInViewChecker from '../hooks/useInViewChecker'

import { galleryMobileWrapper } from './gallery.module.css'

import {
	galleryLowQuality,
	galleryHighQuality,
} from '../common/gallery-static-images'

import Modal from '../components/modal'

import img1 from '../images/gallery/1.jpg'

// // import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// // Import Swiper styles
// import 'swiper/swiper.scss'
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'

// // install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Gallery = (props) => {
	const { animateInImmediately, imagesLimit } = props

	const { ref, isInView } = useInViewChecker(96 + 100)

	const shouldAnimate = animateInImmediately || isInView

	const galLimit =
		imagesLimit && imagesLimit <= galleryLowQuality.length
			? imagesLimit
			: galleryLowQuality.length

	const trail = useTrail(galLimit, {
		from: {
			opacity: 0,
			transform: 'translateY(15px)',
		},
		opacity: shouldAnimate ? 1 : 0,
		transform: shouldAnimate ? 'translateY(0px)' : 'translateY(15px)',
		config: config.stiff,
	})

	// const [openMobileGallerySlider, setopenMobileGallerySlider] =
	// 	useState(false)

	const [selectedSlideIdx, setSelectedSlideIdx] = useState(-1)

	// const galleryMobileWrapperRef = useRef(null)

	return (
		<div ref={ref}>
			{/* Desktop View */}
			<div
				className={`w-full grid grid-cols-3 md:grid-cols-5 gap-0.5 md:gap-3 md:px-3`}
			>
				{trail.map((styles, idx) => (
					<animated.div
						key={idx}
						style={styles}
						className='h-32 sm:h-48 md:h-52 xl:h-64 w-full relative'
						onClick={() => {
							setSelectedSlideIdx(idx)

							// setopenMobileGallerySlider(true)

							// setTimeout(() => {
							// 	const galleryImageDiv = document.getElementById(
							// 		`#gal-${idx}`
							// 	)

							// 	if (
							// 		galleryMobileWrapperRef &&
							// 		galleryMobileWrapperRef.current &&
							// 		galleryImageDiv
							// 	) {
							// 		const wrapperEle =
							// 			galleryMobileWrapperRef.current

							// 		const offsetLeft =
							// 			galleryImageDiv.offsetLeft

							// 		wrapperEle.scrollTo({
							// 			top: 0,
							// 			left: offsetLeft,
							// 			behavior: 'smooth',
							// 		})
							// 	}
							// }, 500)
						}}
					>
						<a>{galleryLowQuality[idx]}</a>
					</animated.div>
				))}
			</div>

			<Modal
				open={selectedSlideIdx >= 0}
				onClose={() => setSelectedSlideIdx(-1)}
			>
				<div className='relative mb-24 md:mb-0 p-6'>
					<button
						className='absolute top-3 right-3 p-1 z-10 bg-gradient-to-tr from-red-500 to-pink-400  text-white rounded-full'
						onClick={() => setSelectedSlideIdx(-1)}
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

					{/* <img src={img1} style={{ maxHeight: '90vh' }} alt='' /> */}

					{galleryHighQuality[selectedSlideIdx]}
				</div>

				{/* <Swiper
						initialSlide={selectedSlideIdx}
						spaceBetween={0}
						slidesPerView={1}
						navigation={false}
						scrollbar={false}
					>
						{galleryLowQuality.map((g, idx) => (
							<SwiperSlide key={idx}>{g}</SwiperSlide>
						))}
						<span slot='container-start'>
							<button
								className='absolute top-0 right-0 p-6 z-10'
								onClick={() => setSelectedSlideIdx(-1)}
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
						</span>
					</Swiper> */}
			</Modal>
			{/* Mobile Slider View : BETA */}
			{/* <div
				className={`h-screen relative md:hidden overflow-hidden ${
					!openMobileGallerySlider && 'hidden'
				}`}
			>
				<button
					className='absolute top-0 right-0 p-6 z-10'
					onClick={() => setopenMobileGallerySlider(false)}
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

				<div className='w-full absolute bottom-0 mb-6 flex justify-center z-10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 opacity-50'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
						/>
					</svg>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 mx-6 animate-bounce opacity-50'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
						/>
					</svg>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 opacity-50'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M13 5l7 7-7 7M5 5l7 7-7 7'
						/>
					</svg>
				</div>
				<div
					ref={galleryMobileWrapperRef}
					className={`h-full overflow-x-auto flex w-auto ${galleryMobileWrapper} gallery-mobile-wrapper`}
				>
					{galleryLowQuality.map((g, idx) => (
						<div key={idx} id={`#gal-${idx}`}>
							{g}
						</div>
					))}
				</div>
			</div> */}
		</div>
	)
}

Gallery.defaultProps = {
	animateInImmediately: false,
}

Gallery.propTypes = {
	animateInImmediately: PropTypes.bool,
	imagesLimit: PropTypes.number,
}

export default Gallery
