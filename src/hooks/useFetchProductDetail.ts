import * as api from 'api/ProductApi'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export const useFetchProductDetail = () => {
	const { productId } = useParams<{ productId: string }>()

	const { data, error, isError, isLoading, isFetched } = useQuery({
		queryKey: ['productId', Number(productId)],
		queryFn: () => api.getProductDetail(Number(productId)).then((response) => response.data)
	})

	return { data, error, isError, isLoading, isFetched }
}
