import { productItemType } from "~/common/productsType"

export type stateType = {
    product: productItemType | {},
    productStatus: {
        isLoading: boolean,
        isError: boolean
    }
}