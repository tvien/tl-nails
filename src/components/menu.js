import React, { useState } from 'react'

import manicureIcon from '../images/menu-icons/manicure.png'
import pedicureIcon from '../images/menu-icons/pedicure.png'
import extensionsIcon from '../images/menu-icons/extensions2.png'
import waxingIcon from '../images/menu-icons/waxing.png'
import eyelashIcon from '../images/menu-icons/eyelash.png'

import manicureIconColored from '../images/menu-icons/manicure-c.png'
import pedicureIconColored from '../images/menu-icons/pedicure-c.png'
import extensionsIconColored from '../images/menu-icons/extensions2-c.png'
import waxingIconColored from '../images/menu-icons/waxing-c.png'
import eyelashIconColored from '../images/menu-icons/eyelash-c.png'

const extensionSubAdditions = {
	name: '*Speciality Shape Extra',
	description: ``,
	price: undefined,
	items: [
		{
			name: 'Stiletto',
			description: `(+5)`,
			price: undefined,
		},
		{
			name: 'Coffin',
			description: `(+5)`,
			price: undefined,
		},
		{
			name: 'Almond',
			description: `(+5)`,
			price: undefined,
		},
		{
			name: 'Round Extra',
			description: `(+5)`,
			price: undefined,
		},
		{
			name: 'Length Extra',
			description: `(+10)`,
			price: undefined,
		},
	],
}

