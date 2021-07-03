import React from 'react'
import Header from '../components/Header'

export default function ProfilePage() {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-[900px]">
        <div className="grid grid-cols-3 my-12">
          <div>
            <img
              className="rounded-full w-36 h-36"
              src="https://avatars.githubusercontent.com/u/64004309?v=4"
              alt="r3turn_zero"
            />
          </div>
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-4">
              <h1 className="text-2xl">_gr4ph</h1>
              <button className="px-4 py-2 text-sm font-semibold border rounded-md">
                Editar perfil
              </button>
            </div>
            <div className="flex gap-4 text-lg">
              <p>
                <b>3</b> publicações
              </p>
              <p>
                <b>95</b> Seguidores
              </p>
              <p>
                <b>80</b> Seguindo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
