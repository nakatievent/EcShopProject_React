import React, { FC } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from 'components/organisms/CheckoutForm'
import { usePaymentIntent } from 'hooks/useCreatePaymentIntent'
import { useNavigate } from 'react-router-dom'

export const PaymentComplite: FC = () => {
	const navigate = useNavigate()

	const onClickButton = (destination: string) => {
		navigate(destination)
	}

	return (
		<div className="flex justify-center items-center h-screen p-3">
			<div className="bg-white p-8 max-w-md w-full text-center border">
				<svg
					className="w-16 h-16 text-green-500 mx-auto mb-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4m0 0a9 9 0 11-4-4" />
				</svg>
				<h2 className="text-2xl font-bold mb-2">決済が完了しました！</h2>
				<p className="text-gray-600 mb-6">お買い上げいただき、ありがとうございます。</p>
				<button className="border hover:bg-blue-300 text-black font-bold py-2 px-4" onClick={() => onClickButton('/')}>
					ホームに戻る
				</button>
			</div>
		</div>
	)
}
