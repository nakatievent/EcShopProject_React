import React, { useContext, memo } from 'react'
import { api } from 'lib/appClient'
import { useQuery } from '@tanstack/react-query'
import { CartContext } from 'hooks/CartContext'

const products = [
	{ id: 1, name: 'Product 1', price: 100 },
	{ id: 2, name: 'Product 2', price: 200 },
	{ id: 3, name: 'Product 3', price: 300 }
]

export const Sample = memo(() => {
	const cartContext = useContext(CartContext)

	console.log(cartContext)

	if (!cartContext) {
		throw new Error('CartContext not found')
	}

	const { addToCart } = cartContext

	return (
		<div>
			<h2>Products</h2>
			{products.map((product) => (
				<div key={product.id}>
					<h3>{product.name}</h3>
					<p>Price: ${product.price}</p>
					<button onClick={() => addToCart(product)}>Add to Cart</button>
				</div>
			))}
		</div>
	)
})
