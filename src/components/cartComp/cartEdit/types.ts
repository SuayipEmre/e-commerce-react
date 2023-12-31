import { cartItemType, productItemType } from "~/common/productsType"

export type CartEditPropsType = {
    productItem: productItemType | cartItemType
}


export  type counterState = {
    count: number
}

export type actionType = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

