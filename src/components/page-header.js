import React from 'react'
import PropTypes from 'prop-types'

import { pageHeaderContainer } from './page-header.module.css'

import defaultPageHeaderUrl from '../images/page-header-bg.jpg'
import tnlLogo from '../images/tnl-logo.png'

import imagebg from '../images/gallery/23.jpeg'

const PageHeader = (props) => {
	return (
		<div
			className={`filter ${pageHeaderContainer}`}
			style={{
				backgroundImage: `url('${props.bgUrl || imagebg}')`,
				...props.bgStyles,
			}}
		>
			<div className='md:h-24'>
				<a href='/' className='w-full md:hidden'>
					<img
						src={tnlLogo}
						className='h-auto w-10/12 p-6 pb-0 mx-auto'
					/>
				</a>
			</div>

			<h1 className='text-4xl md:text-6xl text-center uppercase pb-6'>
				{props.title}
			</h1>
		</div>
	)
}

PageHeader.propTypes = {
	title: PropTypes.string,
	bgUrl: PropTypes.string,
	bgStyles: PropTypes.object,
}

export default PageHeader
