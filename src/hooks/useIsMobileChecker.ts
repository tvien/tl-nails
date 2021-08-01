import { useRef, useState, useEffect, useCallback } from 'react'

/**
 * Description: Returns a ref and a boolean. Pass the ref to the element you want to know if it's in scroll view
 */
const useIsMobileChecker = (): boolean => {
	const [isMobile, setIsMobile] = useState(false)

	const mobileBreakPoint = 768

	useEffect(() => {
		setIsMobile(window.innerWidth < mobileBreakPoint)

		const onWindowResize = function (e) {
			setIsMobile(window.innerWidth < mobileBreakPoint)
		}

		window.addEventListener('resize', onWindowResize)

		return () => window.removeEventListener('resize', onWindowResize)
	}, [])

	return isMobile
}

export default useIsMobileChecker
