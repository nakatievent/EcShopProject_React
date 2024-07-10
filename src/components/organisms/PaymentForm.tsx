import { FC, useState, useEffect, FormEvent } from 'react'
import * as api from 'api/PaymentApi'
import { useQuery } from '@tanstack/react-query'
import {
	useStripe,
	useElements,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	Elements
} from '@stripe/react-stripe-js'
import CheckoutForm from 'components/organisms/CheckoutForm'
import { Stripe, loadStripe, Appearance, StripeElementsOptions } from '@stripe/stripe-js'
import { getStripePromise } from 'lib/stripeClient'

const stripePromise = getStripePromise()

export const PaymentForm: FC = () => {
	// const [clientSecret, setClientSecret] = useState<string|undefined>();

	// const { data, error, isLoading } = useQuery({
	//   queryKey: ['createPaymentIntent'],
	//   queryFn: () => api.createPaymentIntent({ total_price: 300 }).then((response) => setClientSecret(response.data))
	// })

	// if (data) {
	//   useEffect(() => {
	//     setClientSecret(data)
	//   }, []);
	// }

	// const options = {
	//   clientSecret: clientSecret,
	// };

	// event.preventDefault();

	return (
		// <div className="h-screen">
		<div className="flex h-screen items-center justify-center">
			{/* <h2 className="font-bold mb-3">クレジットカード情報を入力して下さい</h2> */}
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</div>
		// </div>
	)
}
