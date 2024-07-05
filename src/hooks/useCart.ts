import { useState, useEffect, useContext } from 'react'
import { CartContext } from './CartContext'
import { useNavigate } from 'react-router-dom'

export const useCart = (total_price: number) => {
	const cartContext = useContext(CartContext)

	if (!cartContext) {
		throw new Error('CartContext not found')
	}

	const [groupedCartData, setGroupedCartData] = useState<any[]>([])

	useEffect(() => {
		const groupByCartData = cartContext.cart.reduce((previousValue: any, currentValue: any) => {
			if (!previousValue[currentValue.name]) {
				previousValue[currentValue.name] = { ...currentValue }
			} else {
				previousValue[currentValue.name].price += currentValue.price
			}
			return previousValue
		}, {})

		setGroupedCartData(Object.values(groupByCartData))
	}, [cartContext.cart])

	return groupedCartData
}
