import { productsType } from "~/redux/features/productType"
import { useSearchValue } from "~/redux/features/searchProducts/hooks"




export const filterProducts = (products : productsType): productsType => {

    const searchValue = useSearchValue()

    let filteredProducts: productsType = products
    if (searchValue) filteredProducts = products.filter(item => item.title.toLocaleLowerCase().includes(searchValue.toLowerCase()))
    return filteredProducts
}



