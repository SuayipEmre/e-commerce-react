import store from "~/redux/app/store";
import { _fetchProductDetails } from ".";

export const fetchProductDetails = async(id : number):Promise<object>  => await store.dispatch(_fetchProductDetails(id))