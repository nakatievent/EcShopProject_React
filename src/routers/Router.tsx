import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Login } from 'pages/Login'
import { Main } from 'pages/Main'
import { MyPage } from 'pages/MyPage'
import { ProductDetail } from 'pages/ProductDetail'
import { Register } from 'pages/Register'
import { Cart } from 'pages/Cart'
import { CategoryProduct } from 'pages/CategoryProduct'
import { Payment } from 'pages/Payment'
import { InputAdress } from 'pages/InputAdress'
import { Sample } from 'pages/Sample'
import { PaymentComplite } from 'pages/PaymentComplite'

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
		path: '/product-detail/:productId',
		element: <ProductDetail />
	},
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/cart',
		element: <Cart />
	},
	{
		path: '/category-product/:categoryId',
		element: <CategoryProduct />
	},
	{
		path: '/payment',
		element: <Payment />
	},
	{
		path: '/input-adress',
		element: <InputAdress />
	},
	{
		path: '/payment-complite',
		element: <PaymentComplite />
	},
	{
		path: '/sample',
		element: <Sample />
	},
])
