import store from "~/redux/app/store";
import { _setSearchValue } from ".";

export const setSearchValue = (value : string) : object => store.dispatch(_setSearchValue(value))
