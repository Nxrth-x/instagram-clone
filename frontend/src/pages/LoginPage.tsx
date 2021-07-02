import React from 'react'

import useForm from '../hooks/useForm'

import { preventDefault } from '../helpers/ui-events'
import { getAuthenticationToken } from '../helpers/requests/auth'
import useFormFields from '../hooks/useFormFields'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [formFields, registerFormFields] = useFormFields({
    email: '',
    password: '',
  })

  const handleSubmit = async () => {
    console.log(formFields)

    // try {
    //   const { email, password } = formFields
    //   const tokens = await getAuthenticationToken(email, password)
    //   console.log(tokens)
    // } catch (error) {
    //   alert('Erro ao fazer login')
    // }
  }

  const URL =
    'https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png'

  return (
    <div className="max-w-screen-md mx-auto grid grid-cols-5 place-items-center h-screen text-gray-700">
      <div className="col-span-3">
        <img className="w-96" src={URL} alt="Instagram" />
      </div>
      <div className="col-span-2 w-full">
        <div className="p-8 mb-4 border items-center">
          <img
            className="w-3/4 mx-auto"
            src="https://marcas-logos.net/wp-content/uploads/2020/01/Instagram-Logo.png"
            alt="Instagram"
          />
          <form
            onSubmit={preventDefault(handleSubmit)}
            className="flex flex-col"
          >
            <input
              className="mb-4 py-2 px-4 text-xs border  outline-none"
              type="text"
              placeholder="Email"
              {...registerFormFields('email')}
            />
            <input
              className="mb-4 py-2 px-4 text-xs border outline-none"
              type="password"
              placeholder="Senha"
              {...registerFormFields('password')}
            />
            <button
              className="py-2 px-4 bg-blue-500 text-white font-bold rounded text-xs"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
        <div className="py-4 border text-sm mb-4">
          <p className="text-center text-xs">
            Não tem uma conta?{' '}
            <Link className="text-blue-500 font-semibold" to="/register">
              Cadastre-se
            </Link>
          </p>
        </div>
        <div>
          <p className="text-sm text-center mb-4">Obtenha o aplicativo</p>
          <div className="grid grid-cols-2 gap-2 px-4">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_portuguese-brazilian-pt_br.png/68006a2bb372.png"
              alt=""
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_portuguese_brazilian-pt_BR.png/2f2a0c05b2f3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
