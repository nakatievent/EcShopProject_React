import React, { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import { Navigate } from 'react-router-dom'
import { InputLoginForm } from 'types/User'
import * as api from 'api/CategoryApi'
import { useAuth } from 'hooks/AuthContext'
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query'

export const CategoryProduct: FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  
	const { isPending, error, data } = useQuery({
    queryKey: ['productsDetail'],
    queryFn: () =>
      api.getProductInCategory(Number(categoryId))
  })

	if (isPending) {
		return <span>Loading...</span>
	}

	if (error) {
		return <span>Error: {error.message}</span>
	}
	
	console.log(data)

	return (
		<>

		</>
	)
}
