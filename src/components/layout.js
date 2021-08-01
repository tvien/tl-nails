import React from 'react'

import Nav from './nav'
import NavMobile from './nav-mobile'
import Footer from './footer'

const Layout = ({ children }) => {
	return (
		<div style={{ backgroundColor: '#fff6f6' }}>
			<div
				id='modal-root'
				className='z-50 fixed top-0 w-full h-screen'
				hidden={true}
			/>
			<Nav />

			<NavMobile />

			{children}

			<Footer />
		</div>
	)
}

export default Layout
