import store from "~/redux/app/store";
import { _setSortValue } from ".";

export const setSortValue = (value : string) : object => store.dispatch(_setSortValue(value))