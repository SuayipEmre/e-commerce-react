import React from 'react'
import {  useProductsStatus } from '~/redux/features/products/hooks'
import { filterProducts } from '~/helpers/filterProducts'
import Error from '~/components/error'
import Loading from '~/components/loading'
import ProductCard from '~/components/productCard'
import NoMatches from '~/components/search/noMatches'
import MatchesFound from '~/components/search/matchesFound'

type propsState = {
    id : string | undefined
}
const RelatedProducts : React.FC<propsState> = ({id}) => {
    const { isLoading, isError } = useProductsStatus()
    const products = filterProducts()
    const doNotShowSameProduct = products.filter(item => item.id !== Number(id))

    

  return (
    <div className='mt-12'>
            <h3 className='py-2'>Products related to this item</h3>

            {
                doNotShowSameProduct.length == 0 ? <NoMatches /> : <MatchesFound amount={doNotShowSameProduct.length} />
            }
        <div>
        {
            isError ? <Error /> : isLoading ? <Loading /> : (
                <div className='grid grid-cols-12 gap-4 w-[90%]'>
                {
                    doNotShowSameProduct.map((item, idx) => (
                        <ProductCard productItem={item} key={idx} />
                    ))
                }
                </div>
            )
        }
        </div>
    </div>
  )
}

export default RelatedProducts