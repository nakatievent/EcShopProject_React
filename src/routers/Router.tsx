import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import { Route, Routes } from "react-router-dom";
// import { Login } from "../components/Login";
// import { Test } from "../components/Test";
// import { SignIn } from "../pages/SignIn";
// import { FailedLogin } from "../pages/FailedLogin";
// import { Memo } from "../pages/Memo";
// import { Sample } from "../pages/Sample";
import { Login } from 'pages/Login'
import { Main } from 'pages/Main'
import { MyPage } from 'pages/MyPage'
import { ProductDetail } from 'pages/ProductDetail'
import { Register } from 'pages/Register'
// import Top from "../pages/Top";
// import { useAuth } from '../hooks/AuthContext';

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
		// }, {
		//   path: '/sign-in',
		//   element: <SignIn />
		// }, {
		//   path: '/sign-up',
		//   element: <SignUp />
		// }, {
		//   path: '/top',
		//   element: <Top />
	}
])
