import { productItemType, productsType } from "~/common/productsType"



type isFavoritePropsTypes = {
    product: productItemType,
    favoriteProducts: productsType
}

export const isFavorite = ({ product, favoriteProducts }: isFavoritePropsTypes) => {
    const status = favoriteProducts.some(item => item.id == product.id)
    return status
}
