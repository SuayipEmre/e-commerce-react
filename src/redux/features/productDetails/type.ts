import { productItemType } from "~/common/productsType"

export type initialStateTypes = {
    product: productItemType | {},
    productStatus: {
        isLoading: boolean,
        isError: boolean
    }
}