const menu = [
	{
		menuId: 'hands',
		menuTitle: 'Hands',
		menuDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugit quis quibusdam `,
		menuIcon: manicureIcon,
		menuIconColored: manicureIconColored,
		menuItems: [
			{
				name: 'Classic Manicure',
				description: `Trim and shape nails and cuticles, full arm and hand massage and an optional color application of your choice`,
				price: 20,
			},
			{
				name: 'Signature Manicure',
				description: `Trim and shape nails and cuticles, sugar scrub, moisturizing hand mask and hot towel wrap, full arm and hand massage, and a color application of your choice`,
				price: 35,
			},
			{
				name: 'Gel Manicure',
				description: `A manicure along with 10 days to 2 weeks of chip-free color. Paints on like polish and cures in a UV or LED light so there is zero dry time`,
				price: 40,
			},
			{
				name: 'Gel Polish Change',
				description: `We'll remove your existing gel, trim and shape your nails, and then apply a gel polish of your choice`,
				price: 30,
			},
			{
				name: 'Dip Manicure',
				description: `A manicure along with a strong like acrylic without the damage. Zero dry time. Soaks off easier than gel. 2 to 3 weeks wear.`,
				price: 55,
				subAddition: extensionSubAdditions,
			},
			{
				name: 'Dip Polish Change',
				description: `We'll remove your existing dip, trim and shape your nails, and then apply a dip polish of your choice`,
				price: 45,
				subAddition: extensionSubAdditions,
			},
			{
				name: 'Regular Polish Hands',
				description: null,
				price: 13,
			},
			{
				name: 'Regular Polish Toes',
				description: null,
				price: 15,
			},
			{
				name: 'Nail Trim & Shape',
				description: null,
				price: 10,
			},
			{
				name: 'Buff Shine',
				description: null,
				price: 4,
			},
			{
				name: 'Extras',
				description: ``,
				price: undefined,
				additions: [
					{
						name: 'Add Extension',
						description: `(+5)`,
						price: undefined,
					},
					{
						name: 'Stiletto',
						description: `(+5)`,
						price: undefined,
					},
					{
						name: 'Coffin',
						description: `(+5)`,
						price: undefined,
					},
					{
						name: 'Almond',
						description: `(+5)`,
						price: undefined,
					},
					{
						name: 'Round Extra',
						description: `(+5)`,
						price: undefined,
					},
				],
			},
		],
	},
	{
		menuId: 'feet',
		menuTitle: 'Feet',
		menuDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugit quis quibusdam `,
		menuIcon: pedicureIcon,
		menuIconColored: pedicureIconColored,
		menuItems: [
			{
				name: 'Classic Pedicure',
				description: `A 30 minute service that includes trimming and shaping nails and cuticles, exfoliation of the feet and legs, sole buffering, massage for the legs and feet, and an optional color application of your choice`,
				price: 32,
			},
			{
				name: 'Signature Citrus Pedicure',
				description: `An hour long service that includes trimming and shaping nails and cuticles, sugar scrub exfoliation for the feet and legs, sole buffering, moisturizing foot mask with hot towels, 10 minutes massage for the legs and feet, and an optional color application of your choice`,
				price: 58,
			},
			{
				name: 'Signature Cucumber Pedicure',
				description: `An hour long service that includes trimming and shaping nails and cuticles, our signature cucumber scrub exfoliation for the feet and legs, sole buffering, moisturizing foot mask with hot towels, 10 minutes massage for the legs and feet, and an optional color application of your choice`,
				price: 58,
			},
			{
				name: 'CBD & Mint Pedicure',
				description: `An hour long service that includes trimming and shaping nails and cuticles, our signature CBD & Mint scrub exfoliation for the feet and legs, sole buffering, moisturizing foot mask with hot towels, 10 minutes massage for the legs and feet, and an optional color application of your choice`,
				price: 65,
			},
			{
				name: 'Luxery Pedicure',
				description: `An hour and fifteen minute service that includes trimming and shaping nails and cuticles, sugar scrub exfoliation for the feet and legs, sole buffering, moisturizing foot mask with hot towels, paraffin wax, hot stone massage for the legs and feet, and an optional color application of your choice`,
				price: 80,
			},
			{
				name: 'Combos',
				description: ``,
				price: undefined,
				additions: [
					{
						name: 'Classic Mani & Pedi',
						price: 50,
					},
					{
						name: 'Gel Mani & Pedi',
						price: 70,
					},
					{
						name: 'Gel Mani & Gel Pedi',
						price: 90,
					},
				],
			},
		],
	},
	{
		menuId: 'extensions',
		menuTitle: 'Extensions',
		menuDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugit quis quibusdam `,
		menuIcon: extensionsIcon,
		menuIconColored: extensionsIconColored,
		menuItems: [
			{
				name: 'Acrylic Full Set (Regular Polish)',
				description: `Acrylic nails are are a mix of powder and liquid monomer that's combined into a blob of dough, shaped onto your nails with a brush, and then air-dried. Acrylics do not require a lamp to cure, and they're great for changing the shape or extending your nails.`,
				price: 43,
				additions: [
					{
						name: 'Fill (Regular Polish)',
						description: '',
						price: 33,
					},
					{
						name: 'Fullset w/ Gel Polish',
						description: '',
						price: 55,
					},
					{
						name: 'Fill w/ Gel Polish',
						description: '',
						price: 45,
					},
				],
				subAddition: extensionSubAdditions,
			},
			{
				name: 'Pink & White Full Set',
				description: `Pink & white nails, also known as French tips, are a look consisting of white tips on a pink nail base. They are typically achieved by adding a plastic tip or sculpting one to the nail and covering it in acrylic powder and/or gel.`,
				price: 60,
				additions: [
					{
						name: 'Fill',
						description: '',
						price: 55,
					},
				],
				subAddition: extensionSubAdditions,
			},
			{
				name: 'Pink & White Ombre',
				description: `A popular pink and white ombre look is French ombre. If you haven't heard of that before, then this design uses the classic light pink and white colors but instead of creating white tips, the colors are used in an ombre blend instead. `,
				price: 65,
				additions: [
					{
						name: 'Fill',
						description: '',
						price: 60,
					},
				],
				subAddition: extensionSubAdditions,
			},
			{
				name: 'Builder Gel Full Set',
				description: `Builder gel is a nail enhancement like acrylic nails, except it cures in a gel light. It is NOT gel polish/shellac/soft gel/soak off gel. You can put gel polish over hard gel (and you should because it looks great). You can extend the length of the nail with hard gel, just like acrylic. It can be sculpted and shaped just like acrylic. The only difference is that builder gel hardens through gel light rather than through evaporating solvents (like acrylic).`,
				price: 65,
				additions: [
					{
						name: 'Fill',
						description: '',
						price: 55,
					},
				],
				subAddition: extensionSubAdditions,
			},
			{
				name: 'Apres Gel-X',
				description: `Apres Gel-X nails are like the lovechild of a gel mani, acrylic extensions and press-on nails. They’re applied over your entire nail bed (not just the tips, like acrylics or hard gel extensions). The extensions are clear – which means they can be used to create trends like seaglass nails – and come in different shapes and lengths.`,
				price: 65,
				subAddition: extensionSubAdditions,
			},
		],
	},
	{
		menuId: 'waxing',
		menuTitle: 'Waxing',
		menuDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugit quis quibusdam `,
		menuIcon: waxingIcon,
		menuIconColored: waxingIconColored,
		menuItems: [
			{
				name: 'Waxing Options',
				description: '',
				price: undefined,
				additions: [
					{
						name: 'Eyebrows',
						description: ``,
						price: 10,
					},
					{
						name: 'Lip',
						description: ``,
						price: 8,
					},
					{
						name: 'Chin',
						description: ``,
						price: 15,
					},
					{
						name: 'Underarms',
						description: ``,
						price: 20,
					},
					{
						name: 'Half Arm',
						description: ``,
						price: '30+',
					},
					{
						name: 'Full Arm',
						description: ``,
						price: '50+',
					},
					{
						name: 'Back',
						description: ``,
						price: '60+',
					},
					{
						name: 'Half Leg',
						description: ``,
						price: '50+',
					},
					{
						name: 'Full Leg',
						description: ``,
						price: '30+',
					},
				],
			},
		],
	},
	{
		menuId: 'lashes',
		menuTitle: 'Lashes',
		menuDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugit quis quibusdam `,
		menuIcon: eyelashIcon,
		menuIconColored: eyelashIconColored,
		menuItems: [
			{
				name: 'Classic',
				description: `Classic lash extensions can help you achieve an even lash line and make your eyes look big. It gives you the made-up look at all time, even when you have just woken up. This lash extension style enhances the natural lash beauty you already possess.`,
				price: undefined,
				additions: [
					{
						name: 'Full Set',
						description: ``,
						price: 150,
					},
					{
						name: 'Fill',
						description: `(2 Weeks)`,
						price: 60,
					},
					{
						name: 'Fill',
						description: `(3 Weeks)`,
						price: 70,
					},
					{
						name: 'Fill',
						description: `(4 Weeks)`,
						price: 80,
					},
				],
			},
			{
				name: 'Volume',
				description: `Volume lash extensions are extremely fine lashes that are grouped together to form a “fan” shape, and that fan is then applied to each natural lash. This gives the illusion of more lashes, thus resulting in a darker, more dense lash line, creating your very own custom strip lash.`,
				price: undefined,
				additions: [
					{
						name: 'Full Set',
						description: ``,
						price: 180,
					},
					{
						name: 'Fill',
						description: `(2 Weeks)`,
						price: 75,
					},
					{
						name: 'Fill',
						description: `(3 Weeks)`,
						price: 85,
					},
					{
						name: 'Fill',
						description: `(4 Weeks)`,
						price: 95,
					},
				],
			},
		],
	},
]

