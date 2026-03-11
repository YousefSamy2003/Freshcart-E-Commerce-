export interface Root {
  results: number
  metadata: Metadata
  data: CatInterface[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface CatInterface {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
