import React from 'react'

import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {
  IoPaperPlaneOutline,
  IoChatbubbleOutline,
  IoBookmarkOutline,
} from 'react-icons/io5'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

import Modal from './Modal'
import { iPost } from '../types'

type PostDetailModalProps = {
  post: iPost
  isOpen: boolean
  handleRequestClose: () => void
}

export default function PostDetailModal({
  post,
  isOpen,
  handleRequestClose,
}: PostDetailModalProps) {
  return (
    <Modal isOpen={isOpen} handleRequestClose={handleRequestClose}>
      <div className="grid md:grid-cols-7 bg-white w-[90%] max-w-5xl">
        <div className="p-4 bg-white flex md:p-0 md:col-span-4 items-center md:bg-black">
          <img
            className="w-full aspect-1-to-1 object-cover"
            src={post.image}
            alt={post.description}
          />
        </div>
        <div className="hidden md:block md:col-span-3 max-h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <img
                src={post.user.image}
                alt={post.user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-sm">
                <p>
                  <b className="font-semibold">{post.user.username}</b>
                </p>
                {post.location && <p className="text-xs">{post.location}</p>}
              </div>
            </div>
            <HiOutlineDotsHorizontal className="w-5 h-5" />
          </div>
          <div className="overflow-auto h-[26rem]">
            <div className="flex gap-4 p-4">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={post.user.image}
                alt={post.user.username}
              />
              <div className="text-sm">
                <p>
                  <b className="font-semibold">{post.user.username}</b>{' '}
                  {post.description}
                </p>
                <p className="text-xs text-gray-500">{post.createdAt}</p>
              </div>
            </div>
            {post.comments.map((comment) => (
              <div
                className="flex gap-4 px-4 py-2 items-center"
                key={comment.id}
              >
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={comment.user.image}
                  alt={comment.user.username}
                />
                <div className="text-sm">
                  <p>
                    <b className="font-semibold">{comment.user.username}</b>{' '}
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-sm border-t">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-4">
                <FiHeart className="w-6 h-6" />
                <IoChatbubbleOutline className="w-6 h-6" />
                <IoPaperPlaneOutline className="w-6 h-6" />
              </div>
              <IoBookmarkOutline className="w-6 h-6" />
            </div>
            <div className="flex gap-4">
              <HiOutlineEmojiHappy className="w-6 h-6 text-gray-500" />
              <input
                type="text"
                placeholder="Adicione um comentário"
                className="flex flex-1 outline-none"
              />
              <button className="outline-none text-blue-500 font-semibold">
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
