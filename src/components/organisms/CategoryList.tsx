import React, { FC, useEffect, useState, FormEvent } from "react";
import * as api from 'api/CategoryApi'
import { useQuery } from '@tanstack/react-query'

export const CategoryList: FC = () => {
  const { status, data, error } = useQuery({
    queryKey: ['categoryList'],
    queryFn: () => api.getCategoryList()
  })

  if (status === 'pending') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="w-auto row-span-3 col-span-3 sm:col-span-1">
      <div className="rounded-lg">
        <h1 className="text-lg font-bold mb-4">カテゴリーリスト</h1>
        <ul className="space-y-2">
          {data && data.data.map((item: any) => (
            <a href={`/category-product/${item.id}`} key={item.id}>
              <li className="text-sm mt-2 text-gray-500 hover:text-gray-700 hover:underline">{item.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
