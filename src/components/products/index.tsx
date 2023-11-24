import React from 'react'
import Error from '../error'
import Loading from '../loading'
import NoMatches from '../search/noMatches'
import MatchesFound from '../search/matchesFound'
import { useProducts, useProductsStatus } from '~/redux/features/products/hooks'
import { useSortValue } from '~/redux/features/sorting/hooks'
import { filterProducts } from '~/helpers/filterProducts'
import ProductCard from '../productCard'

const Products: React.FC = () => {
    const { isLoading, isError } = useProductsStatus()
    const products = useProducts()
    const filteredProducts = filterProducts(products)
    const numberOfProducts = filteredProducts.length
    const sort = useSortValue()

    return (
        <div className=''>
            {
                isError ? <Error /> : (
                    isLoading ? <Loading /> : (
                        <>
                            {
                                numberOfProducts == 0 ? <NoMatches /> : (
                                    <>
                                        <MatchesFound amount={numberOfProducts} />

                                        <div className='flex items-center justify-center'>
                                            <div className='grid grid-cols-12 gap-4 w-[90%]'>
                                                {
                                                    filteredProducts.slice().sort((a, b): any => sort === 'inc' ? a.price - b.price : sort === 'dec' ? b.price - a.price : null).map(item => (
                                                        <ProductCard productItem={item} key={item.id} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </>


                    )

                )

            }




        </div>
    )
}

export default Products
