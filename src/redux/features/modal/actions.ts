import store from "~/redux/app/store";
import { _setModal } from ".";


export const setModal = (state: boolean) : object => store.dispatch(_setModal(state))