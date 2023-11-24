import store from "~/redux/app/store";
import { _addToFavorites, _fetchFavoriteProducts, _removeFavoriteProduct, _setIsFavorite } from ".";
import { productItemType } from "~/components/products/types";


export const fetchFavoriteProducts = async() : Promise<object> =>  await store.dispatch(_fetchFavoriteProducts())
export const addToFavorites = async(product : productItemType) : Promise<object> => await store.dispatch(_addToFavorites(product))
export const removeFavoriteProduct = async(id:number ) : Promise<object> => await store.dispatch(_removeFavoriteProduct(id))
export const setIsFavorite = (value: boolean) : object  =>  store.dispatch(_setIsFavorite(value))