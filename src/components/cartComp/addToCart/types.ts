import { productItemType } from "~/common/productsType"

export type counterState = {
    count: number
}

export type AddToCartPropsType = {
    product: productItemType
}


export type actionType = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }