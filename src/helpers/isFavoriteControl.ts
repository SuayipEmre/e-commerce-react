
import { productItemType } from "~/components/products/types"
import { productsType } from "~/redux/features/productType"


type propsTypes = {
    product : productItemType,
    favoriteProducts : productsType
}

export const isFavorite = ({product, favoriteProducts} : propsTypes) => {
    const status  = favoriteProducts.some(item => item.id == product.id)
    return status
}
