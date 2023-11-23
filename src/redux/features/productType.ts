
export type productsType = {
    category: string
    description: string
    image: string
    title: string
    price: number
    id: number
    rating: {
        count: number
        rate: number
    }
}[]