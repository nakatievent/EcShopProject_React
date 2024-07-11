import React, { FC } from 'react'
import { Header } from 'components/organisms/Header'
import { ProductList } from 'components/organisms/ProductList'
import { CategoryList } from 'components/organisms/CategoryList'
import { Hero } from 'components/organisms/Hero'

export const Main: FC = () => {
	return (
		<>
			<div className="min-h-full">
				<Header />

				<main>
					<Hero />

					<div className="w-4/5 mx-auto mt-5">
						<div className="grid sm:grid-rows-3 sm:grid-flow-col gap-4 xl:m-10">
							<CategoryList />
							<ProductList />
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
