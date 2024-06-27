import React, { FC, useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import * as api from 'api/ProductApi'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useFetchProductDetail } from 'hooks/useFetchProductDetail'

const product = {
	name: 'Basic Tee 6-Pack',
	price: '$192',
	href: '#',
	breadcrumbs: [
		{ id: 1, name: 'Men', href: '#' },
		{ id: 2, name: 'Clothing', href: '#' }
	],
	images: [
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
			alt: 'Two each of gray, white, and black shirts laying flat.'
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
			alt: 'Model wearing plain black basic tee.'
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
			alt: 'Model wearing plain gray basic tee.'
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
			alt: 'Model wearing plain white basic tee.'
		}
	],
	colors: [
		{ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
		{ name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
		{ name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
	],
	sizes: [
		{ name: 'XXS', inStock: false },
		{ name: 'XS', inStock: true },
		{ name: 'S', inStock: true },
		{ name: 'M', inStock: true },
		{ name: 'L', inStock: true },
		{ name: 'XL', inStock: true },
		{ name: '2XL', inStock: true },
		{ name: '3XL', inStock: true }
	],
	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		'Hand cut and sewn locally',
		'Dyed with our proprietary colors',
		'Pre-washed & pre-shrunk',
		'Ultra-soft 100% cotton'
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
}
const reviews = { href: '#', average: 4, totalCount: 117 }

export const ProductDetail: FC = () => {
	const [count, setCount] = useState<number>(0)
	const { data, error, isError, isLoading, isFetched } = useFetchProductDetail()

	if (isLoading) {
		console.log(isLoading)
		return <span>Loading...</span>
	}

	if (error) {
		return <span>Error: {error.message}</span>
	}

	if (isFetched) {
		console.log(data)
	}

	// const product = data.data

	return (
		<>
			<div className="min-h-full p-4 md:p-0">
				<div className="mx-auto max-w-7xl lg:px-8">
					<div className="flex flex-col lg:flex-row">
						<div className="w-full lg:w-1/2">
							<div className="flex flex-col">
								<img className="w-full object-cover" src={product.images[0].src} alt="Main Product Image" />
								<div className="grid grid-cols-3 gap-4 mt-6">
									{product.images.slice(1).map((image, index) => (
										<img
											key={index}
											src={image.src}
											alt={`Additional Product Image ${index + 1}`}
											className="w-full object-cover"
										/>
									))}
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2 lg:pl-10 lg:py-10">
							<h2 className="text-2xl font-semibold">
								{data.data.name && data.data.name ? data.data.name : '名前なし'}
							</h2>
							{data.data.category && (
								<div className="flex mt-2">
									{data.data.category.map((category: any, index: number) => (
										<p key={index} className="text-gray-500 mr-3">
											{category.name}
										</p>
									))}
								</div>
							)}
							<div className="flex items-center mt-2 text-sm text-gray-500">
								<span>評価: ★★★★☆</span>
								<span className="ml-2">お気に入り: 100人</span>
							</div>
							<p className="font-bold mt-2 text-gray-500">金額: {data.data.price}円</p>
							<p className="text-gray-500 mt-2">送料無料</p>
							<input
								type="number"
								className="border border-gray-300 p-2 mt-2 w-full"
								placeholder="数量"
								onChange={(e) => setCount(Number(e.target.value))}
							/>
							<button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full">カートに入れる</button>
							<button className="border border-gray-500 text-gray-500 px-4 py-2 rounded-md mt-4 w-full">
								お気に入りに登録
							</button>
							<p className="text-gray-500 mt-4">在庫あり</p>
							<div>
								<h3 className="mt-5 text-md font-bold tracking-tight text-gray-900 sm:text-lg">商品説明</h3>
								<div className="mt-3 space-y-6 bg-gray-100 p-4 rounded-md">
									<p className="text-base text-gray-900">{data.data.description}</p>
								</div>
							</div>
							<div>
								<h3 className="mt-5 text-md font-bold tracking-tight text-gray-900 sm:text-lg">商品詳細</h3>
								<div className="mt-3 space-y-6 bg-gray-100 p-4 rounded-md">
									<p className="text-base text-gray-900">{data.data.detail}</p>
								</div>
							</div>
							<div className="related-items mt-8">
								<h3 className="text-lg font-semibold text-gray-500 mb-4">関連アイテム</h3>
								<div className="space-y-2">
									<div className="border p-2 rounded">関連商品1</div>
									<div className="border p-2 rounded">関連商品2</div>
									<div className="border p-2 rounded">関連商品3</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
