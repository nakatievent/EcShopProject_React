import React, { memo } from 'react'
import { api } from 'lib/appClient'
import { useQuery } from '@tanstack/react-query'

export const Sample = memo(() => {
	const { isPending, error, data, isFetching } = useQuery({
		queryKey: ['repoData'],
		queryFn: () => api.get('/').then((res) => res.data)
	})

	if (isPending) return <div>データを取得中です</div>

	if (error) return <div>エラーが発生しました</div>

	console.log(data)

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.id}</p>
			<strong>👀 {data.userId}</strong> <strong>✨ {data.title}</strong> <strong>🍴 {data.forks_count}</strong>
			<div>{isFetching ? 'Updating...' : ''}</div>
		</div>
	)

	return <p>Homeページです</p>
})
