import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { registerUser } from '../helpers/requests/auth'
import { preventDefault } from '../helpers/ui-events'
import useFormFields from '../hooks/useFormFields'

export default function RegisterPage() {
  const [formFields, registerFormFields] = useFormFields({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState(false)

  const handleSubmit = async () => {
    const registrationFormParams = {
      first_name: formFields.firstName,
      last_name: formFields.lastName,
      username: formFields.username,
      email: formFields.email,
      password: formFields.password,
    }

    try {
      await registerUser(registrationFormParams)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="mx-auto max-w-xs flex flex-col h-screen items-center justify-center text-sm text-gray-700">
      <div className="p-8 border mb-4">
        <img
          className="w-3/4 mx-auto"
          src="https://marcas-logos.net/wp-content/uploads/2020/01/Instagram-Logo.png"
          alt="Instagram"
        />
        <h2 className="font-semibold text-gray-500 text-base text-center mb-4">
          Cadastre-se para ver fotos e<br /> vídeos dos seus amigos
        </h2>
        <hr />
        <form
          onSubmit={preventDefault(handleSubmit)}
          className="flex flex-col mt-4"
        >
          <input
            className="mb-2 px-4 py-2 border text-xs outline-none"
            type="text"
            placeholder="Primeiro nome"
            {...registerFormFields('firstName')}
          />
          <input
            className="mb-2 px-4 py-2 border text-xs outline-none"
            type="text"
            placeholder="Segundo nome"
            {...registerFormFields('lastName')}
          />
          <input
            className="mb-2 px-4 py-2 border text-xs outline-none"
            type="text"
            placeholder="Nome de usuário"
            pattern="[\w\d\-]{4,16}"
            title="Nome de usuário deve conter apenas letras, números e '-', '_'."
            {...registerFormFields('username')}
          />
          <input
            className="mb-2 px-4 py-2 border text-xs outline-none"
            type="email"
            placeholder="Email"
            {...registerFormFields('email')}
          />
          <input
            className="mb-4 px-4 py-2 border text-xs outline-none"
            type="password"
            placeholder="Senha"
            pattern=".{8,}"
            title="A senha deve conter pelo menos 8 caracteres"
            {...registerFormFields('password')}
          />
          <button className="py-2 mb-4 bg-blue-500 text-white font-semibold rounded ">
            Cadastrar-se
          </button>
        </form>
        {error && (
          <p className="p-2 mb-4 border bg-red-100 border-red-300 text-xs text-center">
            Erro ao cadastrar, verifique os campos.
          </p>
        )}
        <p className="text-center text-xs">
          Ao se cadastrar, você concorda com nossos termos, política de dados e
          política de cookies
        </p>
      </div>
      <div className="py-4 px-8 mb-4 w-full border text-xs text-center">
        Tem uma conta?{' '}
        <Link className="text-blue-500" to="/">
          Conecte-se
        </Link>
      </div>
      <div>
        <p className="text-sm text-center mb-2">Obtenha o aplicativo</p>
        <div className="grid grid-cols-2 gap-2 px-4">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_portuguese-brazilian-pt_br.png/68006a2bb372.png"
            alt="App store"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_portuguese_brazilian-pt_BR.png/2f2a0c05b2f3.png"
            alt="Google "
          />
        </div>
      </div>
    </div>
  )
}
