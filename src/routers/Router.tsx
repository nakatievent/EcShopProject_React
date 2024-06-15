import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Login } from 'pages/Login'
import { Main } from 'pages/Main'
import { MyPage } from 'pages/MyPage'
import { ProductDetail } from 'pages/ProductDetail'
import { Register } from 'pages/Register'
import { Cart } from 'pages/Cart'


export const Router = createBrowserRouter([
	{
		path: 'login',
		element: <Login />
	},
	{
		path: '/',
		element: <Main />
	},
	{
		path: '/mypage',
		element: <MyPage />
	},
	{
		path: '/product-detail',
		element: <ProductDetail />
	},
	{
		path: '/register',
		element: <Register />
	}, {
		path: '/cart',
		element: <Cart />
	}, {
		//   path: '/sign-up',
		//   element: <SignUp />
		// }, {
		//   path: '/top',
		//   element: <Top />
	}
])
