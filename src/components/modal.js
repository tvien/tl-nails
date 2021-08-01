import React, { useEffect, useRef } from 'react'

import PropTypes from 'prop-types'

const Modal = ({ open, onClose, children }) => {
	const modalWrapperDivRef = useRef(null)

	useEffect(() => {
		const modalRoot = document.getElementById('modal-root')

		const wrapperDiv = modalWrapperDivRef.current

		modalRoot.appendChild(wrapperDiv)

		return () => {
			modalRoot.removeChild(wrapperDiv)
		}
	}, [])

	const close = (e) => {
		if (e.target === modalWrapperDivRef.current) {
			const modalRoot = document.getElementById('modal-root')
			const wrapperDiv = modalWrapperDivRef.current

			modalRoot.hidden = true
			wrapperDiv.hidden = true

			if (onClose) onClose()
		}
	}

	useEffect(() => {
		const modalRoot = document.getElementById('modal-root')
		const wrapperDiv = modalWrapperDivRef.current

		modalRoot.hidden = !open
		wrapperDiv.hidden = !open
	}, [open])

	return (
		<div
			onClick={close}
			ref={modalWrapperDivRef}
			className='modal-instance-wrapper w-full h-screen flex items-center justify-center bg-black bg-opacity-50'
		>
			{children}
		</div>
	)
}

Modal.defaultProps = {
	open: false,
}

Modal.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
}

export default Modal
