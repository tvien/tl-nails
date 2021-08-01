import { SiInstagram, SiYelp, SiFacebook } from 'react-icons/si'

import { INFO } from './info'

export const NAV_LINKS = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'Gallery',
		url: '/gallery',
	},
	{
		title: 'Menu',
		url: '/menu',
	},
	{
		title: 'Locations',
		url: '/locations',
	},
	// {
	// 	title: 'Gift',
	// 	url: '/gift',
	// },
	// {
	// 	title: 'Faq',
	// 	url: '/faq',
	// },
	// {
	// 	title: 'Contact',
	// 	url: '/contact',
	// },
]
export const SOCIAL_LINKS = [
	{
		title: 'Facebook',
		url: INFO.facebookURL,
		Icon: SiFacebook,
		diplayNav: true,
	},
	{
		title: 'Instagram',
		url: INFO.instagramURL,
		Icon: SiInstagram,
		diplayNav: true,
	},
	{
		title: 'Yelp',
		url: INFO.yelpURL,
		Icon: SiYelp,
		diplayNav: false,
	},
]
