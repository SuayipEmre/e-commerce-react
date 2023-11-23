import React from 'react'
import Error from '../error'
import Loading from '../loading'
import ProductItem from './productItem'
import { useProductsStatus } from '~/redux/features/products/hooks'
import { filterProducts } from '~/helpers/filterProducts'
import NoMatches from '../search/noMatches'
import MatchesFound from '../search/matchesFound'

const Products: React.FC = () => {
    const { isLoading, isError } = useProductsStatus()
    const filteredProducts = filterProducts()
    const numberOfProducts = filteredProducts.length

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
                                                    filteredProducts?.map(item => (
                                                        <ProductItem productItem={item} key={item.id} />
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
