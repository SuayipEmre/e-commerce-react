
export type productItemType = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    },
}
export type productsType = productItemType[]


export type cartItemType = productItemType & {
    quantity: number;
}

export type cartType = cartItemType[]