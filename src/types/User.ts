type User = {
	email: string
	password: string
}

type ResponseJson = {
	success: boolean
	message: string
}

type InputLoginForm = {
	email: string
	password: string
}

export type { User, ResponseJson, InputLoginForm }
