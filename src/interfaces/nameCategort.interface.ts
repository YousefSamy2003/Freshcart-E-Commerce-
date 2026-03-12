export interface Root {
  data: NameCategoryInterface
}

export interface NameCategoryInterface {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  __v: number
}
