import React, { useEffect } from 'react'
import Categories from '~/components/categories'
import Products from '~/components/products'
import { fetchCategories } from '~/redux/features/categories/actions'
import { fetchFavoriteProducts } from '~/redux/features/favoriteProducts/actions'
import { fetchProducts } from '~/redux/features/products/actions'



const Home: React.FC = () => {


    useEffect(() => {
        fetchCategories()
        fetchProducts()
        fetchFavoriteProducts()

    }, [])



    return (
        <div>
            <Categories />
            <img
                className='w-full mt-24 md:mt-0 h-[500px] object-cover'
                src="https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            />

            <Products />
        </div>
    )
}

export default Home