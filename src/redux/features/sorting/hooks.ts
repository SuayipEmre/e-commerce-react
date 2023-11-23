import { useSelector } from "react-redux";
import { RootState } from "~/redux/app/store";

export const useSortValue = () => useSelector((state : RootState) => state.sorting.sortValue)