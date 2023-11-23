import store from "~/redux/app/store";
import { _fetchProductByCategory, _fetchProducts } from ".";

export const fetchProducts = ()  : object => store.dispatch(_fetchProducts())
export const fetchProductByCategory = (category : string) : object => store.dispatch(_fetchProductByCategory(category))