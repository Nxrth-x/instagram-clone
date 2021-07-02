export interface iUser {
  id: number
  username: string
  image: string
}

export interface iComment {
  id: string
  user: iUser
  content: string
}

export interface iPost {
  user: iUser
  image: string
  description: string
  location: string | null
  comments: iComment[]
  createdAt: string
}

export interface iToken {
  access: string
  refresh: string
}
