import React, { FC, useState } from 'react'
import { useFetchCategoryProduct } from 'hooks/useFetchCategoryProduct'
import { useParams } from 'react-router-dom'

const mockData = {
  name: "山田 太郎",
  postal_code: "123-4567",
  address: "東京都渋谷区神南1-1-1",
  phone_number: "090-1234-5678",
  delivery_date: "7月4日〜7月10日予定",
  payment_method: "クレジットカード",
  card_number: "1234-5678-9012-3456",
  security_code: "123",
  expiration_month: "1月",
  expiration_year: "2024年",
  product_name: "商品A",
  product_quantity: 1,
  product_image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  total_price: "15,400円",
  shipping_fee: "330円",
  total_payment: "15,730円",
};

export const Confirm: FC = () => {

	return (
		<>
    <div className="min-h-screen bg-[#f2f2f2] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <h2 className="text-2xl font-bold text-center mb-6 font-roboto">注文情報確認</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-roboto">お名前</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.name}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">郵便番号</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.postal_code}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">住所</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.address}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">電話番号</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.phone_number}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">お届け日</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.delivery_date}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">お支払い方法</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.payment_method}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">カード番号</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.card_number}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">セキュリティコード</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.security_code}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-roboto">有効期限</label>
            <p className="w-full px-4 py-2 rounded-md bg-white font-roboto">{mockData.expiration_month} / {mockData.expiration_year}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-roboto">購入商品</h3>
            <div className="flex items-center space-x-4 py-2">
              <img src={mockData.product_image} className="w-[70px] h-[70px] object-cover rounded" alt="購入商品の画像"/>
              <div className="space-y-1">
                <p className="text-gray-700 font-roboto border-none">商品名: {mockData.product_name}</p>
                <p className="text-gray-500 font-roboto border-none">個数: {mockData.product_quantity}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* <h3 className="text-gray-700 font-roboto">料金</h3> */}
            <div className="space-y-1 text-right">
              <p className="text-gray-700 font-roboto font-bold">商品合計（税込）: {mockData.total_price}</p>
              <p className="text-gray-700 font-roboto font-bold">送料: {mockData.shipping_fee}</p>
              <p className="text-gray-700 font-roboto font-bold">合計（税込）: {mockData.total_payment}</p>
            </div>
          </div>
          <button className="w-full text-center text-white bg-blue-500 px-4 py-2 rounded-md font-roboto">注文を確定する</button>
        </div>
      </div>
    </div>
		</>
	)
}
