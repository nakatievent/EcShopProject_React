import React, { FC, useState } from 'react'

export const InputAdress: FC = () => {
	return (
		<div className="w-4/5 mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-6">お届け先の入力</h1>
			<form className="flex flex-col sm:grid sm:grid-rows-3 sm:grid-flow-col sm:gap-4 ">
				<div className="row-span-3 col-span-2">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
								氏名（姓）
							</label>
							<input
								type="text"
								id="last-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
								required
							></input>
						</div>
						<div>
							<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
								氏名（名）
							</label>
							<input
								type="text"
								id="first-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
								required
							></input>
						</div>
						<div>
							<label htmlFor="kana" className="block text-sm font-medium text-gray-700">
								カナ（姓）
							</label>
							<input
								type="text"
								id="kana"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
								required
							></input>
						</div>
						<div>
							<label htmlFor="kana-name" className="block text-sm font-medium text-gray-700">
								カナ（名）
							</label>
							<input
								type="text"
								id="kana-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
								required
							></input>
						</div>
					</div>
					<div className="mt-3">
						<label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
							郵便番号
						</label>
						<input
							type="text"
							id="postal-code"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
							required
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="prefecture" className="block text-sm font-medium text-gray-700">
							都道府県
						</label>
						<input
							type="text"
							id="prefecture"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
							required
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="city" className="block text-sm font-medium text-gray-700">
							市町村
						</label>
						<input
							type="text"
							id="city"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
							required
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="address" className="block text-sm font-medium text-gray-700">
							それ以降の番地
						</label>
						<input
							type="text"
							id="address"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
							required
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="building" className="block text-sm font-medium text-gray-700">
							建物名・部屋番号
						</label>
						<input
							type="text"
							id="building"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
							電話番号
						</label>
						<input
							type="text"
							id="phone"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
							required
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							ご注文情報送信先メールアドレス
						</label>
						<input
							type="email"
							id="email"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
							required
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="confirm-email" className="block text-sm font-medium text-gray-700">
							ご注文情報送信先メールアドレス（確認用）
						</label>
						<input
							type="email"
							id="confirm-email"
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
							required
						></input>
					</div>
				</div>
				<div className="col-span-1 mb-10 sm:pl-8">
					<div className="mt-6">
						<div className="border p-4">
							<div className="text-lg font-bold">合計</div>
							<div className="text-2xl font-bold text-gray-800">4273円</div>
							<div className="text-sm text-gray-500">送料 500円</div>
							<button type="submit" className="mt-4 w-full bg-slate-900 text-white py-2 rounded-md">
								注文内容を確認する
							</button>
						</div>
						<div className="mt-4 text-center">
							<a href="#" className="text-blue-500">
								前のページへ戻る
							</a>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}
