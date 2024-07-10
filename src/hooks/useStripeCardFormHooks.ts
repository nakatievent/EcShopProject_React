import React, { useState } from 'react'
import {
	StripeCardCvcElementChangeEvent,
	StripeCardExpiryElementChangeEvent,
	StripeCardNumberElementChangeEvent
} from '@stripe/stripe-js'

export const useStripeCardFormHooks = () => {
	// カード情報のエラー状態を保持
	const [cardState, setCardErrors] = useState<{
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
		setCardErrors((previous) => ({
			...previous,
			cardNumberElementErrorMessage
		}))
	}

	const onChangeCardExpiryElement = (event: StripeCardExpiryElementChangeEvent) => {
		const cardExpiryElementErrorMessage = event.error ? event.error.message : ''
		setCardErrors((previous) => ({
			...previous,
			cardExpiryElementErrorMessage
		}))
	}

	const onChangeCardCvcElement = (event: StripeCardCvcElementChangeEvent) => {
		const cardCvcElementErrorMessage = event.error ? event.error.message : ''
		setCardErrors((previous) => ({
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

	return {
		cardState,
		setCardErrors,
		onChangeCardNumberElement,
		onChangeCardExpiryElement,
		onChangeCardCvcElement,
		cardElementStyle
	}
}