const Menu = () => {
	const [selectedMenuId, setSelectedMenuId] = useState(menu[0].menuId)

	return (
		<div className='container mx-auto'>
			<div>
				<ul className='flex justify-evenly'>
					{menu.map(
						({ menuId, menuIcon, menuIconColored, menuTitle }) => (
							<li
								key={menuId}
								className={`text-xs md:text-sm font-light uppercase text-center ${
									selectedMenuId === menuId
										? 'font-normal text-red-500'
										: 'font-light'
								}`}
							>
								<a
									href={`#${menuId}`}
									onClick={() => setSelectedMenuId(menuId)}
								>
									<img
										src={menuIconColored}
										className='w-9 md:w-12 mx-auto py-4'
										alt={`${menuTitle} Selected Menu Icon`}
										style={{
											display:
												selectedMenuId === menuId
													? 'block'
													: 'none',
										}}
									/>

									<img
										src={menuIcon}
										className='w-9 md:w-12 mx-auto py-4'
										alt={`${menuTitle} Unselected Menu Icon`}
										style={{
											display:
												selectedMenuId !== menuId
													? 'block'
													: 'none',
										}}
									/>

									{menuTitle}
								</a>
							</li>
						)
					)}
				</ul>
			</div>

			<div className='h-px w-full my-4 bg-gradient-to-tr from-red-600 to-pink-200 ' />

			<div>
				{menu.map(({ menuId, menuTitle, menuItems }, idx) => (
					<div
						key={idx}
						className={`container mx-auto px-6 md:px-0 ${
							selectedMenuId !== menuId ? 'hidden' : ''
						}`}
					>
						<ul className='space-y-8' key={menuId}>
							{menuItems.map(
								(
									{
										name,
										description,
										price,
										additions,
										subAddition,
									},
									idx
								) => (
									<div key={idx}>
										<li
											className='flex justify-between'
											key={name}
										>
											<div>
												<p className='text-base text-gray-700 uppercase'>
													{name}
												</p>
												<p className='text-sm italic font-light text-gray-700'>
													{description}
												</p>
											</div>

											{price && (
												<div>
													<p>{price}</p>
												</div>
											)}
										</li>

										{additions &&
											additions.map((a, idx) => (
												<li
													key={idx}
													className='flex justify-between'
													style={{
														marginTop: '0.5rem',
														marginLeft: '1rem',
													}}
												>
													<div>
														<p className='text-base text-gray-500'>
															{a.name}{' '}
															<span className='text-sm italic font-light text-gray-500'>
																{a.description}
															</span>
														</p>
													</div>
													<div>
														<p>{a.price}</p>
													</div>
												</li>
											))}

										{subAddition && (
											<li
												style={{
													marginTop: '0.5rem',
													marginLeft: '1rem',
												}}
											>
												<div>
													<p className='text-sm text-gray-500'>
														{subAddition.name}
													</p>
												</div>

												{subAddition.items &&
													subAddition.items.map(
														(a, idx) => (
															<li
																key={idx}
																className='flex justify-between'
																style={{
																	marginTop:
																		'0.5rem',
																	marginLeft:
																		'2rem',
																}}
															>
																<div>
																	<p className='text-xs text-gray-500'>
																		{a.name}{' '}
																		<span className='text-xs italic font-light text-gray-500'>
																			{
																				a.description
																			}
																		</span>
																	</p>
																</div>
																<div>
																	<p>
																		{
																			a.price
																		}
																	</p>
																</div>
															</li>
														)
													)}
											</li>
										)}
									</div>
								)
							)}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default Menu
