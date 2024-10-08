import React, { FC, useState, useContext, ChangeEvent } from 'react'
import { CartContext } from 'hooks/CartContext'
import { useForm, SubmitHandler } from 'react-hook-form'
import { InputAdressForm } from 'types/User'
import { Navigate } from 'react-router-dom'

export const InputAdress: FC = () => {
	const [inputData, setInputData] = useState<any>()
	const [address, setAddress] = useState<string>('')
	const [navigate, setNavigate] = useState<boolean>(false)
	const [postalCode, setPostalCode] = useState<string>('')

	// カート情報
	const cartContext = useContext(CartContext)
	const { cart, cartTotal } = cartContext

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<InputAdressForm>()

	const handlePostalCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const code = event.target.value
		setPostalCode(code)

		if (code.length === 7) {
			fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${code}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.results) {
						const result = data.results[0]
						setAddress(`${result.address1}${result.address2}${result.address3}`)
					}
				})
		} else {
			setAddress('')
		}
	}

	const onSubmit: SubmitHandler<InputAdressForm> = async (sendData: InputAdressForm) => {
		await setInputData(sendData)
		await setNavigate(true)
	}

	if (navigate) {
		return <Navigate to="/payment-form" state={{ state: inputData }} />
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#f2f2f2] text-gray-800 font-roboto">
			<div className="my-5 w-full max-w-[760px] p-8 bg-white rounded-3xl shadow-xl">
				<h2 className="text-center mb-6 text-lg lg:text-2xl font-bold text-[#2c3e50]">注文情報を入力してください</h2>
				<form className="space-y-6" method="POST" onSubmit={handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 gap-2">
						<label className="flex items-center text-[#2c3e50]">お名前</label>
						<div className="grid grid-cols-2 gap-2">
							<div className="flex flex-col gap-2">
								<input
									className="bg-white border border-gray-300 p-3 rounded-md"
									type="text"
									placeholder="姓"
									{...register('firstName', {
										required: '必須項目です',
										maxLength: {
											value: 255,
											message: '最大255文字です'
										}
									})}
								/>
								{errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
							</div>
							<div className="flex flex-col gap-2">
								<input
									className="bg-white border border-gray-300 p-3 rounded-md"
									type="text"
									placeholder="名"
									{...register('lastName', {
										required: '必須項目です',
										maxLength: {
											value: 255,
											message: '最大255文字です'
										}
									})}
								/>
								{errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-2">
						<label className="flex items-center text-[#2c3e50]">郵便番号</label>
						<input
							value={postalCode}
							className="bg-white border border-gray-300 p-3 rounded-md"
							type="text"
							{...register('postalCode', {
								required: '必須項目です',
								maxLength: {
									value: 255,
									message: '最大255文字です'
								}
							})}
							onChange={handlePostalCodeChange}
						/>
						{errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode.message}</span>}
					</div>
					<div className="grid grid-cols-1 gap-2">
						<label className="flex items-center text-[#2c3e50]">住所</label>
						<input
							value={address}
							readOnly
							className="bg-white border border-gray-300 p-3 rounded-md"
							type="text"
							{...register('address', {
								maxLength: {
									value: 255,
									message: '最大255文字です'
								}
							})}
						/>
						{errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
					</div>
					<div className="grid grid-cols-1 gap-2">
						<label className="flex items-center text-[#2c3e50]">電話番号</label>
						<input
							className="bg-white border border-gray-300 p-3 rounded-md"
							type="text"
							{...register('phone', {
								required: '必須項目です',
								maxLength: {
									value: 255,
									message: '最大255文字です'
								}
							})}
						/>
						{errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
					</div>
					<div className="grid grid-cols-1 gap-2">
						<label className="flex items-center text-[#2c3e50]">お届け日</label>
						<input
							name="deliveryDate"
							className="bg-white border border-gray-300 p-3 rounded-md"
							type="text"
							placeholder="例: 7月4日〜7月10日予定"
						/>
					</div>
					<div className="grid grid-cols-1 gap-2">
						<label className="flex items-center text-[#2c3e50]">メールアドレス</label>
						<input
							className="bg-white border border-gray-300 p-3 rounded-md"
							type="email"
							placeholder="例: example@example.com"
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
					<div className="grid grid-cols-1 gap-2">
						<label className="flex items-center text-[#2c3e50]">メールアドレス（確認用）</label>
						<input
							// name="email"
							className="bg-white border border-gray-300 p-3 rounded-md"
							type="email"
							placeholder="例: example@example.com"
							{...register('confirmEmail', {
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
						{errors.confirmEmail && <span className="text-red-500 text-sm">{errors.confirmEmail.message}</span>}
					</div>
					<div>
						<label className="flex items-center text-[#2c3e50]">購入商品</label>
						{cart.map((product: any) => (
							<div key={product.id} className="grid grid-cols-1 gap-2 mt-3">
								<div className="flex justify-between items-center">
									<img src={product.image_url} alt="購入商品の画像" className="w-[70px] h-[70px] object-cover rounded-md" />
									<div className="text-right text-[#565656]">
										<p className="text-sm">商品名: {product.name}</p>
										<p className="text-sm">個数: {product.count || 1}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div>
						<div className="border-t border-gray-300 my-6"></div>
						<div className="space-y-2 text-right text-[#565656]">
							<p className="text-sm">商品合計（税込）: {cartTotal}円</p>
							<p className="text-sm">送料: 330円</p>
							<p className="text-sm">合計（税込）: {cartTotal + 330}円</p>
						</div>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="w-full bg-[#4a90e2] text-white px-6 py-3 rounded-md hover:bg-[#357ABD] transition-all duration-200"
						>
							決済情報選択画面へ進む
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
