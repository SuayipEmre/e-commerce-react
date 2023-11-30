import { useSelector } from "react-redux";
import { RootState } from "~/redux/app/store";

export const useCart = () => useSelector((state : RootState) => state.cart.carts)
export const useTotalPrice = () => useSelector((state : RootState) => state.cart.totalPrice)
export const useCartStatus = () => useSelector((state : RootState) => state.cart.cartStatus)