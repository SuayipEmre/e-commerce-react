import React, { useEffect } from 'react'
import Error from '~/components/error'
import FavoriteProductsComp from '~/components/favoriteProducts/favoriteProductsComp'
import Loading from '~/components/loading'
import { fetchFavoriteProducts } from '~/redux/features/favoriteProducts/actions'
import { useFavoriteProductStatus } from '~/redux/features/favoriteProducts/hooks'

const MyFavorites : React.FC = () => {

  const {isLoading, isError} = useFavoriteProductStatus()
  
  useEffect(() => {
    fetchFavoriteProducts()
  },[])
 
  return (
    <div>
    {
      isError ? <Error /> : isLoading ? <Loading /> : <FavoriteProductsComp />
    }
    </div>
  )
}

export default MyFavorites