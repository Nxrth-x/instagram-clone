import React from 'react'
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { FiHeart } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="border py-2 sticky top-0 bg-white">
      <div className="px-4 lg:px-0 max-w-[900px] mx-auto flex items-center justify-between">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
        <input
          type="text"
          className="hidden md:block px-4 py-1 border text-xs outline-none text-center rounded-sm"
          placeholder="Pesquisar "
        />
        <div className="flex gap-2 md:gap-4">
          <AiFillHome className="w-6 h-6" />
          <IoPaperPlaneOutline className="w-6 h-6" />
          <AiOutlineCompass className="w-6 h-6" />
          <FiHeart className="w-6 h-6" />
          <img
            src="https://avatars.githubusercontent.com/u/64004309?v=4"
            alt="Usuário"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </header>
  )
}
