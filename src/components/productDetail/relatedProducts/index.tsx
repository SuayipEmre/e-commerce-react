import React from 'react'
import { useProducts, useProductsStatus } from '~/redux/features/products/hooks'
import { filterProducts } from '~/helpers/filterProducts'
import ProductCard from '~/components/productCard'
import NoMatches from '~/components/search/noMatches'
import MatchesFound from '~/components/search/matchesFound'
import { relatedProductType } from './type'
import Error from '~/components/errorAndLoading/error'
import Loading from '~/components/errorAndLoading/loading'


const RelatedProducts: React.FC<relatedProductType> = ({ id }) => {
    const products = useProducts()
    const { isLoading, isError } = useProductsStatus()
    const filteredProducts = filterProducts(products)
    const doNotShowSameProduct = filteredProducts.filter(item => item.id !== Number(id))


    const renderItems = () => {
        if (isError) return <Error />
        else if (isLoading) return <Loading />
        
        return (
            <div className='grid grid-cols-12 gap-4 w-[90%]'>
                {
                    doNotShowSameProduct.map((item, idx) => (
                        <ProductCard productItem={item} key={idx} />
                    ))
                }
            </div>
        )
    }


    return (
        <div className='mt-12'>
            <h3 className='py-2'>Products related to this item</h3>

            {
                doNotShowSameProduct.length == 0 ? <NoMatches /> : <MatchesFound amount={doNotShowSameProduct.length} />
            }
            <div>
                {
                    renderItems()
                }
            </div>
        </div>
    )
}

export default RelatedProducts