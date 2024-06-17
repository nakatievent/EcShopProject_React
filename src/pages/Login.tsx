import React, { FC, useState, useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios, { AxiosError } from 'axios'
import { Navigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { InputLoginForm } from 'types/User'
import * as api from 'api/AuthApi'
import { useAuth } from 'hooks/AuthContext'

export const Login: FC = () => {
	const { isAuth, setIsAuth } = useAuth()
	const [navigate, setNavigate] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const { register, handleSubmit, formState: { errors } } = useForm<InputLoginForm>()

	const mutation = useMutation({
		mutationFn: api.login,
		onError: (error: AxiosError) => {
			setErrorMessage('予期せぬエラーが起こりました。')
		},
		onSuccess: (data) => {
			if (data.success) {
				setIsAuth(true)
				setNavigate(true)
			} else {
				setErrorMessage(data.message)
			}
		}
	})

	const onSubmit: SubmitHandler<InputLoginForm> = async (sendData: InputLoginForm) => {
		await api.getCsrfToken().then(response => {
			api.getUser().then(response => {
				console.log(response)
			})
		})
		// console.log(test)
		await mutation.mutate(sendData)
	}

	if (navigate) {
		return <Navigate to="/" />
	}

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ログイン</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
						{errorMessage && <span className="text-red-500 text-sm text-center">{errorMessage}</span>}
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								メールアドレス
							</label>
							<div className="mt-2">
								<input
									id="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									{...register('email', {
										required: '必須項目です',
										pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										maxLength: {
											value: 255,
											message: '最大255文字です'
										},
										minLength: {
											value: 8,
											message: '最小8文字です'
										}
									})}
								/>
								{errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									パスワード
								</label>
								<div className="text-sm">
									<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									{...register('password', {
										required: '必須項目です',
										maxLength: {
											value: 255,
											message: '最大255文字です'
										},
										minLength: {
											value: 8,
											message: '最小8文字です'
										}
									})}
								/>
								{errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								ログイン
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{' '}
						<a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Start a 14 day free trial
						</a>
					</p>
				</div>
			</div>
		</>
	)
}
