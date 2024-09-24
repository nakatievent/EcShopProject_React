import React, { FC, useContext, useState, MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { usePaymentIntent } from 'hooks/useCreatePaymentIntent'
import { CartContext } from 'hooks/CartContext'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { Navigate } from 'react-router-dom'

const mockData = {
	name: '山田 太郎',
	postal_code: '123-4567',
	address: '東京都渋谷区神南1-1-1',
	phone_number: '090-1234-5678',
	delivery_date: '7月4日〜7月10日予定',
	payment_method: 'クレジットカード',
	card_number: '1234-5678-9012-3456',
	security_code: '123',
	expiration_month: '1月',
	expiration_year: '2024年',
	product_name: '商品A',
	product_quantity: 1,
	product_image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
	total_price: '15,400円',
	shipping_fee: '330円',
	total_payment: '15,730円'
}

export const Confirm: FC = () => {
	const stripe = useStripe()
	const elements = useElements()

	const cartContext = useContext(CartContext)

	const [navigate, setNavigate] = useState<boolean>(false)

	const { state } = useLocation()
	const cardData = state?.card

	const { cart, cartTotal, clearCart } = cartContext

	const { clientSecret, error, isLoading, appearance, options } = usePaymentIntent(cartTotal)

	const handlePostalCodeChange = async (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		if (!stripe || !elements) {
			return
		}

		// const stripe: Stripe | null | Promise<Stripe | null> = await getStripePromise()
		if (stripe && clientSecret) {
			const { paymentIntent, error } = await stripe!.confirmCardPayment(clientSecret, {
					payment_method: state.id
				})
				.then(function (result: any) {
					return result
				})

			if (paymentIntent['status'] === 'succeeded') {
				setNavigate(true)
				clearCart()
			}
		}
	}

	if (navigate) {
		return <Navigate to="/payment-complite" state={{ state: 'test' }} />
	}

	return (
		<>
			<div className="min-h-screen bg-[#f2f2f2] flex justify-center items-center">
				<div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
					<h2 className="text-2xl font-bold text-center mb-6 font-roboto">注文情報確認</h2>
					<div className="space-y-4">
						<div>
							<label className="block font-roboto font-bold">お名前</label>
							<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.name}</p>
						</div>
						<div>
							<label className="block font-roboto font-bold">郵便番号</label>
							<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.postal_code}</p>
						</div>
						<div>
							<label className="block font-roboto font-bold">住所</label>
							<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.address}</p>
						</div>
						<div>
							<label className="block font-roboto font-bold">電話番号</label>
							<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.phone_number}</p>
						</div>
						<div>
							<label className="block font-roboto font-bold">お届け日</label>
							<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.delivery_date}</p>
						</div>
						<div>
							<label className="block font-roboto font-bold">お支払い方法</label>
							<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.payment_method}</p>
						</div>
						{cardData && (
							<div>
								<label className="block font-roboto font-bold">カード番号</label>
								<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{cardData.last4}</p>
							</div>
						)}
						{cardData && (
							<div>
								<label className="block font-robot font-bold">有効期限</label>
								<p className="w-full px-4 py-2 rounded-md bg-white font-roboto">
									{cardData.exp_month} / {cardData.exp_year}
								</p>
							</div>
						)}
						<div>
							<label className="flex items-center font-bold">購入商品</label>
							{cart.map((product: any) => (
								<div key={product.id} className="grid grid-cols-1 gap-2 mt-3">
									<div className="flex justify-between items-center">
										<img src={product.image_url} alt="購入商品の画像" className="w-[70px] h-[70px] object-cover rounded-md" />
										<div className="text-right text-[#565656]">
											<p className="text-sm">{product.name}</p>
											<p className="text-sm">{product.count || 1}個</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="flex justify-end border-t border-gray-300">
							<div className="space-y-1 text-right my-4">
								<p className="text-gray-700 font-roboto">商品合計（税込）: {mockData.total_price}</p>
								<p className="text-gray-700 font-roboto">送料: {mockData.shipping_fee}</p>
								<p className="text-gray-700 font-roboto">合計（税込）: {mockData.total_payment}</p>
							</div>
						</div>
						<button
							className="w-full text-center text-white bg-blue-500 px-4 py-2 rounded-md font-roboto"
							onClick={handlePostalCodeChange}
						>
							注文を確定する
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
