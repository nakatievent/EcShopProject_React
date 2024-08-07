import { useState, useEffect } from 'react'
import * as api from 'api/PaymentApi'
import { useQuery } from '@tanstack/react-query'
import { Appearance, StripeElementsOptions } from '@stripe/stripe-js'
// import { getStripPromise } from 'lib/stripeClient'

// const stripePromise = getStripPromise()

export const usePaymentIntent = (total_price: number) => {
	const [clientSecret, setClientSecret] = useState<string | undefined>()

	const { data, error, isLoading } = useQuery({
		queryKey: ['createPaymentIntent'],
		queryFn: () =>
			api.createPaymentIntent({ total_price: total_price }).then((response) => setClientSecret(response.data))
	})

	if (data) {
		useEffect(() => {
			setClientSecret(data)
		}, [])
	}

	const appearance: Appearance = {
		theme: 'stripe'
	}
	const options: StripeElementsOptions = {
		clientSecret,
		appearance
	}

	return { clientSecret, error, isLoading, appearance, options }
}
