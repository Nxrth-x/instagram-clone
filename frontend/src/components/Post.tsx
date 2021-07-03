import React from 'react'

import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {
  IoPaperPlaneOutline,
  IoChatbubbleOutline,
  IoBookmarkOutline,
} from 'react-icons/io5'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

import { iPost } from '../types'

type PostProps = {
  post: iPost
  handleToggleModal: () => void
  handleOpenDetailModalRequest: (post: iPost) => void
}

export default function Post({
  post,
  handleToggleModal,
  handleOpenDetailModalRequest,
}: PostProps) {
  return (
    <div className="md:border rounded mb-4 md:mb-8">
      <div className="p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <img
            src={post.user.image}
            alt={post.user.username}
            className="w-8 h-8 object-cover rounded-full"
          />
          <div className="flex flex-col text-xs">
            <p className="font-semibold">{post.user.username}</p>
            {location && <p>{post.location}</p>}
          </div>
        </div>
        <HiOutlineDotsHorizontal
          className="cursor-pointer"
          onClick={handleToggleModal}
        />
      </div>
      <div className="w-full">
        <img
          className="w-full aspect-1-to-1 object-cover"
          src={post.image}
          alt={post.description}
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
          <p>
            <b className="font-semibold">{post.user.username}</b>{' '}
            {post.description}
          </p>
          <p
            className="text-gray-500 cursor-pointer hover:underline mb-2"
            onClick={() => handleOpenDetailModalRequest(post)}
          >
            Ver todos os comentários
          </p>
          <div className="text-xs mb-2">
            {post.comments.map((comment) => (
              <p key={comment.id}>
                <b className="font-semibold">{comment.user.username}</b>{' '}
                {comment.content}
              </p>
            ))}
          </div>
          <p className="text-gray-500">{post.createdAt}</p>
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
