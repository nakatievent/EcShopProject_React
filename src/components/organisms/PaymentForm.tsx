import { FC } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from 'components/organisms/CheckoutForm'
import { getStripePromise } from 'lib/stripeClient'

export const PaymentForm: FC = () => {
	const stripePromise = getStripePromise()
	
	return (
		<div className="flex h-screen items-center justify-center">
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</div>
	)
}
