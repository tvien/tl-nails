import React, { useState, useRef, useEffect } from 'react'

import {
	useSpring,
	animated,
	config,
	useSpringRef,
	useChain,
} from 'react-spring'

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

const videos = [vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10]

const VideoCarousel = () => {
	const randomVidIdx = Math.floor(Math.random() * videos.length)

	const [vidStackIdx, setVidStackIdx] = useState([0, 1, 2, 3])
	const [pausing, setPausing] = useState(true)
	const [reseting, setReseting] = useState(false)

	const topVidStackRef = useRef(null)
	const midVidStackRef = useRef(null)
	const bottomVidStackRef = useRef(null)
	const newBottomVidStackRef = useRef(null)

	useEffect(() => {
		if (topVidStackRef && topVidStackRef.current) {
			const vid = topVidStackRef.current
			vid.load()
			vid.play()
		}
	}, [])

	const shift = () => {
		setVidStackIdx((prev) => {
			const lastIdx = prev[prev.length - 1]
			const nextIdx = (lastIdx + 1) % videos.length
			const newStack = prev.slice(1).concat([nextIdx])

			return newStack
		})
	}

	const loadVids = () => {
		if (topVidStackRef && topVidStackRef.current) {
			const vid = topVidStackRef.current
			vid.load()
		}
		if (midVidStackRef && midVidStackRef.current) {
			const vid = midVidStackRef.current
			vid.load()
		}
		if (bottomVidStackRef && bottomVidStackRef.current) {
			const vid = bottomVidStackRef.current
			vid.load()
		}
		if (newBottomVidStackRef && newBottomVidStackRef.current) {
			const vid = newBottomVidStackRef.current
			vid.load()
		}
	}

	const spTopRef = useSpringRef()
	const spTopStyles = useSpring({
		from: {
			opacity: 1,
			transform: 'translate(0px, 0px)',
		},
		opacity: 0,
		transform: 'translate(15px, -15px)',
		config: config.stiff,
		pause: pausing,
		onStart: () => {
			// loadVids()
		},
		onRest: () => {
			setPausing(true)
			shift()
			loadVids()
			// setReseting(true)
		},
	})

	const spMidRef = useSpringRef()
	const spMidStyles = useSpring({
		from: {
			transform: 'translate(0px, 0px)',
		},
		transform: 'translate(15px, -15px)',
		config: config.stiff,
		pause: pausing,
	})

	const spBotRef = useSpringRef()
	const spBotStyles = useSpring({
		from: {
			transform: 'translate(0px, 0px)',
		},
		transform: 'translate(15px, -15px)',
		config: config.stiff,
		pause: pausing,
	})

	const spNewBotRef = useSpringRef()
	const spNewBotStyles = useSpring({
		from: {
			opacity: 0,
			transform: 'translate(0px, 0px)',
		},
		opacity: 1,
		transform: 'translate(15px, -15px)',
		config: config.stiff,
		pause: pausing,
	})

	return (
		<div>
			<div
				className='relative mx-auto my-12'
				style={{
					width: 'fit-content',
				}}
			>
				{/* TOP */}
				<animated.div
					className={`relative overflow-hidden rounded-md mx-auto shadow-lg`}
					style={{
						width: 'fit-content',
						zIndex: 30,
						...spTopStyles,
					}}
				>
					<video
						ref={topVidStackRef}
						muted
						style={{ height: 450 }}
						onEnded={() => {
							console.log('VIDEO ENDED')
							setPausing(false)
						}}
					>
						<source src={videos[vidStackIdx[0]]} type='video/mp4' />
					</video>
				</animated.div>

				{/* MID */}
				<animated.div
					className={`overflow-hidden rounded-md mx-auto shadow-lg`}
					style={{
						width: 'fit-content',
						position: 'absolute',
						top: 10,
						left: -25,
						zIndex: 20,
						...spMidStyles,
					}}
				>
					<video ref={midVidStackRef} muted style={{ height: 450 }}>
						<source src={videos[vidStackIdx[1]]} type='video/mp4' />
					</video>
				</animated.div>

				{/* BOTTOM */}
				<animated.div
					className={`overflow-hidden rounded-md mx-auto shadow-lg`}
					style={{
						width: 'fit-content',
						position: 'absolute',
						top: 20,
						left: -50,
						zIndex: 10,
						...spBotStyles,
					}}
				>
					<video
						ref={bottomVidStackRef}
						muted
						style={{ height: 450 }}
					>
						<source src={videos[vidStackIdx[2]]} type='video/mp4' />
					</video>
				</animated.div>

				{/* NEW BOTTOM */}
				<animated.div
					className={`overflow-hidden rounded-md mx-auto shadow-lg`}
					style={{
						width: 'fit-content',
						position: 'absolute',
						top: 30,
						left: -75,
						zIndex: 0,
						...spNewBotStyles,
					}}
				>
					<video
						ref={newBottomVidStackRef}
						muted
						style={{ height: 450 }}
					>
						<source src={videos[vidStackIdx[3]]} type='video/mp4' />
					</video>
				</animated.div>
			</div>

			<div className='w-full h-72'>
				<button className='mx-auto' onClick={shift}>
					animate
				</button>
			</div>
		</div>
	)
}

export default VideoCarousel
