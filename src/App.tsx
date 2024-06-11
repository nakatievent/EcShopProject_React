import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom'
import { Router } from './routers/Router'
import './App.css';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={Router} />
		</QueryClientProvider>
	)
}

export default App;
