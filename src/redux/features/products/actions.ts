import store from "~/redux/app/store";
import { _fetchProducts } from ".";

export const fetchProducts = () => store.dispatch(_fetchProducts())