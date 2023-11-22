import { useSelector } from "react-redux";
import { RootState } from "~/redux/app/store";


export const useCategories = ()  => useSelector((state : RootState) => state.categories.categories)