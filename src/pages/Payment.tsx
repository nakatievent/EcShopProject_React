import React, { FC, useContext, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from 'components/organisms/CheckoutForm'
import { usePaymentIntent } from 'hooks/useCreatePaymentIntent'
import { CartContext } from 'hooks/CartContext'

export const Payment: FC = () => {
	const [showForm, setShowForm] = useState<boolean>(false)

	const cartContext = useContext(CartContext)
	const { cartTotal } = cartContext

	const { clientSecret, error, isLoading, appearance, options } = usePaymentIntent(cartTotal)

	return (
		<></>
	)
}
