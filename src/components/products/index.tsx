import React from 'react'
import Error from '../error'
import Loading from '../loading'
import ProductItem from './productItem'
import { useProducts, useProductsStatus } from '~/redux/features/products/hooks'

const Products: React.FC = () => {
    const { isLoading, isError } = useProductsStatus()
    const products = useProducts()

    return (
        <div className='flex items-center justify-center'>
            {
                isError ? <Error /> : (
                    isLoading ? <Loading /> : (
                        <div className='grid grid-cols-12 gap-4 w-[90%]'>
                            {
                                products?.map(item => (
                                    <ProductItem productItem={item} key={item.id} />
                                ))
                            }
                        </div>
                    )

                )

            }


        </div>
    )
}

export default Products

