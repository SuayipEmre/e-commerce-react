import { useSelector } from "react-redux";
import { RootState } from "~/redux/app/store";




export const useProducts = () => useSelector((state : RootState) => state.products.products)
export const useProductsStatus = ()  => useSelector((state : RootState) => state.products.productsStatus)