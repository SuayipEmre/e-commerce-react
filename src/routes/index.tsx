import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import ProductDetails from "~/pages/productDetails";


const routes = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout />,
        children :[
            {
                index : true,
                element : <Home />
            },
            {
                path : '/productdetails/:id',
                element : <ProductDetails />
            },

        ]
    }
])


export default routes