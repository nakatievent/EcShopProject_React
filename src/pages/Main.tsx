import React, { FC } from 'react'
import { Header } from 'components/organisms/Header'
import { ProductList } from 'components/organisms/ProductList'
import { CategoryList } from 'components/organisms/CategoryList'

// const logoStyle = {
// 	width: '140px',
// 	height: 'auto',
// 	cursor: 'pointer'
// }

// interface AppAppBarProps {
// 	mode: PaletteMode
// 	toggleColorMode: () => void
// }

// const socialLinks = [
// 	{ href: '#', ariaLabel: '', icon: <SearchIcon /> },
// 	{ href: '#', ariaLabel: 'Twitter', icon: <ShoppingCartOutlinedIcon /> },
// 	{ href: '#', ariaLabel: 'LinkedIn', icon: <LinkedInIcon /> }
// ]

const products = [
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black'
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black'
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black'
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black'
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black'
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black'
	}
	// More products...
]

export const Main: FC = () => {
	
	return (
		<>
			<div className="min-h-full">
				<Header />

				<header className="bg-white shadow">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
					</div>
				</header>
				<main>
					<div className="relative overflow-hidden bg-white">
						<div className="pb-16 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
							<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
								<div className="sm:max-w-lg">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
										Summer styles are finally here
									</h1>
									<p className="mt-4 text-xl text-gray-500">
										This year, our new summer collection will shelter you from the harsh elements of a world that
										doesn't care if you live or die.
									</p>
									<a
										href="#"
										className="mt-8 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
									>
										Shop Collection
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="w-4/5 mx-auto">
						<div className="grid sm:grid-rows-3 sm:grid-flow-col gap-4 xl:m-10">
							<CategoryList />
							<ProductList />
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
