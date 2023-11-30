import { cartItemType, productItemType } from "~/common/productsType"

export type propsType = {
    productItem: productItemType | cartItemType
    onFavoritePage?: boolean
    onCart?: boolean
}