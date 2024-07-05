import React, { FC, useState } from 'react'
import { useFetchCategoryProduct } from 'hooks/useFetchCategoryProduct'
import { useParams } from 'react-router-dom'

export const CategoryProduct: FC = () => {
	const { categoryId } = useParams<{ categoryId: string }>()
	const { data, error, isError, isLoading, isFetched } = useFetchCategoryProduct()

	if (isLoading) {
		return <div></div>
	}

	if (error) {
		return <span>Error: {error.message}</span>
	}

	return (
		<>
			<div className="row-span-3 col-span-2">
				<div className="bg-white">
					<div className="mx-auto max-w-2xl sm:mt-0 mt-8 lg:max-w-7xl lg:px-8">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900">カテゴリー{categoryId}の商品一覧</h2>

						<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
							{data &&
								data.map((product: any) => (
									<div key={product.id} className="group relative">
										<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
											<img
												src={product.image_url}
												alt={product.image_alt}
												className="h-full w-full object-cover object-center lg:h-full lg:w-full"
											/>
										</div>
										<div className="mt-4 flex justify-between">
											<div>
												<h3 className="text-sm text-gray-700">
													<a href={`/product-detail/${product.id}`}>
														<span aria-hidden="true" className="absolute inset-0" />
														{product.name}
													</a>
												</h3>
											</div>
											<p className="text-sm font-medium text-gray-900">{product.price.toLocaleString()}&#160;円</p>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
