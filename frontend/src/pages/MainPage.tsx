import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import PostInfoModal from '../components/PostInfoModal'
import Post from '../components/Post'
import Suggestions from '../components/Suggestions'
import useModal from '../hooks/useModal'
import PostDetailModal from '../components/PostDetailModal'
import { iPost } from '../types'
import api from '../services/api'

export default function MainPage() {
  const [posts, setPosts] = useState<iPost[]>([])

  const [infoModal, toggleInfoModal] = useModal()
  const [detailModal, toggleDetailModal] = useModal()
  const [modalPost, setModalPost] = useState<iPost>()

  const handleOpenPostDetail = (post: iPost) => {
    setModalPost(post)
    toggleDetailModal()
  }

  useEffect(() => {
    ;(async () => {
      const { data: posts } = await api.get('posts/')

      setPosts(posts)
    })()
  }, [])

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
      <div className="max-w-[900px] md:px-4 lg:px-0 mx-auto md:grid md:grid-cols-8 md:gap-8">
        <div className="md:col-span-5 md:py-8">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              handleToggleModal={toggleInfoModal}
              handleOpenDetailModalRequest={handleOpenPostDetail}
            />
          ))}
        </div>
        <div className="hidden md:block col-span-3 py-16 relative">
          <Suggestions />
        </div>
      </div>
    </div>
  )
}
