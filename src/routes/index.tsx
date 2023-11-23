import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";


const routes = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout />,
        children :[
            {
                index : true,
                element : <Home />
            }
        ]
    }
])


export default routes