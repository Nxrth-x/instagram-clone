import api from '../../services/api'

type TokenResponse = {
  access: string
  refresh: string
}

/**
 * ## Gets the authentication token from the backend
 *
 * @param email User's email
 * @param password User's password
 * @returns Token object in case of a successfull request
 */
export const getAuthenticationToken = async (
  email: string,
  password: string
): Promise<TokenResponse> => {
  const { data } = await api.post('auth/token/', {
    email,
    password,
  })

  return data
}

type RegisterForm = {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
}

type RegisterFormResponse = {
  username: string
  first_name: string
  last_name: string
  email: string
}

/**
 * ## Registers a user in the backend
 *
 * @param registerForm User's input to make the registration request in the API
 * @returns User's info in case the request is successfull
 */
export const registerUser = async (
  registerForm: RegisterForm
): Promise<RegisterFormResponse> => {
  const { data } = await api.post('auth/register/', registerForm)
  return data
}
