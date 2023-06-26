interface RegisterSchema {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

interface LoginSchema {
	email: string
	password: string
}

interface ForgetPasswordSchema {
	email: string
}

interface ResetPasswordSchema {
	password: string
	passwordConfirmation: string
}