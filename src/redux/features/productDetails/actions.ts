import store from "~/redux/app/store";
import { _fetchProductDetails } from ".";

export const fetchProductDetails = (id : number):object => store.dispatch(_fetchProductDetails(id))