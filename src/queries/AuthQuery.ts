import * as api from 'api/AuthApi'
import { queryClient } from 'lib/reactQuery'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

const useUser = () => ({
	queryKey: ['user'],
	queryFn: api.getUser
})

// const { data, isPending } = useQuery({
//   queryKey: ["users"],
//   queryFn: () => axios.get("/issues").then(res => res.data)
// })

interface LoginArgs {
	email: string
	password: string
}

interface LoginData {
	success: boolean
	message: string
}

const useLogin = (options?: UseMutationOptions<LoginData, unknown, LoginArgs>) => {
	return useMutation<LoginData, unknown, LoginArgs>({
		mutationFn: (arg) => api.login(arg),
		onSuccess: (data, variables, context) => {
			queryClient.invalidateQueries({ queryKey: ['login'] })

			if (options?.onSuccess) {
				options.onSuccess(data, variables, context)
			}
		},
		onError: (error, variables, context) => {
			if (options?.onError) {
				options.onError(error, variables, context)
			}
		}
	})
}

// const useLogout = () => {
//   return useMutation(api.logout, {
//     onSuccess: (user: User) => {
//       console.log(user)
//     },
//     onError: () => {
//       toast.error('ログアウトに失敗しました')
//     }
//   })
// }

export {
	useUser,
	useLogin
	// useLogout
}
