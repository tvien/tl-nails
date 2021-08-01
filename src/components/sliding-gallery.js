import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

const SlidingGallery = ({ direction, images }) => {
	const [reset, setReset] = useState(false)

	const sliderImgSize = 300

	const slidingWindowWidth = sliderImgSize * images.length

	const startingPoint =
		direction === 'ltr'
			? 'translateX(0px)'
			: `translateX(-${slidingWindowWidth}px)`
	const endingPoint =
		direction === 'ltr'
			? `translateX(-${slidingWindowWidth}px)`
			: 'translateX(0px)'

	const animatedProps = useSpring({
		reset: reset,
		from: { transform: startingPoint },

		to: {
			transform: endingPoint,
		},

		config: {
			duration: images.length * 20000,
		},

		onRest: () => {
			setReset((res) => !res)
		},
	})

	return (
		<div
			style={{ height: sliderImgSize }}
			className='hidden md:block sliding-window-wrapper w-full relative overflow-hidden'
		>
			<animated.div
				className='sliding-window flex absolute'
				style={animatedProps}
			>
				{images.concat(images).map((galleryImg, idx) => (
					<div
						key={idx}
						style={{
							height: sliderImgSize,
							width: sliderImgSize,
						}}
						className='rounded-sm p-1'
					>
						{galleryImg}
					</div>
				))}
			</animated.div>
		</div>
	)
}

SlidingGallery.defaultProps = {
	direction: 'ltr',
	images: [],
}

SlidingGallery.propTypes = {
	direction: PropTypes.string,
	images: PropTypes.array,
}

export default React.memo(SlidingGallery)
