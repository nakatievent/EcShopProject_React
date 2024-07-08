import React, { useState, FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import {
	StripeCardCvcElementChangeEvent,
	StripeCardExpiryElementChangeEvent,
	StripeCardNumberElementChangeEvent
} from '@stripe/stripe-js'
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'

export default function CheckoutForm() {
	const stripe = useStripe()
	const elements = useElements()

	const [navigate, setNavigate] = useState<boolean>(false)
	const [cardData, setCardData] = useState<object | undefined>(undefined);
	const [selectPaymentMethod, setSelectPaymentMethod] = useState<string>("creditCard");


	const [state, setErrors] = useState<{
		cardNumberElementErrorMessage: string
		cardExpiryElementErrorMessage: string
		cardCvcElementErrorMessage: string
		formSubmitErrorMessage: string
	}>({
		cardNumberElementErrorMessage: '',
		cardExpiryElementErrorMessage: '',
		cardCvcElementErrorMessage: '',
		formSubmitErrorMessage: ''
	})

	const onChangeCardNumberElement = (event: StripeCardNumberElementChangeEvent) => {
		const cardNumberElementErrorMessage = event.error ? event.error.message : ''
		setErrors((previous) => ({
			...previous,
			cardNumberElementErrorMessage
		}))
	}

	const onChangeCardExpiryElement = (event: StripeCardExpiryElementChangeEvent) => {
		const cardExpiryElementErrorMessage = event.error ? event.error.message : ''
		setErrors((previous) => ({
			...previous,
			cardExpiryElementErrorMessage
		}))
	}

	const onChangeCardCvcElement = (event: StripeCardCvcElementChangeEvent) => {
		const cardCvcElementErrorMessage = event.error ? event.error.message : ''
		setErrors((previous) => ({
			...previous,
			cardCvcElementErrorMessage
		}))
	}

	const cardElementStyle = {
		// placeholder: "placeholder",
		base: {
			iconColor: '#979797',
			fontSize: '16px',
			'::placeholder': {
				color: '#979797'
			}
		},
		invalid: {
			iconColor: '#DE684E',
			color: '#DE684E'
		}
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		
		switch (selectPaymentMethod) {
			case 'cashOnDelivery':
				break;
			case 'creditCard':
				break;
		}

		// 代金引換の場合は次のページへ遷移
		selectPaymentMethod === 'cashOnDelivery' && setNavigate(true)

		const cardElement = elements?.getElement(CardNumberElement)

		if (!stripe || !cardElement) {
			return
		}

		const { paymentMethod, error } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement
		})

		if (error && error.message) {
			const formSubmitErrorMessage = error.message
			setErrors((previous) => ({
				...previous,
				formSubmitErrorMessage
			}))
		}

		if (paymentMethod) {
			setNavigate(true)
			setCardData(paymentMethod)
		}
	}

	if (navigate) {
		if (cardData) {
			return <Navigate to="/confirm" state={cardData} />
		}
		return <Navigate to="/confirm" state={'test'} />
	}

	return (
		<form className="bg-white p-6 mx-3 rounded-lg border shadow-md w-full sm:w-3/5 lg:w-2/5" onSubmit={handleSubmit}>
			<h2 className="text-lg font-bold mb-6 text-center text-gray-800 font-crimson-text md:text-xl lg:text-2xl">決済方法を選択して下さい</h2>
			<div className="mb-6">
				<label className="text-gray-700 text-sm font-bold mb-2 block font-crimson-text">決済方法</label>
				<div className="flex items-center">
					<input
						type="radio"
						id="creditCard"
						name="paymentMethod"
						value="creditCard"
						className="mr-2"
						checked={selectPaymentMethod === "creditCard"}
						onChange={() => setSelectPaymentMethod("creditCard")}
					/>
					<label htmlFor="creditCard" className="text-gray-700 text-sm font-roboto">クレジットカード</label>
				</div>
				<div className="flex items-center mt-2">
					<input
						type="radio"
						id="cashOnDelivery"
						name="paymentMethod"
						value="cashOnDelivery"
						className="mr-2"
						checked={selectPaymentMethod === "cashOnDelivery"}
						onChange={() => setSelectPaymentMethod("cashOnDelivery")}
					/>
					<label htmlFor="cashOnDelivery" className="text-gray-700 text-sm font-roboto">代金引換</label>
				</div>
			</div>
			{selectPaymentMethod === "creditCard" && (
				<>
					<div className="form-group mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">カード番号</label>
						<CardNumberElement
							options={{ style: cardElementStyle }}
							className="p-2 border rounded w-full"
							onChange={onChangeCardNumberElement}
						/>
						{state.cardNumberElementErrorMessage && (
							<div className="input-error text-red-500 text-xs mt-1">{state.cardNumberElementErrorMessage}</div>
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
						{state.cardExpiryElementErrorMessage && (
							<div className="input-error text-red-500 text-xs mt-1">{state.cardExpiryElementErrorMessage}</div>
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
						{state.cardCvcElementErrorMessage && (
							<div className="input-error text-red-500 text-xs mt-1">{state.cardCvcElementErrorMessage}</div>
						)}
					</div>
				</>
			)}
			{selectPaymentMethod === "cashOnDelivery" && (
				<div className="mb-6 text-gray-700 text-sm font-roboto">
					配送時に現金でお支払いください。
				</div>
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
