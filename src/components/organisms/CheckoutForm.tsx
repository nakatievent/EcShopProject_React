import React, { useState, FormEvent } from 'react'
import { StripeCardCvcElementChangeEvent, StripeCardExpiryElementChangeEvent, StripeCardNumberElementChangeEvent } from "@stripe/stripe-js";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const [state, setErrors] = useState<{
		cardNumberElementErrorMessage: string;
		cardExpiryElementErrorMessage: string;
		cardCvcElementErrorMessage: string;
		formSubmitErrorMessage: string;
	}>({
		cardNumberElementErrorMessage: "",
		cardExpiryElementErrorMessage: "",
		cardCvcElementErrorMessage: "",
		formSubmitErrorMessage: "",
	});

	const onChangeCardNumberElement = (event: StripeCardNumberElementChangeEvent) => {
		const cardNumberElementErrorMessage = event.error ? event.error.message : "";
		setErrors((previous) => ({
			...previous,
			cardNumberElementErrorMessage,
		}));
	};

	const onChangeCardExpiryElement = (event: StripeCardExpiryElementChangeEvent) => {
		const cardExpiryElementErrorMessage = event.error ? event.error.message : "";
		setErrors((previous) => ({
			...previous,
			cardExpiryElementErrorMessage,
		}));
	};


	const onChangeCardCvcElement = (event: StripeCardCvcElementChangeEvent) => {
		const cardCvcElementErrorMessage = event.error ? event.error.message : "";
		setErrors((previous) => ({
			...previous,
			cardCvcElementErrorMessage,
		}));
	};

	const cardElementStyle = {
		// placeholder: "placeholder",
		base: {
			iconColor: '#979797',
			fontSize: '16px',
			'::placeholder': {
				color: '#979797'
			},
		},
		invalid: {
			iconColor: '#DE684E',
			color: '#DE684E',
		},
	};


	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const cardElement = elements?.getElement(CardNumberElement)

		if (!stripe || !cardElement) {
			return;
		}

		const { paymentMethod, error } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement
		});

		if (error && error.message) {
			const formSubmitErrorMessage = error.message;
			setErrors((previous) => ({
				...previous,
				formSubmitErrorMessage,
			}));
		}

		console.log(paymentMethod)
	}

	return (
		<form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
			<div className="form-group mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">カード番号</label>
				<CardNumberElement options={{ style: cardElementStyle }} className="p-2 border rounded w-full" onChange={onChangeCardNumberElement} />
				{state.cardNumberElementErrorMessage && (
					<div className="input-error text-red-500 text-xs mt-1">
						{state.cardNumberElementErrorMessage}
					</div>
				)}
				<div className="input-error text-red-500 text-xs mt-1"></div>
			</div>
			<div className="form-group mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">有効期限</label>
				<CardExpiryElement options={{ style: cardElementStyle }} className="p-2 border rounded w-full" onChange={onChangeCardExpiryElement} />
				{state.cardExpiryElementErrorMessage && (
					<div className="input-error text-red-500 text-xs mt-1">
						{state.cardExpiryElementErrorMessage}
					</div>
				)}
				<div className="input-error text-red-500 text-xs mt-1"></div>
			</div>
			<div className="form-group mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">CVC</label>
				<CardCvcElement options={{ style: cardElementStyle }} className="p-2 border rounded w-full" onChange={onChangeCardCvcElement} />
				{state.cardCvcElementErrorMessage && (
					<div className="input-error text-red-500 text-xs mt-1">
						{state.cardCvcElementErrorMessage}
					</div>
				)}
			</div>
			<button
				className={`w-full py-2 px-4 rounded ${stripe ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
				disabled={!stripe}
			>Submit</button>
		</form>
	)
}
