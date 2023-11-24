import store from "~/redux/app/store";
import { _fetchCategories } from ".";


export const fetchCategories = async() : Promise<object> => await store.dispatch(_fetchCategories())