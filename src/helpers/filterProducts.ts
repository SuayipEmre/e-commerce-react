import { productsType } from "~/redux/features/productType"
import { useProducts } from "~/redux/features/products/hooks"
import { useSearchValue } from "~/redux/features/searchProducts/hooks"



export const filterProducts = (): productsType => {

    const products = useProducts()
    const searchValue = useSearchValue()

    let filteredProducts: productsType = products
    if (searchValue) filteredProducts = products.filter(item => item.title.toLocaleLowerCase().includes(searchValue.toLowerCase()))
    return filteredProducts
}


