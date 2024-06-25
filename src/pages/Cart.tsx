import React, { FC, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		quantity: 1,
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
		imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
	},
	{
		id: 2,
		name: 'Medium Stuff Satchel',
		href: '#',
		color: 'Blue',
		price: '$32.00',
		quantity: 1,
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
	}
	// More products...
]

export const Cart: FC = () => {
	const [open, setOpen] = useState<boolean>(true)

	return (
		<div className="mx-auto w-11/12 mt-10">
			<div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden">
				{/* カート */}
				<div className="w-full lg:w-2/3 p-4">
					<h2 className="text-2xl font-bold mb-6">カート</h2>
					<div className="flex items-center border-b pb-4 mb-4">
						<div className="w-24 h-24 bg-gray-200 flex-shrink-0"></div>
						<div className="ml-4 flex-grow">
							<h3 className="text-sm font-semibold sm:text-lg">ブランド名</h3>
							<p className="text-sm text-gray-600 sm:text-lg">商品名</p>
							<p className="text-sm text-gray-800 font-bold sm:text-lg">3,773円</p>
						</div>
						<div className="flex items-center">
							<input
								type="number"
								value="1"
								className="w-16 p-1 border rounded-md text-center"
							></input>
							<button className="ml-4 text-red-500">削除</button>
						</div>
					</div>
				</div>
				{/* カートとお会計情報の間 */}
				<div className="w-full lg:w-1/3 p-4">
					<div className="flex justify-between">
						<h2 className="text-2xl font-bold mb-4">合計</h2>
						<p className="text-xl font-semibold mb-4">3,773円</p>
					</div>
					<h2 className="text-lg mb-4">会員のお客様さま</h2>
					<div className="mb-4">
						<label
							htmlFor="login-id"
							className="block text-gray-700 mb-2"
						>
							ログインID
						</label>
						<input
							type="text"
							id="login-id"
							className="w-full p-2 border rounded-md"
							placeholder="ログインID"
						></input>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700 mb-2"
						>
							パスワード
						</label>
						<input
							type="password"
							id="password"
							className="w-full p-2 border rounded-md"
							placeholder="パスワード"
						></input>
					</div>
					<div className="text-center my-7">
						<a
							href="#"
							className="text-blue-500 text-sm"
						>
							ログインID、パスワードをお忘れの方
						</a>
					</div>
					<div className="mb-4">
						<button className="w-full p-2 bg-slate-900 text-white">ログインして注文手続きへ</button>
					</div>
					<div className="mb-4">
						<button className="w-full p-2 bg-gray-500 text-white">会員登録して注文手続きへ</button>
					</div>
					<div>
						<button className="w-full p-2 bg-white text-black border">会員登録しないで注文手続きへ</button>
					</div>
				</div>
			</div>
		</div>
	)
}
