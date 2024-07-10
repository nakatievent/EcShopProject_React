import React, { FC, useContext, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from 'components/organisms/CheckoutForm'
import { usePaymentIntent } from 'hooks/useCreatePaymentIntent'
import { CartContext } from 'hooks/CartContext'

export const Payment: FC = () => {
	const [showForm, setShowForm] = useState<boolean>(false)

	const cartContext = useContext(CartContext)
	const { cartTotal } = cartContext

	const { clientSecret, error, isLoading, appearance, options } = usePaymentIntent(cartTotal)

	return (
		<div>
			<div className="flex items-center mb-4">
				<input
					type="radio"
					id="creditCard"
					name="paymentMethod"
					value="creditCard"
					className="hidden"
					onClick={() => setShowForm(true)}
				/>
				<label htmlFor="creditCard" className="flex items-center cursor-pointer text-lg">
					<span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-400 flex-no-shrink"></span>
					クレジットカード
				</label>
			</div>
			<div className="flex items-center mb-4">
				<input
					type="radio"
					id="cashOnDelivery"
					name="paymentMethod"
					value="cashOnDelivery"
					className="hidden"
					onClick={() => setShowForm(true)}
				/>
				<label htmlFor="cashOnDelivery" className="flex items-center cursor-pointer text-lg">
					<span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-400 flex-no-shrink"></span>
					代金引換
				</label>
			</div>

			<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
				<input
					id="bordered-radio-1"
					type="radio"
					value=""
					name="bordered-radio"
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					onClick={() => setShowForm(true)}
				/>
				<label
					htmlFor="bordered-radio-1"
					className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					Default radio
				</label>
			</div>
			<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
				<input
					checked
					id="bordered-radio-2"
					type="radio"
					value=""
					name="bordered-radio"
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label
					htmlFor="bordered-radio-2"
					className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					Checked state
				</label>
			</div>

			{/* {showForm && clientSecret ? (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			) : null} */}
		</div>
	)
}
