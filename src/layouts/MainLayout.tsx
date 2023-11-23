import React from "react"
import { Outlet } from "react-router-dom"
import Header from "~/components/header"

const MainLayout : React.FC = () => {
  return (
    <div className="md:container md:mx-auto">
            <Header />

        <Outlet />
    </div>
  )
}

export default MainLayout