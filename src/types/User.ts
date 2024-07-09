type ResponseUser = {
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

type InputAdressForm = {
	firstName: string
	lastName: string
	address: string
	postalCode: string
	phone: string
	email: string
	confirmEmail: string
}

export type { ResponseUser, ResponseJson, InputLoginForm, InputAdressForm }
