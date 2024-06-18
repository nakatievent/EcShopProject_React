import { api } from 'lib/appClient'
import { ResponseUser, ResponseJson } from 'types/User'

const getAllProducts = async () => {
	const { data } = await api.get('/api/products/list')
	return data
}

const getProductDetail = async () => {
	const { data } = await api.get<ResponseUser>('/api/user')
	return data
}

const getProductSearch = async ({ email, password }: { email: string; password: string }) => {
	const { data } = await api.post<ResponseJson>('/login', { email, password })
	return data
}

export { getAllProducts, getProductDetail, getProductSearch }
