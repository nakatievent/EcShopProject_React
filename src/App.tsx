import React, { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from 'routers/Router'
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/reactQuery'
import { AuthProvider } from 'hooks/AuthContext'
import { CartProvider } from 'hooks/CartContext'

const App: FC = () => {
	return (
		<AuthProvider>
			<CartProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={Router} />
				</QueryClientProvider>
			</CartProvider>
		</AuthProvider>
	)
}

export default App
