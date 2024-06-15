import React, { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from 'routers/Router'
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/reactQuery'

const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={Router} />
		</QueryClientProvider>
	)
}

export default App
