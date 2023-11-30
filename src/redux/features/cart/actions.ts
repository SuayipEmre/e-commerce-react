import store from "~/redux/app/store";
import { _addToCart, _deleteFromCart, _editCart, _fetchProductFromCart, _getCartTotal } from ".";
import { cartItemType} from "~/common/productsType";

export const fetchProductFromCart = async (): Promise<object> => await store.dispatch(_fetchProductFromCart())
export const addToCart = async (product : cartItemType): Promise<object> => await store.dispatch(_addToCart(product))
export const deleteFromCart = async (id : number) => await store.dispatch(_deleteFromCart(id))
export const editCart = async (data : any) => await store.dispatch(_editCart(data))
export const getCartTotal = (): object => store.dispatch(_getCartTotal())