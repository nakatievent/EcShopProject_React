import React, { FC, useContext } from 'react'
import { Product } from 'types/Product'
import { CartContext } from 'hooks/CartContext'
import { useNavigation } from 'hooks/useNavigation'

export const Cart: FC = () => {
  const { goToPage } = useNavigation()
	
	const cartContext = useContext(CartContext)
	const { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal } = cartContext
	
	return (
		<div className="mx-auto my-10 sm:w-11/12">
			<div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden">
				{/* カート */}
				<div className="w-full lg:w-2/3 p-4">
					<h2 className="text-2xl font-bold mb-6">カート</h2>
					{/* TODO: fixCartDataは配列 */}
					{cart &&
						cart.map((product: Product) => (
							<div key={product.id} className="flex items-center border-b pb-4 mb-4">
								<img src={product.image_url} alt={product.name} className="w-24 h-24 object-cover flex-shrink-0" />
								<div className="ml-4 flex-grow">
									<h3 className="text-sm font-semibold sm:text-lg">ブランド名</h3>
									<p className="text-sm text-gray-600 sm:text-lg">{product.name}</p>
									<p className="text-sm text-gray-800 font-bold sm:text-lg">{product.price * (product.count || 1)}円</p>
								</div>
								<div className="flex items-center">
									<input
										type="number"
										value={product.count || 1}
										className="w-16 p-1 border rounded-md text-center"
										onChange={(event) => updateQuantity(product.id, parseInt(event.target.value))}
										min="1"
									></input>
									<button className="ml-4 text-red-500" onClick={() => removeFromCart(product.id)}>
										削除
									</button>
								</div>
							</div>
						))}
				</div>
				{/* カートとお会計情報の間 */}
				<div className="w-full lg:w-1/3 p-4">
					<div className="flex justify-between">
						<h2 className="text-2xl font-bold mb-4">合計</h2>
						<p className="text-xl font-semibold">{cartTotal}円</p>
					</div>
					<h2 className="text-lg mb-4">会員のお客様さま</h2>
					<div className="mb-4">
						<label htmlFor="login-id" className="block text-gray-700 mb-2">
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
						<label htmlFor="password" className="block text-gray-700 mb-2">
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
						<a href="#" className="text-blue-500 text-sm">
							ログインID、パスワードをお忘れの方
						</a>
					</div>
					{/* <div className="mb-4">
						<button className="w-full p-2 bg-white text-black border" onClick={() => onClickButton('/login')}>
							ログインして注文手続きへ
						</button>
					</div>
					<div className="mb-4">
						<button className="w-full p-2 bg-white text-black border" onClick={() => onClickButton('/register')}>
							会員登録して注文手続きへ
						</button>
					</div> */}
					<div>
						<button
							className="w-full p-2 bg-white text-black border"
							onClick={() => goToPage('/input-adress')}
						>
							注文手続きへ
						</button>
					</div>
					<div className="mt-4">
						<button
							className="w-full p-2 bg-white text-black border"
							onClick={() => goToPage('/')}
						>
							お買い物を続ける
						</button>
					</div>
					<div className="mt-4">
						<button
							className="w-full p-2 bg-white text-black border"
							onClick={() => clearCart()}
						>
							カートの中身を削除する
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
