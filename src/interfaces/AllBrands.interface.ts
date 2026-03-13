export interface Root {
  results: number
  metadata: Metadata
  data: AllBrandsInterface []
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface AllBrandsInterface {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
