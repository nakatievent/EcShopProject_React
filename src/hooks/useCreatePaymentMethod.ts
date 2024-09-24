import { useState, useCallback } from 'react'
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js'

const useCreatePaymentMethod = () => {
	const stripe = useStripe()
	const elements = useElements()

	const [error, setError] = useState(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [paymentMethod, setPaymentMethod] = useState<object | undefined>(undefined)

	const createPaymentMethod = useCallback(async () => {
		if (!stripe || !elements) {
			return
		}

		const cardElement = elements.getElement(CardNumberElement)

		if (!cardElement) {
			// setError(new Error('Card element not found'));
			return
		}

		setLoading(true)
		setError(null)

		try {
			const { paymentMethod, error } = await stripe.createPaymentMethod({
				type: 'card',
				card: cardElement
			})

			if (error) {
				// setError(error);
				// setPaymentMethod(null);
			} else {
				setPaymentMethod(paymentMethod)
			}
		} catch (err) {
			// setError(err);
		} finally {
			setLoading(false)
		}
	}, [stripe, elements])

	return { createPaymentMethod, paymentMethod, error, loading }
}

export default useCreatePaymentMethod
