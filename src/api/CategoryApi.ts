import { api } from 'lib/appClient'
import { ResponseUser, ResponseJson } from 'types/User'

const getCategoryList = async () => {
	const { data } = await api.get('/api/categories/list')
	return data
}

const getProductInCategory = async (categoryId: number) => {
	const { data } = await api.get(`/api/categories/${categoryId}/products`)
	return data
}

export { getCategoryList, getProductInCategory }
