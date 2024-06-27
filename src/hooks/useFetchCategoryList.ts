import * as api from 'api/CategoryApi'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export const useFetchCategoryList = () => {
	const { data, error, isError, isLoading, isFetched } = useQuery({
		queryKey: ['categoryList'],
		queryFn: () => api.getCategoryList().then((response) => response.data)
	})

	return { data, error, isError, isLoading, isFetched }
}
