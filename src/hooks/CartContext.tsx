import React, { FC, createContext, useState, ReactNode, useEffect } from 'react'
import { Product } from 'types/Product'
import { loadCartFromLocalStorage, saveCartToLocalStorage } from 'utils/localStorageHelpers'

interface CartContextType {
	cart: Product[]
	addToCart: (product: Product) => void
	removeFromCart: (productId: number) => void
	updateQuantity: (productId: number, newQuantity: number) => void
	clearCart: () => void
	cartTotal: number
}

export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
	children: ReactNode
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
	const [cart, setCart] = useState<Array<Product>>(loadCartFromLocalStorage())

	useEffect(() => {
		saveCartToLocalStorage(cart)
	}, [cart])

	// カートに商品を追加
	const addToCart = (product: Product) => {
		setCart([...cart, product])
	}

	// カートから商品を削除
	const removeFromCart = (productId: number) => {
		setCart(cart.filter((item) => item.id !== productId))
	}

	// 個数を更新
	const updateQuantity = (productId: number, newQuantity: number) => {
		const updatedCart = cart.map((item) => (item.id === productId ? { ...item, count: newQuantity } : item))

		setCart(updatedCart)
	}

	// カートを空にする
	const clearCart = () => {
		setCart([])
	}

	// カートの合計金額(countがない時は初期値として1をセット）
	const cartTotal = cart.reduce((totalPrice, item) => totalPrice + item.price * (item.count || 1), 0)

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal }}>
			{children}
		</CartContext.Provider>
	)
}
