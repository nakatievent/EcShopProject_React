import * as api from 'api/CategoryApi'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export const useFetchCategoryProduct = () => {
	const { categoryId } = useParams<{ categoryId: string }>()

	const { data, error, isError, isLoading, isFetched } = useQuery({
		queryKey: ['categoryProduct'],
		queryFn: () => api.getProductInCategory(Number(categoryId)).then((response) => response.data)
	})

	return { data, error, isError, isLoading, isFetched }
}
