import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Error from '~/components/error';
import Loading from '~/components/loading';
import ProductDetailItem from '~/components/productDetail/item';
import RelatedProducts from '~/components/productDetail/relatedProducts';
import { fetchProductDetails } from '~/redux/features/productDetails/actions';
import { useProductDetailsStatus } from '~/redux/features/productDetails/hooks';

const ProductDetails: React.FC = () => {
  const { id } = useParams()
  const { isLoading, isError } = useProductDetailsStatus()
  useEffect(() => {
    fetchProductDetails(Number(id))
  }, [id])
  return (
    <div className='mt-24 md:mt-6'>
      {
        isError ? <Error /> : isLoading ? <Loading /> : (<ProductDetailItem />)
      }

      <RelatedProducts id={id} />
    </div>
  )
}

export default ProductDetails