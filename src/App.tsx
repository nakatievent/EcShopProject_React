import React, { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from 'routers/Router'
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/reactQuery'
import { AuthProvider } from 'hooks/AuthContext'
import { CartProvider } from 'hooks/CartContext'
import { getStripePromise } from 'lib/stripeClient'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = getStripePromise()

const App: FC = () => {
	return (
		<AuthProvider>
			<CartProvider>
				<QueryClientProvider client={queryClient}>
					<Elements stripe={stripePromise}>
						<RouterProvider router={Router} />
					</Elements>
				</QueryClientProvider>
			</CartProvider>
		</AuthProvider>
	)
}

export default App
