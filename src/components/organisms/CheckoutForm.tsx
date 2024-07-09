import React, { useState, useEffect, FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'
import { useStripeCardFormHooks } from 'hooks/useStripeCardFormHooks'
import useCreatePaymentMethod from 'hooks/useCreatePaymentMethod'

export default function CheckoutForm() {
	const stripe = useStripe()
	const elements = useElements()

	const [navigate, setNavigate] = useState<boolean>(false)
	const [cardData, setCardData] = useState<object | undefined>(undefined)
	const [selectPaymentMethod, setSelectPaymentMethod] = useState<string>('creditCard')

	// カードの入力情報をバリデーションするHooks
	const {
		cardState,
		onChangeCardNumberElement,
		onChangeCardExpiryElement,
		onChangeCardCvcElement,
		cardElementStyle
	} = useStripeCardFormHooks()

	// paymentMethodoを作成するHooks
	const { createPaymentMethod, paymentMethod, error, loading } = useCreatePaymentMethod();


	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		switch (selectPaymentMethod) {
			// 代金引換
			case 'cashOnDelivery':
				await setNavigate(true)
				break
			// クレジットカード決済
			case 'creditCard':
				await createPaymentMethod();
				break
		}
	}

	useEffect(() => {
		if (paymentMethod) {
			setCardData(paymentMethod);
			setNavigate(true);
		}
	}, [paymentMethod]);

	if (navigate) {
		return <Navigate to="/confirm" state={cardData || 'test'} />;
	}

	return (
		<form className="bg-white p-6 mx-3 rounded-lg border shadow-md w-full sm:w-3/5 lg:w-2/5" onSubmit={handleSubmit}>
			<h2 className="text-lg font-bold mb-6 text-center text-gray-800 font-crimson-text md:text-xl lg:text-2xl">
				決済方法を選択して下さい
			</h2>
			<div className="mb-6">
				<label className="text-gray-700 text-sm font-bold mb-2 block font-crimson-text">決済方法</label>
				<div className="flex items-center">
					<input
						type="radio"
						id="creditCard"
						name="paymentMethod"
						value="creditCard"
						className="mr-2"
						checked={selectPaymentMethod === 'creditCard'}
						onChange={() => setSelectPaymentMethod('creditCard')}
					/>
					<label htmlFor="creditCard" className="text-gray-700 text-sm font-roboto">
						クレジットカード
					</label>
				</div>
				<div className="flex items-center mt-2">
					<input
						type="radio"
						id="cashOnDelivery"
						name="paymentMethod"
						value="cashOnDelivery"
						className="mr-2"
						checked={selectPaymentMethod === 'cashOnDelivery'}
						onChange={() => setSelectPaymentMethod('cashOnDelivery')}
					/>
					<label htmlFor="cashOnDelivery" className="text-gray-700 text-sm font-roboto">
						代金引換
					</label>
				</div>
			</div>
			{selectPaymentMethod === 'creditCard' && (
				<>
					<div className="form-group mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">カード番号</label>
						<CardNumberElement
							options={{ style: cardElementStyle }}
							className="p-2 border rounded w-full"
							onChange={onChangeCardNumberElement}
						/>
						{cardState.cardNumberElementErrorMessage && (
							<div className="input-error text-red-500 text-xs mt-1">{cardState.cardNumberElementErrorMessage}</div>
						)}
						<div className="input-error text-red-500 text-xs mt-1"></div>
					</div>
					<div className="form-group mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">有効期限</label>
						<CardExpiryElement
							options={{ style: cardElementStyle }}
							className="p-2 border rounded w-full"
							onChange={onChangeCardExpiryElement}
						/>
						{cardState.cardExpiryElementErrorMessage && (
							<div className="input-error text-red-500 text-xs mt-1">{cardState.cardExpiryElementErrorMessage}</div>
						)}
						<div className="input-error text-red-500 text-xs mt-1"></div>
					</div>
					<div className="form-group mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">CVC</label>
						<CardCvcElement
							options={{ style: cardElementStyle }}
							className="p-2 border rounded w-full"
							onChange={onChangeCardCvcElement}
						/>
						{cardState.cardCvcElementErrorMessage && (
							<div className="input-error text-red-500 text-xs mt-1">{cardState.cardCvcElementErrorMessage}</div>
						)}
					</div>
				</>
			)}
			{selectPaymentMethod === 'cashOnDelivery' && (
				<div className="mb-6 text-gray-700 text-sm font-roboto">配送時に現金でお支払いください。</div>
			)}
			<button
				className={`w-full py-2 px-4 rounded ${stripe ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
				disabled={!stripe}
			>
				Submit
			</button>
		</form>
	)
}
