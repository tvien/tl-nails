import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// // import Swiper styles
import 'swiper/swiper-bundle.css'

import { ImQuotesLeft } from 'react-icons/im'

import useIsMobileChecker from '../hooks/useIsMobileChecker'

let testimonials = [
	{
		author: 'Lynn M.',
		stars: 5,
		date: '6/29/2021',
		location: 'Kennedy Boulevard',
		comment: `BEAUTIFUL!! and I'm saying it again for the people in the back, this salon is BEAUTIFUL!! It truly is a hidden gem.

		I have been going to their Davis Island location for the past 16 years and would never go anywhere else. When I heard they opened another location I of course wanted to check it out.
		
		I'm a sucker for beautiful modern décor and this place NAILS it for me. The staff is extremely friendly, the massage chairs are awesome and have adjustments specific for us short people, and the vibe is on point.
		
		I had dip manicure done and a citrus scrub pedicure and holy heck!! if you're looking to spoil yourself and not break the bank, please please please get the Citrus Scrub pedicure, you will not regret it. It took everything in me not to fall asleep because it was so relaxing and the massage and hot towels felt great.
		
		I live closer to their Davis Island location, but I think I'll still drive the extra distance to continue getting my nails done at the new salon!`,
		photoUrl: '',
		reviewLink: '',
	},
	{
		author: 'Ann F.',
		stars: 5,
		date: '1/10/2020',
		location: 'Davis Islands',
		comment: `My girl Nishia did my acrylics, she does a great job with whatever design I bring her. Today she brought out the gold fleck paper and she could have said "and for my final trick," as she is truly a magician!
		Patty typically does my waxing, and we alway enjoy a good laugh, as an added bonus. The staff is very friendly and it always feels like home.`,
		photoUrl:
			'https://s3-media0.fl.yelpcdn.com/bphoto/nnWc_p-yi7Z6xEHQlUQVng/o.jpg',
		reviewLink: '',
	},
	{
		author: 'Ann F.',
		stars: 5,
		date: '10/20/2020',
		location: 'Davis Islands',
		comment: `I have been visiting the T and L nails location on Davis Island for the last 2-3 months. I am new to the area as of this summer and was apprehensive about finding a a new nail salon. I am happy that I found T and L. The staff is welcoming and friendly and make an effort to remember their clients. Nisha always leaves my nails looking amazing!  I  also will sing their praises for going above and beyond for my daughter, friend, and I during our last appointment. We scheduled for Sunday afternoon, and had to cancel due to another obligation I double booked myself for. We were actually able to push the the appointment until later in the day and they went out of the way to make sure we were taken care of and could still be seen that day. That kind of service makes a lasting impression and is the reason I will continue to frequent this business.`,
		photoUrl: '',
		reviewLink: '',
	},
	{
		author: 'Amanda N.',
		stars: 5,
		date: '6/29/2021',
		location: 'Kennedy Boulevard',
		comment: `T & L Nails has been my go to for nails for the past 3 years and I send everyone there when asked. I was excited to find and try the new Kennedy location and they of course did NOT disappoint! Super cute inside and most importantly, clean! Decided to try the CBD & Mint pedicure and would highly recommend it.`,
		photoUrl: '',
		reviewLink: 'https://www.facebook.com/pg/tlnails.tampa/reviews',
	},
	{
		author: 'Lorelle K.',
		stars: 5,
		date: '6/21/2021',
		location: 'Kennedy Boulevard',
		comment: `I have been going to T&L Nails for over 15 years! Everyone at the salon is absolutely amazing!! They do such a wonderful job! From nails, pedicures, waxing you name it! Everyone is so friendly and the owner is so incredibly kind! I highly recommend them and all their services!`,
		photoUrl: '',
		reviewLink: 'https://www.facebook.com/pg/tlnails.tampa/reviews',
	},
	{
		author: 'Amanda N.',
		stars: 5,
		date: '6/29/2021',
		location: 'Davis Islands',
		comment: `Wonderful, personal experience. Great pedicures, and the staff is so very nice!`,
		photoUrl: '',
		reviewLink: '',
	},
]

export const TestimonialCard = (props) => {
	const { author, stars, date, location, comment, photoUrl } = props

	return (
		<div className='h-full w-auto shadow-lg rounded-md overflow-hidden bg-white mx-1.5 md:mx-4 mb-5'>
			{/* Optional(?) image card */}
			{photoUrl && (
				<div className='h-48 w-full overflow-hidden relative'>
					<img
						className='absolute -top-full left-0 right-0 -bottom-full m-auto'
						src={photoUrl}
						alt='Testimonial Review'
					/>
				</div>
			)}

			<div className='p-6'>
				<div className='flex justify-between'>
					<p className=''>{author}</p>

					{stars && (
						<p className='flex'>
							{[...Array(stars)].map((e, i) => (
								<svg
									key={i}
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 text-yellow-400'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							))}
						</p>
					)}
				</div>

				<div className='flex justify-between mb-3'>
					<p className='text-sm text-gray-600 italic'>{date}</p>
					<p className='text-sm text-gray-600 italic'>{location}</p>
				</div>

				<p className='text-gray-800 font-light relative mt-6 text-sm'>
					<ImQuotesLeft className='absolute text-6xl -top-6 opacity-30 text-red-400 z-0' />

					{comment}
				</p>
			</div>
		</div>
	)
}

const Testimonials = () => {
	const isMobile = useIsMobileChecker()

	const slidesPerView = (isMobile ? 1 : 3) + 0.1

	return (
		<>
			<div className='w-full container mx-auto flex justify-center mb-6'>
				<div className='inline-block px-3 text-center'>
					<h2 className='text-4xl md:text-5xl'>
						Don't just hear it from us! 💁‍♀️
					</h2>
				</div>
			</div>

			{/* Desktop View */}

			<div className=''>
				<Swiper
					className='pb-6'
					spaceBetween={0}
					slidesPerView={slidesPerView}
					navigation={!isMobile}
					scrollbar={false}
					centeredSlides={isMobile}
				>
					{testimonials.map((t, idx) => (
						<SwiperSlide key={idx}>
							<TestimonialCard {...t} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

export default Testimonials
