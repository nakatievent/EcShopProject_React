import React, { FC, createContext, useState, ReactNode, useEffect } from 'react';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from 'utils/localStorageHelpers';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  cartTotal: number;
  fixCartData: Array<Product|unknown>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Array<Product>>(loadCartFromLocalStorage());
  
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  // カートに商品を追加
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  // カートから商品を削除
  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // カートを空にする
  const clearCart = () => {
    setCart([]);
  };

  // カートの合計金額
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  
  // カート内の同じ商品をグルーピング
  const groupByCartData = cart.reduce((previousValue: any, currentValue: any) => {
    if (!previousValue[currentValue.name]) {
      previousValue[currentValue.name] = { ...currentValue, count: 1 }
    } else {
      previousValue[currentValue.name].price += currentValue.price
      previousValue[currentValue.name].count += 1;
    }
    return previousValue
  }, {})  
  
  // グループ化したカートデータを配列に変換
  const fixCartData = Object.values(groupByCartData);
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, fixCartData }}>
      {children}
    </CartContext.Provider>
  )
}
