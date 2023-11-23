import { useSelector } from "react-redux";
import { RootState } from "~/redux/app/store";


export const useSearchValue = () => useSelector((state : RootState) => state.search.searchValue)