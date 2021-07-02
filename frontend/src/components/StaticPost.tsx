import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {
  IoPaperPlaneOutline,
  IoChatbubbleOutline,
  IoBookmarkOutline,
} from 'react-icons/io5'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

export default function StaticPost() {
  return (
    <div className="md:border rounded mb-4 md:mb-8">
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://i.ytimg.com/vi/ErWGV-w_9pk/hqdefault.jpg"
            className="w-8 h-8 object-cover rounded-full"
          />
          <div className="flex flex-col text-sm">
            <p className="font-semibold leading-none">mercedesamgf1</p>
            <p className="text-xs">Spielberg, Austria.</p>
          </div>
        </div>
        <HiOutlineDotsHorizontal />
      </div>
      <div className="w-full">
        <img
          className="w-full aspect-1-to-1 object-cover"
          src="https://as.sobrenet.pt/s/image/tsr/brandm/content/1920x1280/q5draew2mcb2wxpoc514vs3uw22.jpg"
          alt="None"
        />
      </div>
      <div className="px-4 py-2">
        <div className="flex justify-between mb-2">
          <div className="flex gap-4">
            <FiHeart className="w-6 h-6" />
            <IoChatbubbleOutline className="w-6 h-6" />
            <IoPaperPlaneOutline className="w-6 h-6" />
          </div>
          <IoBookmarkOutline className="w-6 h-6" />
        </div>
        <div className="text-sm mb-2">
          <p className="mb-2">
            <b className="font-semibold">mercedesamgf1</b> NSFW
          </p>
          <p className="text-gray-500 cursor-pointer hover:underline mb-2">
            Ver todos os comentários
          </p>
          <div className="mb-2">
            <p>
              <b className="font-semibold">Someone</b> Nice car bro
            </p>
            <p>
              <b className="font-semibold">Ryan</b> 🔥🔥🔥
            </p>
          </div>
          <p className="text-gray-500 text-xs">Há 12 horas</p>
        </div>
        <hr className="mb-2" />
        <div className="flex items-center gap-4 text-sm">
          <HiOutlineEmojiHappy className="h-8 w-8 text-gray-500" />
          <input
            type="text"
            placeholder="Digite algo"
            className="w-full outline-none"
          />
          <button className="text-blue-500 font-semibold">Publicar</button>
        </div>
      </div>
    </div>
  )
}
