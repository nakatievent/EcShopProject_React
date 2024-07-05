import React, { useContext, memo } from 'react'
import { api } from 'lib/appClient'
import { useQuery } from '@tanstack/react-query'
import { CartContext } from 'hooks/CartContext'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentForm } from 'components/organisms/PaymentForm'
// import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
	'pk_test_51Mh5klHJVPH1M5dhqhz8JrT28zYHB4qMm82srnsoUQgR3apo3Ejy6TSgihrwRZ5BsSFnQBZyRoS93jXRSAobjcad00n9xO218T'
)

const products = [
	{ id: 1, name: 'Product 1', price: 100 },
	{ id: 2, name: 'Product 2', price: 200 },
	{ id: 3, name: 'Product 3', price: 300 }
]

export const Sample2 = memo(() => {
	// const stripe = useStripe()
	// const elements = useElements()

	// const cardElement = elements?.getElement("card");

	// const cardNumberElement = elements!.create('cardNumber')
	// const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')
	// document.querySelector('#card-number') && cardNumberElement.mount('#card-number')

	// const images = [
	//   {
	//     src: "image1.jpg",
	//     alt: "group of people",
	//     header: "Da-iCE × WIND AND SEA",
	//     description: "好評につき全アイテム再販 7/12(金)まで",
	//   },
	//   {
	//     src: "image2.jpg",
	//     alt: "shoes product",
	//     header: "大注目のオニツ力タイガー",
	//     description: "履きやすさとトレンドを抑えたサンダルが勢揃い！",
	//   },
	//   {
	//     src: "image3.jpg",
	//     alt: "illustration of a person with an umbrella",
	//     header: "雨の日も快適！おすすめレイングッズ",
	//     description: "レインコートやシューズ、撥水加工アイテムなど",
	//   },
	// ];

	// const [currentIndex, setCurrentIndex] = React.useState(0);

	// const handlePrev = () => {
	//   setCurrentIndex((prevIndex) =>
	//     prevIndex === 0 ? images.length - 1 : prevIndex - 1
	//   );
	// };

	// const handleNext = () => {
	//   setCurrentIndex((prevIndex) =>
	//     prevIndex === images.length - 1 ? 0 : prevIndex + 1
	//   );
	// };

	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	)
})
