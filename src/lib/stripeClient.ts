import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

const getStripePromise = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!)
	}
	return stripePromise
}

export default getStripePromise
