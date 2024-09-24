import React, { FC } from 'react'
import { Category } from 'types/Category'
import { useFetchCategoryList } from 'hooks/useFetchCategoryList'

export const CategoryList: FC = () => {
	const { data, error, isLoading } = useFetchCategoryList()
	
	if (error || isLoading) {
		return <span>{error ?`Error: ${error.message}` : 'Loading...'}</span>
	}

	return (
		<div className="w-auto row-span-3 col-span-3 sm:col-span-1">
			<div className="rounded-lg">
				<h1 className="text-lg font-bold mb-4">カテゴリーリスト</h1>
				<ul className="space-y-2">
					{data &&
						data.map((item: Category) => (
							<a href={`/category-product/${item.id}`} key={item.id}>
								<li className="text-sm mt-2 text-gray-500 hover:text-gray-700 hover:underline">{item.name}</li>
							</a>
						))}
				</ul>
			</div>
		</div>
	)
}
