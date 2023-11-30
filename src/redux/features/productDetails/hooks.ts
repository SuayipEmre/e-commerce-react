import { useSelector } from "react-redux";
import { productsType } from "~/common/productsType";
import  { RootState } from "~/redux/app/store";

export const useProductDetails = ()  : productsType | {} =>  useSelector((state  :RootState) => state.detailsOfProduct.product)
export const useProductDetailsStatus = () =>  useSelector((state  :RootState) => state.detailsOfProduct.productStatus)