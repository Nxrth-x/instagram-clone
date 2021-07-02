import React, { useState } from 'react'
import Header from '../components/Header'
import PostInfoModal from '../components/PostInfoModal'
import Post from '../components/Post'
import Suggestions from '../components/Suggestions'
import useModal from '../hooks/useModal'
import PostDetailModal from '../components/PostDetailModal'
import { iPost } from '../types'

export default function MainPage() {
  const post: iPost = {
    user: {
      id: 1,
      username: 'mercedesamgf1',
      image: 'https://i.ytimg.com/vi/ErWGV-w_9pk/hqdefault.jpg',
    },
    image:
      'https://as.sobrenet.pt/s/image/tsr/brandm/content/1920x1280/q5draew2mcb2wxpoc514vs3uw22.jpg',
    description: 'NSFW',
    createdAt: 'Há 12 horas',
    location: 'Spielberg, Austria.',
    comments: [
      {
        id: 'SOKDfo',
        content: 'Nice car bro',
        user: {
          id: 2,
          username: 'john_brown',
          image:
            'https://fopiess.org.br/wp-content/uploads/2018/01/default1.jpg',
        },
      },
      {
        id: 'OSKDOFALll',
        content: "That's lit. 🔥🔥🔥",
        user: {
          id: 3,
          username: 'zack_turner',
          image:
            'https://fopiess.org.br/wp-content/uploads/2018/01/default1.jpg',
        },
      },
    ],
  }

  const [infoModal, toggleInfoModal] = useModal()
  const [detailModal, toggleDetailModal] = useModal()
  const [modalPost, setModalPost] = useState<iPost>()

  const handleOpenPostDetail = (post: iPost) => {
    setModalPost(post)
    toggleDetailModal()
  }

  return (
    <div>
      {detailModal && modalPost && (
        <PostDetailModal
          post={modalPost}
          isOpen={detailModal}
          handleRequestClose={toggleDetailModal}
        />
      )}
      <PostInfoModal isOpen={infoModal} handleRequestClose={toggleInfoModal} />
      <Header />
      <div className="max-w-[975px] md:px-4 lg:px-0 mx-auto md:grid md:grid-cols-7 md:gap-8">
        <div className="md:col-span-5 md:py-8">
          <Post
            post={post}
            handleToggleModal={toggleInfoModal}
            handleOpenDetailModalRequest={handleOpenPostDetail}
          />
          <Post
            post={post}
            handleToggleModal={toggleInfoModal}
            handleOpenDetailModalRequest={handleOpenPostDetail}
          />
          <Post
            post={post}
            handleToggleModal={toggleInfoModal}
            handleOpenDetailModalRequest={handleOpenPostDetail}
          />
        </div>
        <div className="hidden md:block col-span-2 py-16 relative">
          <Suggestions />
        </div>
      </div>
    </div>
  )
}
