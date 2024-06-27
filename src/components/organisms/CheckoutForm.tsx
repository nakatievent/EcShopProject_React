import React, { useEffect, useState, FormEvent } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe, Appearance, StripeElementsOptions, StripePaymentElementOptions } from '@stripe/stripe-js'

export default function CheckoutForm() {
	const stripe = useStripe()
	const elements = useElements()

	const [message, setMessage] = useState<string|null|undefined>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		if (!stripe) {
			return
		}

		const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')
		
		if (!clientSecret) {
			return
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent?.status) {
				case 'succeeded':
					setMessage('Payment succeeded!')
					break
				case 'processing':
					setMessage('Your payment is processing.')
					break
				case 'requires_payment_method':
					setMessage('Your payment was not successful, please try again.')
					break
				default:
					setMessage('Something went wrong.')
					break
			}
		})
	}, [stripe])

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!stripe || !elements) {
			return
		}

		setIsLoading(true)

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: 'http://localhost:3000/payment-complite'
			}
		})

		if (error.type === 'card_error' || error.type === 'validation_error') {
			setMessage(error.message)
		} else {
			setMessage('An unexpected error occurred.')
		}

		setIsLoading(false)
	}

	const paymentElementOptions: StripePaymentElementOptions = {
		layout: 'accordion',
	}

	return (
		<form id="payment-form" onSubmit={handleSubmit} style={styles.form}>
			<PaymentElement id="payment-element" options={paymentElementOptions} />
			<button disabled={isLoading || !stripe || !elements} id="submit" style={styles.button}>
				<span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : '決済を行う'}</span>
			</button>
			{message && <div id="payment-message">{message}</div>}
		</form>
	)
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: '#f7f7f7'
	},
	form: {
		maxWidth: '400px',
		margin: '0 auto',
		padding: '20px',
		border: '1px solid #ccc',
		borderRadius: '10px',
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
		backgroundColor: '#fff'
	},
	button: {
		width: '100%',
		padding: '10px',
		backgroundColor: '#007bff',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		fontSize: '16px',
		transition: 'background-color 0.3s'
	},
	buttonDisabled: {
		width: '100%',
		padding: '10px',
		backgroundColor: '#ccc',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		cursor: 'not-allowed',
		fontSize: '16px'
	},
	spinner: {
		width: '20px',
		height: '20px',
		border: '2px solid #fff',
		borderTop: '2px solid #007bff',
		borderRadius: '50%',
		animation: 'spin 1s linear infinite'
	},
	message: {
		marginTop: '20px',
		padding: '10px',
		border: '1px solid #d4edda',
		borderRadius: '5px',
		backgroundColor: '#d4edda',
		color: '#155724'
	}
}
