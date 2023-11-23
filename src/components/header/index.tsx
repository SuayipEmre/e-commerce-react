import React from "react"
import HeaderTitle from "./title"
import SearchInput from "../search"
import RightSide from "./rightSide"
import { CiMenuBurger } from "react-icons/ci";
import { setModal } from "~/redux/features/modal/actions"
const Header: React.FC = () => {
  return (
    <div >
      <div className="flex items-center w-full justify-between gap-12 my-4">
        <div className="block md:hidden">
          <CiMenuBurger onClick={() => setModal(true)} size={25} />
          <span className="text-sm absolute">menu</span>
        </div>
        <HeaderTitle />
        <div className="absolute top-10 right-0  sm:static">
          <SearchInput />
        </div>
        <RightSide />
      </div>
    </div>
  )
}

export default Header