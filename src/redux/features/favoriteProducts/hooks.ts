import { useSelector } from "react-redux";
import { RootState } from "~/redux/app/store";




export const useFavoriteProducts =() => useSelector((state : RootState) => state.favoriteProducts.products)
export const useFavoriteProductStatus =() => useSelector((state : RootState) => state.favoriteProducts.productStatus)
export const useIsFavorite =() => useSelector((state : RootState) => state.favoriteProducts.isFavorite)