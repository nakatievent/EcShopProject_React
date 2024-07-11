interface Product {
	id: number
	name: string
	brand: string
	image_url: string
	image_alt?: string
	price: number
	count?: number
}

export type { Product }
