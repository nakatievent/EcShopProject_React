import { api } from 'lib/appClient'
import { ResponseUser, ResponseJson } from 'types/User'

const createPaymentIntent = async ({ total_price }: { total_price: number }) => {
	const { data } = await api.post('/api/payments/create', { total_price })
	return data
}

export { createPaymentIntent }
