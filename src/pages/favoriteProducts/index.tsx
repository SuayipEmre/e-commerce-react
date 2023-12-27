import React, { useEffect } from 'react'
import Error from '~/components/errorAndLoading/error'
import Loading from '~/components/errorAndLoading/loading'
import FavoriteProductsComp from '~/components/favoriteProducts/favoriteProductsComp'
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