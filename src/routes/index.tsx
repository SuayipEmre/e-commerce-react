import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import ProductDetails from "~/pages/productDetails";
import MyFavorites from "~/pages/favoriteProducts";
import Cart from "~/pages/cart";


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
            {
                path : '/myfavorites',
                element : <MyFavorites />
            },
            {
                path : '/myCart',
                element : <Cart />
            },

        ]
    }
])


export default routes