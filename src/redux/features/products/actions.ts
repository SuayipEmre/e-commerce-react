import store from "~/redux/app/store";
import { _fetchProductByCategory, _fetchProducts } from ".";

export const fetchProducts = async ()  : Promise<object>  => await store.dispatch(_fetchProducts())
export const fetchProductByCategory = async(category : string) : Promise<object>  => await store.dispatch(_fetchProductByCategory(category))