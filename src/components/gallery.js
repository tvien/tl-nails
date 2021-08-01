import React, { useState } from 'react'
import { useTrail, animated, config } from 'react-spring'

import PropTypes from 'prop-types'

import useInViewChecker from '../hooks/useInViewChecker'

import {
	galleryLowQuality,
	galleryHighQuality,
} from '../common/gallery-static-images'

import Modal from '../components/modal'

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
		delay: 750,
		opacity: shouldAnimate ? 1 : 0,
		transform: shouldAnimate ? 'translateY(0px)' : 'translateY(15px)',
		config: config.stiff,
	})

	const [selectedSlideIdx, setSelectedSlideIdx] = useState(-1)

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
						onClick={() => setSelectedSlideIdx(idx)}
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

					{galleryHighQuality[selectedSlideIdx]}
				</div>
			</Modal>
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
