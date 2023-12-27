import { cartItemType, productItemType } from "~/common/productsType"

export type ProductCardPropsType = {
    productItem: productItemType | cartItemType
    onFavoritePage?: boolean
    onCart?: boolean
}