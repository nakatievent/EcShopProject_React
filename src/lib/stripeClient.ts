import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise: Stripe | null | Promise<Stripe | null>

export const getStripePromise = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!)
	}
	return stripePromise
}
