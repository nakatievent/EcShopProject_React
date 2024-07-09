import { api } from 'lib/appClient'
import { ResponseJson } from 'types/User'

const getAllProducts = async () => {
	const { data } = await api.get('/api/products/list')
	return data
}

const getProductDetail = async (productId: number) => {
	const { data } = await api.get(`/api/products/detail/${productId}`)
	return data
}

const getProductSearch = async ({ email, password }: { email: string; password: string }) => {
	const { data } = await api.post<ResponseJson>('/login', { email, password })
	return data
}

export { getAllProducts, getProductDetail, getProductSearch }
