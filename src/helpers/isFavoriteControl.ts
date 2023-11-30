import { productItemType, productsType } from "~/common/productsType"



type propsTypes = {
    product: productItemType,
    favoriteProducts: productsType
}

export const isFavorite = ({ product, favoriteProducts }: propsTypes) => {
    const status = favoriteProducts.some(item => item.id == product.id)
    return status
}
