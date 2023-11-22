import React from "react"
import { Outlet } from "react-router-dom"

const MainLayout : React.FC = () => {
  return (
    <div className="md:container md:mx-auto">
        <Outlet />
    </div>
  )
}

export default MainLayout