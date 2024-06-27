import * as api from 'api/ProductApi'
import { useQuery } from '@tanstack/react-query'

export const useFetchAllProducts = () => {
	const { data, error, isError, isLoading, isFetched } = useQuery({
		queryKey: ['allProducts'],
		queryFn: () => api.getAllProducts().then((response) => response.data)
	})

	return { data, error, isError, isLoading, isFetched }
}
