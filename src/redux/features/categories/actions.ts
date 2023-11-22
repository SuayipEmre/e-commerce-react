import store from "~/redux/app/store";
import { _fetchCategories } from ".";


export const fetchCategories = () : object => store.dispatch(_fetchCategories())