import { useSelector } from "react-redux";
import { RootState } from "~/redux/app/store";


export const useModal = () => useSelector((state : RootState) => state.categoryModal.modal)